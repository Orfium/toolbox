---
sidebar_label: 'Orfium SSO Instance'
sidebar_position: 2
---

# Orfium SSO Instance

For orfium we use a predefined instance called `orfiumIdBaseInstance` that is being automatically created for you and exported.

This instance gets all the headers like tokens etc automatically when `Authentication` wraps you application. You can ([see more here](/docs/modules/Request/docs/modules/authentication)) about `Authentication`

## Use Orfium instance

### 1) Setup .env

```title=".env"
REACT_APP_ORFIUM_ID_DOMAIN=<Base url of the orfium for requests>
```

### 2) Then use instance

Like the instances above, you just need to import it and use it like any other instance. Headers will be applied automatically with token from SSO

```
import { orfiumIdBaseInstance } from '@orfium/toolbox';
...
// headers will be applied automatically with token from SSO
const requestInstance = orfiumIdBaseInstance.createRequest({
  method: 'get',
  url: '/xyz/',
  params: *** whatever params ***,
});
```
