import { Theme } from '@orfium/ictinus';
import { memo, useMemo } from 'react';
import { MenuItem as MenuItemType } from '../../../types';
import { ExpandableMenuItem, MenuItem } from './components/MenuItem';
import { NavigationContainer } from './Navigation.styles';

type NavigationProps = {
  theme: Theme;
  menuItems: MenuItemType[];
  hasExtras: boolean;
};

function Navigation({ menuItems, theme, hasExtras }: NavigationProps) {
  const menuItemElements = useMemo(() => {
    return menuItems.map((menuItem) => {
      return menuItem?.children?.length ? (
        <ExpandableMenuItem key={menuItem.url} theme={theme} item={menuItem} />
      ) : (
        <MenuItem key={menuItem.url} theme={theme} item={menuItem} />
      );
    });
  }, [menuItems, theme]);

  return (
    <NavigationContainer data-navigation-container theme={theme} hasExtras={hasExtras}>
      {menuItemElements}
    </NavigationContainer>
  );
}

export default memo(Navigation);
