import { type GetTokenSilentlyOptions, type RedirectLoginOptions } from '@auth0/auth0-spa-js';
import { createContext } from 'react';

export type Permissions = string[];

export type DecodedTokenResponse = {
  iss?: string;
  sub?: string;
  aud?: string[];
  iat?: number;
  exp?: number;
  azp?: string;
  scope?: string;
  /** the organization id of the user currently selected **/
  org_id?: string;
  /** the permissions defined on the user for more info visit https://orfium.atlassian.net/wiki/spaces/OPS/pages/2554134739/Roles+and+Permissions#Organization-Roles **/
  permissions?: Permissions;
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

export type GetAccessTokenSilently = (opts?: GetTokenSilentlyOptions) => Promise<{
  token: string;
  decodedToken: DecodedTokenResponse | Record<string, never>;
} | void>;

export type AuthenticationContextValue = {
  isAuthenticated: boolean;
  isLoading: boolean;
  loginWithRedirect(o?: RedirectLoginOptions): Promise<void>;
  logout: (props?: { force?: boolean }) => Promise<void | string>;
  getAccessTokenSilently: GetAccessTokenSilently;
  user: User | undefined;
  permissions: Permissions;
};

export const defaultAuthenticationContextValues: AuthenticationContextValue = {
  isAuthenticated: false,
  isLoading: false,
  user: undefined,
  loginWithRedirect: () => Promise.resolve(),
  logout: () => Promise.resolve('logged out'),
  getAccessTokenSilently: () => Promise.resolve({ token: '', decodedToken: {} }),
  permissions: [],
};

export const AuthenticationContext = createContext<AuthenticationContextValue>(
  defaultAuthenticationContextValues
);
