import { useCallback, useEffect } from 'react';

// eslint-disable-next-line
export const useResetOnRouteChange = (onReset: () => void, history: any) => {
  const resetOnRouteChange = useCallback(() => {
    history.listen(() => {
      onReset();
    });
  }, [onReset, history]);

  useEffect(() => {
    resetOnRouteChange();
  }, [history, resetOnRouteChange]);
};
