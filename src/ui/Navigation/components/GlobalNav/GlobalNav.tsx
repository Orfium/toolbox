import { Icon, Tooltip, type Theme } from '@orfium/ictinus';
import { FunctionComponent, memo, type Dispatch, type SetStateAction } from 'react';
import { useLocation } from 'react-router-dom';
import { config } from '~/config';
import { type Product } from '~/contexts/orfium-products';
import AdminIcon from '../../../../assets/admin_icon.svg?react';
import BillingIcon from '../../../../assets/products/billing_icon.svg?react';
import MatchingIcon from '../../../../assets/products/matching_icon.svg?react';
import RCIcon from '../../../../assets/products/rights_cloud_con.svg?react';
import STIcon from '../../../../assets/products/sync_tracker_icon.svg?react';
import {
  AppIconNativeLink,
  AppIconRRLink,
  AppIconWrapper,
  BurgerButton,
  IconsContainer,
  SingleIconContainer,
  Wrapper,
} from './GlobalNav.styles';

const productIconsDict: Record<string, FunctionComponent> = {
  earnings: BillingIcon,
  'sync-tracker': STIcon,
  'rights-cloud': RCIcon,
  'matching-app': MatchingIcon,
};

type GlobalNavLinkProps = {
  theme: Theme;
  adminNavigationIsActive: boolean;
  adminNavigationURLSegment: string | undefined;
  adminButtonTooltipText: string | undefined;
};

function GlobalNavLink(props: GlobalNavLinkProps) {
  const { theme, adminNavigationURLSegment, adminNavigationIsActive, adminButtonTooltipText } =
    props;
  const { pathname, search, state } = useLocation<{
    previous: {
      pathname: string;
      search: string;
    };
  } | null>();

  return (
    // @ts-ignore @TODO migrate to abstract routing methodology
    <AppIconRRLink
      data-testid={'toolbox-admin-button'}
      theme={theme}
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
      <AdminIcon title={adminButtonTooltipText} />
    </AppIconRRLink>
  );
}

export type GlobalNavProps = {
  theme: Theme;
  isDesktop: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
  orfiumProducts: Product[] | null;
  enableAdminMode: boolean;
  adminNavigationIsActive: boolean;
  adminNavigationURLSegment?: string;
  adminButtonTooltipText?: string;
};

function GlobalNav(props: GlobalNavProps) {
  const {
    theme,
    setExpanded,
    orfiumProducts,
    adminNavigationIsActive,
    adminButtonTooltipText,
    enableAdminMode,
    adminNavigationURLSegment,
  } = props;

  return (
    <Wrapper theme={theme} data-testid={'global-navigation'}>
      <SingleIconContainer>
        {/*{isDesktop ? (*/}
        {/*  <Logo alt={'Orfium logo'} height={28} width={28} />*/}
        {/*) : (*/}
        <BurgerButton
          theme={theme}
          onClick={() => {
            setExpanded((state) => !state);
          }}
          data-testid={'menu-handler'}
        >
          <Icon color={'primary'} name={'menu'} size={24} />
        </BurgerButton>
        {/*)}*/}
      </SingleIconContainer>
      <IconsContainer theme={theme}>
        {orfiumProducts
          ? orfiumProducts.map((p) => {
              const isCurrentApp =
                !adminNavigationIsActive && p.client_metadata.product_code === config.productCode;
              const Icon: React.FunctionComponent<{ alt?: string }> =
                productIconsDict[p.client_metadata.product_code];

              if (!Icon) {
                console.warn('Unknown product code: ', p.client_metadata.product_code);

                return null;
              }

              // TODO: We could be using the provided `p.icon_url` and not have to keep our own
              //   dictionary of product codes and icons, but that would need changes on the CSP side
              //   of things, cause otherwise the resources get blocked

              return (
                <Tooltip key={p.client_id} content={p.name} placement={'right'}>
                  {/* App icon wrapper is needed to add extra distance between the icon and the tooltip */}
                  {/* since the tooltip cannot adjust its distance from the trigger element */}
                  <AppIconWrapper>
                    <AppIconNativeLink
                      data-testid={`${p.client_metadata.product_code}-app`}
                      href={p.login_url}
                      className={isCurrentApp ? 'active' : ''}
                    >
                      <Icon alt={p.name} />
                    </AppIconNativeLink>
                  </AppIconWrapper>
                </Tooltip>
              );
            })
          : null}
      </IconsContainer>
      {enableAdminMode ? (
        <SingleIconContainer>
          <Tooltip content={adminButtonTooltipText || ''} placement={'right'}>
            <AppIconWrapper>
              <GlobalNavLink
                theme={theme}
                adminNavigationIsActive={adminNavigationIsActive}
                adminNavigationURLSegment={adminNavigationURLSegment}
                adminButtonTooltipText={adminButtonTooltipText}
              />
            </AppIconWrapper>
          </Tooltip>
        </SingleIconContainer>
      ) : null}
    </Wrapper>
  );
}

export default memo(GlobalNav);
