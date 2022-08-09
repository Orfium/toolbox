---
sidebar_label: 'Installation'
sidebar_position: 1
---

# Request

## Overview

Request is about getting all the data from and to your server. In order to avoid applications having to implement and
maintain their own solution, toolbox provides a tried and tested instance generator for request handlers.

All you need to pass is the base URL and your base headers.

The [returned value](/docs/api/modules#createapiinstancetype) contains:

- `instance`, ( basically an [axios instance](/docs/api/interfaces/AxiosInstance) )
- `createRequest` function , that returns the request function and the cancel token
  - the `request` takes the [RequestProps](/docs/api/modules#requestprops),returns a Promise that contains the data or the error and
  - the [`CancelTokenSource`](/docs/api/interfaces/CancelTokenSource) in case you wish to cancel the token
- `setToken` , for setting the token in the `Authorization` header as `Token XXXX` and
- `deleteToken` , for deleting the token from the header `Authorization`

**_Important Note_** it is important to mention that the when the `Request` module is used alongside the `Authentication` module, it will automatically have the `Authorization` token header for all requests based on the Orfium Authentication system.
If you need to pass another token for any other calls (3rd party S3, Google etc.) you only have to [define it](/docs/modules/Request/#setdelete-authentication-token) and it will be overwritten.

## Usage

### Single Instance

Initialization of the instance. Each instance can be set with a new base url that will be used to call different endpoints.
You can set if you want on the instance to **use** or **not** the `Authentication` token automatically. This is set to TRUE by default, but you can define it `hasAutomaticToken: false` on the configuration.

```jsx title="/src/providers/instance.tsx"
import { createAPIInstance } from '@orfium/toolbox';

const baseURL = process.env.REACT_APP_BASE_URL;

export const baseInstance = createAPIInstance({
  baseUrl: baseURL,
  baseHeaders: {}, // optional
  hasAutomaticToken: true // optional, default to true
});
```

### Multiple Instances

If you need to fetch data from multiple sources, then you can create multiple instances.

```jsx title="/src/providers/instance.tsx"
import { createAPIInstance } from '@orfium/toolbox';

const baseURL = process.env.REACT_APP_BASE_URL;

const instanceV1 = createAPIInstance({
  baseUrl: baseURL + '/v1',
});

const instanceV2 = createAPIInstance({
  baseUrl: baseURL + '/v2',
});

const instanceWhatevrYouWant = createAPIInstance({
  baseUrl: '/whatever-I-Want',
});
```

### Set/Delete Authentication Token

Don't forget that you have to set the token after you login and delete it after you logout.

```jsx title="/src/models/user.tsx"
import { baseInstance } from 'src/providers/instance';

export const onLoginFunction = (token: string) => {
  //do stuff
  baseInstance.setToken(token);
  //do other stuff
};

export const onLogoutFunction = () => {
  //do stuff
  baseInstance.deleteToken();
  //do other stuff
};
```

### Create Request Function

The most important thing, and the one you will interact mostly with, is the `createRequest` function

You can just import the created instance and use it to create a request function. [The toolbox exposes a METHODS object for your convenience](/docs/api/modules#methods). It has all the methods that
the request function supports.

```jsx title="/src/providers/someSuperFancyApiCall.tsx"
import { METHODS } from '@orfium/toolbox';
import { baseInstance } from 'src/providers/instance';

const superAwesomeProviders = {
  superFancyGeter: (params = {}) =>
    baseInstance.createRequest({ method: METHODS.POST, url: '/superFanctyGet/' }),
};
```

Then, whenever you fetch your data (adding a React Query hook here as an example)

```jsx title="/src/model/superFancyModel.tsx"
import { useQuery } from "react-query";

import { superAwesomeProviders } from '/src/providers/someSuperFancyApiCall';

export const useSuperFancyModel() {
  const { request } = superAwesomeProviders.superFancyGeter();

  return useQuery("superFancy", () => request());
}
```
