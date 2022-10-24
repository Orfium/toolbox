import {
  act,
  findByText,
  getByTestId,
  render,
  waitFor,
  screen,
  findByTestId,
} from '@testing-library/react';
import jwtDecode from 'jwt-decode';
// eslint-disable-next-line import/order
import React, { useEffect, useState } from 'react';

// Auth0 custom error simulator. This extends a regular Error to match Auth0 Error.
class CustomError extends Error {
  constructor(public error: string, public error_description: string) {
    super(error_description);
    this.error = error;
    this.error_description = error_description;
  }
}

import { ErrorBoundary, useErrorHandler } from 'react-error-boundary';

import {
  FAKE_TOKEN,
  getUser,
  isAuthenticated,
  getTokenSilently as mockedGetTokenSilently,
  loginWithPopup as mockedLoginWithPopup,
  getNewFakeToken,
  fakeTokenData,
  loginWithRedirect,
  createAuth0 as mockedCreateAuth0,
  // @ts-ignore
} from '../../__mocks__/@auth0/auth0-spa-js';
import useOrganization from '../store/useOrganization';
import useRequestToken from '../store/useRequestToken';
import ErrorFallback from './components/ErrorFallback/ErrorFallback';
import {
  AuthenticationProvider,
  getAuth0Client,
  getTokenSilently,
  logoutAuth,
  onRedirectCallback,
  useAuthentication,
  defaultContextValues,
} from './context';

