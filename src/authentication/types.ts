import {
  User,
  Auth0ClientOptions,
  GetTokenSilentlyOptions,
  RedirectLoginOptions,
} from '@auth0/auth0-spa-js';

export type AuthenticationContextProps = {
  isAuthenticated: boolean;
  isLoading: boolean;
  loginWithRedirect(o?: RedirectLoginOptions): Promise<void>;
  logout: () => void;
  getAccessTokenSilently: (
    opts?: GetTokenSilentlyOptions
  ) => Promise<{ token: string; decodedToken: Record<string, unknown> }>;
  user: User | undefined;
};

export type AuthenticationProviderProps = { overrides?: Auth0ClientOptions };
