import useOrganization, { Organization } from './store/useOrganization';

export * from './request';
export * from './routing';
export * from './authentication';

export type { Organization };

export default {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useOrganization: useOrganization(({ organizations, selectedOrganization }) => ({
    organizations,
    selectedOrganization,
  })),
};
