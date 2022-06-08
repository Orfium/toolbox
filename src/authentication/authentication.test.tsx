import * as auth from '@auth0/auth0-react';
import { cleanup, render } from '@testing-library/react';
import React from 'react';

import { AuthenticationProvider, useAuthentication } from './context';

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
    // @ts-ignore
    jest.spyOn(auth, 'useAuth0').mockImplementation(() => ({
      isAuthenticated: true,
      isLoading: false,
    }));

    render(
      <AuthenticationProvider>
        <TestComp />
      </AuthenticationProvider>
    );
  });

  it('renders the test component', () => {
    // @ts-ignore
    jest.spyOn(auth, 'useAuth0').mockImplementation(() => ({
      isAuthenticated: true,
      isLoading: false,
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
    // @ts-ignore
    jest.spyOn(auth, 'useAuth0').mockImplementation(() => ({
      isAuthenticated: false,
      isLoading: false,
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
    // @ts-ignore
    jest.spyOn(auth, 'useAuth0').mockImplementation(() => ({
      isAuthenticated: false,
      isLoading: true,
    }));

    const { getByTestId } = render(
      <AuthenticationProvider>
        <TestComp />
      </AuthenticationProvider>
    );
    expect(getByTestId('test-loading')).toBeTruthy();
  });
});
