import { cleanup, render, waitFor } from '@testing-library/react';
import React from 'react';

import {
  FAKE_TOKEN,
  getNewFakeToken,
  getTokenSilently,
  isAuthenticated,
  loginWithRedirect,
  // @ts-ignore
} from '../../__mocks__/@auth0/auth0-spa-js';
import { orfiumIdBaseInstance } from '../request';
import MockRequest from '../request/mock';
import { Authentication as AuthenticationProvider } from './index';

const TestComp = () => {
  return <div data-testid={'test'}>Test</div>;
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
    render(
      <AuthenticationProvider>
        <TestComp />
      </AuthenticationProvider>
    );
  });

  it('renders the test component', async () => {
    getTokenSilently.mockResolvedValue(getNewFakeToken());
    isAuthenticated.mockResolvedValue(true);
    mock.onGet('/memberships/').reply(200, [{ org_id: 'a' }]);

    const { getByTestId } = render(
      <AuthenticationProvider>
        <TestComp />
      </AuthenticationProvider>
    );

    await waitFor(() => expect(getByTestId('orfium-auth-loading')).toBeTruthy());

    await waitFor(() => expect(getByTestId('test')).toBeTruthy());
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
    const { getByTestId } = render(
      <AuthenticationProvider>
        <TestComp />
      </AuthenticationProvider>
    );
    await waitFor(() => expect(getByTestId('orfium-auth-loading')).toBeTruthy());
  });

  it('renders the no organization message when it should', async () => {
    getTokenSilently.mockResolvedValue(getNewFakeToken());
    isAuthenticated.mockResolvedValue(true);
    mock.onGet('/memberships/').replyOnce(200, []);

    const { getByTestId } = render(
      <AuthenticationProvider>
        <TestComp />
      </AuthenticationProvider>
    );

    await waitFor(() => expect(getByTestId('orfium-auth-loading')).toBeTruthy());

    await waitFor(() => expect(getByTestId('orfium-no-organizations')).toBeTruthy());
  });
});
