import { AuthorizationParams } from '@auth0/auth0-spa-js';
import { ReactNode, useCallback, useMemo } from 'react';
import { OrganizationsContext } from '../contexts/organizations';
import useOrganization, { Organization } from '../store/organizations';
import { getAuth0Client } from '../utils/auth';

export type SwitchOrganization = (orgID: Organization['org_id']) => void;

export type _SwitchOrganization = (
  orgID: Organization['org_id'],
  options?: {
    withLogout?: boolean;
    authorizationParams?: AuthorizationParams;
  }
) => void;

export function Organizations(props: { children: ReactNode }) {
  const { children } = props;

  const selectedOrganization = useOrganization((state) => state.selectedOrganization);
  const setSelectedOrganization = useOrganization((state) => state.setSelectedOrganization);
  const organizationsDict = useOrganization((state) => state.organizations);
  const organizationsList = useOrganization((state) => state.organizationsList);

  const organizations = useMemo(() => {
    if (organizationsDict && organizationsList) {
      return organizationsList.map((x) => organizationsDict[x]);
    }

    return [];
  }, [organizationsDict, organizationsList]);

  const switchOrganization: SwitchOrganization = useCallback(
    async function (orgID) {
      const client = await getAuth0Client();
      await client.logout({ openUrl: false });
      await client.loginWithRedirect({
        authorizationParams: {
          organization: orgID,
        },
      });
      setSelectedOrganization(orgID);
    },
    [setSelectedOrganization]
  );

  // This is a more configurable switchOrganization for internal use only.
  // It can be configured to not cause a logout.
  // It can also accept a custom AuthorizationParams config object, to use in loginWithRedirect()
  const _switchOrganization: _SwitchOrganization = useCallback(
    async function (orgID, options = { withLogout: false }) {
      const client = await getAuth0Client();

      if (options.withLogout) {
        await client.logout({ openUrl: false });
      }
      await client.loginWithRedirect({
        authorizationParams: {
          ...options.authorizationParams,
          organization: orgID,
        },
      });
      setSelectedOrganization(orgID);
    },
    [setSelectedOrganization]
  );

  return (
    <OrganizationsContext.Provider
      value={{
        organizations,
        selectedOrganization,
        switchOrganization,
        _switchOrganization,
      }}
    >
      {children}
    </OrganizationsContext.Provider>
  );
}