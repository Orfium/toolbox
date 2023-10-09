import { Menu, TopNavBar } from '@orfium/ictinus';
import { TopAppBarProps } from '@orfium/ictinus/dist/components/TopAppBar/TopAppBar.types';
import React, { memo } from 'react';

import { Organization } from '../../../store/organizations';
import { useAuthentication } from '../../context';
import { User } from '../../types';

export type TopBarProps = {
  logoIcon: JSX.Element;
  userMenu?: never;
} & Omit<TopAppBarProps, 'logoIcon' | 'userMenu'>;

type InjectedProps = {
  user: User | undefined;
  logout: () => void;
  switchOrganization: (x: string) => void;
  organizations: Organization[];
  selectedOrganization: Organization | null;
};

/*
 * The component to represent all the information that is coming from the SSO
 * Based on Ictinus component
 */
export const TopBarWithInjectedProps: React.FC<TopBarProps & InjectedProps> = memo(
  ({
    logoIcon,
    onMenuIconClick,
    additionalTools,
    user,
    logout,
    switchOrganization,
    organizations,
    selectedOrganization,
  }) => {
    const userConfig = {
      items: ['Logout'],
      userName: `${user?.name}`,
      userAvatar: {
        src: `${user?.picture}`,
        letter: `${user?.given_name?.charAt(0)}${user?.family_name?.charAt(0)}`,
      },
      onSelect: () => {
        logout();
      },
    };

    return (
      <TopNavBar
        logoIcon={logoIcon}
        onMenuIconClick={onMenuIconClick}
        userMenu={userConfig}
        additionalTools={
          <div
            style={{
              justifyContent: 'flex-end',
              display: 'flex',
              flexGrow: 1,
              flex: 1,
            }}
          >
            {additionalTools}
            <Menu
              dataTestId={'organization-picker'}
              color={'lightGrey-50'}
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
          </div>
        }
      />
    );
  }
);
TopBarWithInjectedProps.displayName = 'TopBarWithInjectedProps';

export function TopBar({ logoIcon, onMenuIconClick, additionalTools }: TopBarProps) {
  const { user, logout, switchOrganization, organizations, selectedOrganization } =
    useAuthentication();

  return (
    <TopBarWithInjectedProps
      logoIcon={logoIcon}
      onMenuIconClick={onMenuIconClick}
      additionalTools={additionalTools}
      user={user}
      logout={logout}
      switchOrganization={switchOrganization}
      organizations={organizations}
      selectedOrganization={selectedOrganization}
    />
  );
}
