---
sidebar_label: 'Authentication'
sidebar_position: 1
---

## Overview

Being part of the Orfium One suite has it's benefits but it comes [with great responsibilities](https://www.youtube.com/watch?v=guuYU74wU70).

In order for a project to be integrated to the Orfium One suite of applications it **MUST** be using the Orfium SSO that is provided here.

It's in essence the Auth0 library for react but since this might change, we decided it's better to abstract it and provide it from the toolbox.

## Integration

It's fairly easy to integrate with the Orfium One SSO using the Authentication provider. We cover this in 5 simple steps.

### 1. Set up environment variables.

Ask <insert name of team/person responsible for SSO, maybe like core team or something> to provide you with the client id and domain that is created through the auth0
applications page for your application. These will be different for each environment.

You need to add these locally to a `.env` file that's ignored in order for you to develop with the authentication enabled and add the staging and production
ones to Heroku or AWS depending on what you use.

```title=".env"
REACT_APP_CLIENT_ID=<ClientId>
REACT_APP_DOMAIN=<Domain>
```

### 2. AuthenticationProvider

Then you need to wrap your app with the Authentication provider. Make sure to add this in the top level of your app so

```jsx title="/src/index.tsx"
...
import { AuthenticationProvider } from '@orfium/toolbox';
...

ReactDOM.render(
  <React.StrictMode>
    <AuthenticationProvider>
      <App />
    </AuthenticationProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

```

Authentication provider takes AuthenticationProviderProps in case you want to override something in the initialization of the Auth0 provider ,but you probably
don't want to do it and most probably they will be removed in a later version.

So, yeah. It's there but don't use it. If you need something more ,read [here](https://auth0.github.io/auth0-react/interfaces/Auth0ProviderOptions.html) for more options and information and please contact the maintainers of `toolbox` and SSO team to see if it's really needed in order to add it as a default.

### 3. :warning: Wait for it :warning:

It's recommended ( through the [official documentation](https://auth0.com/docs/libraries/auth0-react#isloading-and-error) , but also through the support forum of Auth0 ) to wait for the
authentication service. Make sure to add some kind of loader to the top of your application right after the AuthenticationProvider.

```jsx title="/src/App.tsx"
...
import { useAuthentication } from '@orfium/toolbox';
...

...
const App: React.FC = () => {
  const { isLoading } = useAuthentication();

  if (isLoading) {
    return <div>Loading...</div>;
  }
...
}
```

### 4. Use the values and function provided

The hook `useAuthentication` provides with the expected function to handle the authentication of a user. Some namings are kept as the Auth0 provides them ,
since the naming is really self-explanatory.

| prop                     | usage                                                    |
| ------------------------ | -------------------------------------------------------- |
| `isAuthenticated`        | true if is authenticated                                 |
| `isLoading`              | true if provider is still checking authentication status |
| `user`                   | user info                                                |
| `loginWithRedirect`      | Redirects to the Orfium SSO login page                   |
| `logout`                 | Handles the logout functionality                         |
| `getAccessTokenSilently` | Returns a promise containing the token                   |

### 5. Have a beer :beer:

Or a wine. Or a tea. I don't care. You are done! :sunglasses:

If you are not authenticated and the app is not loading you will be redirected to login page automatically from the toolbox.

## Examples

Let's see in depth with some examples the usage of `getAccessTokenSilently`. This is the most interesting one and the one you **WILL**and **MUST** use.

As a default set up we use [refresh tokens](https://auth0.com/learn/refresh-tokens/). This has not been said before because it doesn't change the way you use the app.

One interesting thing though is that, at some point you might make an API call to your BE using the token provided , and the request will fail by being unauthorized.

This is because the access token has expired. At this point you need to use the function `getAccessTokenSilently` to get a new one using your refresh token.

If this also fails then you need to `loginWithRedirect`.

```typescript jsx
...
request()
  .then((data) => happyPath())
  .catch((error) => {
      if (error.code === 401 && getAccessTokenSilently) {
        getAccessTokenSilently()
          .then((token: string) => {
            cookies.set(__TOKEN__, token);
          })
          .catch((error) => {
            loginWithRedirect();
        });
    }
})
...
```
