import { Dispatch, useCallback, useLayoutEffect, useRef } from 'react';

export function useSafeDispatch<T>(dispatch: Dispatch<T>) {
  const isComponentMounted = useRef(false);

  const dispatchCallback = useCallback(
    (actionEntity: T) => (isComponentMounted.current ? dispatch(actionEntity) : void 0),
    [dispatch]
  );

  useLayoutEffect(() => {
    isComponentMounted.current = true;

    return () => {
      isComponentMounted.current = false;
    };
  });

  return dispatchCallback;
}
