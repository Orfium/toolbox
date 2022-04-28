import React from 'react';
import { ThemeProvider, TopNavBar } from '@orfium/ictinus';

const userMenuProps = {
  items: [],
  userName: 'John Cena',
  userAvatar: {
    src: 'https://www.sporf.com/wp-content/uploads/2022/03/713e2395-screenshot-2022-03-30-at-13.55.27-768x513-1.jpg',
    letter: 'JC'
  },
  onSelect: (a: string) => alert(a)
};

const TopNav = () => {

    return (
      <ThemeProvider>
        <TopNavBar onMenuIconClick={() => alert('open orfium drawer')} userMenu={userMenuProps}/>
      </ThemeProvider>
  );
};

export default TopNav;