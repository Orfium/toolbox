import { ReactNode, useContext, useEffect } from 'react';
import { TopBarUtilitySlotContext } from '~/contexts/top-bar-utility-slot';

export const _useTopBarUtilitySlot = () => useContext(TopBarUtilitySlotContext);
export const useTopBarUtilitySlot = (topBarUtilitySlotElement: ReactNode) => {
  const { setTopBarUtilitySlot } = useContext(TopBarUtilitySlotContext);

  useEffect(() => {
    setTopBarUtilitySlot(topBarUtilitySlotElement);

    return function () {
      setTopBarUtilitySlot(null);
    };
  }, [setTopBarUtilitySlot, topBarUtilitySlotElement]);
};

export type UseTopBarUtilitySlotReturnValue = undefined;
