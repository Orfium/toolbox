---
id: 'useDeferredValue'
title: 'useDeferredValue<T>'
sidebar_label: 'useDeferredValue'
sidebar_position: 3
custom_edit_url: null
---

`import { useDeferredValue } from '@orfium/toolbox';`

### Description

Polyfill for [useDeferredValue](https://react.dev/reference/react/useDeferredValue) for projects that use React < 18. Works exactly the same
way as the native hook, but adds an optional parameter for controlling the delay

### Parameters

- `value: T` - The value that will ultimately get set in a deferred manner.
- `duration?: number` - (_default: 800_) The value in ms that should act as delay before the value is updated.

### Return value

Ƭ `T` 

The deferred `value` after `duration` ms have passed.
