import { useContext, useEffect } from 'react';
import { ContentLoadingIndicatorContext } from '../contexts/content-loading-indicator';

export const _useContentLoadingIndicator = () => useContext(ContentLoadingIndicatorContext);
export const useContentLoadingIndicator = (active: boolean) => {
  const { setLoadingIndicator } = useContext(ContentLoadingIndicatorContext);

  useEffect(() => {
    setLoadingIndicator(active);

    return function () {
      setLoadingIndicator(false);
    };
  }, [setLoadingIndicator, active]);
};

export type UseLoadingIndicatorReturnValue = undefined;
