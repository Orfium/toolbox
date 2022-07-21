import { Auth0Provider, useAuth0, User } from '@auth0/auth0-react';
import { Auth0ProviderOptions } from '@auth0/auth0-react/dist/auth0-provider';
import { GetTokenSilentlyOptions } from '@auth0/auth0-spa-js';
import jwt_decode from 'jwt-decode';
import React, { createContext, useEffect } from 'react';

import useOrganization from '../store/useOrganization';
import useRequestToken from '../store/useRequestToken';
import { config } from './config';
import { AuthenticationContextProps, AuthenticationProviderProps } from './types';

const onRedirectCallback = () => {
  return window.location.pathname;
};

const providerConfig: Auth0ProviderOptions = {
  domain: config.domain || '',
  clientId: config.clientId || '',
  audience: config.audience || 'orfium',
  redirectUri: window.location.origin,
  onRedirectCallback,
  useRefreshTokens: true,
  // this way we persist the token to not refetch on reload - https://auth0.com/docs/libraries/auth0-single-page-app-sdk#change-storage-options
  cacheLocation: 'localstorage',
};

const AuthenticationContext = createContext<AuthenticationContextProps>({
  isAuthenticated: false,
  isLoading: false,
  user: undefined,
  loginWithRedirect: () => {},
  logout: () => {},
  getAccessTokenSilently: () => Promise.resolve({ token: '', decodedToken: {} }),
});

const Provider: React.FC = ({ children }) => {
  const {
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    loginWithPopup,
    logout: logoutAuth0,
    getAccessTokenSilently: getAccessTokenSilentlyAuth0,
    user,
  } = useAuth0();
  const setToken = useRequestToken((state) => state.setToken);

  const getAccessTokenSilently = async (opts?: GetTokenSilentlyOptions) => {
    try {
      const token = await getAccessTokenSilentlyAuth0(opts);
      const decodedToken = jwt_decode<Record<string, unknown>>(token);

      return { token, decodedToken };
    } catch (e: any) {
      if (e?.error === 'login_required' || e?.error === 'consent_required') {
        await loginWithPopup();
      }
      throw e;
    }
  };

  const logout = () => {
    // @TODO change returnTo to orfium one when is ready
    logoutAuth0({ returnTo: window.location.origin });
    setToken(undefined);
  };

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect();
    }
  }, [isLoading, isAuthenticated]);

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        loginWithRedirect,
        logout,
        getAccessTokenSilently,
        user,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

const AuthenticationProvider: React.FC<AuthenticationProviderProps> = ({ children, overrides }) => {
  const { selectedOrganization } = useOrganization();

  return (
    <Auth0Provider {...providerConfig} organization={selectedOrganization?.org_id} {...overrides}>
      <Provider>{children}</Provider>
    </Auth0Provider>
  );
};

const useAuthentication = () => React.useContext(AuthenticationContext);

export { AuthenticationProvider, useAuthentication };
