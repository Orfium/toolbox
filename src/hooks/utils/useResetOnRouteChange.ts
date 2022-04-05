import { useCallback, useEffect } from 'react';

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
