import { cleanup, render, waitFor } from '@testing-library/react';
import React from 'react';

import {
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
    mock.onGet('/memberships/').reply(200, [{ org_id: 'a' }]);

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
    isAuthenticated.mockResolvedValue(false);

    render(
      <AuthenticationProvider>
        <TestComp />
      </AuthenticationProvider>
    );

    await waitFor(() => expect(loginWithRedirect).toHaveBeenCalled());
  });

  it('renders the loading while its authenticating', async () => {
    const { findByTestId } = render(
      <AuthenticationProvider>
        <TestComp />
      </AuthenticationProvider>
    );
    await waitFor(() => expect(findByTestId('auth-loading')).toBeTruthy());
  });

  it('renders the no organization message when it should', async () => {
    mock.onGet('/memberships/').replyOnce(200, []);

    const { findByTestId } = render(
      <AuthenticationProvider>
        <TestComp />
      </AuthenticationProvider>
    );
    await waitFor(() => expect(findByTestId('auth-loading')).toBeTruthy());

    await waitFor(() => expect(findByTestId('no-org-id')).toBeTruthy());
  });
});
