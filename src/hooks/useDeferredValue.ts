/*
 * Polyfill for https://react.dev/reference/react/useDeferredValue
 */

import { useEffect, useState } from 'react';

export function useDeferredValue<V>(value: V, duration = 800) {
  const [state, setState] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        setState(value);
      },
      // Clear  quickly if no value exists to feel snappier
      value ? duration : 0
    );

    return function () {
      clearTimeout(timeout);
    };
  }, [value, duration]);

  return state;
}
