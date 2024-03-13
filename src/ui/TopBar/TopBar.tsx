import { useBreakpoints } from '@orfium/ictinus';
import { ReactNode } from 'react';
import { _useTopBarUtilitySlot } from '~/hooks/useTopBarUtilitySlot';
import Logo from '../../assets/orfium_logo.svg';
import { TopAppBarWrapper, UserDefinedSlot, UserSection } from './TopBar.styles';
import UserMenu, { UserMenuProps } from './components/UserMenu';

export type TopBarProps = {
  utilitySlot?: ReactNode;
} & Partial<UserMenuProps>;

export function TopBar({ utilitySlot, menuItems = [] }: TopBarProps) {
  const { topBarUtilitySlot } = _useTopBarUtilitySlot();
  const breakpoints = useBreakpoints();
  const isDesktop = breakpoints.des1366;

  return (
    <TopAppBarWrapper role="banner" aria-label="Top Application Banner">
      {isDesktop ? null : <Logo alt={'Orfium logo'} height={28} width={28} />}
      <UserDefinedSlot>{topBarUtilitySlot || utilitySlot}</UserDefinedSlot>
      <UserSection>
        <UserMenu menuItems={menuItems} />
      </UserSection>
    </TopAppBarWrapper>
  );
}
