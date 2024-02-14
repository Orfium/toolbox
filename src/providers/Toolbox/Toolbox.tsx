import { Button, Loader } from '@orfium/ictinus';
import * as Sentry from '@sentry/browser';
import { ReactNode, useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { config } from '../../config';
import { useAuthentication, useOrganizations } from '../../hooks';
import { orfiumIdBaseInstance } from '../../request';
import useOrganization, { Organization } from '../../store/organizations';
import ErrorFallback from '../../ui/ErrorFallback/ErrorFallback';
import { Authentication } from '../Authentication';
import { OrfiumProducts } from '../OrfiumProducts';
import { Organizations } from '../Organizations';
import { TopBarUtilitySection } from '../TopBarUtilitySection';
import { Box, LoadingContent, Wrapper } from './Toolbox.style';

export type ToolboxProps = { children: ReactNode };

/*
 * The component that uses the AuthenticationProvider.
 * All the logic is on the Authentication
 */
export function Toolbox({ children }: ToolboxProps) {
  return (
    // @ts-ignore @TODO when react type will go to 18 this will be fixed
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error) => {
        Sentry.captureException(error);
      }}
    >
      <Organizations>
        <Authentication>
          <OrfiumProducts>
            <TopBarUtilitySection>
              <AuthenticationWrapper>{children}</AuthenticationWrapper>
            </TopBarUtilitySection>
          </OrfiumProducts>
        </Authentication>
      </Organizations>
    </ErrorBoundary>
  );
}

/*
 * This is the main component that is wrapped in the authentication.
 */
function AuthenticationWrapper({ children }: { children: ReactNode }) {
  const { isLoading, isAuthenticated, getAccessTokenSilently, logout, loginWithRedirect } =
    useAuthentication();
  const { organizations, selectedOrganization } = useOrganizations();
  const { setOrganizations, setSelectedOrganization } = useOrganization();
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
        const response = await getAccessTokenSilently();
        // @TODO in the future we must define the org_id
        const requestInstance = orfiumIdBaseInstance.createRequest<Organization[]>({
          method: 'get',
          url: '/memberships/',
          params: config.productCode ? { product_code: config.productCode } : undefined,
        });
        const data = await requestInstance.request();

        setOrganizations(data);
        if (!selectedOrganization?.org_id && data?.length > 0) {
          setSelectedOrganization(data[0].org_id);
        }
        // if token doesn't have an organization and the user has available organizations
        // set continue and set one
        if (!response?.decodedToken?.org_id && data?.length) {
          // IMPORTANT - when we are using `useRefreshTokens` and `cacheLocation` on Auth0 we can fetch just a token with organization through `getTokenSilently`
          // we must use loginWithRedirect in that case thus this is happening here
          // https://auth0.com/docs/secure/tokens/refresh-tokens/use-refresh-token-rotation
          await loginWithRedirect({
            authorizationParams: {
              organization: selectedOrganization?.org_id || data[0].org_id,
            },
          });
        } else {
          // set false at all times
          setSystemLoading(false);
        }
      })();
    }
    // @NOTE selectedOrganization?.org_id, isLoading, systemLoading
    // are missing on purpose from the deps as these are being updated from places where the organization id is being handled with refresh from auth0
  }, [getAccessTokenSilently, loginWithRedirect, setOrganizations, setSelectedOrganization]);

  // when loading is true before navigation this is not showing anymore
  if (systemLoading === undefined || systemLoading || isLoading || !isAuthenticated) {
    return (
      <Wrapper data-testid={'orfium-auth-loading'}>
        <LoadingContent>
          Loading... <Loader type={'spinner'} />
        </LoadingContent>
      </Wrapper>
    );
  }

  if (organizations.length === 0) {
    return (
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
    );
  }

  if (!selectedOrganization) {
    return (
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
    );
  }

  return <>{children}</>;
}
