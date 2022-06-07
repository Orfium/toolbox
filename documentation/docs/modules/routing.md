---
sidebar_label: 'Routing'
sidebar_position: 2
---

# Overview

Routing is about getting all the pieces of your Application together. In order to avoid application having their own route system
toolbox is providing all the necessary system to accomplish routing on your application through a simple configuration.

## Structure

Is important to take a look on the structure to understand how the routing works.

The structure consists of three things:

[`routes`](/docs/api/modules#routeitem)
`isAuthenticated`
[`fallbackPaths`](/docs/api/modules#fallbackpath)

Routes definition requires two things to work, a `component` to render when the url is selected and a `path` that will be the url path which when it matches it will render.
Authorization defaults to `anonymous` if not defined, which is the state that any user can access. You can see [here](/docs/api/modules#authorization) about what authorization supports.

`isAuthenticated` provides the routing system the information from the App if the user is logged in or not. Then based on the information provided
on each route about `authorization` it will define the restrictions.

Routing by default if a user is unauthenticated or unauthorized will redirect him to default paths/routes. With `fallbackPaths` you can **overwrite**
the default logic and define your own paths. **_Important_** - For each `fallbackPath` you provide there must be a defined route otherwise it will redirect to a dead page. See cases [here](/docs/api/modules#fallbackpath)

## Usage

In all of our applications we have the main part which called App.tsx. This is what CRA provides and what we use as well.
In order to make it work you can create a Routes.tsx and implement the following.

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

Out put should look like the below on the App

```jsx title="/src/App.tsx"
const App: React.FC = () => {
  return (
    <IctinusThemeProvider theme={themeOverride}>
      <QueryClientProvider client={queryClient}>
        // highlight-next-line
        <Routes />
      </QueryClientProvider>
    </IctinusThemeProvider>
  );
};
```
