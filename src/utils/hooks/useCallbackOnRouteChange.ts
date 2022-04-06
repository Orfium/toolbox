import { useCallback, useEffect } from 'react';

export const useCallbackOnRouteChange = (callback: () => void, history: any) => {
  const resetOnRouteChange = useCallback(() => {
    history.listen(() => {
      callback();
    });
  }, [callback, history]);

  useEffect(() => {
    resetOnRouteChange();
  }, [history, resetOnRouteChange]);
};
