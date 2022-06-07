---
sidebar_label: 'Request'
sidebar_position: 3
---

## Overview

Request is about getting all the data from and to your server. In order to avoid applications having to implement and
maintain their own solution, toolbox provides a tried and tested instance generator for generating request handlers.

All you need to pass is the base URL and your base headers.

The [returned value](/docs/api/modules#createapiinstancetype) contains:

- `instance`, ( basically an [axios instance](/docs/api/interfaces/AxiosInstance) )
- `createRequest` function , that returns the request function and the cancel token
  - the `request` takes the [RequestProps](/docs/api/modules#requestprops),returns a Promise that contains the data or the error and
  - the [`CancelTokenSource`](/docs/api/interfaces/CancelTokenSource) in case you wish to cancel the token
- `setToken` , for setting the token in the `Authorization` header as `Token XXXX` and
- `deleteToken` , for deleting the token from the header `Authorization`

## Usage

### Single Instance

Initialization of the instance.

```jsx title="/src/providers/instance.tsx"
import { createAPIInstance } from '@orfium/toolbox';

const baseURL = process.env.REACT_APP_BASE_URL;

export const baseInstance = createAPIInstance({
  baseUrl: baseURL,
  baseHeaders: {},
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

Don't forget that you have to set the token after you login and to delete it after you logout.

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

## Migration notes :warning:

### Request

The `request` function returned from `createRequest` take the props as object to help with readability.

In order to avoid the diff in the migration to toolbox to be too big. You can use the code below to migrate the request function in a separate PR.

```jsx title="/src/providers/instance.tsx"
import { createAPIInstance } from '@orfium/toolbox';

const baseURL = process.env.REACT_APP_BASE_URL;

export const instanceV1 = createAPIInstance({
  baseUrl: baseURL + '/v1',
});

export const request = <T = any>(
  method: string,
  url: string,
  { params }: Anything,
  withoutBase = false,
  headers = {},
  onDownloadProgress?: (e: Anything) => void,
  onUploadProgress?: (e: Anything) => void,
  responseType?: 'arraybuffer' | 'document' | 'json' | 'text' | 'stream'
) => {
  const { request: req, cancelTokenSource: canc } =
    instanceV1.createRequest <
    T >
    {
      method,
      url,
      params,
      withoutBase,
      headers,
      onDownloadProgress,
      onUploadProgress,
      responseType,
    };

  return { request: req, cancelTokenSource: canc };
};
```

### setToken

The `setToken` function takes a string and sets a token in the header `Authorization` in the format:

```json
{
  ...
  "Authorization": "Token XXXXXXX",
  ...
}
```

This is because it's purpose is to work only with the OrfiumSSO and yggdrasil.

If you are using toolbox outside of the OrfiumOne ecosystem then _shame on you_ and
you can use the code below until you come to your senses. Just replace Token with whatever you are using

```jsx title="/src/providers/instance.tsx"
import { createAPIInstance } from '@orfium/toolbox';

const baseURL = process.env.REACT_APP_BASE_URL;

export const instance = createAPIInstance({
  baseUrl: baseURL,
});

export const setAxiosToken = (token: string) => {
  instance.instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const deleteAxiosHeaders = () => {
  delete instance.instance.defaults.headers.common.Authorization;
};
```
