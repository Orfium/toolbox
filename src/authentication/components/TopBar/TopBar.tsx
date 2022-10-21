import { TopNavBar, Menu } from '@orfium/ictinus';
import { TopAppBarProps } from '@orfium/ictinus/dist/components/TopAppBar/TopAppBar.types';
import React, { memo } from 'react';

import useOrganization from '../../../store/useOrganization';
import { useAuthentication } from '../../index';

export type TopBarProps = {
  logoIcon: JSX.Element;
  userMenu?: never;
} & Omit<TopAppBarProps, 'logoIcon' | 'userMenu'>;

/*
 * The component to represent all the information that is coming from the SSO
 * Based on Ictinus component
 */
export const TopBar: React.FC<TopBarProps> = memo(
  ({ logoIcon, onMenuIconClick, additionalTools }) => {
    const { user, logout } = useAuthentication();
    const { organizations, setSelectedOrganization, selectedOrganization } = useOrganization();

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
              onSelect={(option: string) => {
                const foundOrg = organizations.find((org) => org.display_name === option);
                if (foundOrg) {
                  setSelectedOrganization(foundOrg);
                }
              }}
              buttonText={selectedOrganization?.display_name}
              items={organizations.map((org) => org.display_name)}
            />
          </div>
        }
      />
    );
  }
);
TopBar.displayName = 'TopBar';
