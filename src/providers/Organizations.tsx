import { ReactNode, useCallback, useMemo } from 'react';
import { OrganizationsContext } from '../contexts/organizations';
import useOrganization from '../store/organizations';
import { getAuth0Client } from '../utils/auth';

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

  const switchOrganization = useCallback(
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

  return (
    <OrganizationsContext.Provider
      value={{ organizations, selectedOrganization, switchOrganization }}
    >
      {children}
    </OrganizationsContext.Provider>
  );
}
