import { Button, ThemeProvider } from '@orfium/ictinus';
import React, { useEffect, useState } from 'react';

import { orfiumIdBaseInstance } from '../request';
import useOrganization from '../store/useOrganization';
import useRequestToken from '../store/useRequestToken';
import { config } from './config';
import { AuthenticationProvider, useAuthentication } from './context';
import { TopBar, TopBarProps } from './TopBar';

type AuthenticationSubComponents = {
  TopBar: React.FC<TopBarProps>;
};

/*
 * The component that uses the AuthenticationProvider.
 * All the logic is on the Authentication
 */
const Authentication: React.FC & AuthenticationSubComponents = ({ children }) => {
  return (
    <AuthenticationProvider>
      <AuthenticationWrapper>{children}</AuthenticationWrapper>
    </AuthenticationProvider>
  );
};
Authentication.TopBar = TopBar;

/*
 * This is the main component that is wrapped on the authentication.
 */
const AuthenticationWrapper: React.FunctionComponent = ({ children }) => {
  const { isLoading, isAuthenticated, getAccessTokenSilently, logout, loginWithRedirect } =
    useAuthentication();
  const { organizations, setOrganizations, setSelectedOrganization, selectedOrganization } =
    useOrganization();
  const [systemLoading, setSystemLoading] = useState<boolean | undefined>(undefined);

  /**
   * On initial load the useEffect checks if there are no loading at all and if both are false will try to get a valid token with organization
   * Our steps before showing any content must be as follows
   * - get the latest organizations for the specified productCode e.g. media-engagement-tracker
   * - get a token and check if this token has no org_id in it.
   * - in case of no organization id pass the first fetched organization from the above list and re-fetch a token
   */
  useEffect(() => {
    if (!systemLoading && !isLoading) {
      setSystemLoading(true);
      (async () => {
        // moving this will affect the app. If this is moved below when clearing the storage the app constantly refresh
        const { decodedToken } = await getAccessTokenSilently();
        // @TODO in the future we must define the org_id
        const requestInstance = orfiumIdBaseInstance.createRequest({
          method: 'get',
          url: '/memberships/',
          params: config.productCode ? { product_code: config.productCode } : undefined,
        });
        const data = await requestInstance.request();

        setOrganizations(data);
        if (!selectedOrganization?.org_id && data?.length > 0) {
          setSelectedOrganization(data[0]);
        }

        // if token doesn't have an organization set continue and set one
        if (!decodedToken?.org_id) {
          if (data?.length) {
            // IMPORTANT - when we are using `useRefreshTokens` and `cacheLocation` on Auth0 we can fetch just a token with organization through `getTokenSilently`
            // we must use loginWithRedirect in that case thus this is happening here
            // https://auth0.com/docs/secure/tokens/refresh-tokens/use-refresh-token-rotation
            await loginWithRedirect({
              organization: selectedOrganization?.org_id || data[0].org_id,
            });
          }
        } else {
          // set false at all times
          setSystemLoading(false);
        }
      })();
    }
  }, [getAccessTokenSilently, selectedOrganization?.org_id]);

  // when loading is true before navigation this is not showing anymore
  if (systemLoading === undefined || systemLoading || isLoading || !isAuthenticated) {
    return <div data-testid={'orfium-auth-loading'}>Loading...</div>;
  }

  if (!selectedOrganization) {
    return (
      <ThemeProvider>
        <div
          data-testid={'orfium-no-org-id'}
          style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h1>You dont have access to this Product.</h1>
          <h3>Go back or contact your administrator for more information.</h3>
          <h4>or</h4>
          <Button onClick={logout} type={'primary'}>
            logout
          </Button>
        </div>
      </ThemeProvider>
    );
  }

  return <>{children}</>;
};

export default Authentication;
