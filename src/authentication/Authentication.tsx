import React, { useEffect, useState } from 'react';

import { orfiumBaseInstance } from '../request';
import { AuthenticationProvider, useAuthentication } from './context';
import { config } from './config';
import { authStates, AuthStates } from './types';

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
  const { isLoading, isAuthenticated, loginWithRedirect, getAccessTokenSilently } =
    useAuthentication();
  const [state, setState] = useState<AuthStates>(authStates.ANONYMOUS);

  useEffect(() => {
    if (!isLoading && !isAuthenticated && loginWithRedirect) {
      setState(authStates.ANONYMOUS);
      loginWithRedirect();
    } else if (isLoading) {
      setState(authStates.AUTHENTICATING);
    } else {
      setState(authStates.AUTHENTICATED);
    }
  }, [isAuthenticated, isLoading]);

  // @TODO all this should be inside toolbox wrapper
  useEffect(() => {
    if (getAccessTokenSilently && state === authStates.AUTHENTICATED) {
      setState(authStates.AUTHORIZING);
      (async () => {
        // @TODO in the future we must define the org_id
        const { token, decodedToken } = await getAccessTokenSilently();

        orfiumBaseInstance.setToken(`Bearer ${token}`);
        const requestInstance = orfiumBaseInstance.createRequest({
          method: 'get',
          url: '/memberships/',
          params: Boolean(config.productCode) ? { product_code: config.productCode } : undefined,
        });
        const data = await requestInstance.request();

        console.log(data);
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

            setState(authStates.AUTHORIZED);
          } else {
            setState(authStates.UNAUTHORIZED);
          }
        }
      })();
    }
  }, [getAccessTokenSilently, state]);

  // we need to define `Allowed Callback URLs` and `Allowed Web Origins` on auth0
  // http://localhost:3000/
  // when loading is true before navigation this is not showing anymore
  if (state !== authStates.AUTHORIZED && state !== authStates.UNAUTHORIZED) {
    return <div>Loading...</div>;
  }

  if (state === authStates.UNAUTHORIZED) {
    return (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>You don't have access to this Product.</h1>
        <h3> Go back or contact your administrator for more information.</h3>
      </div>
    );
  }

  return <>{children}</>;
};

export default Authentication;
