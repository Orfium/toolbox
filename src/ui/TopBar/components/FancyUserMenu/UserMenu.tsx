import { Icon, useTheme } from '@orfium/ictinus';
import { AcceptedIconNames } from '@orfium/ictinus/dist/components/Icon/types.js';
import ClickAwayListener from '@orfium/ictinus/dist/components/utils/ClickAwayListener/index.js';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useAuthentication } from '../../../../hooks/index.js';
import {
  Anchor,
  Email,
  Header,
  LogoutButton,
  MenuInnerWrapper,
  MenuItem,
  MenuList,
  MenuOuterWrapper,
  PrimarySection,
  SecondarySection,
  Tag,
  Username,
  UsernameWrapper,
} from './UserMenu.styles.js';

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
  const outerMenuWrapperRef = useRef<HTMLDivElement | null>(null);
  const innerMenuWrapperRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const outerWrapperEl = outerMenuWrapperRef.current;
    const innerWrapperEl = innerMenuWrapperRef.current;
    if (outerWrapperEl && innerWrapperEl) {
      const { width, height } = innerWrapperEl.getBoundingClientRect();

      outerWrapperEl.style.setProperty('--max-width', width + 'px');
      outerWrapperEl.style.setProperty('--max-height', height + 'px');
    }

    return function () {
      outerWrapperEl?.style.setProperty('--max-width', 'auto');
      outerWrapperEl?.style.setProperty('--max-height', 'auto');
    };
    // Update dimensions if number of items changes
  }, [props.menuItems.length]);

  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      const outerWrapperEl = outerMenuWrapperRef.current;

      if (e.code === 'Escape') {
        setOpen(false);

        //  Return focus to menu trigger element if it had focus to itself or its children when it closed
        if (outerWrapperEl && outerWrapperEl.matches(':focus-within')) {
          outerWrapperEl.focus();
        }
      }
    }

    window.addEventListener('keydown', handleEsc);

    return function () {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <ClickAwayListener
      onClick={() => {
        if (open) {
          setOpen(false);
        }
      }}
    >
      <Anchor>
        <MenuOuterWrapper
          theme={theme}
          onClick={() => {
            if (!open) {
              setOpen(true);
            }
          }}
          onKeyDown={(e) => {
            if ((e.code === 'Enter' || e.code === 'Space') && !open) {
              setOpen(true);
            }
          }}
          className={open ? '' : 'collapsed'}
          role={open ? 'menu' : 'button'}
          tabIndex={open ? -1 : 0}
          ref={outerMenuWrapperRef}
        >
          <MenuInnerWrapper
            theme={theme}
            aria-hidden={open ? 'false' : 'true'}
            ref={innerMenuWrapperRef}
          >
            <Header theme={theme} data-menu-header className={open ? '' : 'collapsed'}>
              <img alt={'User avatar image'} src={user?.picture} />
              <div>
                <UsernameWrapper>
                  <Username theme={theme}>{user?.name}</Username>{' '}
                  {user?.role ? <Tag theme={theme}>{user?.role}</Tag> : null}
                </UsernameWrapper>
                <Email theme={theme}>{user?.email}</Email>
              </div>
            </Header>

            <MenuList data-menu-options>
              <PrimarySection>
                {props.menuItems.map((option) => {
                  return (
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
                  );
                })}
              </PrimarySection>
              <SecondarySection theme={theme}>
                <LogoutButton theme={theme} onClick={() => logout()} tabIndex={open ? 0 : -1}>
                  <span>Log out</span>
                </LogoutButton>
              </SecondarySection>
            </MenuList>
          </MenuInnerWrapper>
        </MenuOuterWrapper>
      </Anchor>
    </ClickAwayListener>
  );
}

export default UserMenu;
