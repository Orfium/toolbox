import { useBreakpoints, useTheme } from '@orfium/ictinus';
import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useOrfiumProducts } from '../../hooks/useOrfiumProducts.js';
import { useOrganizations } from '../../hooks/useOrganizations.js';
import Drawer from './components/Drawer/index.js';
import GlobalNav from './components/GlobalNav/index.js';
import { Wrapper } from './Navigation.styles.js';
import { type MenuItem } from './types.js';

export type NavigationProps = {
  header: string;
  menuItems: MenuItem[];
  enableAdminMode?: boolean;
  adminHeader?: string;
  adminMenuItems?: MenuItem[];
  adminNavigationURLSegment?: string;
  adminButtonTooltipText?: string;
  hideOrgSwitcher?: boolean;
  extras?: { title: string; menuItems: Omit<MenuItem, 'children'>[] }[];
};

const EMPTY_ADMIN_NAVIGATION: MenuItem[] = [];

export function Navigation(props: NavigationProps) {
  const {
    menuItems,
    adminMenuItems,
    adminNavigationURLSegment = '/admin',
    adminButtonTooltipText = 'Admin Settings',
    header,
    adminHeader,
    extras,
    hideOrgSwitcher = false,
    enableAdminMode = false,
  } = props;

  const theme = useTheme();
  const breakpoints = useBreakpoints();
  const [expanded, setExpanded] = useState(() => {
    return breakpoints.des1366;
  });

  const match = useRouteMatch(adminNavigationURLSegment);
  const orfiumProducts = useOrfiumProducts();
  const { switchOrganization, organizations, selectedOrganization } = useOrganizations();

  useEffect(() => {
    setExpanded(breakpoints.des1366);
  }, [breakpoints.des1366]);

  const isDesktop = breakpoints.des1366;
  const adminNavigationIsActive = match?.url === adminNavigationURLSegment && enableAdminMode;

  return (
    <Wrapper
      // onMouseEnter={() => !isDesktop && setExpanded(true)}
      onMouseLeave={() => !isDesktop && setExpanded(false)}
    >
      <GlobalNav
        theme={theme}
        isDesktop={isDesktop}
        enableAdminMode={enableAdminMode}
        adminNavigationIsActive={adminNavigationIsActive}
        adminNavigationURLSegment={adminNavigationURLSegment}
        setExpanded={setExpanded}
        orfiumProducts={orfiumProducts}
        adminButtonTooltipText={adminButtonTooltipText}
      />
      <Drawer
        theme={theme}
        menuItems={adminNavigationIsActive ? adminMenuItems || EMPTY_ADMIN_NAVIGATION : menuItems}
        expanded={expanded}
        switchOrganization={switchOrganization}
        organizations={organizations}
        selectedOrganization={selectedOrganization}
        hideOrgSwitcher={hideOrgSwitcher}
        header={adminNavigationIsActive ? adminHeader : header}
        extras={extras}
        isDesktop={isDesktop}
      />
    </Wrapper>
  );
}
