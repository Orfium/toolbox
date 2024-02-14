import { createContext, Dispatch, SetStateAction } from 'react';

export type ContentLoadingIndicatorContextValue = {
  loadingIndicator: boolean;
  setLoadingIndicator: Dispatch<SetStateAction<boolean>>;
};

export const defaultContentLoadingIndicatorContextValue: ContentLoadingIndicatorContextValue = {
  loadingIndicator: false,
  setLoadingIndicator: new Proxy(() => {}, {
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
