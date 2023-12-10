import { useContext, useEffect } from 'react';
import { ContentLoadingIndicatorContext } from '../contexts/content-loading-indicator';

export const _useContentLoadingIndicator = () => useContext(ContentLoadingIndicatorContext);
export const useContentLoadingIndicator = (active: boolean) => {
  const { setLoadingIndicatorActive } = useContext(ContentLoadingIndicatorContext);

  useEffect(() => {
    setLoadingIndicatorActive(active);

    return function () {
      setLoadingIndicatorActive(false);
    };
  }, [setLoadingIndicatorActive, active]);
};

export type UseLoadingIndicatorReturnValue = undefined;
