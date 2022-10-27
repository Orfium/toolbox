import createAuth0Client, {
  GetTokenSilentlyOptions,
  RedirectLoginOptions,
  Auth0ClientOptions,
  Auth0Client,
} from '@auth0/auth0-spa-js';
import jwt_decode from 'jwt-decode';
import React, { useState, useEffect, createContext } from 'react';
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

const providerConfig: Auth0ClientOptions = {
  domain: config.domain || '',
  client_id: config.clientId || '',
  audience: config.audience || 'orfium',
  redirect_uri: window.location.origin,
  onRedirectCallback,
  useRefreshTokens: true,
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
        organization: selectedOrganization?.org_id,
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
    // @TODO change returnTo to orfium one when is ready
    client?.logout({ returnTo: window.location.origin });
    setToken(undefined);
    resetOrganizationState();
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
  params?: Record<string, unknown>
  // @ts-ignore
): Promise<{ token: string; decodedToken: { exp?: number; org_id?: string } }> => {
  const { token: stateToken = '', setToken } = useRequestToken.getState();
  const selectedOrganization = useOrganization.getState().selectedOrganization;
  const decodedToken = stateToken ? jwt_decode<{ exp?: number; org_id?: string }>(stateToken) : {};
  const isExpired =
    decodedToken && decodedToken.exp
      ? new Date(decodedToken?.exp * 1000).getTime() < new Date().getTime()
      : true; // has expired

  if (!isExpired && decodedToken.org_id) {
    return { token: stateToken, decodedToken };
  }
  try {
    const client = await getAuth0Client();

    const token = await client.getTokenSilently({
      ...params,
      organization: selectedOrganization?.org_id,
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
  const [__popupOpen, setPopupOpen] = useState(false);
  const handleError = useErrorHandler();
  const params = new URLSearchParams(window.location.search);

  const selectedOrganization = useOrganization((state) => state.selectedOrganization);
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
            return client!.loginWithRedirect({
              organization: organization || undefined,
              invitation: invitation || undefined,
            });
          }
        }

        handleError(error);
      }
    })();
  }, []);

  const loginWithPopup = async (params = {}) => {
    setPopupOpen(true);
    try {
      await auth0Client!.loginWithPopup(params);
    } catch (error) {
      return handleError(error);
    } finally {
      setPopupOpen(false);
    }
    const clientUser = await auth0Client!.getUser();
    setUser(clientUser);
    setIsAuthenticated(true);
  };

  const getAccessTokenSilently = async (opts?: GetTokenSilentlyOptions) => {
    try {
      const result = await getTokenSilently(opts);

      return result;
    } catch (error: any) {
      handleError(error);

      if (error?.error === 'login_required' || error?.error === 'consent_required') {
        return loginWithPopup({
          organization: organization || undefined,
          invitation: invitation || undefined,
        });
      }

      return error;
    }
  };

  useEffect(() => {
    if (!isLoading && !isAuthenticated && isAuthenticated !== undefined) {
      auth0Client!.loginWithRedirect({
        organization: organization || undefined,
        invitation: invitation || undefined,
      });
    }
  }, [auth0Client, isLoading, isAuthenticated]);

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        loginWithRedirect: (o: RedirectLoginOptions) => auth0Client!.loginWithRedirect(o),
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
