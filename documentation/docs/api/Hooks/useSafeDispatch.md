---
id: "useSafeDispatch"
title: "useSafeDispatch<T>"
sidebar_label: "useSafeDispatch"
sidebar_position: 11
---

```ts
import { useSafeDispatch } from '@orfium/toolbox';
```

## Description

Accepts a **dispatch method** generated from a `useReducer` hook. 
It will return an optimized and guarded dispatch callback which will be invoked only when the component is mounted.

```tsx
import { useSafeDispatch } from '@orfium/toolbox';

type State = Record<string,string> | null;
type Action = {type: string, payload: boolean};

const init = (shouldInit: boolean) => ({ type: 'INIT', payload: shouldInit });

const reducer = (state: State, action:Dispatch<Action>) => {
  if(action.type === 'INIT') {
    return {...state, init: action.payload}
  }
  
  return state;
}

export const Component = () => {
  const [state, dispatch] = useReducer<typeof reducer>(reducer, null);
  const safeDispatch = useSafeDispatch<Action>(dispatch);

  const onClick = () => {
    safeDispatch(init(true));
  }
  
  return <button onClick={onClick} >init state</button>
}

```

## Parameters

* `dispatch: Dispatch<T>`

## Return value

Ƭ `(actionEntity: T) => void` 

