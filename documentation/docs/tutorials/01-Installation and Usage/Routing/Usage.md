---
sidebar_position: 1
---

In all of our applications, the main file is called `App.tsx`.
In order to make routing work, you can create a `Routes.tsx` file and implement it like so:

```tsx title="/src/Routes.tsx"
import { generateRoutes, Authorization, RoutingStructure, BrowserRouter } from '@orfium/toolbox';

function Routes() {
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

```tsx title="/src/App.tsx"
function App() {
  return (
    <IctinusThemeProvider theme={themeOverride}>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </IctinusThemeProvider>
  );
};
```
