import {
  Auth0Client,
  Auth0ClientOptions,
  GetTokenSilentlyOptions,
  RedirectLoginOptions,
} from '@auth0/auth0-spa-js';
import jwt_decode from 'jwt-decode';
import React, { createContext, useCallback, useEffect, useRef, useState } from 'react';
import { useErrorHandler } from 'react-error-boundary';

import useOrganization from '../store/useOrganization';
import useRequestToken from '../store/useRequestToken';
import useUser from '../store/useUser';
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
export const getAuth0Client = (force = false) => {
  if (force || !client) {
    try {
      client = new Auth0Client({
        ...providerConfig,
        authorizationParams: {
          ...providerConfig.authorizationParams,
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
export const logoutAuth = async ({ force = false }: { force?: boolean } = {}) => {
  try {
    const client = getAuth0Client();

    if (!client || Object.keys(client).length === 0) {
      throw new Error('logoutAuth Error: client is not defined');
    }

    const resetUser = useUser.getState().reset;
    const setToken = useRequestToken.getState().setToken;
    const resetOrganizationState = useOrganization.getState().reset;
    const isAuthenticated = await client?.isAuthenticated();

    resetUser();
    setToken(undefined);
    resetOrganizationState();

    if (isAuthenticated || force) {
      await client?.logout({
        logoutParams: { returnTo: window.location.origin },
      });
    }
  } catch (e: unknown) {
    throw e;
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
    const client = getAuth0Client();
    const token = await client.getTokenSilently({
      ...params,
      authorizationParams: {
        ...params?.authorizationParams,
        organization: selectedOrganization?.org_id,
      },
    });
    setToken(token);

    return { token, decodedToken: jwt_decode(token) };
  } catch (e: any) {
    if (e?.error === 'login_required') {
      // case 1 we want logout because a user clicked logout
      // case 2 auth0 session expired and client will redirect for login (popup or redirect)
      await logoutAuth({ force: true });
    }
    throw e;
  }
};

const AuthenticationProvider: React.FC = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { user, setUser } = useUser();
  const [client] = useState<Auth0Client>(() => getAuth0Client());
  const [isLoading, setIsLoading] = useState(true);
  const handleError = useErrorHandler();
  const [error, setError] = useState('');
  const params = new URLSearchParams(window.location.search);
  const didInitialise = useRef(false);
  const selectedOrganization = useOrganization((state) => state.selectedOrganization);
  const setSelectedOrganization = useOrganization((state) => state.setSelectedOrganization);
  const organizations = useOrganization((state) => state.organizations);
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
    [handleError]
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

  const getAccessTokenSilently = useCallback(
    async (opts?: GetTokenSilentlyOptions) => {
      try {
        const response = await getTokenSilently(opts);

        return response;
      } catch (error: any) {
        if (error?.error) {
          setError(error?.error);
        }

        return handleError(error);
      }
    },
    [handleError]
  );

  useEffect(() => {
    const searchParams = new URL(window.location.href).searchParams;
    if (!isLoading && !isAuthenticated && isAuthenticated !== undefined) {
      const error = searchParams.get('error');

      if (error === 'access_denied') {
        const org = (organizations || [])[0];
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
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

const useAuthentication = () => React.useContext(AuthenticationContext);

export { AuthenticationProvider, useAuthentication };
