import { cleanup, render, waitFor } from '@testing-library/react';

import {
  getNewFakeToken,
  getTokenSilently,
  getUser,
  isAuthenticated,
  loginWithRedirect,
} from '../../__mocks__/@auth0/auth0-spa-js';
import { orfiumIdBaseInstance } from '../request';
import MockRequest from '../request/mock';
import { Authentication as AuthenticationProvider } from './index';
const TestComp = () => {
  return <div data-testid={'test'}>Test</div>;
};

describe('Authentication: ', () => {
  let mock: MockRequest;
  const apiInstance = orfiumIdBaseInstance.instance;

  beforeEach(() => {
    mock = new MockRequest(apiInstance);
  });

  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  it('renders without crashing', () => {
    render(
      <AuthenticationProvider>
        <TestComp />
      </AuthenticationProvider>
    );
  });

  it('renders the test component', async () => {
    getTokenSilently.mockResolvedValue(getNewFakeToken());
    jest.mock('../store/useUser', () => ({
      __esModule: true,
      default: {
        user: {},
      },
    }));
    isAuthenticated.mockResolvedValue(true);
    getUser.mockResolvedValue({
      name: 'John Doe',
      updated_at: new Date().toDateString(),
    });
    mock.onGet('/memberships/').reply(200, [{ org_id: 'a' }]);

    const { findByTestId } = render(
      <AuthenticationProvider>
        <TestComp />
      </AuthenticationProvider>
    );

    expect(await findByTestId('orfium-auth-loading')).toBeTruthy();

    expect(
      await findByTestId('test', undefined, {
        timeout: 3000,
      })
    ).toBeTruthy();
  });

  it('redirects to login if not authenticated', async () => {
    isAuthenticated.mockResolvedValue(false);
    getTokenSilently.mockResolvedValue(getNewFakeToken());
    mock.onGet('/memberships/').replyOnce(200, []);

    render(
      <AuthenticationProvider>
        <TestComp />
      </AuthenticationProvider>
    );

    await waitFor(() => expect(loginWithRedirect).toHaveBeenCalled());
  });

  it('renders the loading while its authenticating', async () => {
    getTokenSilently.mockResolvedValue(getNewFakeToken());
    isAuthenticated.mockResolvedValue(true);
    getUser.mockResolvedValue({
      name: 'John Doe',
      updated_at: new Date().toDateString(),
    });
    const { findByTestId } = render(
      <AuthenticationProvider>
        <TestComp />
      </AuthenticationProvider>
    );
    expect(await findByTestId('orfium-auth-loading')).toBeTruthy();
  });

  it('renders the no organization message when it should', async () => {
    getTokenSilently.mockResolvedValue(getNewFakeToken());
    isAuthenticated.mockResolvedValue(true);
    getUser.mockResolvedValue({
      name: 'John Doe',
      updated_at: new Date().toDateString(),
    });
    mock.onGet('/memberships/').replyOnce(200, []);

    const { findByTestId } = render(
      <AuthenticationProvider>
        <TestComp />
      </AuthenticationProvider>
    );

    expect(await findByTestId('orfium-auth-loading')).toBeTruthy();
    expect(
      await findByTestId('orfium-no-organizations', undefined, {
        timeout: 13000,
      })
    ).toBeTruthy();
  });
});
