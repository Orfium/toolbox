import { Button, ThemeProvider } from '@orfium/ictinus';
import React, { useEffect, useState } from 'react';

import { orfiumBaseInstance } from '../request';
import useOrganization from '../store/useOrganization';
import { config } from './config';
import { AuthenticationProvider, useAuthentication } from './context';

/*
 * The component that uses the AuthenticationProvider.
 * All the logic is on the Authentication
 */
const Authentication: React.FunctionComponent = ({ children }) => {
  return (
    <AuthenticationProvider>
      <AuthenticationWrapper>{children}</AuthenticationWrapper>
    </AuthenticationProvider>
  );
};

/*
 * This is the main component that is wrapped on the authentication.
 */
const AuthenticationWrapper: React.FunctionComponent = ({ children }) => {
  const { isLoading, isAuthenticated, getAccessTokenSilently, logout } = useAuthentication();
  const { organizations, setOrganizations, setSelectedOrganization, selectedOrganization } =
    useOrganization();
  const [systemLoading, setSystemLoading] = useState(false);

  // @TODO all this should be inside toolbox wrapper
  useEffect(() => {
    if (!systemLoading) {
      setSystemLoading(true);
      (async () => {
        // @TODO in the future we must define the org_id
        const { token, decodedToken } = await getAccessTokenSilently();
        orfiumBaseInstance.setToken(`${token}`);
        const requestInstance = orfiumBaseInstance.createRequest({
          method: 'get',
          url: '/memberships/',
          params: config.productCode ? { product_code: config.productCode } : undefined,
        });
        const data = await requestInstance.request();

        setOrganizations(data);
        if (!selectedOrganization) {
          setSelectedOrganization(data[0]);
        }

        // if token with organization exists do not continue
        if (!decodedToken?.org_id) {
          if (data.length) {
            const { token: orgToken } = await getAccessTokenSilently({
              organization: data[0].org_id,
              ignoreCache: true,
            });

            orfiumBaseInstance.setToken(`Bearer ${orgToken}`);
          }
        }

        // set false at all times
        setSystemLoading(false);
      })();
    }
  }, [getAccessTokenSilently, selectedOrganization]);

  // we need to define `Allowed Callback URLs` and `Allowed Web Origins` on auth0
  // http://localhost:3000/
  // when loading is true before navigation this is not showing anymore
  if (systemLoading || isLoading || !isAuthenticated) {
    return <div data-testid={'auth-loading'}>Loading...</div>;
  }

  if (!selectedOrganization) {
    return (
      <ThemeProvider>
        <div
          data-testid={'no-org-id'}
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
