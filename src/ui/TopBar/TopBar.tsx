import { Global } from '@emotion/react';
import { useBreakpoints, useTheme } from '@orfium/ictinus';
import { ReactNode } from 'react';
import Logo from '../../assets/orfium_logo.svg';
import { _useTopBarUtilitySlot } from '../../hooks/useTopBarUtilitySlot';
import UserMenu, { UserMenuProps } from './components/UserMenu';
import { backGround, TopAppBarWrapper, UserDefinedSlot, UserSection } from './TopBar.styles';

export type TopBarProps = {
  utilitySlot?: ReactNode;
} & Partial<UserMenuProps>;

export function TopBar({ utilitySlot, menuItems = [] }: TopBarProps) {
  const { topBarUtilitySlot } = _useTopBarUtilitySlot();
  const theme = useTheme();
  const breakpoints = useBreakpoints();
  const isDesktop = breakpoints.des1366;

  return (
    <TopAppBarWrapper role="banner" aria-label="Top Application Banner">
      <Global styles={{ body: backGround(theme) }} />
      {isDesktop ? null : <img alt={'Orfium logo'} src={Logo} height={28} width={28} />}
      <UserDefinedSlot>{topBarUtilitySlot || utilitySlot}</UserDefinedSlot>
      <UserSection>
        <UserMenu menuItems={menuItems} />
      </UserSection>
    </TopAppBarWrapper>
  );
}
