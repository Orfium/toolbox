---
id: 'useSafeContext'
title: 'useSafeContext<T>'
sidebar_label: 'useSafeContext'
sidebar_position: 11
custom_edit_url: null
---

`import { useSafeContext } from '@orfium/toolbox';`

## Description

Accepts two parameters a **React context instance**, and a ** string** that specifies the name of the context.
It will throw an exception if someone tries to use hook outside of provider.

```tsx
import { useSafeContext } from '@orfium/toolbox';

const CustomContext = React.createContext(null);

export const useCustomContext = () => useSafeContext(CustomContext, 'CustomContext');
```

_Error log_

```
Error: useCustomContext must be used within a CustomContextProvider
```

## Parameters

- `context: Context<T>`
- `hookName: string`

## Return value

Ƭ `NonNullable<T>`
