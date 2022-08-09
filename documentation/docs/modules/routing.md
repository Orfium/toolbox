---
sidebar_label: 'Routing'
sidebar_position: 2
---

# Routing

## Overview

Routing is about putting all the pieces of your Application together. In order to avoid each application having their own routing system, toolbox is providing all the necessary functions to accomplish that through simple configuration.

## Structure

It is important to take a look on the structure to understand how the routing works.

The structure consists of three things:

[`routes`](/docs/api/modules#routeitem)
`isAuthenticated`
[`fallbackPaths`](/docs/api/modules#fallbackpath)

`routes` definition requires two things to work, a `path` that defines the URL, which, when matched, will render the `component`.
Authorization defaults to `anonymous` if not defined, which is the state that any user can access. You can see [here](/docs/api/modules#authorization) about what authorization supports.

By passing the `isAuthenticated` prop, the routing system knows when the user is authenticated or not. Then, it will automatically define the routing restrictions, based on the information provided on each route through the configuration object, using the `authorization` key.

By default, Routing will redirect the user to the default paths/routes, if they are either unauthenticated or unauthorized. With `fallbackPaths` you can **overwrite**
the default logic and define your own default paths. **_Important_** - For each `fallbackPath` you provide, there **_must_** be a defined route, otherwise it will redirect to a dead page. See cases [here](/docs/api/modules#fallbackpath)

## Usage

In all of our applications, the main file is called `App.tsx`.
In order to make routing work, you can create a `Routes.tsx` file and implement it like so:

```jsx title="/src/Routes.tsx"
...
import { generateRoutes, Authorization, RoutingStructure, BrowserRouter } from '@orfium/toolbox';
...

const Routes: React.FC = () => {
  const token = getCookieItem(__TOKEN__);
  // This is a demo authorization. You have to implement something here
  const authorization: Authorization = token ? 'authorized' : 'unauthorized';

  const structure: RoutingStructure = {
    fallbackPaths: {
      unauthenticated: urls.login(),
      unauthorized: '/unauthorized',
    },
    routes: [
      { path: urls.signUp(), component: LoginPage, extraProps: Pages.SignUp },
      { authorization, path: urls.earnings(), component: Earnings },
      { authorization, path: urls.contactUs(), component: ContactUs },
      { authorization, path: urls.home(), component: HomePage },
    ],
  };
  return (
    <BrowserRouter>
      {generateRoutes({
        // this is a demo authentication
        isAuthenticated: Boolean(token),
        structure,
        fallbackComponent: () => <NotFoundPage />,
      })}
    </BrowserRouter>
  );
};
```

Then, your `App.tsx` file should look like this:

```jsx title="/src/App.tsx"
const App: React.FC = () => {
  return (
    <IctinusThemeProvider theme={themeOverride}>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </IctinusThemeProvider>
  );
};
```
