import { createContext, Dispatch, ReactNode, SetStateAction } from 'react';

export type TopBarUtilitySlotContextValue = {
  topBarUtilitySlot: ReactNode;
  setTopBarUtilitySlot: Dispatch<SetStateAction<ReactNode>>;
};

export const defaultTopBarUtilitySlotContextValue: TopBarUtilitySlotContextValue = {
  topBarUtilitySlot: null,
  setTopBarUtilitySlot: () => {},
};
export const TopBarUtilitySlotContext = createContext<TopBarUtilitySlotContextValue>(
  defaultTopBarUtilitySlotContextValue
);
