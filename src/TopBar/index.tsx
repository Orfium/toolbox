import { Button, TopNavBar, Menu } from '@orfium/ictinus';
import React, { useState, memo } from 'react';

import { useAuthentication } from '../authentication';
import useOrganization from '../store/useOrganization';

export const TopBar = memo(
  ({
    logoIcon,
    onMenuIconClick,
    additionalTools,
  }: {
    onMenuIconClick: () => void;
    logoIcon?: JSX.Element;
    additionalTools?: JSX.Element | JSX.Element[];
  }) => {
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
              color={'lightGrey-50'}
              onSelect={(option: string) => {
                const foundOrg = organizations.find((org) => org.name === option);
                if (foundOrg) {
                  setSelectedOrganization(foundOrg);
                }
              }}
              buttonText={selectedOrganization?.name}
              items={organizations.map((org) => org.name)}
            />
          </div>
        }
      />
    );
  }
);
TopBar.displayName = 'TopBar';

// export default TopBar;
