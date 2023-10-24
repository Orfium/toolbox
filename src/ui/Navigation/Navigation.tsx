import { useBreakpoints, useTheme } from '@orfium/ictinus';
import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useOrfiumProducts, useOrganizations } from '../../authentication';
import Drawer from './components/Drawer';
import GlobalNav from './components/GlobalNav';
import { Wrapper } from './Navigation.styles';
import { MenuItem } from './types';

export type NavigationProps = {
  regularNavigation: MenuItem[];
  navigationHeader: string;
  userIsAdmin?: boolean;
  hideOrgSwitcher?: boolean;
  adminNavigation?: MenuItem[];
  adminNavigationHeader?: string;
  adminNavigationURLSegment?: string;
  adminButtonTooltipText?: string;
  extras?: { title: string; menuItems: Omit<MenuItem, 'children'>[] }[];
};

const EMPTY_ADMIN_NAVIGATION: MenuItem[] = [];

export function Navigation(props: NavigationProps) {
  const {
    regularNavigation,
    adminNavigation,
    adminNavigationURLSegment = '/admin',
    adminButtonTooltipText = 'Admin Settings',
    navigationHeader,
    adminNavigationHeader,
    extras,
    hideOrgSwitcher = false,
    userIsAdmin = false,
  } = props;

  const theme = useTheme();
  const breakpoints = useBreakpoints();
  const [expanded, setExpanded] = useState(() => {
    return breakpoints.des1200;
  });

  const match = useRouteMatch(adminNavigationURLSegment);
  const orfiumProducts = useOrfiumProducts();
  const { switchOrganization, organizations, selectedOrganization } = useOrganizations();

  useEffect(() => {
    setExpanded(breakpoints.des1200);
  }, [breakpoints.des1200]);

  const isDesktop = breakpoints.des1200;
  const adminNavigationIsActive = match?.url === adminNavigationURLSegment && userIsAdmin;

  return (
    <Wrapper
      // onMouseEnter={() => !isDesktop && setExpanded(true)}
      onMouseLeave={() => !isDesktop && setExpanded(false)}
    >
      <GlobalNav
        theme={theme}
        isDesktop={isDesktop}
        userIsAdmin={userIsAdmin}
        adminNavigationIsActive={adminNavigationIsActive}
        adminNavigationURLSegment={adminNavigationURLSegment}
        setExpanded={setExpanded}
        orfiumProducts={orfiumProducts}
        adminButtonTooltipText={adminButtonTooltipText}
      />
      <Drawer
        theme={theme}
        menuItems={
          adminNavigationIsActive ? adminNavigation || EMPTY_ADMIN_NAVIGATION : regularNavigation
        }
        expanded={expanded}
        switchOrganization={switchOrganization}
        organizations={organizations}
        selectedOrganization={selectedOrganization}
        hideOrgSwitcher={hideOrgSwitcher}
        navigationHeader={adminNavigationIsActive ? adminNavigationHeader : navigationHeader}
        extras={extras}
        isDesktop={isDesktop}
      />
    </Wrapper>
  );
}
