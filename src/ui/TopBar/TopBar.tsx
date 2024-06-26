import { ReactNode } from 'react';
import { _useTopBarUtilitySlot } from '~/hooks/useTopBarUtilitySlot';
import Logo from '../../assets/orfium_logo.svg?react';
import { TopAppBarWrapper, UserDefinedSlot, UserSection } from './TopBar.styles';
import UserMenu, { UserMenuProps } from './components/UserMenu';

export type TopBarProps = {
  utilitySlot?: ReactNode;
} & Partial<UserMenuProps>;

export function TopBar({ utilitySlot, menuItems = [] }: TopBarProps) {
  const { topBarUtilitySlot } = _useTopBarUtilitySlot();

  return (
    <TopAppBarWrapper role="banner" aria-label="Top Application Banner">
      <Logo alt={'Orfium logo'} height={28} width={28} />
      <UserDefinedSlot>{topBarUtilitySlot || utilitySlot}</UserDefinedSlot>
      <UserSection>
        <UserMenu menuItems={menuItems} />
      </UserSection>
    </TopAppBarWrapper>
  );
}
