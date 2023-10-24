---
id: 'orfiumIdBaseInstance'
title: 'orfiumIdBaseInstance'
sidebar_label: 'orfiumIdBaseInstance'
sidebar_position: 0
custom_edit_url: null
---

`import { orfiumIdBaseInstance } from '@orfium/toolbox';`

## Description



A [`CreateAPIInstanceType`](../../Types/CreateAPIInstanceType) instance pre-configured to integrate with authentication methods and data. This instance provides all the 
necessary SSO headers (tokens etc.) automatically, provided the user is logged in with Orfium SSO. (You need to 
wrap your app in [`Toolbox`](../../Components/Toolbox.mdx) in order to use Orfium's SSO authentication)

**Example usage**

```bash
# Setup .env
REACT_APP_ORFIUM_ID_DOMAIN=<Orfium's SSO URL>
```


```tsx
// Use the instance
import { orfiumIdBaseInstance } from '@orfium/toolbox';

const requestInstance = orfiumIdBaseInstance.createRequest({
  method: 'get',
  url: '/xyz/',
  params: *** whatever params ***,
});
```

### Value

Ƭ `AxiosInstance`