import type {
  Auth0ClientOptions,
  GetTokenSilentlyOptions,
  RedirectLoginOptions,
} from '@auth0/auth0-spa-js';
import type { Product } from '../hooks/useOrfiumProducts/types';
import { Organization } from '../store/organizations';

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
  getAccessTokenSilently: (opts?: GetTokenSilentlyOptions) => Promise<{
    token: string;
    decodedToken: DecodedTokenResponse | Record<string, never>;
  } | void>;
  orfiumProducts: Product[] | null;
  user: User | undefined;
  organizations: Organization[];
  selectedOrganization: Organization | null;
  switchOrganization: (organisation: Organization['org_id']) => void;
};

export type AuthenticationProviderProps = { overrides?: Auth0ClientOptions };
