import {
  AcceptedIconNames,
  Icon,
  ListItem,
  ListItemText,
  Menu,
  MenuItemDivider,
  useTheme,
} from '@orfium/ictinus';
import { useRef, useState } from 'react';
import { useAuthentication } from '~/hooks/useAuthentication';
import { LogoutButton, MenuItem } from '~/ui/TopBar/components/FancyUserMenu/UserMenu.styles';
import { AvatarButton, Email, Header, Tag, Username, UsernameWrapper } from './UserMenu.styles';

export type UserMenuProps = {
  menuItems: {
    text: string;
    url: string;
    iconName?: AcceptedIconNames;
  }[];
};

function UserMenu(props: UserMenuProps) {
  const { user, logout } = useAuthentication();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const handleBtnClick = (e: any) => {
    e?.preventDefault && e?.preventDefault();
    setOpen((state) => !state);
  };

  return (
    <>
      <AvatarButton ref={btnRef} type="button" onClick={handleBtnClick}>
        <img alt={'User avatar image'} src={user?.picture} />
      </AvatarButton>
      {/*
      // @ts-ignore */}
      <Menu triggerRef={btnRef} isOpen={open} onClose={handleBtnClick}>
        <ListItem key={'copy'} textValue={'copy'} parentType={'Menu'}>
          <ListItemText>
            <Header theme={theme} data-menu-header>
              <img alt={'User avatar image'} src={user?.picture} />
              <div>
                <UsernameWrapper>
                  <Username theme={theme}>{user?.name}</Username>{' '}
                  {user?.role ? <Tag theme={theme}>{user?.role}</Tag> : null}
                </UsernameWrapper>
                <Email theme={theme}>{user?.email}</Email>
              </div>
            </Header>
          </ListItemText>
        </ListItem>
        <MenuItemDivider
          sx={{
            width: '90%',
          }}
        />
        {props?.menuItems?.map((option) => {
          return (
            <>
              <ListItem key={option.text} textValue={option.text} parentType={'Menu'}>
                <ListItemText>
                  <MenuItem
                    theme={theme}
                    href={option.url}
                    target={'_blank'}
                    rel={'noopener noreferrer'}
                    key={option.url}
                    tabIndex={open ? 0 : -1}
                  >
                    <span>{option.text}</span>{' '}
                    {option.iconName ? <Icon color={'#0E0E17'} name={option.iconName} /> : null}
                  </MenuItem>
                </ListItemText>
              </ListItem>
              <MenuItemDivider
                sx={{
                  width: '90%',
                }}
              />
            </>
          );
        })}
        <ListItem key={'logout'} textValue={'logout'} parentType={'Menu'}>
          <ListItemText>
            <LogoutButton theme={theme} onClick={() => logout()} tabIndex={open ? 0 : -1}>
              <span>Log out</span>
            </LogoutButton>
          </ListItemText>
        </ListItem>
      </Menu>
      {/*<MenuOuterWrapper*/}
      {/*  theme={theme}*/}
      {/*  onClick={() => {*/}
      {/*    if (!open) {*/}
      {/*      setOpen(true);*/}
      {/*    }*/}
      {/*  }}*/}
      {/*  onKeyDown={(e) => {*/}
      {/*    if ((e.code === 'Enter' || e.code === 'Space') && !open) {*/}
      {/*      setOpen(true);*/}
      {/*    }*/}
      {/*  }}*/}
      {/*  className={open ? '' : 'collapsed'}*/}
      {/*  role={'menu'}*/}
      {/*  tabIndex={open ? -1 : 0}*/}
      {/*  ref={outerMenuWrapperRef}*/}
      {/*>*/}
      {/*  <MenuInnerWrapper*/}
      {/*    theme={theme}*/}
      {/*    aria-hidden={open ? 'false' : 'true'}*/}
      {/*    ref={innerMenuWrapperRef}*/}
      {/*  >*/}
      {/*    <Header theme={theme} data-menu-header>*/}
      {/*      <img alt={'User avatar image'} src={user?.picture} />*/}
      {/*      <div>*/}
      {/*        <UsernameWrapper>*/}
      {/*          <Username theme={theme}>{user?.name}</Username>{' '}*/}
      {/*          {user?.role ? <Tag theme={theme}>{user?.role}</Tag> : null}*/}
      {/*        </UsernameWrapper>*/}
      {/*        <Email theme={theme}>{user?.email}</Email>*/}
      {/*      </div>*/}
      {/*    </Header>*/}

      {/*    <MenuList data-menu-options>*/}
      {/*      <PrimarySection>*/}
      {/*        {props.menuItems.map((option) => {*/}
      {/*          return (*/}
      {/*            <MenuItem*/}
      {/*              theme={theme}*/}
      {/*              href={option.url}*/}
      {/*              target={'_blank'}*/}
      {/*              rel={'noopener noreferrer'}*/}
      {/*              key={option.url}*/}
      {/*              tabIndex={open ? 0 : -1}*/}
      {/*            >*/}
      {/*              <span>{option.text}</span>{' '}*/}
      {/*              {option.iconName ? <Icon color={'#0E0E17'} name={option.iconName} /> : null}*/}
      {/*            </MenuItem>*/}
      {/*          );*/}
      {/*        })}*/}
      {/*      </PrimarySection>*/}
      {/*      <SecondarySection theme={theme}>*/}
      {/*        <LogoutButton theme={theme} onClick={() => logout()} tabIndex={open ? 0 : -1}>*/}
      {/*          <span>Log out</span>*/}
      {/*        </LogoutButton>*/}
      {/*      </SecondarySection>*/}
      {/*    </MenuList>*/}
      {/*  </MenuInnerWrapper>*/}
      {/*</MenuOuterWrapper>*/}
    </>
  );
}

export default UserMenu;
