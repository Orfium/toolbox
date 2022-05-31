import React, { createContext } from 'react';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';

import { config } from './config';
import { Auth0ProviderOptions } from '@auth0/auth0-react/dist/auth0-provider';

/**
 * takes the context props and an error message and returns a proxy in case something is used
 * outside of the provider
 *
 */
export const guardContext = <T extends object>(contextProps: T, errorMessage: string) =>
  new Proxy(contextProps, {
    get: () => {
      throw new Error(errorMessage);
    },
  });

const onRedirectCallback = () => {
  return window.location.pathname;
};

const providerConfig: Auth0ProviderOptions = {
  domain: config.domain,
  clientId: config.clientId,
  redirectUri: 'orfium-dev.us.auth0.com',
  useRefreshTokens: true,
};

const AuthenticationProvider: React.FC = ({ children }) => {
  console.log('here');

  return <Auth0Provider {...providerConfig}>{children}</Auth0Provider>;
};

const useAuthentication = () => useAuth0;

export { AuthenticationProvider, useAuthentication };
