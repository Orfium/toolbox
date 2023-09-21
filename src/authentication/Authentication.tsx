import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { Button, Loader, ThemeProvider } from '@orfium/ictinus';
import * as Sentry from '@sentry/browser';
import jwt_decode from 'jwt-decode';
import React, { useEffect } from 'react';
import { ErrorBoundary, useErrorHandler } from 'react-error-boundary';
import useOrganization, { Organization } from '../store/useOrganization';
import { APIProvider, useAPI } from './api-context';
import { Box, LoadingContent, Wrapper } from './Authentication.style';
import ErrorFallback from './components/ErrorFallback/ErrorFallback';
import { TopBar } from './components/TopBar/TopBar';
import { config } from './config';
import { AuthenticationProvider } from './context';

export type Props = {
  children: React.ReactNode;
};

export const onRedirectCallback = (appState: { targetUrl?: string }) => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl ? appState.targetUrl : window.location.pathname
  );
};

function Authentication(props: Props) {
  const { selectedOrganization } = useOrganization();

  return (
    <ThemeProvider>
      {/*
      // @ts-ignore @TODO when react type will go to 18 this will be fixed */}
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onError={(error) => {
          Sentry.captureException(error);
        }}
      >
        <Auth0Provider
          domain={config.domain || ''}
          clientId={config.clientId || ''}
          useRefreshTokens
          cacheLocation={'localstorage'}
          useRefreshTokensFallback
          authorizationParams={{
            audience: config.audience || 'orfium',
            redirect_uri: window.location.origin,
            organization: selectedOrganization?.org_id,
            onRedirectCallback,
          }}
        >
          <APIProvider>
            <AuthenticationProvider>
              <Auth0TopLevelSetup>{props.children}</Auth0TopLevelSetup>
            </AuthenticationProvider>
          </APIProvider>
        </Auth0Provider>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

Authentication.TopBar = TopBar;

function Auth0TopLevelSetup(props: Props) {
  const api = useAPI();
  const { organizations, setOrganizations, setSelectedOrganization, selectedOrganization } =
    useOrganization();
  const {
    isLoading,
    isAuthenticated,
    logout,
    getAccessTokenSilently,
    loginWithRedirect,
    handleRedirectCallback,
  } = useAuth0();
  const handleError = useErrorHandler();

  const params = new URLSearchParams(window.location.search);
  const organization = params.get('organization') || selectedOrganization?.org_id;
  const invitation = params.get('invitation');

  useEffect(() => {
    console.log('entered effect');

    (async () => {
      try {
        console.log('start try');
        if (window.location.search.includes('code=')) {
          const { appState } = await handleRedirectCallback();
          onRedirectCallback(appState);
        }
        if (window.location.search.includes('invitation=')) {
          loginWithRedirect({
            authorizationParams: {
              organization: organization || undefined,
              invitation: invitation || undefined,
            },
          });
        }
        console.log('end try');
      } catch (error: unknown) {
        console.log('start catch');
        if (error instanceof Error) {
          if (error.message === 'Invalid state') {
            console.log('YOLO2');

            loginWithRedirect({
              authorizationParams: {
                organization: organization || undefined,
                invitation: invitation || undefined,
              },
            });
          }
        }

        console.log('end catch');
        handleError(error);
      }
    })();
  }, [handleError, handleRedirectCallback, invitation, loginWithRedirect, organization]);

  useEffect(() => {
    if (!isLoading) {
      (async () => {
        try {
          console.log('try block');

          console.log('before');
          // moving this will affect the app. If this is moved below when clearing the storage the app constantly refresh
          const token = await getAccessTokenSilently({
            authorizationParams: {
              organization: selectedOrganization?.org_id,
            },
          });
          console.log('after');
          const decodedToken = jwt_decode<{ org_id: string }>(token);

          console.log({ decodedToken });

          // @TODO in the future we must define the org_id
          const organizations = api.createRequest<Organization[]>({
            method: 'get',
            url: '/memberships/',
            params: config.productCode ? { product_code: config.productCode } : undefined,
          });
          const data = await organizations.request();
          console.log(data);

          setOrganizations(data);

          // Store it in a temp var, because I am not sure if zustand sets synchronously
          let selectedOrg = selectedOrganization;

          if (!selectedOrg?.org_id && data?.length > 0) {
            selectedOrg = data[0];
            setSelectedOrganization(selectedOrg);
          }
          // if token doesn't have an organization and the user has available organizations
          // set continue and set one
          if (!decodedToken?.org_id && data?.length && selectedOrg) {
            // IMPORTANT - when we are using `useRefreshTokens` and `cacheLocation` on Auth0 we can fetch just a token with organization through `getTokenSilently`
            // we must use loginWithRedirect in that case thus this is happening here
            // https://auth0.com/docs/secure/tokens/refresh-tokens/use-refresh-token-rotation
            console.log('YOLO100');
            await loginWithRedirect({
              authorizationParams: {
                organization: selectedOrg.org_id,
              },
            });
          }
          console.log('end try block');
        } finally {
          console.log('finally block');
        }
      })();
    }
  }, [
    api,
    getAccessTokenSilently,
    isLoading,
    loginWithRedirect,
    selectedOrganization,
    setOrganizations,
    setSelectedOrganization,
  ]);

  useEffect(() => {
    console.log('start 3rd effect');
    const searchParams = new URL(window.location.href).searchParams;
    if (!isLoading && !isAuthenticated && isAuthenticated !== undefined) {
      const error = searchParams.get('error');

      if (error === 'access_denied') {
        const org = organizations[0];
        setSelectedOrganization(org);
        loginWithRedirect({
          authorizationParams: {
            organization: org?.org_id || undefined,
            invitation: invitation || undefined,
          },
        });
      } else {
        loginWithRedirect({
          authorizationParams: {
            organization: organization || undefined,
            invitation: invitation || undefined,
          },
        });
      }
    }
    console.log('end 3rd effect');
  }, [
    isLoading,
    isAuthenticated,
    organizations,
    setSelectedOrganization,
    loginWithRedirect,
    invitation,
    organization,
  ]);

  if (isLoading) {
    return (
      <Wrapper data-testid={'orfium-auth-loading'}>
        <LoadingContent>
          Loading... <Loader type={'spinner'} />
        </LoadingContent>
      </Wrapper>
    );
  }

  if (!isAuthenticated) {
    throw Error('Not authenticated');
  }

  if (organizations.length === 0) {
    return (
      <ThemeProvider>
        <Wrapper data-testid={'orfium-no-organizations'}>
          <h2>There are no organizations to pick.</h2>
          <div>Go back or contact your administrator for more information.</div>
          <Box>
            <div>OR</div>
          </Box>
          <Button onClick={logout} type={'primary'}>
            Logout
          </Button>
        </Wrapper>
      </ThemeProvider>
    );
  }

  if (!selectedOrganization) {
    return (
      <ThemeProvider>
        <Wrapper data-testid={'orfium-no-org-id'}>
          <h2>You dont have access to this Product.</h2>
          <div>Go back or contact your administrator for more information.</div>
          <Box>
            <div>OR</div>
          </Box>
          <Button onClick={logout} type={'primary'}>
            Logout
          </Button>
        </Wrapper>
      </ThemeProvider>
    );
  }

  return <>{props.children}</>;
}

export default Authentication;
