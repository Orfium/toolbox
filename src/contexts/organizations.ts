import { createContext } from 'react';
import { Organization } from '../store/organizations';

export type OrganizationsContextValue = {
  organizations: Organization[];
  selectedOrganization: Organization | null;
  switchOrganization: (organisation: Organization['org_id']) => void;
};

export const defaultOrganizationsContextValues: OrganizationsContextValue = {
  organizations: [],
  selectedOrganization: null,
  switchOrganization: (__x) => {},
};

export const OrganizationsContext = createContext<OrganizationsContextValue>(
  defaultOrganizationsContextValues
);
