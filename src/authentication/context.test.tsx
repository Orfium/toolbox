import { cleanup, findByText, getByTestId, render, waitFor } from '@testing-library/react';
import jwtDecode from 'jwt-decode';
import React, { useEffect } from 'react';

import {
  FAKE_TOKEN,
  getUser,
  isAuthenticated,
  getTokenSilently as mockedGetTokenSilently,
  loginWithPopup as mockedLoginWithPopup,
  getNewFakeToken,
  fakeTokenData,
  // @ts-ignore
} from '../../__mocks__/@auth0/auth0-spa-js';
import useOrganization from '../store/useOrganization';
import useRequestToken from '../store/useRequestToken';
import {
  AuthenticationProvider,
  getAuth0Client,
  getTokenSilently,
  logoutAuth,
  onRedirectCallback,
  useAuthentication,
} from './context';

describe('Context', () => {
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

  test('AuthenticationProvider calls loginWithPopup when access token fails', async () => {
    const TestingComponent = () => {
      const { user, isAuthenticated, getAccessTokenSilently, isLoading } = useAuthentication();

      useEffect(() => {
        if (!isLoading) {
          getAccessTokenSilently();
        }
      }, [isLoading]);

      return (
        <>
          <p>{user?.name}</p>
          <p data-testid="isAuthenticated">{isAuthenticated?.toString()}</p>
        </>
      );
    };

    mockedGetTokenSilently.mockRejectedValue({ error: 'login_required' });
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
    await waitFor(() => expect(mockedLoginWithPopup).toBeCalledTimes(1));
  }, 10000);
});