import * as auth from '@auth0/auth0-react';
import { cleanup, render, waitFor } from '@testing-library/react';
import React from 'react';

import { orfiumIdBaseInstance } from '../request';
import MockRequest from '../request/mock';
import { Authentication as AuthenticationProvider } from './index';

jest.spyOn(auth, 'Auth0Provider').mockImplementation(({ children }) => <div>{children}</div>);

const TestComp = () => {
  return <div data-testid={'test'}>Test</div>;
};
const mockAuth0 = (isAuthenticated: boolean, isLoading: boolean) => {
  const loginWithRedirectFun = jest.fn();
  const getAccessTokenSilentlyFun = jest.fn();

  // @ts-ignore
  jest.spyOn(auth, 'useAuth0').mockImplementation(() => ({
    isAuthenticated: isAuthenticated,
    isLoading: isLoading,
    loginWithRedirect: loginWithRedirectFun,
    getAccessTokenSilently: getAccessTokenSilentlyFun,
  }));

  return { loginWithRedirectFun, getAccessTokenSilentlyFun };
};

describe('Authorization: ', () => {
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
    mockAuth0(true, false);

    render(
      <AuthenticationProvider>
        <TestComp />
      </AuthenticationProvider>
    );
  });

  it('renders the test component', async () => {
    mock.onGet('/memberships/').reply(200, [{ org_id: 'a' }]);

    mockAuth0(true, false);

    const { findByTestId } = render(
      <AuthenticationProvider>
        <TestComp />
      </AuthenticationProvider>
    );
    await waitFor(() => expect(findByTestId('auth-loading')).toBeTruthy());

    await waitFor(() => {
      expect(findByTestId('test')).toBeTruthy();
    });
  });

  it('redirects to login if not authenticated', async () => {
    const { loginWithRedirectFun } = mockAuth0(false, false);

    render(
      <AuthenticationProvider>
        <TestComp />
      </AuthenticationProvider>
    );

    await waitFor(() => expect(loginWithRedirectFun).toHaveBeenCalled());
  });

  it('renders the loading while its authenticating', async () => {
    mockAuth0(false, true);

    const { findByTestId } = render(
      <AuthenticationProvider>
        <TestComp />
      </AuthenticationProvider>
    );
    await waitFor(() => expect(findByTestId('auth-loading')).toBeTruthy());
  });

  it('renders the no organization message when it should', async () => {
    mock.onGet('/memberships/').replyOnce(200, []);

    mockAuth0(true, false);

    const { findByTestId } = render(
      <AuthenticationProvider>
        <TestComp />
      </AuthenticationProvider>
    );
    await waitFor(() => expect(findByTestId('auth-loading')).toBeTruthy());

    await waitFor(() => expect(findByTestId('no-org-id')).toBeTruthy());
  });
});
