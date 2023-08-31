import {
  Auth0Client,
  Auth0ClientOptions,
  createAuth0Client,
  GetTokenSilentlyOptions,
  RedirectLoginOptions,
} from '@auth0/auth0-spa-js';
import jwt_decode from 'jwt-decode';
import React, { createContext, useEffect, useState } from 'react';
import { useErrorHandler } from 'react-error-boundary';

import useOrganization from '../store/useOrganization';
import useRequestToken from '../store/useRequestToken';
import { config } from './config';
import { AuthenticationContextProps } from './types';

export const onRedirectCallback = (appState: { targetUrl?: string }) => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl ? appState.targetUrl : window.location.pathname
  );
};

export const providerConfig: Auth0ClientOptions = {
  domain: config.domain || '',
  clientId: config.clientId || '',
  authorizationParams: {
    audience: config.audience || 'orfium',
    redirect_uri: window.location.origin,
    onRedirectCallback,
  },
  useRefreshTokens: true,
  cacheLocation: 'localstorage',
  useRefreshTokensFallback: true, // fix issue with logout https://community.auth0.com/t/auth0-spa-2-x-returning-missing-refresh-token/98999/18
};

export const defaultContextValues: AuthenticationContextProps = {
  isAuthenticated: false,
  isLoading: false,
  user: undefined,
  loginWithRedirect: () => Promise.resolve(),
  logout: () => Promise.resolve('logged out'),
  getAccessTokenSilently: () => Promise.resolve({ token: '', decodedToken: {} }),
};

export const AuthenticationContext =
  createContext<AuthenticationContextProps>(defaultContextValues);

/*
 * This function get an auth0 client and store it globally as a singleton.
 * Auth0 creation requires a call to auth0 for token which by define it once we prevent other unintended calls to the service.
 */
export let client: Auth0Client | undefined;
export const getAuth0Client = async () => {
  const selectedOrganization = useOrganization.getState().selectedOrganization;
  if (!client || selectedOrganization?.org_id) {
    try {
      client = await createAuth0Client({
        ...providerConfig,
        authorizationParams: {
          ...providerConfig.authorizationParams,
          organization: selectedOrganization?.org_id,
        },
      });
    } catch (e) {
      throw new Error(`getAuth0Client Error: ${e}`);
    }
  }

  return client;
};

/**
 * Here we clear out all the stored information on logout of the user.
 * Stored information that we clear out is
 *  - tokens
 *  - organizations, selectedOrganization
 */
export const logoutAuth = async () => {
  const setToken = useRequestToken.getState().setToken;
  const resetOrganizationState = useOrganization.getState().reset;
  try {
    const client = await getAuth0Client();

    setToken(undefined);
    resetOrganizationState();
    // @TODO change returnTo to orfium one when is ready
    client?.logout({ logoutParams: { returnTo: window.location.origin } });
  } catch (e: unknown) {
    if (e instanceof Error) {
      throw e;
    }
  }
};

/**
 *  This function determine the latest token of the user and returns it encoded and decoded.
 *  We keep the latest token in the memory and in every call of the function we check if that token has expired in order to call the auth0 API
 *  This way we prevent unnecessary new calls for the current token to the auth0 and we avoid hitting the hard limit on their API.
 *
 *  @param params - Params that are passed as configuration to the getTokenSilently function. These params can configure cache, organization etc
 *
 *  @returns {Promise} Promise that resolves to token and decodedToken for the authorization
 */
export const getTokenSilently = async (
  params?: GetTokenSilentlyOptions
  // @ts-ignore
): Promise<{ token: string; decodedToken: { exp?: number; org_id?: string } }> => {
  const { token: stateToken = '', setToken } = useRequestToken.getState();
  const selectedOrganization = useOrganization.getState().selectedOrganization;
  const decodedToken = stateToken ? jwt_decode<{ exp?: number; org_id?: string }>(stateToken) : {};
  const isExpired =
    decodedToken && decodedToken.exp
      ? new Date(decodedToken?.exp * 1000).getTime() < new Date().getTime()
      : true; // has expired

  if (!isExpired && decodedToken.org_id && decodedToken.org_id === selectedOrganization?.org_id) {
    return { token: stateToken, decodedToken };
  }

  try {
    const client = await getAuth0Client();
    const token = await client.getTokenSilently({
      ...params,
      authorizationParams: {
        ...params?.authorizationParams,
        organization: selectedOrganization?.org_id,
      },
    });
    setToken(token);

    return { token, decodedToken: jwt_decode(token) };
  } catch (e) {
    if (e instanceof Error) {
      throw e;
    }
  }
};

const AuthenticationProvider: React.FC = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<Record<string, unknown>>();
  const [auth0Client, setAuth0Client] = useState<Auth0Client>();
  const [isLoading, setIsLoading] = useState(true);
  const handleError = useErrorHandler();
  const params = new URLSearchParams(window.location.search);

  const selectedOrganization = useOrganization((state) => state.selectedOrganization);
  const setSelectedOrganization = useOrganization((state) => state.setSelectedOrganization);
  const organizations = useOrganization((state) => state.organizations);
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

  const loginWithRedirect = async (o: RedirectLoginOptions) => {
    try {
      const client = await getAuth0Client();
      await client.loginWithRedirect(o);
    } catch (error) {
      return handleError(error);
    }
  };

  const getAccessTokenSilently = async (opts?: GetTokenSilentlyOptions) => {
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
  };

  useEffect(() => {
    const searchParams = new URL(window.location.href).searchParams;
    if (!isLoading && !isAuthenticated && isAuthenticated !== undefined) {
      const error = searchParams.get('error');

      if (error === 'access_denied') {
        const org = organizations[0];
        setSelectedOrganization(org);
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
};

const useAuthentication = () => React.useContext(AuthenticationContext);

export { AuthenticationProvider, useAuthentication };
