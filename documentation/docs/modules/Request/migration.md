---
sidebar_label: 'Migration'
sidebar_position: 3
---

# Migration notes :warning:

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
