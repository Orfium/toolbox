import { createContext } from 'react';
import { type SwitchOrganization, type _SwitchOrganization } from '../providers/Organizations.js';
import { type Organization } from '../store/organizations.js';

export type OrganizationsContextValue = {
  organizations: Organization[];
  selectedOrganization: Organization | null;
  switchOrganization: SwitchOrganization;
  _switchOrganization: _SwitchOrganization;
};

export const defaultOrganizationsContextValues: OrganizationsContextValue = {
  organizations: [],
  selectedOrganization: null,
  switchOrganization: (__x) => {},
  _switchOrganization: (__x) => {},
};

export const OrganizationsContext = createContext<OrganizationsContextValue>(
  defaultOrganizationsContextValues
);
