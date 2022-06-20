import { User } from '@auth0/auth0-react';
import { Auth0ProviderOptions } from '@auth0/auth0-react/dist/auth0-provider';

export type AuthenticationContextProps = {
  isAuthenticated: boolean;
  isLoading: boolean;
  loginWithRedirect?: () => void;
  logout?: () => void;
  getAccessTokenSilently?: () => Promise<string>;
  user: User | undefined;
};

export type AuthenticationProviderProps = { overrides?: Auth0ProviderOptions };
