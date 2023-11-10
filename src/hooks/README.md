## Hook utilities usage examples

### useSafeContext

_Description:</br> Accepts two parameters a **react context instance**, and a ** string** that specifies the name of the context.<br />It will throw an exception if someone tries to use hook outside of provider._

```typescript jsx
import { useSafeContext } from '@orfium/cmo-client-utils';

const CustomContext = React.createContext(null);

export const useCustomContext = () => useSafeContext(CustomContext, 'CustomContext');
```

_Error log_

```
Error: useCustomContext must be used within a CustomContextProvider
```

### useSafeDispatch

_Description:</br> Accepts a **dispatch method** generated from a `useReducer` hook.<br />It will return an optimized and guarded dispatch callback which will be invoked only when the component is mounted._

```typescript jsx
import { useSafeDispatch } from '@orfium/cmo-client-utils';

type State = Record<string, string> | null;
type Action = { type: string; payload: boolean };

const init = (shouldInit: boolean) => ({ type: 'INIT', payload: shouldInit });

const reducer = (state: State, action: Dispatch<Action>) => {
  if (action.type === 'INIT') {
    return { ...state, init: action.payload };
  }

  return state;
};

export const Component = () => {
  const [state, dispatch] = useReducer<typeof reducer>(reducer, null);
  const safeDispatch = useSafeDispatch<Action>(dispatch);

  const onClick = () => {
    safeDispatch(init(true));
  };

  return <button onClick={onClick}>init state</button>;
};
```
