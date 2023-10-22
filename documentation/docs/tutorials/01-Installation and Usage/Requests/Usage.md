---
sidebar_position: 1
---


## Single Instance

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

## Multiple Instances

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

## Set/Delete Authentication Token

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

## Create Request Function

The most important thing, and the one you will interact mostly with, is the `createRequest` function

You can just import the created instance and use it to create a request function. The toolbox exposes a METHODS object for your convenience. It has all the methods that
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
