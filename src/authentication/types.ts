import { User } from '@auth0/auth0-react';
import { Auth0ProviderOptions } from '@auth0/auth0-react/dist/auth0-provider';
import { GetTokenSilentlyOptions } from '@auth0/auth0-spa-js';

export type AuthenticationContextProps = {
  isAuthenticated: boolean;
  isLoading: boolean;
  loginWithRedirect: () => void;
  logout: () => void;
  getAccessTokenSilently: (
    opts?: GetTokenSilentlyOptions
  ) => Promise<{ token: string; decodedToken: Record<string, unknown> }>;
  user: User | undefined;
};

export type AuthenticationProviderProps = { overrides?: Auth0ProviderOptions };
