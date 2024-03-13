import { useContext } from 'react';
import { OrganizationsContext } from '../contexts/organizations';

export const useOrganizations = () => useContext(OrganizationsContext);
