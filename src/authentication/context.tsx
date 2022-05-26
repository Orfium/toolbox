import React, { createContext } from 'react';

import { AuthenticationContextProps, AuthenticationProviderProps } from './types';

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

const AuthenticationContext = createContext<AuthenticationContextProps>(
  guardContext<AuthenticationContextProps>(
    {
      logout: () => {},
    },
    'You must wrap your component inside an AuthProvider'
  )
);

const AuthenticationProvider: React.FC<AuthenticationProviderProps> = ({ children, onLogout }) => {
  const logout = () => {
    onLogout();
  };

  return (
    <AuthenticationContext.Provider value={{ logout }}>{children}</AuthenticationContext.Provider>
  );
};

const useAuthentication = () => React.useContext(AuthenticationContext);

export { AuthenticationProvider, useAuthentication };
