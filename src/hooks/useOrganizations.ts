import { useContext } from 'react';
import { OrganizationsContext } from '../contexts/organizations';

export const _useOrganizations = () => useContext(OrganizationsContext);

export const useOrganizations = () => {
  const { _switchOrganization: __, ...rest } = useContext(OrganizationsContext);

  return rest;
};

export type UseOrganizationsReturnValue = ReturnType<typeof useOrganizations>;
