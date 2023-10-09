import { default as useOrganizationModule, Organization } from './store/organizations';

/*
 * Eliminate any other information from the useOrganization zustand state coming out
 * The only information needed to export is `read` data
 */
// eslint-disable-next-line react-hooks/rules-of-hooks
const useOrganization = () =>
  useOrganizationModule(({ organizations, selectedOrganization }) => ({
    organizations,
    selectedOrganization,
  }));

export * from './authentication';
export * from './request';
export * from './routing';
export type { Organization };
export { useOrganization };
