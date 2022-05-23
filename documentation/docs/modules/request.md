---
sidebar_label: 'Request'
sidebar_position: 2
---

# Overview

Request is about getting all the data from and to your server. In order to avoid applications having to implement and
maintain their own solution, toolbox provides a tried and tested instance generator for generating request handlers.

# Usage

All you need to pass is the base URL and your base headers.

```jsx title="/src/providers/instance.tsx"
import { createAPIInstance } from '@orfium/toolbox';

const baseURL = process.env.REACT_APP_BASE_URL;

const instance = createAPIInstance({
  baseUrl: baseURL,
  baseHeaders: {},
});
```

The instance contains
