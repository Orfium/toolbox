import * as auth from '@auth0/auth0-react';
import { cleanup, render } from '@testing-library/react';
import React from 'react';

import { Authentication as AuthenticationProvider, useAuthentication } from './index';

jest.spyOn(auth, 'Auth0Provider').mockImplementation(({ children }) => <div>{children}</div>);

const TestComp = () => {
  const { isLoading } = useAuthentication();

  if (isLoading) {
    return <div data-testid={'test-loading'}>Test</div>;
  }

  return <div data-testid={'test'}>Test</div>;
};

describe('Authorization: ', () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });
  it('renders without crashing', () => {
    const getAccessTokenSilentlyFun = jest.fn();

    // @ts-ignore
    jest.spyOn(auth, 'useAuth0').mockImplementation(() => ({
      isAuthenticated: true,
      isLoading: false,
      getAccessTokenSilently: getAccessTokenSilentlyFun,
    }));

    render(
      <AuthenticationProvider>
        <TestComp />
      </AuthenticationProvider>
    );
  });

  it('renders the test component', () => {
    const getAccessTokenSilentlyFun = jest.fn();
    // @ts-ignore
    jest.spyOn(auth, 'useAuth0').mockImplementation(() => ({
      isAuthenticated: true,
      isLoading: false,
      getAccessTokenSilently: getAccessTokenSilentlyFun,
    }));

    const { getByTestId } = render(
      <AuthenticationProvider>
        <TestComp />
      </AuthenticationProvider>
    );

    expect(getByTestId('test')).toBeTruthy();
  });

  it('redirects to login if not authenticated', () => {
    const loginWithRedirectFun = jest.fn();
    const getAccessTokenSilentlyFun = jest.fn();

    // @ts-ignore
    jest.spyOn(auth, 'useAuth0').mockImplementation(() => ({
      isAuthenticated: false,
      isLoading: false,
      getAccessTokenSilently: getAccessTokenSilentlyFun,
      loginWithRedirect: loginWithRedirectFun,
    }));

    const { getByTestId } = render(
      <AuthenticationProvider>
        <TestComp />
      </AuthenticationProvider>
    );
    expect(getByTestId('test')).toBeTruthy();

    expect(loginWithRedirectFun).toHaveBeenCalled();
  });

  it('renders the loading while its authenticating', () => {
    const getAccessTokenSilentlyFun = jest.fn();

    // @ts-ignore
    jest.spyOn(auth, 'useAuth0').mockImplementation(() => ({
      isAuthenticated: false,
      isLoading: true,
      getAccessTokenSilently: getAccessTokenSilentlyFun,
    }));

    const { getByTestId } = render(
      <AuthenticationProvider>
        <TestComp />
      </AuthenticationProvider>
    );
    expect(getByTestId('test-loading')).toBeTruthy();
  });
});