describe('Context', () => {
  beforeEach(() => {
    // clear all mocks and mocked values
    jest.clearAllMocks();
    mockedGetTokenSilently.mockReset();
    getUser.mockReset();
    loginWithRedirect.mockReset();
  });

  describe('global methods that used on both context and outside', () => {
    const oldWindowLocation = { ...window.location };

    beforeEach(() => {
      window.history.pushState({}, '', oldWindowLocation.pathname);
    });

    test('onRedirectCallback changes the url based on AppState passed', () => {
      const targetUrl = 'www.test.com';

      onRedirectCallback({ targetUrl });
      expect(window.location.pathname).toBe(`/${targetUrl}`);
    });

    test('onRedirectCallback changes url without AppState targetUrl', () => {
      onRedirectCallback({});
      expect(window.location.pathname).toBe(`/`);
    });

    test('logoutAuth clears out data', async () => {
      const { setToken } = useRequestToken.getState();
      const { setOrganizations, setSelectedOrganization } = useOrganization.getState();
      const testToken = 'testToken';
      const organizationList = [
        {
          org_id: 'testOrgId1',
          display_name: 'testOrgId1',
          name: 'testOrgId1',
          can_administrate: false,
          metadata: {
            type: 'testOrgId1',
            product_codes: 'testOrgId1',
          },
          branding: {
            logo_url: 'testOrgId1',
          },
        },
      ];

      // implement testing data
      setToken(testToken);
      setOrganizations(organizationList);
      setSelectedOrganization(organizationList[0]);
      await logoutAuth();

      const token = useRequestToken.getState().token;
      const { organizations, selectedOrganization } = useOrganization.getState();

      expect(token).toBe(undefined);
      expect(organizations).toStrictEqual([]);
      expect(selectedOrganization).toBe(undefined);
    });
  });

  describe('getTokenSilently', () => {
    test('without cached results', async () => {
      mockedGetTokenSilently.mockResolvedValue(FAKE_TOKEN);
      const { token, decodedToken } = await getTokenSilently();

      expect(token).toBe(FAKE_TOKEN);
      expect(decodedToken).toEqual(jwtDecode(token));
    });

    test('with cached results', async () => {
      const NEW_FAKE_EXPIRED_TOKEN = getNewFakeToken();
      const setToken = useRequestToken.getState().setToken;
      setToken(NEW_FAKE_EXPIRED_TOKEN);

      const { token, decodedToken } = await getTokenSilently();

      expect(token).toBe(NEW_FAKE_EXPIRED_TOKEN);
      expect(decodedToken).toEqual(jwtDecode(token));
      expect(decodedToken.org_id).toEqual(fakeTokenData.org_id); // the org_id of the token
    });

    test('that throws error and handles it outside exclusion of login_required', async () => {
      const errorThrown = new CustomError('error', 'error');
      mockedGetTokenSilently.mockRejectedValue(errorThrown);

      try {
        await getTokenSilently();
      } catch (e) {
        expect(e).toBe(errorThrown);
      }
    });
  });

  test('AuthenticationProvider contents', async () => {
    const TestingComponent = () => {
      const { user, isAuthenticated } = useAuthentication();

      return (
        <>
          <p>{user?.name}</p>
          <p data-testid="isAuthenticated">{isAuthenticated?.toString()}</p>
        </>
      );
    };

    isAuthenticated.mockResolvedValue(true);
    getUser.mockResolvedValue({
      name: 'John Doe',
    });

    const { findByText, getByTestId } = render(
      <AuthenticationProvider>
        <TestingComponent />
      </AuthenticationProvider>
    );

    await waitFor(() => expect(findByText('John Doe')).toBeTruthy());
    await waitFor(() => expect(getByTestId('isAuthenticated').innerHTML).toBe('true'));
  });

  describe('AuthenticationProvider calls loginWithPopup success/error', () => {
    const TestingComponent = () => {
      const { user, isAuthenticated, getAccessTokenSilently, isLoading } = useAuthentication();
      const [result, setResult] = useState('');
      const handleError = useErrorHandler();

      useEffect(() => {
        (async () => {
          if (!isLoading) {
            try {
              const res = await getAccessTokenSilently();

              if (res?.token) {
                setResult(res.token);
              }
            } catch (err: any) {
              handleError(err);
              throw err;
            }
          }
        })();
      }, [isLoading]);

      return (
        <>
          <p>{user?.name}</p>
          <p data-testid="isAuthenticated">{isAuthenticated?.toString()}</p>
          <p data-testid="result">{result}</p>
        </>
      );
    };

    test('loginWithPopup when access token fails', async () => {
      const errorMsg = 'login_required';

      mockedGetTokenSilently.mockRejectedValue(new CustomError(errorMsg, errorMsg));

      render(
        // @ts-ignore
        <ErrorBoundary
          FallbackComponent={({ error }) => <h1 data-testid="errorboundary">{error.message}</h1>}
        >
          <AuthenticationProvider>
            <TestingComponent />
          </AuthenticationProvider>
        </ErrorBoundary>
      );

      await waitFor(() => expect(mockedLoginWithPopup).toBeCalledTimes(1));

      await waitFor(() => expect(screen.getByTestId('errorboundary')).toBeVisible());
      await waitFor(() => expect(screen.getByTestId('errorboundary').innerHTML).toBe(errorMsg));
    }, 10000);

    test('loginWithPopup when access token fails and handle an error', async () => {
      const errorMsg = 'login_with_popup_failed';

      mockedGetTokenSilently.mockRejectedValue(new CustomError('login_required', 'login_required'));
      mockedLoginWithPopup.mockImplementation(() => {
        throw new Error(errorMsg);
      });

      render(
        // @ts-ignore
        <ErrorBoundary
          FallbackComponent={({ error }) => <h1 data-testid="errorboundary">{error.message}</h1>}
        >
          <AuthenticationProvider>
            <TestingComponent />
          </AuthenticationProvider>
        </ErrorBoundary>
      );

      await waitFor(() => expect(mockedLoginWithPopup).toBeCalledTimes(1));

      await waitFor(() => expect(screen.getByTestId('errorboundary')).toBeVisible());
      await waitFor(() => expect(screen.getByTestId('errorboundary').innerHTML).toBe(errorMsg));
    }, 10000);
  });

  test('invitation redirect', async () => {
    const invitation = 'wkhLzqInxdaXipRfBPyBtzcxs3wmoUDg';
    const organization = 'org_lWF9avilXAry9Aid';

    Object.defineProperty(window, 'location', {
      value: {
        search: `?invitation=${invitation}&organization=${organization}`,
      },
    });

    isAuthenticated.mockResolvedValue(false);

    await act(async () => {
      const TestingComponent = () => {
        const { user, isAuthenticated, isLoading } = useAuthentication();

        return (
          <>
            <p>{user?.name}</p>
            <p data-testid="isAuthenticated">{isAuthenticated?.toString()}</p>
            <p data-testid="isLoading">{isLoading?.toString()}</p>
          </>
        );
      };

      render(
        <AuthenticationProvider>
          <TestingComponent />
        </AuthenticationProvider>
      );
    });

    await waitFor(() => expect(screen.getByTestId('isLoading').innerHTML).toBe('false'));
    await waitFor(() => expect(loginWithRedirect).toBeCalledTimes(1));
    expect(loginWithRedirect).toBeCalledWith({ invitation, organization });
  });

  test('Context default functions', async () => {
    expect(await defaultContextValues.getAccessTokenSilently()).toEqual({
      token: '',
      decodedToken: {},
    });
    expect(await defaultContextValues.logout()).toBe('logged out');
    expect(await defaultContextValues.loginWithRedirect()).toBe(undefined);
  });

  test('getAuth0Client failed process', async () => {
    mockedCreateAuth0.mockImplementation(() => {
      throw new Error();
    });

    try {
      await getAuth0Client();
    } catch (e) {
      expect(e).toEqual(new Error(`getAuth0Client Error: Error`));
    }
  });
});
