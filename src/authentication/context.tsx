import createAuth0Client, {
  getIdTokenClaimsOptions,
  GetTokenSilentlyOptions,
  GetTokenWithPopupOptions,
  IdToken,
  LogoutOptions,
  PopupLoginOptions,
  RedirectLoginOptions,
  Auth0ClientOptions,
} from '@auth0/auth0-spa-js';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';
import jwt_decode from 'jwt-decode';
import React, { useState, useEffect, useContext, createContext } from 'react';

import useOrganization from '../store/useOrganization';
import useRequestToken from '../store/useRequestToken';
import { config } from './config';
import { AuthenticationContextProps, AuthenticationProviderProps } from './types';

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
export const useAuth0 = () => useContext(AuthenticationContext)!;

let client: any;
const getAuth0Client: any = async () => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    const selectedOrganization = useOrganization.getState().selectedOrganization;
    if (!client || selectedOrganization?.org_id) {
      try {
        client = await createAuth0Client({
          ...providerConfig,
          // scope: 'openid email profile offline_access',
          organization: selectedOrganization?.org_id,
        });
      } catch (e) {
        reject(new Error(`getAuth0Client Error: ${e}`));
      }
    }

    resolve(client);
  });
};

export const logoutAuth = async () => {
  const setToken = useRequestToken.getState().setToken;
  const resetOrganizationState = useOrganization.getState().reset;
  const client = await getAuth0Client();
  // allowed logout urls on auth0 application
  client?.logout({ returnTo: window.location.origin });
  setToken(undefined);
  resetOrganizationState();
};

export const getTokenSilently = async (p?: any) => {
  const { token: stateToken, setToken } = useRequestToken.getState(); // my storage
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
    ...p,
    // ignoreCache: true,
    organization: selectedOrganization?.org_id,
  });
  setToken(token);

  return { token, decodedToken: jwt_decode(token) };
};

export const Provider: React.FC = ({ children }): any => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any>();
  const [auth0Client, setAuth0] = useState<Auth0Client>();
  const [isLoading, setIsLoading] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);
  const setToken = useRequestToken((state) => state.setToken);

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
    // eslint-disable-next-line
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

  const logout = () => {
    // @TODO change returnTo to orfium one when is ready
    logoutAuth();
  };

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      auth0Client!.loginWithRedirect();
    }
  }, [isLoading, isAuthenticated]);

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        loginWithRedirect: (o: RedirectLoginOptions) => auth0Client!.loginWithRedirect(o),
        logout,
        // @ts-ignore
        getAccessTokenSilently: (o: RedirectLoginOptions) => getAccessTokenSilently(o),
        user,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

const AuthenticationProvider: React.FC<AuthenticationProviderProps> = ({ children, overrides }) => {
  const { selectedOrganization } = useOrganization();

  return <Provider>{children}</Provider>;
};

const useAuthentication = () => React.useContext(AuthenticationContext);

export { AuthenticationProvider, useAuthentication };
