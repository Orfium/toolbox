import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { Auth0ProviderOptions } from '@auth0/auth0-react/dist/auth0-provider';
import React, { createContext, useEffect } from 'react';

import { config } from './config';
import { AuthenticationContextProps, AuthenticationProviderProps } from './types';

const onRedirectCallback = () => {
  return window.location.pathname;
};

const providerConfig: Auth0ProviderOptions = {
  domain: config.domain || '',
  clientId: config.clientId || '',
  redirectUri: window.location.origin,
  onRedirectCallback,
  useRefreshTokens: true,
  cacheLocation: 'memory',
};

const AuthenticationContext = createContext<AuthenticationContextProps>({
  isAuthenticated: false,
  isLoading: false,
  user: undefined,
});

const Provider: React.FC = ({ children }) => {
  const { isAuthenticated, isLoading, loginWithRedirect, logout, getAccessTokenSilently, user } =
    useAuth0();

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
