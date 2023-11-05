import { createContext, Dispatch, ReactNode, SetStateAction } from 'react';

export type TopBarUtilitySectionContextValue = {
  topBarUtilitySection: ReactNode;
  setTopBarUtilitySection: Dispatch<SetStateAction<ReactNode>>;
};

export const defaultTopBarUtilitySectionContextValue: TopBarUtilitySectionContextValue = {
  topBarUtilitySection: null,
  setTopBarUtilitySection: () => {},
};
export const TopBarUtilitySectionContext = createContext<TopBarUtilitySectionContextValue>(
  defaultTopBarUtilitySectionContextValue
);
