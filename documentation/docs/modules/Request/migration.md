---
sidebar_label: 'Migration'
sidebar_position: 3
---

# Migration notes :warning:

### Request

The `request` function returned from `createRequest` takes its props as an object, in order to help with readability.

For your convenience, you can use the code below to migrate the request function in a separate PR:

```jsx title="/src/providers/instance.tsx"
import { createAPIInstance } from '@orfium/toolbox';

const baseURL = process.env.REACT_APP_BASE_URL;

export const instanceV1 = createAPIInstance({
  baseUrl: baseURL + '/v1',
});

export const request = <T = any>(
  method: string,
  url: string,
  { params }: any,
  withoutBase = false,
  headers = {},
  onDownloadProgress?: (e: Anything) => void,
  onUploadProgress?: (e: Anything) => void,
  responseType?: 'arraybuffer' | 'document' | 'json' | 'text' | 'stream'
) => {
  const { request: req, cancelTokenSource: canc } =
    instanceV1.createRequest<T>
    ({
      method,
      url,
      params,
      withoutBase,
      headers,
      onDownloadProgress,
      onUploadProgress,
      responseType,
    });

  return { request: req, cancelTokenSource: canc };
};
```

### setToken

The `setToken` function takes a token input as a string and then sets it in the `Authorization` header, like so:

```json
{
  ...
  "Authorization": "Token XXXXXXX",
  ...
}
```

This is because its purpose is to work only with the OrfiumSSO and yggdrasil.

If you are using the toolbox outside of the Orfium One ecosystem, then _shame on you_.
You can use the code below until you come to your senses. Just replace `token` with whatever you are using

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
