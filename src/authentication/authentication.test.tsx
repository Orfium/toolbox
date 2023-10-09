import { cleanup, render, waitFor } from '@testing-library/react';

import { QueryClient, QueryClientProvider } from 'react-query';
import {
  getNewFakeToken,
  getTokenSilently,
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
  const apiInstance = orfiumIdBaseInstance.instance;
  const mock: MockRequest = new MockRequest(apiInstance);
  let queryClient: QueryClient;

  beforeEach(() => {
    queryClient = new QueryClient();
    mock.onGet('/products/').reply(200, [
      {
        name: 'string',
        organization_usage: 'string',
        client_metadata: {
          product_code: 'string',
        },
        logo_url: 'string',
        login_url: 'string',
      },
    ]);
  });

  afterEach(() => {
    // clear all mocks and mocked values
    jest.clearAllMocks();
    cleanup();
    mock.reset();
  });

  afterEach(() => {});

  it('renders without crashing', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <AuthenticationProvider>
          <TestComp />
        </AuthenticationProvider>
      </QueryClientProvider>
    );
  });

  it('renders the test component', async () => {
    getTokenSilently.mockResolvedValue(getNewFakeToken());
    isAuthenticated.mockResolvedValue(true);
    mock.onGet('/memberships/').reply(200, [{ org_id: 'a' }]);

    const { findByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <AuthenticationProvider>
          <TestComp />
        </AuthenticationProvider>
      </QueryClientProvider>
    );

    expect(await findByTestId('orfium-auth-loading')).toBeTruthy();

    expect(await findByTestId('test')).toBeTruthy();
  });

  it('redirects to login if not authenticated', async () => {
    isAuthenticated.mockResolvedValue(false);
    getTokenSilently.mockResolvedValue(getNewFakeToken());
    mock.onGet('/memberships/').replyOnce(200, []);

    render(
      <QueryClientProvider client={queryClient}>
        <AuthenticationProvider>
          <TestComp />
        </AuthenticationProvider>
      </QueryClientProvider>
    );

    await waitFor(() => expect(loginWithRedirect).toHaveBeenCalled());
  });

  it('renders the loading while its authenticating', async () => {
    getTokenSilently.mockResolvedValue(getNewFakeToken());
    isAuthenticated.mockResolvedValue(true);
    const { findByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <AuthenticationProvider>
          <TestComp />
        </AuthenticationProvider>
      </QueryClientProvider>
    );
    expect(await findByTestId('orfium-auth-loading')).toBeTruthy();
  });

  it('renders the no organization message when it should', async () => {
    getTokenSilently.mockResolvedValue(getNewFakeToken());
    isAuthenticated.mockResolvedValue(true);
    mock.onGet('/memberships/').replyOnce(200, []);

    const { findByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <AuthenticationProvider>
          <TestComp />
        </AuthenticationProvider>
      </QueryClientProvider>
    );

    expect(await findByTestId('orfium-auth-loading')).toBeTruthy();
    expect(await findByTestId('orfium-no-organizations')).toBeTruthy();
  });
});
