import React, { useEffect, useState } from 'react';

import { orfiumBaseInstance } from '../request';
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
  const { isLoading, isAuthenticated, getAccessTokenSilently } = useAuthentication();
  const [systemLoading, setSystemLoading] = useState(false);
  const [hasOrg, setHasOrg] = useState(false);

  // @TODO all this should be inside toolbox wrapper
  useEffect(() => {
    if (getAccessTokenSilently && !systemLoading) {
      setSystemLoading(true);
      const getTokenWithOrg = async () => {
        // @TODO in the future we must define the org_id
        const { token, decodedToken } = await getAccessTokenSilently();

        orfiumBaseInstance.setToken(`Bearer ${token}`);
        const requestInstance = orfiumBaseInstance.createRequest({
          method: 'get',
          url: '/memberships/',
          params: config.productCode ? { productCode: config.productCode } : undefined,
        });
        const data = await requestInstance.request();
        // if token with organization exists do not continue
        if (!decodedToken?.org_id) {
          if (data.length) {
            // updateSelectedOrganizationId(data[0].org_id)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const { token: orgToken } = await getAccessTokenSilently({
              organization: data[0].org_id,
              ignoreCache: true,
            });

            orfiumBaseInstance.setToken(`Bearer ${orgToken}`);
            setHasOrg(true);
          } else {
            setHasOrg(false);
          }
        }

        // set false at all times
        setSystemLoading(false);
      };

      getTokenWithOrg().catch(() => {});
    }
  }, [getAccessTokenSilently]);

  // we need to define `Allowed Callback URLs` and `Allowed Web Origins` on auth0
  // http://localhost:3000/
  // when loading is true before navigation this is not showing anymore
  if (systemLoading || isLoading || !isAuthenticated) {
    return <div data-testid={'auth-loading'}>Loading...</div>;
  }

  if (!hasOrg) {
    return (
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
        <h3> Go back or contact your administrator for more information.</h3>
      </div>
    );
  }

  return <>{children}</>;
};

export default Authentication;
