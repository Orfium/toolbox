import { act, render, screen, waitFor } from '@testing-library/react';
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';

// Auth0 custom error simulator. This extends a regular Error to match Auth0 Error.
class CustomError extends Error {
  constructor(public error: string, public error_description: string) {
    super(error_description);
    this.error = error;
    this.error_description = error_description;
  }
}

import { ErrorBoundary, useErrorHandler } from 'react-error-boundary';

import { Auth0Client } from '@auth0/auth0-spa-js';
import { mocked } from 'ts-jest/utils';
import { FAKE_TOKEN, fakeTokenData, getNewFakeToken } from '__mocks__/@auth0/auth0-spa-js';
import { defaultAuthenticationContextValues } from '~/contexts/authentication';
import { useAuthentication } from '~/hooks';
import { Authentication } from '~/providers/Authentication';
import { Organizations } from '~/providers/Organizations';
import MockRequest from '~/request/mock';
import { orfiumIdBaseInstance } from '~/request';
import useOrganization from '~/store/organizations';
import useRequestToken from '~/store/requestToken';
import { getTokenSilently, logoutAuth, onRedirectCallback } from '~/utils/auth';
const clientMock = mocked(new Auth0Client({ clientId: '', domain: '' }));

const TestingComponentSimple = () => {
  const { user, isAuthenticated, isLoading } = useAuthentication();

  return (
    <>
      <p>{user?.name}</p>
      <p data-testid="isAuthenticated">{isAuthenticated?.toString()}</p>
      <p data-testid="isLoading">{isLoading?.toString()}</p>
    </>
  );
};

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
        } catch (err) {
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

describe('Context', () => {
  const apiInstance = orfiumIdBaseInstance.instance;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const mock: MockRequest = new MockRequest(apiInstance);
  // let client;

  beforeEach(() => {
    jest.resetModules();
    // client = undefined;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
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
    clientMock.getTokenSilently.mockReset();
  });

  afterEach(() => {
    // clear all mocks and mocked values
    jest.clearAllMocks();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    mock.reset();
    clientMock.getTokenSilently.mockReset();
    clientMock.getUser.mockReset();
    clientMock.loginWithRedirect.mockReset();
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

    test('handleRedirectCallback being called if code exists on url', async () => {
      window.history.pushState({}, '', '?code=test');

      const mockedHandleRedirectCallback = clientMock.handleRedirectCallback;

      render(
        <Authentication>
          <></>
        </Authentication>
      );

      await waitFor(() => expect(mockedHandleRedirectCallback).toBeCalledTimes(1), {
        timeout: 1000,
      });
    });

    test('handleRedirectCallback that triggers invalid state error', async () => {
      window.history.pushState({}, '', '?code=test');

      const mockedHandleRedirectCallback = clientMock.handleRedirectCallback;
      mockedHandleRedirectCallback.mockRejectedValue(new Error('Invalid state'));

      render(
        // @ts-ignore
        <ErrorBoundary
          FallbackComponent={({ error }) => <h1 data-testid="errorboundary">{error.message}</h1>}
        >
          <Authentication>
            <TestingComponent />
          </Authentication>
        </ErrorBoundary>
      );

      await waitFor(() => expect(mockedHandleRedirectCallback).toBeCalledTimes(1));
      await waitFor(() => expect(clientMock.loginWithRedirect).toBeCalledTimes(1));
    });

    test('handleRedirectCallback that triggers error', async () => {
      window.history.pushState({}, '', '?code=test');
      const errorMsg = 'Invalid';

      const mockedHandleRedirectCallback = clientMock.handleRedirectCallback;
      mockedHandleRedirectCallback.mockRejectedValue(new Error(errorMsg));

      render(
        // @ts-ignore
        <ErrorBoundary
          FallbackComponent={({ error }) => <h1 data-testid="errorboundary">{error.message}</h1>}
        >
          <Authentication>
            <TestingComponent />
          </Authentication>
        </ErrorBoundary>
      );

      await waitFor(() => expect(mockedHandleRedirectCallback).toBeCalledTimes(1));
      await waitFor(() => expect(screen.getByTestId('errorboundary')).toBeVisible());
      await waitFor(() => expect(screen.getByTestId('errorboundary').innerHTML).toBe(errorMsg));
    }, 10000);

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
      setSelectedOrganization(organizationList[0].org_id);
      await logoutAuth();

      const token = useRequestToken.getState().token;
      const { organizations, organizationsList, selectedOrganization } = useOrganization.getState();

      expect(token).toBe(undefined);
      expect(organizations).toStrictEqual(null);
      expect(organizationsList).toStrictEqual(null);
      expect(selectedOrganization).toBe(null);
    });
  });

  describe('getTokenSilently', () => {
    test('without cached results', async () => {
      clientMock.getTokenSilently.mockResolvedValue(FAKE_TOKEN);
      const { token, decodedToken } = await getTokenSilently();

      expect(token).toBe(FAKE_TOKEN);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      expect(decodedToken).toEqual(jwtDecode(token));
    });

    test('with cached results', async () => {
      const NEW_FAKE_EXPIRED_TOKEN = getNewFakeToken();
      const setToken = useRequestToken.getState().setToken;
      const setOrganizations = useOrganization.getState().setOrganizations;
      const setSelectedOrganization = useOrganization.getState().setSelectedOrganization;
      setToken(NEW_FAKE_EXPIRED_TOKEN);
      setOrganizations([
        {
          org_id: 'org_WYZLEMyTm2xEbnbn',
          display_name: 'test',
          name: 'test',
          can_administrate: true,
          metadata: {
            type: 'test',
            product_codes: 'test',
          },
          branding: {
            logo_url: 'test',
          },
        },
      ]);
      setSelectedOrganization('org_WYZLEMyTm2xEbnbn');

      const { token, decodedToken } = await getTokenSilently();

      expect(token).toBe(NEW_FAKE_EXPIRED_TOKEN);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      expect(decodedToken).toEqual(jwtDecode(token));
      expect(decodedToken.org_id).toEqual(fakeTokenData.org_id); // the org_id of the token
    });

    test('that throws error and handles it outside exclusion of login_required', async () => {
      const errorThrown = new CustomError('error', 'error');
      clientMock.getTokenSilently.mockRejectedValue(errorThrown);

      try {
        await getTokenSilently();
      } catch (e) {
        expect(e).toBe(errorThrown);
      }
    });
  });

  test('Authentication contents', async () => {
    clientMock.getTokenSilently.mockResolvedValue(FAKE_TOKEN);
    clientMock.isAuthenticated.mockResolvedValue(true);
    clientMock.getUser.mockResolvedValue({
      name: 'John Doe',
      updated_at: new Date().toDateString(),
    });

    const { findByText, getByTestId } = render(
      <Authentication>
        <TestingComponentSimple />
      </Authentication>
    );

    await waitFor(() => expect(findByText('John Doe')).toBeTruthy());
    await waitFor(() => expect(getByTestId('isAuthenticated').innerHTML).toBe('true'));
  });

  describe('Authentication calls loginWithRedirect success/error', () => {
    test('loginWithRedirect when access token fails', async () => {
      const errorMsg = 'login_required';

      clientMock.getTokenSilently.mockRejectedValue(new CustomError(errorMsg, errorMsg));

      render(
        // @ts-ignore
        <ErrorBoundary
          FallbackComponent={({ error }) => <h1 data-testid="errorboundary">{error.message}</h1>}
        >
          <Authentication>
            <TestingComponent />
          </Authentication>
        </ErrorBoundary>
      );

      await waitFor(() => expect(clientMock.logout).toBeCalledTimes(1));
    });

    test('loginWithRedirect when access token fails and handle an error', async () => {
      const errorMsg = 'login_with_popup_failed';

      clientMock.getTokenSilently.mockRejectedValue(
        new CustomError('login_required', 'login_required')
      );
      clientMock.loginWithRedirect.mockImplementation(() => {
        throw new Error(errorMsg);
      });

      render(
        // @ts-ignore
        <ErrorBoundary
          FallbackComponent={({ error }) => <h1 data-testid="errorboundary">{error.message}</h1>}
        >
          <Authentication>
            <TestingComponent />
          </Authentication>
        </ErrorBoundary>
      );

      await waitFor(() => expect(clientMock.loginWithRedirect).toBeCalledTimes(1));

      await waitFor(() => expect(screen.getByTestId('errorboundary')).toBeVisible());
      await waitFor(() => expect(screen.getByTestId('errorboundary').innerHTML).toBe(errorMsg));
    }, 10000);
  });

  test('invitation redirect', async () => {
    const invitation = 'wkhLzqInxdaXipRfBPyBtzcxs3wmoUDg';
    const organization = 'org_lWF9avilXAry9Aid';

    Object.defineProperty(window, 'location', {
      value: new URL(
        `http://localhost:3000/?invitation=${invitation}&organization=${organization}`
      ),
      writable: true,
    });

    clientMock.isAuthenticated.mockResolvedValue(false);

    await act(async () => {
      render(
        <Authentication>
          <TestingComponentSimple />
        </Authentication>
      );
    });

    await waitFor(() => expect(clientMock.loginWithRedirect).toBeCalledTimes(1));
    expect(clientMock.loginWithRedirect).toBeCalledWith({
      authorizationParams: {
        invitation,
        organization,
      },
    });
  });

  test('if error exists on the url with access_denied', async () => {
    const { setOrganizations, setSelectedOrganization, selectedOrganization } =
      useOrganization.getState();
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
      {
        org_id: 'testOrgId2',
        display_name: 'testOrgId2',
        name: 'testOrgId2',
        can_administrate: false,
        metadata: {
          type: 'testOrgId2',
          product_codes: 'testOrgId2',
        },
        branding: {
          logo_url: 'testOrgId2',
        },
      },
    ];

    // implement testing data
    setOrganizations(organizationList);
    setSelectedOrganization(organizationList[1].org_id);
    Object.defineProperty(window, 'location', {
      value: new URL(`http://localhost:3000/?error=access_denied&error_description=whatever`),
      writable: true,
    });

    clientMock.isAuthenticated.mockResolvedValue(false);

    render(
      <Organizations>
        <Authentication>
          <TestingComponentSimple />
        </Authentication>
      </Organizations>
    );

    await waitFor(() => expect(screen.getByTestId('isLoading').innerHTML).toBe('true'));
    await waitFor(() => expect(clientMock.logout).toBeCalledTimes(1));
  }, 10000);

  test('Context default functions', async () => {
    expect(await defaultAuthenticationContextValues.getAccessTokenSilently()).toEqual({
      token: '',
      decodedToken: {},
    });
    expect(await defaultAuthenticationContextValues.logout()).toBe('logged out');
    expect(await defaultAuthenticationContextValues.loginWithRedirect()).toBe(undefined);
  });
});
