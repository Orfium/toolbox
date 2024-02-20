import {
  Auth0Client,
  type Auth0ClientOptions,
  type GetTokenSilentlyOptions,
  type RedirectLoginOptions,
} from '@auth0/auth0-spa-js';
import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { useErrorHandler } from 'react-error-boundary';
import {
  AuthenticationContext,
  type GetAccessTokenSilently,
  type Permissions,
} from '~/contexts/authentication';
import { _useOrganizations } from '~/hooks/useOrganizations';
import useOrganization from '~/store/organizations.js';
import useUser from '~/store/useUser.js';
import { getAuth0Client, getTokenSilently, logoutAuth, onRedirectCallback } from '~/utils/auth';

type AuthenticationProps = { children: ReactNode; overrides?: Auth0ClientOptions };

export function Authentication({ children }: AuthenticationProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { user, setUser } = useUser();
  const [client] = useState<Auth0Client>(() => getAuth0Client());
  const [isLoading, setIsLoading] = useState(true);
  const [permissions, setPermissions] = useState<Permissions>([]);
  const [error, setError] = useState('');
  const didInitialise = useRef(false);

  // handleError is referentially stable, so it's safe to use as a dep in dep array
  // https://github.com/bvaughn/react-error-boundary/blob/v3.1.4/src/index.tsx#L165C10-L165C18
  const handleError = useErrorHandler();
  const params = new URLSearchParams(window.location.search);
  const { selectedOrganization, organizations, _switchOrganization } = _useOrganizations();
  const { setSelectedOrganization } = useOrganization();
  const organization = params.get('organization') || selectedOrganization?.org_id;

  const invitation = params.get('invitation');
  const errorParam = params.get('error');

  const loginWithRedirect = useCallback(
    async (o: RedirectLoginOptions) => {
      try {
        await client.loginWithRedirect(o);
      } catch (error) {
        return handleError(error);
      }
    },
    [client, handleError]
  );

  const getAccessTokenSilently: GetAccessTokenSilently = useCallback(
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
    (async () => {
      if (didInitialise.current) {
        return;
      }
      didInitialise.current = true;
      try {
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
        if (window.location.search.includes('error=') && errorParam === 'access_denied') {
          return logoutAuth({ force: true });
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
  }, [client, errorParam, handleError, invitation, loginWithRedirect, organization, setUser]);

  useEffect(() => {
    const searchParams = new URL(window.location.href).searchParams;
    if (!isLoading && !isAuthenticated && isAuthenticated !== undefined) {
      const error = searchParams.get('error');

      if (error === 'access_denied') {
        const org = (organizations || [])[0];
        setSelectedOrganization(org.org_id);
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
  }, [
    invitation,
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    organization,
    organizations,
    setSelectedOrganization,
  ]);

  // error handling useEffect
  useEffect(() => {
    (async () => {
      if (error === 'login_required') {
        // case 1 we want logout because a user clicked logout
        // case 2 auth0 session expired and client will redirect for login (popup or redirect)
        // clear local cached data
        return await logoutAuth();
      }

      if (error === 'consent_required') {
        return loginWithRedirect({
          authorizationParams: {
            organization: organization || undefined,
            invitation: invitation || undefined,
          },
        });
      }
      setError('');
    })();
  }, [error, invitation, loginWithRedirect, organization]);

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        loginWithRedirect,
        logout: logoutAuth,
        getAccessTokenSilently,
        user,
        permissions,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}
