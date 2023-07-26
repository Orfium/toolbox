import {
  Auth0ClientOptions,
  GetTokenSilentlyOptions,
  RedirectLoginOptions,
} from '@auth0/auth0-spa-js';

export type DecodedTokenResponse = {
  iss?: string;
  sub?: string;
  aud?: string[];
  iat?: number;
  exp?: number;
  azp?: string;
  scope?: string;
  org_id?: string;
  permissions?: string[];
};

export type User = {
  name?: string;
  given_name?: string;
  family_name?: string;
  middle_name?: string;
  nickname?: string;
  preferred_username?: string;
  profile?: string;
  picture?: string;
  website?: string;
  email?: string;
  email_verified?: boolean;
  gender?: string;
  birthdate?: string;
  zoneinfo?: string;
  locale?: string;
  phone_number?: string;
  phone_number_verified?: boolean;
  address?: string;
  updated_at?: string;
  sub?: string;
  [key: string]: any;
};

export type AuthenticationContextProps = {
  isAuthenticated: boolean;
  isLoading: boolean;
  loginWithRedirect(o?: RedirectLoginOptions): Promise<void>;
  logout: () => void;
  getAccessTokenSilently: (
    opts?: GetTokenSilentlyOptions
  ) => Promise<{ token: string; decodedToken: DecodedTokenResponse | Record<string, never> }>;
  user: User | undefined;
};

export type AuthenticationProviderProps = { overrides?: Auth0ClientOptions };
