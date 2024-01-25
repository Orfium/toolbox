import { ExpandCollapse, Icon, Theme, useTypeColorToColorMatch } from '@orfium/ictinus';
import { AcceptedIconNames } from '@orfium/ictinus/dist/components/Icon/types.js';
import { BASE_SHADE } from '@orfium/ictinus/dist/theme/palette.js';
import React, { useMemo } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Optional } from '../../../../../../../utils/types.js';
import FlippableArrow from '../../../../../../FlippableArrow/index.js';
import { MenuIcon, MenuItemText } from '../../../../../common.styles.js';
import { MenuItem as MenuItemType } from '../../../../../types.js';
import { useMenuItemMatch } from './hooks.js';
import {
  ArrowContainer,
  Bullet,
  ExpandCollapseWrapper,
  MenuItemButton,
  MenuLink,
} from './MenuItem.styles.js';

export type MenuItemProps = {
  theme: Theme;
  item: MenuItemType | Optional<MenuItemType, 'iconName'>;
  isSubMenu?: boolean;
};

function MenuItemContent(props: {
  theme: Theme;
  item: Optional<MenuItemType, 'iconName'>;
  expanded?: boolean;
  isSubMenu?: boolean;
}) {
  const { theme, item, expanded = false, isSubMenu = false } = props;
  const match = useRouteMatch(item.url);
  const { calculateColorBetweenColorAndType } = useTypeColorToColorMatch();

  const { shade } = calculateColorBetweenColorAndType('', 'primary');
  const isCurrent = !!match;
  const hasSubMenus = item.children && item.children.length > 0;
  const color = isCurrent
    ? theme.utils.getColor('blue', 600)
    : theme.utils.getColor('lightGrey', 650);

  const iconName: AcceptedIconNames = item.iconName || 'warning';

  return (
    <React.Fragment>
      <MenuIcon theme={theme} hidden={isSubMenu ? (isCurrent ? false : true) : false}>
        {isSubMenu ? (
          <Bullet color={color} />
        ) : (
          <Icon name={iconName} color={color} size={16} variant={isCurrent ? shade : BASE_SHADE} />
        )}
      </MenuIcon>
      <MenuItemText theme={theme} color={color} className={'menu-item-text'}>
        {item.text}
      </MenuItemText>
      {hasSubMenus ? (
        <ArrowContainer theme={theme} open={expanded}>
          <FlippableArrow expanded={expanded} color={color} size={10} />
        </ArrowContainer>
      ) : null}
    </React.Fragment>
  );
}

export function ExpandableMenuItem(props: MenuItemProps) {
  const { item, theme } = props;

  const { expanded, setExpanded, match } = useMenuItemMatch(item);

  const childrenElements = useMemo(() => {
    return item.children
      ? item.children.map((item) => <MenuItem key={item.url} theme={theme} item={item} isSubMenu />)
      : null;
  }, [item.children, theme]);

  return (
    <ExpandCollapseWrapper theme={theme} matched={!!match}>
      <ExpandCollapse
        expanded={expanded}
        onChange={() => setExpanded((state) => !state)}
        textAndControl={(handleClick) => {
          return (
            <MenuItemButton
              theme={theme}
              type={'button'}
              data-testid={item.url}
              onClick={handleClick}
            >
              <MenuItemContent theme={theme} expanded={expanded} item={item} />
            </MenuItemButton>
          );
        }}
      >
        {() => {
          return childrenElements;
        }}
      </ExpandCollapse>
    </ExpandCollapseWrapper>
  );
}

export function MenuItem({ item, theme, isSubMenu = false }: MenuItemProps) {
  return (
    <MenuLink theme={theme} exact to={item.url} data-testid={item.url}>
      <MenuItemContent theme={theme} item={item} isSubMenu={isSubMenu} />
    </MenuLink>
  );
}
