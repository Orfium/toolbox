import { Auth0ContextInterface, initialContext, useAuth0 } from '@auth0/auth0-react';
import { GetTokenSilentlyOptions } from '@auth0/auth0-spa-js';
import jwtDecode from 'jwt-decode';
import React, { createContext, useCallback } from 'react';

export type GetAccessTokenSilently = (x?: GetTokenSilentlyOptions) => Promise<{
  token: string;
  decodedToken: { exp?: number; org_id?: string; permissions?: string[] };
}>;

export type Auth0Context = Omit<Auth0ContextInterface, 'getAccessTokenSilently'> & {
  getAccessTokenSilently: GetAccessTokenSilently;
};
export const defaultContextValues: Auth0Context = initialContext;

export const AuthenticationContext = createContext<Auth0Context>(defaultContextValues);

const AuthenticationProvider: React.FC = ({ children }) => {
  const auth0 = useAuth0();

  const getAccessTokenSilently: GetAccessTokenSilently = useCallback(
    async (x) => {
      const token = await auth0.getAccessTokenSilently(x);

      return { token, decodedToken: jwtDecode(token) };
    },
    [auth0]
  );

  console.log({ ...auth0, getAccessTokenSilently });

  return (
    <AuthenticationContext.Provider value={{ ...auth0, getAccessTokenSilently }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

const useAuthentication = () => React.useContext(AuthenticationContext);

export { AuthenticationProvider, useAuthentication };
