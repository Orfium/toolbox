import { Global } from '@emotion/react';
import { useBreakpoints, useTheme } from '@orfium/ictinus';
import { ReactNode } from 'react';
import Logo from '../../assets/orfium_logo.svg';
import { _useTopBarUtilitySection } from '../../hooks/useTopBarUtilitySection';
import UserMenu, { UserMenuProps } from './components/UserMenu';
import { backGround, TopAppBarWrapper, UserDefinedSection, UserSection } from './TopBar.styles';

export type TopBarProps = {
  utilitySection?: ReactNode;
} & Partial<UserMenuProps>;

export function TopBar({ utilitySection, menuItems = [] }: TopBarProps) {
  const { topBarUtilitySection } = _useTopBarUtilitySection();
  const theme = useTheme();
  const breakpoints = useBreakpoints();
  const isDesktop = breakpoints.des1200;

  return (
    <TopAppBarWrapper role="banner" aria-label="Top Application Banner">
      <Global styles={{ body: backGround(theme) }} />
      {isDesktop ? null : <img alt={'Orfium logo'} src={Logo} height={28} width={28} />}
      <UserDefinedSection>{topBarUtilitySection || utilitySection}</UserDefinedSection>
      <UserSection>
        <UserMenu menuItems={menuItems} />
      </UserSection>
    </TopAppBarWrapper>
  );
}
