import sign from 'jwt-encode';

// A fake token with no org_id based on jwt.io
export const FAKE_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

/*
 * Pre-made fake token data that sets new creation and expiration time for that token
 * Creation time is `now` and expiration time is `now + 30seconds`
 */
export const fakeTokenData = {
  'https://sso.orfium.com/roles': ['nbcu:base'],
  iss: 'https://sso.staging.orfium.xyz/',
  sub: 'auth0|62da8eaa586d8cd67d1746b6',
  aud: ['orfium', 'https://orfium-staging.us.auth0.com/userinfo'],
  iat: new Date().getTime(),
  exp: new Date().getTime() + 30000,
  azp: '1eWaFhQJpHS3xMDQRwrZJai3kIrF04eI',
  scope: 'openid profile email offline_access',
  org_id: 'org_WYZLEMyTm2xEbnbn',
  permissions: ['media-engagement-tracker:user'],
};

export const getNewFakeToken = () => {
  return sign(fakeTokenData, 'secret');
};

/*
 * Mocked functions that can be imported to any test for mockResolve or mockReject values
 */
export const onRedirectCallback = jest.fn();
export const getTokenSilently = jest.fn();
export const loginWithRedirect = jest.fn();
export const getUser = jest.fn();
export const handleRedirectCallback = jest.fn();
export const isAuthenticated = jest.fn();
export const logout = jest.fn();
export const loginWithPopup = jest.fn();

/*
 * Mock auth0 client with predefined values
 * All necessary functions are mocked jest.fn() that can be used to run tests internally.
 */
export default (options: any) => ({
  getTokenSilently,
  loginWithRedirect,
  loginWithPopup,
  getUser,
  logout,
  handleRedirectCallback,
  isAuthenticated,
  options: {
    ...options,
    onRedirectCallback,
  },
  cacheLocation: 'localstorage',
  httpTimeoutMs: 10000,
  cookieStorage: {
    get: jest.fn(),
    save: jest.fn(),
    remove: jest.fn(),
  },
  orgHintCookieName: 'auth0..organization_hint',
  isAuthenticatedCookieName: 'auth0..is.authenticated',
  sessionCheckExpiryDays: 1,
  scope: 'offline_access',
  transactionManager: {
    storage: {
      get: jest.fn(),
      save: jest.fn(),
      remove: jest.fn(),
    },
    clientId: '',
    storageKey: 'a0.spajs.txs.',
    transaction: null,
  },
  nowProvider: jest.fn(),
  cacheManager: {
    cache: {},
    keyManifest: null,
    nowProvider: jest.fn(),
  },
  domainUrl: 'https://',
  tokenIssuer: 'https:///',
  defaultScope: 'openid profile email',
  customOptions: {
    onRedirectCallback,
    organization: undefined,
  },
  useRefreshTokensFallback: true,
});
