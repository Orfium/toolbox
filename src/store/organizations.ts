import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Organization = {
  org_id: string;
  display_name: string;
  name: string;
  can_administrate: boolean;
  metadata: {
    type: string;
    product_codes: string;
  };
  branding: {
    logo_url: string;
  };
};

export type OrganizationsStore = {
  // list of organizations that fetched and stored
  organizations: Record<string, Organization> | null;
  organizationsList: Organization['org_id'][] | null;
  // the selected organization for the current session
  selectedOrganization: Organization | null;
  setOrganizations: (organizations: Organization[]) => void;
  setSelectedOrganization: (orgID: Organization['org_id'] | undefined) => void;
  reset: () => void;
};

const initialState = {
  organizations: null,
  organizationsList: null,
  selectedOrganization: null,
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useOrganization = create(
  persist<OrganizationsStore>(
    (set, get) => ({
      ...initialState,
      setOrganizations: (organizations: Organization[]) =>
        set(() => {
          return organizations.reduce(
            (acc, org) => {
              acc.organizations[org.org_id] = org;
              acc.organizationsList.push(org.org_id);

              return acc;
            },
            { organizations: {}, organizationsList: [] } as {
              organizations: NonNullable<OrganizationsStore['organizations']>;
              organizationsList: NonNullable<OrganizationsStore['organizationsList']>;
            }
          );
        }),
      setSelectedOrganization: (organization: Organization['org_id'] | undefined) => {
        const orgs = get().organizations;
        if (organization === undefined) {
          set({ selectedOrganization: orgs[organization] });
        } else if (orgs === null) {
          set({ selectedOrganization: null });
        } else {
          set({ selectedOrganization: orgs[organization] });
        }
      },
      reset: () => {
        set({ ...initialState });
      },
    }),
    {
      name: 'selectedOrganization',
    }
  )
);

export default useOrganization;
