import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { Auth0ProviderOptions } from '@auth0/auth0-react/dist/auth0-provider';
import jwt_decode from 'jwt-decode';
import React, { createContext, useEffect } from 'react';

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
});

const Provider: React.FC = ({ children }) => {
  const {
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    logout,
    getAccessTokenSilently: getAccessTokenSilentlyAuth0,
    user,
  } = useAuth0();

  const getAccessTokenSilently = async () => {
    const token = await getAccessTokenSilentlyAuth0();
    const decodedToken = jwt_decode<Record<string, unknown>>(token);

    return { token, decodedToken };
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
  return (
    <Auth0Provider {...providerConfig} {...overrides}>
      <Provider>{children}</Provider>
    </Auth0Provider>
  );
};

const useAuthentication = () => React.useContext(AuthenticationContext);

export { AuthenticationProvider, useAuthentication };
