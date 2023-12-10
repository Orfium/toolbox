import { createContext, Dispatch, SetStateAction } from 'react';

export type ContentLoadingIndicatorContextValue = {
  loadingIndicatorActive: boolean;
  setLoadingIndicatorActive: Dispatch<SetStateAction<boolean>>;
};

export const defaultContentLoadingIndicatorContextValue: ContentLoadingIndicatorContextValue = {
  loadingIndicatorActive: false,
  setLoadingIndicatorActive: new Proxy(() => {}, {
    apply: () => {
      throw new Error(
        'You can only use useContentLoadingIndicator inside descendants of the Scaffold component'
      );
    },
  }),
};
export const ContentLoadingIndicatorContext = createContext<ContentLoadingIndicatorContextValue>(
  defaultContentLoadingIndicatorContextValue
);
