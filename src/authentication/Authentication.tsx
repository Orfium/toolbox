import React, { useEffect, useState } from 'react';

import { orfiumBaseInstance } from '../request';
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
  const { isLoading, isAuthenticated, getAccessTokenSilently, user } = useAuthentication();
  const [systemLoading, setSystemLoading] = useState(true);

  // @TODO all this should be inside toolbox wrapper
  useEffect(() => {
    if (getAccessTokenSilently) {
      (async () => {
        // @TODO in the future we must define the org_id
        const { token, decodedToken } = await getAccessTokenSilently();
        // @TODO product code
        orfiumBaseInstance.setToken(`Bearer ${token}`);
        const requestInstance = orfiumBaseInstance.createRequest({
          method: 'get',
          url: '/memberships',
        });
        const data = await requestInstance.request();

        // if token with organization exists do not continue
        if (!decodedToken?.org_id) {
          // updateSelectedOrganizationId(data[0].org_id)
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          const { token: orgToken } = await getAccessTokenSilently({
            organization: data[0].org_id,
            ignoreCache: true,
          });
          // @TODO if no organization then show message
        }

        // set false at all times
        setSystemLoading(false);
      })();
    }
  }, [getAccessTokenSilently]);

  // we need to define `Allowed Callback URLs` and `Allowed Web Origins` on auth0
  // http://localhost:3000/
  // when loading is true before navigation this is not showing anymore
  if (systemLoading || isLoading || !isAuthenticated) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default Authentication;
