import * as auth from '@auth0/auth0-react';
import { cleanup, render } from '@testing-library/react';
import React from 'react';

import { AuthenticationProvider } from './context';

jest.spyOn(auth, 'Auth0Provider').mockImplementation(({ children }) => <div>{children}</div>);

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
        <div>Test</div>
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
        <div data-testid={'test'}>Test</div>
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
        <div data-testid={'test'}>Test</div>
      </AuthenticationProvider>
    );
    expect(getByTestId('test')).toBeTruthy();

    expect(loginWithRedirectFun).toHaveBeenCalled();
  });
});
