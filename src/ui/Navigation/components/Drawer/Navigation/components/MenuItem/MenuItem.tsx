import { ExpandCollapse, Icon, useTheme, useTypeColorToColorMatch } from '@orfium/ictinus';
import { BASE_SHADE } from '@orfium/ictinus/dist/theme/palette';
import React from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';
import FlippableArrow from '../../../../../../FlippableArrow';
import { MenuItem as MenuItemType } from '../../../../../types';
import {
  ArrowContainer,
  Bullet,
  ExpandCollapseWrapper,
  MenuIcon,
  MenuItemButton,
  MenuItemText,
  MenuLink,
} from './MenuItem.styles';

type Props = {
  /** Defines if the menu item is expanded */
  expanded: boolean;
  toggleMenuItem: (newUrl: string) => void;
  item: MenuItemType;
};

function MenuItemContent(props: { expanded: boolean; item: MenuItemType; isSubMenu?: boolean }) {
  const { item, expanded, isSubMenu = false } = props;
  const match = useRouteMatch(item.url);
  const theme = useTheme();
  const { calculateColorBetweenColorAndType } = useTypeColorToColorMatch();
  const { shade } = calculateColorBetweenColorAndType('', 'primary');

  const isCurrent = !!match;
  const hasSubMenus = item.options.length > 0;
  const color = isCurrent
    ? theme.utils.getColor('blue', 600)
    : theme.utils.getColor('lightGrey', 650);

  return (
    <React.Fragment>
      <MenuIcon hidden={isSubMenu ? (isCurrent ? false : true) : false}>
        {isSubMenu ? (
          <Bullet color={color} />
        ) : (
          <Icon
            name={item.iconName}
            color={color}
            size={16}
            variant={isCurrent ? shade : BASE_SHADE}
          />
        )}
      </MenuIcon>
      <MenuItemText color={color} className={'menu-item-text'}>
        {item.name}
      </MenuItemText>
      {hasSubMenus ? (
        <ArrowContainer open={expanded}>
          <FlippableArrow expanded={expanded} color={color} size={10} />
        </ArrowContainer>
      ) : null}
    </React.Fragment>
  );
}

const MenuItem: React.FC<Props> = ({ expanded, toggleMenuItem, item }) => {
  const match = useRouteMatch(item.url);
  const { state } = useLocation<{
    previous: {
      pathname: string;
      search: string;
    };
  } | null>();

  const hasSubMenus = item.options.length > 0;

  return (
    <React.Fragment>
      {hasSubMenus ? (
        <ExpandCollapseWrapper matched={!!match}>
          <ExpandCollapse
            expanded={expanded}
            onChange={() => toggleMenuItem(item.url)}
            textAndControl={(handleClick) => {
              return (
                <MenuItemButton type={'button'} data-testid={item.url} onClick={handleClick}>
                  <MenuItemContent expanded={expanded} item={item} />
                </MenuItemButton>
              );
            }}
          >
            {() => {
              return (
                <React.Fragment>
                  {item.options.map(
                    (subMenuItem) =>
                      subMenuItem.visible && (
                        <MenuLink
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
                          isSubmenu
                        >
                          <MenuItemContent expanded={expanded} item={subMenuItem} isSubMenu />
                        </MenuLink>
                      )
                  )}
                </React.Fragment>
              );
            }}
          </ExpandCollapse>
        </ExpandCollapseWrapper>
      ) : (
        <MenuLink
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
};

export default MenuItem;
