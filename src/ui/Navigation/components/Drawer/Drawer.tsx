import { Icon, type Theme } from '@orfium/ictinus';
import { useMemo, type ReactNode } from 'react';
import { type SwitchOrganization } from '../../../../providers/Organizations';
import { type Organization } from '../../../../store/organizations';
import { MenuIcon, MenuItemText } from '../../common.styles';
import { type MenuItem } from '../../types';
import ClientSelector from '../ClientSelector';
import {
  DrawerContainer,
  ExtrasContainer,
  ExtrasSection,
  ExtrasSectionMenuItem,
  ExtrasSectionTitle,
  NavElementsContainer,
  NavHeader,
  OrgSwitcherWrapper,
} from './Drawer.styles';
import Navigation from './Navigation';

export type DrawerProps = {
  theme: Theme;
  expanded: boolean;
  menuItems: MenuItem[];
  hideOrgSwitcher?: boolean;
  switchOrganization: SwitchOrganization;
  organizations: Organization[];
  selectedOrganization: Organization | null;
  header: ReactNode;
  extras?: { title: string; menuItems: Omit<MenuItem, 'children'>[] }[];
  isDesktop: boolean;
};

function Drawer(props: DrawerProps) {
  const {
    theme,
    switchOrganization,
    organizations,
    selectedOrganization,
    hideOrgSwitcher = false,
    header,
    extras,
    isDesktop,
    expanded,
    menuItems,
  } = props;

  const extrasElement = useMemo(() => {
    return extras ? (
      <ExtrasContainer theme={theme}>
        {extras.map((section) => {
          return (
            <ExtrasSection theme={theme} key={section.title}>
              <ExtrasSectionTitle theme={theme}>{section.title}</ExtrasSectionTitle>
              {section.menuItems.map((item) => {
                return (
                  <ExtrasSectionMenuItem
                    theme={theme}
                    key={item.url}
                    href={item.url}
                    target={'_blank'}
                    rel={'noreferrer noopener'}
                  >
                    <MenuIcon theme={theme}>
                      <Icon color={'#0E0E17'} name={item.iconName} />
                    </MenuIcon>
                    <MenuItemText theme={theme}>{item.text}</MenuItemText>
                  </ExtrasSectionMenuItem>
                );
              })}
            </ExtrasSection>
          );
        })}
      </ExtrasContainer>
    ) : null;
  }, [extras, theme]);

  const mainContentElement = useMemo(() => {
    return (
      <NavElementsContainer theme={theme}>
        <NavHeader theme={theme}>{header}</NavHeader>
        <Navigation theme={theme} menuItems={menuItems} />
        {extrasElement}
      </NavElementsContainer>
    );
  }, [extrasElement, menuItems, header, theme]);

  const orgSwitcherElement = useMemo(() => {
    return (
      <OrgSwitcherWrapper>
        <ClientSelector
          tagText={''}
          dataTestId={'organization-picker'}
          onSelect={async (option: string) => {
            const foundOrg = organizations.find((org) => org.display_name === option);
            if (foundOrg) {
              switchOrganization(foundOrg.org_id);
            }
          }}
          buttonText={selectedOrganization?.display_name}
          items={organizations
            .filter((org) => org.display_name !== selectedOrganization?.display_name)
            .map((org) => org.display_name)}
        />
      </OrgSwitcherWrapper>
    );
  }, [organizations, selectedOrganization?.display_name, switchOrganization]);

  return (
    <DrawerContainer
      theme={theme}
      expanded={expanded}
      isDesktop={isDesktop}
      data-testid={'local-navigation'}
    >
      {hideOrgSwitcher ? null : orgSwitcherElement}
      {mainContentElement}
    </DrawerContainer>
  );
}

export default Drawer;
