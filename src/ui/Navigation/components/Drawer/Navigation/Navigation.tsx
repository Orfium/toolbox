import { useCallback, useState } from 'react';
import { matchPath, useLocation } from 'react-router-dom';
import { MenuItem as MenuItemType } from '../../../types';
import MenuItem from './components/MenuItem';
import { NavigationContainer } from './Navigation.styles';

type NavigationProps = {
  expanded: boolean;
  menuItems: MenuItemType[];
};

function Navigation({ menuItems, expanded }: NavigationProps) {
  const { pathname } = useLocation();
  // we iinitialize the expanded or not status of the dropdowns by whether their url matches the current location path
  const [openMenuItems, setOpenMenuItems] = useState<Record<string, boolean>>(() => {
    return menuItems.reduce((acc, item) => {
      const match = matchPath(pathname, { path: item.url, exact: false, strict: false });
      acc[item.url] = !!match;

      return acc;
    }, {});
  });

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
    <NavigationContainer>
      {menuItems.map((menuItem) => {
        return menuItem.visible ? (
          <MenuItem
            key={menuItem.url}
            expanded={Boolean(openMenuItems[menuItem.url])}
            toggleMenuItem={toggleMenuItem}
            item={menuItem}
          />
        ) : null;
      })}
    </NavigationContainer>
  );
}

export default Navigation;
