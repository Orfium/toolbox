import { default as useOrganizationModule, Organization } from './store/useOrganization';

// eslint-disable-next-line react-hooks/rules-of-hooks
const useOrganization = () =>
  useOrganizationModule(({ organizations, selectedOrganization }) => ({
    organizations,
    selectedOrganization,
  }));

export * from './request';
export * from './routing';
export * from './authentication';
export type { Organization };
export { useOrganization };
