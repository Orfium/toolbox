import { useTheme } from '@orfium/ictinus';
import { useCallback, useEffect, useState } from 'react';
import { matchPath, useLocation } from 'react-router-dom';
import { MenuItem as MenuItemType } from '../../../types';
import MenuItem from './components/MenuItem';
import { NavigationContainer } from './Navigation.styles';

type NavigationProps = {
  expanded: boolean;
  menuItems: MenuItemType[];
};

function Navigation({ menuItems, expanded }: NavigationProps) {
  const theme = useTheme();
  const { pathname } = useLocation();
  const [openMenuItems, setOpenMenuItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setOpenMenuItems(
      menuItems.reduce((acc, item) => {
        const match = matchPath(pathname, { path: item.url, exact: false, strict: false });

        acc[item.url] = !!match;

        return acc;
      }, {})
    );
  }, [menuItems, pathname]);

  const toggleMenuItem = useCallback(
    (url: string) => {
      if (!expanded) {
        setOpenMenuItems({});
      } else {
        setOpenMenuItems((state) => {
          return { ...state, [url]: !state[url] };
        });
      }
    },
    [expanded]
  );

  return (
    <NavigationContainer data-navigation-container theme={theme}>
      {menuItems.map((menuItem) => {
        return (
          <MenuItem
            key={menuItem.url}
            expanded={Boolean(openMenuItems[menuItem.url])}
            toggleMenuItem={toggleMenuItem}
            item={menuItem}
          />
        );
      })}
    </NavigationContainer>
  );
}

export default Navigation;
