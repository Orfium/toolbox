import { cleanup, findByText, getByTestId, render, waitFor } from '@testing-library/react';
import jwtDecode from 'jwt-decode';
import React from 'react';

// @ts-ignore
import { FAKE_TOKEN, getUser, isAuthenticated } from '../../__mocks__/@auth0/auth0-spa-js';
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
      const { token, decodedToken } = await getTokenSilently();

      expect(token).toBe(FAKE_TOKEN);
      expect(decodedToken).toEqual(jwtDecode(token));
    });

    test('with cached results', async () => {
      const NEW_FAKE_EXPIRED_TOKEN =
        'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im9GR1BkeG56dVVNUXAyQkNWVjR3QSJ9.eyJodHRwczovL3Nzby5vcmZpdW0uY29tL3JvbGVzIjpbIm5iY3U6YmFzZSJdLCJpc3MiOiJodHRwczovL3Nzby5zdGFnaW5nLm9yZml1bS54eXovIiwic3ViIjoiYXV0aDB8NjJkYThlYWE1ODZkOGNkNjdkMTc0NmI2IiwiYXVkIjpbIm9yZml1bSIsImh0dHBzOi8vb3JmaXVtLXN0YWdpbmcudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY1OTQyNTYxNiwiZXhwIjoxNjU5NDMyODE2LCJhenAiOiIxZVdhRmhRSnBIUzN4TURRUndyWkphaTNrSXJGMDRlSSIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwgb2ZmbGluZV9hY2Nlc3MiLCJvcmdfaWQiOiJvcmdfV1laTEVNeVRtMnhFYm5ibiIsInBlcm1pc3Npb25zIjpbIm1lZGlhLWVuZ2FnZW1lbnQtdHJhY2tlcjp1c2VyIl19.cddI6DJ2rR6sdVfwWOJSfaf-bjmd6LMAKTwv8PGNfiRuRAX1UQIme7XUFfAO-j6fIt3h2Uo43mmuf7F73cANVZL8b8FvQRewxGH5cZ8uEj7_Y_u-b02Fl2GbNcXtiYkOqEAUXJKRCbLFUPnRbp-9Ee-FxSHp0RXDYVLxgvk8cJNmAxFpSt4d8eDmBIxGbyggUE6GadGuIXc0pv1cSD8VhRetxlLHYArTpWhKivTNe9n-C97R3bkkX-VU04ksrEbAgPQKy9l0E8O7ebB6_66X64edrxKagN3d10u_Ij88vEa4e6QRRE8AesSk3HcG-Wdu70b2TQSRgpbg2hAt91_-Lg';
      const setToken = useRequestToken.getState().setToken;
      setToken(NEW_FAKE_EXPIRED_TOKEN);

      const { token, decodedToken } = await getTokenSilently();

      expect(token).toBe(NEW_FAKE_EXPIRED_TOKEN);
      expect(decodedToken).toEqual(jwtDecode(token));
      expect(decodedToken.org_id).toEqual('org_WYZLEMyTm2xEbnbn'); // the org_id of the token
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
});
