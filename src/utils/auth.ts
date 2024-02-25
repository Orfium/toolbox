import { Auth0Client, Auth0ClientOptions, GetTokenSilentlyOptions } from '@auth0/auth0-spa-js';
import jwtDecode from 'jwt-decode';
import { config } from '~/config';
import useOrganization from '~/store/organizations';
import useRequestToken from '~/store/requestToken';
import useUser from '~/store/useUser';

export const onRedirectCallback = (appState: { targetUrl?: string }) => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl ? appState.targetUrl : window.location.pathname
  );
};

export const providerConfig: Auth0ClientOptions = {
  domain: config.domain || '',
  clientId: config.clientId || '',
  authorizationParams: {
    audience: config.audience || 'orfium',
    redirect_uri: window.location.origin,
    onRedirectCallback,
  },
  useRefreshTokens: true,
  cacheLocation: 'localstorage',
  useRefreshTokensFallback: true, // fix issue with logout https://community.auth0.com/t/auth0-spa-2-x-returning-missing-refresh-token/98999/18
};

/*
 * This function get an auth0 client and store it globally as a singleton.
 * Auth0 creation requires a call to auth0 for token which by define it once we prevent other unintended calls to the service.
 */
export let client: Auth0Client | undefined;
export const getAuth0Client = (force = false) => {
  if (force || !client) {
    try {
      client = new Auth0Client({
        ...providerConfig,
        authorizationParams: {
          ...providerConfig.authorizationParams,
        },
      });
    } catch (e) {
      throw new Error(`getAuth0Client Error: ${e}`);
    }
  }

  return client;
};

/**
 * Here we clear out all the stored information on logout of the user.
 * Stored information that we clear out is
 *  - tokens
 *  - organizations, selectedOrganization
 */
export const logoutAuth = async ({ force = false }: { force?: boolean } = {}) => {
  const client = getAuth0Client();

  if (!client || Object.keys(client).length === 0) {
    throw new Error('logoutAuth Error: client is not defined');
  }

  const resetUser = useUser.getState().reset;
  const setToken = useRequestToken.getState().setToken;
  const resetOrganizationState = useOrganization.getState().reset;
  const isAuthenticated = await client?.isAuthenticated();

  resetUser();
  setToken(undefined);
  resetOrganizationState();

  if (isAuthenticated || force) {
    await client?.logout({
      logoutParams: { returnTo: window.location.origin },
    });
  }
};

/**
 *  This function determine the latest token of the user and returns it encoded and decoded.
 *  We keep the latest token in the memory and in every call of the function we check if that token has expired in order to call the auth0 API
 *  This way we prevent unnecessary new calls for the current token to the auth0 and we avoid hitting the hard limit on their API.
 *
 *  @param params - Params that are passed as configuration to the getTokenSilently function. These params can configure cache, organization etc
 *
 *  @returns {Promise} Promise that resolves to token and decodedToken for the authorization
 */
export const getTokenSilently = async (
  params?: GetTokenSilentlyOptions
): Promise<{ token: string; decodedToken: { exp?: number; org_id?: string } }> => {
  const { token: stateToken = '', setToken } = useRequestToken.getState();
  const selectedOrganization = useOrganization.getState().selectedOrganization;
  const decodedToken = stateToken ? jwtDecode<{ exp?: number; org_id?: string }>(stateToken) : {};
  const isExpired =
    decodedToken && decodedToken.exp
      ? new Date(decodedToken?.exp * 1000).getTime() < new Date().getTime()
      : true; // has expired

  if (!isExpired && decodedToken.org_id && decodedToken.org_id === selectedOrganization?.org_id) {
    return { token: stateToken, decodedToken };
  }

  try {
    const client = getAuth0Client();
    const token = await client.getTokenSilently({
      ...params,
      authorizationParams: {
        ...params?.authorizationParams,
        organization: selectedOrganization?.org_id,
      },
    });
    setToken(token);

    return { token, decodedToken: jwtDecode(token) };
  } catch (e: any) {
    if (e?.error === 'login_required') {
      // case 1 we want logout because a user clicked logout
      // case 2 auth0 session expired and client will redirect for login (popup or redirect)
      await logoutAuth({ force: true });
    }
    throw e;
  }
};
