import { ReactNode, useState } from 'react';
import { TopBarUtilitySlotContext } from '~/contexts/top-bar-utility-slot';

export function TopBarUtilitySlot(props: { children: ReactNode }) {
  const { children } = props;
  const [topBarUtilitySlot, setTopBarUtilitySlot] = useState<ReactNode>(null);

  return (
    <TopBarUtilitySlotContext.Provider
      value={{
        topBarUtilitySlot: topBarUtilitySlot,
        setTopBarUtilitySlot: setTopBarUtilitySlot,
      }}
    >
      {children}
    </TopBarUtilitySlotContext.Provider>
  );
}
