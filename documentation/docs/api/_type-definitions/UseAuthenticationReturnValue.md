| Name                     | Type                                                              |
| :----------------------- |:------------------------------------------------------------------|
| `isAuthenticated`        | `boolean`                                                         |
| `isLoading`              | `boolean`                                                         |
| `permissions`            | [`Permissions`](/docs/api/Types/Permissions)                      |
| `user`                   | <code>[User](/docs/api/Types/User) &#124; undefined</code>        |
| `getAccessTokenSilently` | [`GetAccessTokenSilently`](/docs/api/Types/GetAccessTokenSilently)  |
| `loginWithRedirect`      | <code>(o?: RedirectLoginOptions\<any\>) => Promise\<void\></code> |
| `logout`                 | `() => void`                                                      |
