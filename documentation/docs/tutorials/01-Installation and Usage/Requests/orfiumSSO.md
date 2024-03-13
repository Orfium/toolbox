---
sidebar_label: 'Orfium SSO Instance'
sidebar_position: 2
---

# Orfium SSO Instance

In Orfium we use a predefined instance called [`orfiumIdBaseInstance`](../../../api/Utilities/Singletons/orfiumIdBaseInstance),
that is automatically created for you and then exported.

This instance provides all the necessary headers (tokens etc.) automatically when [`Toolbox`](../../../api/Components/Toolbox) 
wraps you application. You can read more [here](../Authentication/Usage)).

## Use Orfium instance

### 1) Setup .env

```bash
REACT_APP_ORFIUM_ID_DOMAIN=<Base orfium url for requests>
```

### 2) Then use instance

You just need to import it and then use it like any other instance. Authentication Headers will be applied automatically, using the token from SSO

```tsx
import { orfiumIdBaseInstance } from '@orfium/toolbox';

const requestInstance = orfiumIdBaseInstance.createRequest({
  method: 'get',
  url: '/xyz/',
  params: "whatever params",
});
```
