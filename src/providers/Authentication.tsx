import {
  Auth0Client,
  type Auth0ClientOptions,
  type GetTokenSilentlyOptions,
  type RedirectLoginOptions,
} from '@auth0/auth0-spa-js';
import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { useErrorHandler } from 'react-error-boundary';
import { AuthenticationContext } from '../contexts/authentication';
import { useOrganizations } from '../hooks';
import { getAuth0Client, getTokenSilently, logoutAuth, onRedirectCallback } from '../utils/auth';

type AuthenticationProps = { children: ReactNode; overrides?: Auth0ClientOptions };

export function Authentication({ children }: AuthenticationProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<Record<string, unknown>>();
  const [auth0Client, setAuth0Client] = useState<Auth0Client>();
  const [isLoading, setIsLoading] = useState(true);

  // handleError is referentially stable, so it's safe to use as a dep in dep array
  // https://github.com/bvaughn/react-error-boundary/blob/v3.1.4/src/index.tsx#L165C10-L165C18
  const handleError = useErrorHandler();
  const params = new URLSearchParams(window.location.search);
  const { selectedOrganization, organizations, switchOrganization } = useOrganizations();
  const organization = params.get('organization') || selectedOrganization?.org_id;

  const invitation = params.get('invitation');

  useEffect(() => {
    (async () => {
      try {
        const client = await getAuth0Client();
        setAuth0Client(client);
        if (window.location.search.includes('code=')) {
          const { appState } = await client.handleRedirectCallback();
          onRedirectCallback(appState);
        }
        if (window.location.search.includes('invitation=')) {
          return loginWithRedirect({
            authorizationParams: {
              organization: organization || undefined,
              invitation: invitation || undefined,
            },
          });
        }
        const clientIsAuthenticated = await client.isAuthenticated();
        setIsAuthenticated(clientIsAuthenticated);

        if (clientIsAuthenticated) {
          const clientUser = await client.getUser();
          setUser(clientUser);
        }

        setIsLoading(false);
      } catch (error: unknown) {
        if (error instanceof Error) {
          if (error.message === 'Invalid state') {
            return loginWithRedirect({
              authorizationParams: {
                organization: organization || undefined,
                invitation: invitation || undefined,
              },
            });
          }
        }

        handleError(error);
      }
    })();
  }, []);

  const loginWithRedirect = useCallback(
    async (o: RedirectLoginOptions) => {
      try {
        const client = await getAuth0Client();
        await client.loginWithRedirect(o);
      } catch (error) {
        return handleError(error);
      }
    },
    [handleError]
  );

  const getAccessTokenSilently = useCallback(
    async (opts?: GetTokenSilentlyOptions) => {
      try {
        const result = await getTokenSilently(opts);

        return result;
      } catch (error: any) {
        if (error?.error === 'login_required' || error?.error === 'consent_required') {
          return loginWithRedirect({
            authorizationParams: {
              organization: organization || undefined,
              invitation: invitation || undefined,
            },
          });
        }

        handleError(error);
      }
    },
    [handleError, invitation, loginWithRedirect, organization]
  );

  useEffect(() => {
    const searchParams = new URL(window.location.href).searchParams;
    if (!isLoading && !isAuthenticated && isAuthenticated !== undefined) {
      const error = searchParams.get('error');

      if (error === 'access_denied') {
        const org = organizations[0];
        switchOrganization(org.org_id);
        loginWithRedirect({
          authorizationParams: {
            organization: org?.org_id || undefined,
            invitation: invitation || undefined,
          },
        });
      } else {
        loginWithRedirect({
          authorizationParams: {
            organization: organization || undefined,
            invitation: invitation || undefined,
          },
        });
      }
    }
  }, [auth0Client, isLoading, isAuthenticated]);

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        loginWithRedirect,
        logout: logoutAuth,
        getAccessTokenSilently: (o?: GetTokenSilentlyOptions) => getAccessTokenSilently(o),
        user,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}
