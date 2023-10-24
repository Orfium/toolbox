import { Icon, Tooltip, useBreakpoints } from '@orfium/ictinus';
import { useEffect, useState } from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';
import AdminIcon from '../../assets/admin_icon.svg';
import Logo from '../../assets/orfium_logo.svg';
import BillingIcon from '../../assets/products/billing_icon.svg';
import { useAuthentication } from '../../authentication';
import { config } from '../../authentication/config';
import Drawer from './components/Drawer';
import {
  AppIconNativeLink,
  AppIconRRLink,
  AppIconWrapper,
  BurgerButton,
  GlobalNav,
  IconsContainer,
  SingleIconContainer,
  Wrapper,
} from './Navigation.styles';
import { MenuItem } from './types';

const productIconsDict = {
  earnings: BillingIcon,
};

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

function Navigation(props: NavigationProps) {
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

  const breakpoints = useBreakpoints();
  const [expanded, setExpanded] = useState(() => {
    return breakpoints.des1200;
  });
  const { pathname, search, state } = useLocation<{
    previous: {
      pathname: string;
      search: string;
    };
  } | null>();
  const match = useRouteMatch(adminNavigationURLSegment);
  const { switchOrganization, organizations, selectedOrganization, orfiumProducts } =
    useAuthentication();

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
      <GlobalNav data-testid={'global-navigation'}>
        <SingleIconContainer>
          {isDesktop ? (
            <img alt={'Orfium logo'} src={Logo} height={28} width={28} />
          ) : (
            <BurgerButton
              onClick={() => {
                setExpanded((state) => !state);
              }}
              data-testid={'menu-handler'}
            >
              <Icon color={'primary'} name={'menu'} size={24} />
            </BurgerButton>
          )}
        </SingleIconContainer>
        <IconsContainer>
          {orfiumProducts
            ? orfiumProducts.map((p) => {
                const isCurrentApp = p.client_metadata.product_code === config.productCode;

                return (
                  <Tooltip key={p.client_id} content={p.name} placement={'right'}>
                    {/* App icon wrapper is needed to add extra distance between the icon and the tooltip */}
                    {/* since the tooltip cannot adjust its distance from the trigger element */}
                    <AppIconWrapper>
                      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                      {/* @ts-ignore */}
                      <AppIconNativeLink
                        href={p.login_url}
                        className={isCurrentApp ? 'active' : ''}
                      >
                        <img
                          alt={p.name}
                          src={productIconsDict[p.client_metadata.product_code]}
                          height={16}
                          width={16}
                        />
                      </AppIconNativeLink>
                    </AppIconWrapper>
                  </Tooltip>
                );
              })
            : null}
        </IconsContainer>
        {userIsAdmin ? (
          <SingleIconContainer>
            <Tooltip content={adminButtonTooltipText} placement={'right'}>
              <AppIconWrapper>
                <AppIconRRLink
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  to={
                    adminNavigationIsActive
                      ? {
                          pathname: state?.previous?.pathname || '/',
                          search: state?.previous?.search,
                        }
                      : {
                          pathname: adminNavigationURLSegment,
                          state: {
                            previous: {
                              pathname,
                              search,
                            },
                          },
                        }
                  }
                  isActive={() => {
                    return adminNavigationIsActive;
                  }}
                >
                  <img alt={adminButtonTooltipText} src={AdminIcon} height={16} width={16} />
                </AppIconRRLink>
              </AppIconWrapper>
            </Tooltip>
          </SingleIconContainer>
        ) : null}
      </GlobalNav>
      <Drawer
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

export default Navigation;
