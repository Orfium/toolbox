import { ThemeProvider, Button, TopNavBar } from '@orfium/ictinus';
import React from 'react';

const TopBar = () => {
  return (
    <ThemeProvider>
      <TopNavBar
        dark={false}
        logoIcon={<div />}
        onMenuIconClick={() => {}}
        userMenu={{
          items: ['test', 't'],
          userAvatar: { letter: 'panos', src: '' },
          userName: 'panos',
          onSelect: () => {},
        }}
        additionalTools={<></>}
        onSearchHandler={() => {}}
      />
    </ThemeProvider>
  );
};

export default TopBar;
