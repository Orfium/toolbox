import { ExpandCollapse, Icon, useTheme, useTypeColorToColorMatch } from '@orfium/ictinus';
import { AcceptedIconNames } from '@orfium/ictinus/dist/components/Icon/types';
import { BASE_SHADE } from '@orfium/ictinus/dist/theme/palette';
import React from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';
import { Optional } from '../../../../../../../utils';
import FlippableArrow from '../../../../../../FlippableArrow';
import { MenuIcon, MenuItemText } from '../../../../../common.styles';
import { MenuItem as MenuItemType } from '../../../../../types';
import {
  ArrowContainer,
  Bullet,
  ExpandCollapseWrapper,
  MenuItemButton,
  MenuLink,
} from './MenuItem.styles';

function MenuItemContent(props: {
  expanded: boolean;
  item: Optional<MenuItemType, 'iconName'>;
  isSubMenu?: boolean;
}) {
  const { item, expanded, isSubMenu = false } = props;
  const match = useRouteMatch(item.url);
  const theme = useTheme();
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

export type MenuItemProps = {
  /** Defines if the menu item is expanded */
  expanded: boolean;
  toggleMenuItem: (newUrl: string) => void;
  item: MenuItemType;
};

function MenuItem({ expanded, toggleMenuItem, item }: MenuItemProps) {
  const theme = useTheme();
  const match = useRouteMatch(item.url);
  const { state } = useLocation<{
    previous: {
      pathname: string;
      search: string;
    };
  } | null>();

  const hasSubMenus = item.children && item.children.length > 0;

  return (
    <React.Fragment>
      {hasSubMenus ? (
        <ExpandCollapseWrapper theme={theme} matched={!!match}>
          <ExpandCollapse
            expanded={expanded}
            onChange={() => toggleMenuItem(item.url)}
            textAndControl={(handleClick) => {
              return (
                <MenuItemButton
                  theme={theme}
                  type={'button'}
                  data-testid={item.url}
                  onClick={handleClick}
                >
                  <MenuItemContent expanded={expanded} item={item} />
                </MenuItemButton>
              );
            }}
          >
            {() => {
              return (
                <React.Fragment>
                  {item.children
                    ? item.children.map((subMenuItem) => (
                        <MenuLink
                          theme={theme}
                          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                          // @ts-ignore
                          exact
                          to={{
                            pathname: subMenuItem.url,
                            state,
                          }}
                          data-testid={subMenuItem.url}
                          key={subMenuItem.url}
                          id={'submenu-item-link'}
                        >
                          <MenuItemContent expanded={expanded} item={subMenuItem} isSubMenu />
                        </MenuLink>
                      ))
                    : null}
                </React.Fragment>
              );
            }}
          </ExpandCollapse>
        </ExpandCollapseWrapper>
      ) : (
        <MenuLink
          theme={theme}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          exact
          to={{
            pathname: item.url,
            state,
          }}
          data-testid={item.url}
          key={item.url}
        >
          <MenuItemContent expanded={expanded} item={item} />
        </MenuLink>
      )}
    </React.Fragment>
  );
}

export default MenuItem;
