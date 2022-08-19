import create from 'zustand';
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

type Store = {
  // list of organizations that fetched and stored
  organizations: Organization[];
  // the selected organization for the current session
  selectedOrganization: Organization | undefined;
  setOrganizations: (organizations: Organization[]) => void;
  setSelectedOrganization: (organizations: Organization) => void;
  reset: () => void;
};

const initialState = {
  organizations: [],
  selectedOrganization: undefined,
};
const useOrganization = create(
  persist<Store>(
    (set, __get) => ({
      ...initialState,
      setOrganizations: (organizations: Organization[]) => set(() => ({ organizations })),
      setSelectedOrganization: (organization: Organization) => {
        set({ selectedOrganization: organization });
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
