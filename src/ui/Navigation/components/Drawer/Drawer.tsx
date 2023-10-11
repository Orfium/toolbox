import { ReactNode } from 'react';
import { Organization } from '../../../../store/organizations';
import { MenuItem } from '../../types';
import ClientSelector from '../ClientSelector';
import {
  DrawerContainer,
  ExtrasContainer,
  NavElementsContainer,
  NavHeader,
  OrgSwitcherWrapper,
} from './Drawer.styles';
import Navigation from './Navigation/Navigation';

export type DrawerProps = {
  /** Defines if the drawer is expanded */
  expanded: boolean;
  /** Changes if the drawer is expanded */
  setExpanded: (v: boolean) => void;
  /** The menu items to be displayed in the drawer */
  menuItems: MenuItem[];
  hideOrgSwitcher?: boolean;
  switchOrganization: (organisation: string) => void;
  organizations: Organization[];
  selectedOrganization: Organization | null;
  navigationHeader: ReactNode;
  extras?: ReactNode;
  isDesktop: boolean;
};

function Drawer(props: DrawerProps) {
  const {
    switchOrganization,
    organizations,
    selectedOrganization,
    setExpanded,
    hideOrgSwitcher = false,
    navigationHeader,
    extras,
    isDesktop,
    ...rest
  } = props;

  return (
    <DrawerContainer
      expanded={props.expanded}
      isDesktop={isDesktop}
      data-testid={'local-navigation'}
    >
      {hideOrgSwitcher ? null : (
        <OrgSwitcherWrapper>
          <ClientSelector
            tagText={'Yolo'}
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
      )}

      <NavElementsContainer>
        <NavHeader>{navigationHeader}</NavHeader>
        <Navigation {...rest} />
        {extras ? <ExtrasContainer>{extras}</ExtrasContainer> : null}
      </NavElementsContainer>
    </DrawerContainer>
  );
}

export default Drawer;
