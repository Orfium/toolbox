import { Context, useContext } from 'react';

export function useSafeContext<T>(Context: Context<T>, hookName: string) {
  const context = useContext(Context);
  if (!context) {
    throw new Error(`use${hookName} must be used within a ${hookName}Provider`);
  }

  return context;
}
