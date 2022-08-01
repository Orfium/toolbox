import createAuth0Client, {
  GetTokenSilentlyOptions,
  RedirectLoginOptions,
  Auth0ClientOptions,
  Auth0Client,
} from '@auth0/auth0-spa-js';
import jwt_decode from 'jwt-decode';
import React, { useState, useEffect, createContext } from 'react';

import useOrganization from '../store/useOrganization';
import useRequestToken from '../store/useRequestToken';
import { config } from './config';
import { AuthenticationContextProps } from './types';

const onRedirectCallback = (appState: { targetUrl: string }) => {
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
  // this way we persist the token to not refetch on reload - https://auth0.com/docs/libraries/auth0-single-page-app-sdk#change-storage-options
  cacheLocation: 'localstorage',
};

export const AuthenticationContext = createContext<AuthenticationContextProps>({
  isAuthenticated: false,
  isLoading: false,
  user: undefined,
  loginWithRedirect: () => Promise.resolve(),
  logout: () => {},
  getAccessTokenSilently: () => Promise.resolve({ token: '', decodedToken: {} }),
});

let client: Auth0Client | undefined;
const getAuth0Client = async () => {
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
  const client = await getAuth0Client();
  // @TODO change returnTo to orfium one when is ready
  client?.logout({ returnTo: window.location.origin });
  setToken(undefined);
  resetOrganizationState();
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

  const client = await getAuth0Client();

  const token = await client.getTokenSilently({
    ...params,
    organization: selectedOrganization?.org_id,
  });
  setToken(token);

  return { token, decodedToken: jwt_decode(token) };
};

const AuthenticationProvider: React.FC = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<Record<string, unknown>>();
  const [auth0Client, setAuth0] = useState<Auth0Client>();
  const [isLoading, setIsLoading] = useState(true);
  const [__popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const client = await getAuth0Client();
      setAuth0(client);
      if (window.location.search.includes('code=')) {
        const { appState } = await client.handleRedirectCallback();
        onRedirectCallback(appState);
      }
      const isAuthenticated = await client.isAuthenticated();
      setIsAuthenticated(isAuthenticated);

      if (isAuthenticated) {
        const user = await client.getUser();
        setUser(user);
      }

      setIsLoading(false);
    })();
  }, []);

  const loginWithPopup = async (params = {}) => {
    setPopupOpen(true);
    try {
      await auth0Client!.loginWithPopup(params);
    } catch (error) {
      console.error(error);
    } finally {
      setPopupOpen(false);
    }
    const user = await auth0Client!.getUser();
    setUser(user);
    setIsAuthenticated(true);
  };

  const getAccessTokenSilently = async (opts?: GetTokenSilentlyOptions) => {
    try {
      return getTokenSilently(opts);
    } catch (e: any) {
      if (e?.error === 'login_required' || e?.error === 'consent_required') {
        await loginWithPopup();
      }

      throw e;
    }
  };

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      auth0Client!.loginWithRedirect();
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
