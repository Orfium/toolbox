export const FAKE_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

export const onRedirectCallback = jest.fn();
export const getTokenSilently = jest.fn();
export const loginWithRedirect = jest.fn();
export const getUser = jest.fn();
export const handleRedirectCallback = jest.fn();
export const isAuthenticated = jest.fn();

export default (options: any) => ({
  getTokenSilently: getTokenSilently.mockResolvedValue(FAKE_TOKEN),
  loginWithRedirect,
  getUser,
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
