import { Icon, useTheme } from '@orfium/ictinus';
import { AcceptedIconNames } from '@orfium/ictinus/dist/components/Icon/types';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { useAuthentication } from '../../../../hooks';
import {
  AvatarButton,
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
} from './UserMenu.styles';

export type UserMenuProps = {
  menuItems: {
    text: string;
    url: string;
    iconName?: AcceptedIconNames;
  }[];
};

function useClickAwayListener(
  ref: MutableRefObject<HTMLElement | null>,
  onClick: (event: MouseEvent) => void
) {
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
      onClick(event);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside, true);

    return () => {
      window.removeEventListener('click', handleClickOutside, true);
    };
  });
}

function UserMenu(props: UserMenuProps) {
  const { user, logout } = useAuthentication();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const outerMenuWrapperRef = useRef<HTMLDivElement | null>(null);
  const innerMenuWrapperRef = useRef<HTMLDivElement | null>(null);

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

    document.addEventListener('keydown', handleEsc);

    return function () {
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  useClickAwayListener(outerMenuWrapperRef, (e: MouseEvent) => {
    if (open) {
      e.stopPropagation();
      setOpen(false);
    }
  });

  return (
    <>
      <AvatarButton
        type="button"
        onClick={() => {
          setOpen((state) => !state);
        }}
      >
        <img alt={'User avatar image'} src={user?.picture} />
      </AvatarButton>
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
        role={'menu'}
        tabIndex={open ? -1 : 0}
        ref={outerMenuWrapperRef}
      >
        <MenuInnerWrapper
          theme={theme}
          aria-hidden={open ? 'false' : 'true'}
          ref={innerMenuWrapperRef}
        >
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
              <LogoutButton theme={theme} onClick={logout} tabIndex={open ? 0 : -1}>
                <span>Log out</span>
              </LogoutButton>
            </SecondarySection>
          </MenuList>
        </MenuInnerWrapper>
      </MenuOuterWrapper>
    </>
  );
}

export default UserMenu;
