---
sidebar_label: 'Routing'
sidebar_position: 1
---

# Overview

Routing is about getting all the pieces of your Application together. In order to avoid application having their own route system
toolbox is providing all the necessary system to accomplish routing on your application through a simple configuration.

## Structure

Is important to take a look on the structure to understand how the routing works.

The structure consists of two things: [`routes`](/docs/api/modules#routeitem) and [`fallbackPaths`](/docs/api/modules#fallbackpath)

For each fallbackPath you provide there must be a defined route otherwise it will redirect to a dead page.

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
