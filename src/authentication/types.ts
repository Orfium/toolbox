import { User } from '@auth0/auth0-react';
import { Auth0ProviderOptions } from '@auth0/auth0-react/dist/auth0-provider';

export const authStates = {
  ANONYMOUS: 'anonymous',
  AUTHENTICATING: 'authenticating',
  AUTHENTICATED: 'authenticated',
  UNAUTHORIZED: 'unauthorized',
  AUTHORIZING: 'authorizing',
  AUTHORIZED: 'authorized',
} as const;

export const authStatesType = [
  authStates.ANONYMOUS,
  authStates.AUTHENTICATING,
  authStates.AUTHENTICATED,
  authStates.UNAUTHORIZED,
  authStates.AUTHORIZING,
  authStates.AUTHORIZED,
] as const;

export type AuthStates = typeof authStatesType[number];

export type AuthenticationContextProps = {
  isAuthenticated: boolean;
  isLoading: boolean;
  loginWithRedirect?: () => void;
  logout?: () => void;
  getAccessTokenSilently?: () => Promise<{ token: string; decodedToken: Record<string, unknown> }>;
  user: User | undefined;
};

export type AuthenticationProviderProps = { overrides?: Auth0ProviderOptions };
