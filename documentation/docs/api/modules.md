---
id: 'modules'
title: '@orfium/toolbox'
sidebar_label: 'Exports'
sidebar_position: 0.5
custom_edit_url: null
---

## Namespaces

- [Authentication](namespaces/Authentication.md)

## Classes

- [BrowserRouter](classes/BrowserRouter.md)
- [Redirect](classes/Redirect.md)
- [Route](classes/Route.md)

## Interfaces

- [AxiosAdapter](interfaces/AxiosAdapter.md)
- [AxiosBasicCredentials](interfaces/AxiosBasicCredentials.md)
- [AxiosError](interfaces/AxiosError.md)
- [AxiosInstance](interfaces/AxiosInstance.md)
- [AxiosInterceptorManager](interfaces/AxiosInterceptorManager.md)
- [AxiosPromise](interfaces/AxiosPromise.md)
- [AxiosProxyConfig](interfaces/AxiosProxyConfig.md)
- [AxiosRequestConfig](interfaces/AxiosRequestConfig.md)
- [AxiosResponse](interfaces/AxiosResponse.md)
- [AxiosStatic](interfaces/AxiosStatic.md)
- [AxiosTransformer](interfaces/AxiosTransformer.md)
- [Cancel](interfaces/Cancel.md)
- [CancelStatic](interfaces/CancelStatic.md)
- [CancelToken](interfaces/CancelToken.md)
- [CancelTokenSource](interfaces/CancelTokenSource.md)
- [CancelTokenStatic](interfaces/CancelTokenStatic.md)
- [Canceler](interfaces/Canceler.md)
- [TransitionalOptions](interfaces/TransitionalOptions.md)

## Other Functions

- [createAPIInstance](modules.md#createapiinstance-2)
- [useAuthentication](modules.md#useauthentication-2)
- [useOrganization](modules.md#useorganization-2)

## component Functions

- [generateRoutes](modules.md#generateroutes-2)

## Type aliases

### AuthenticationContextProps

Ƭ **AuthenticationContextProps**: `Object`

#### Type declaration

| Name                     | Type                                                                                                                                                                                    |
| :----------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `isAuthenticated`        | `boolean`                                                                                                                                                                               |
| `isLoading`              | `boolean`                                                                                                                                                                               |
| `user`                   | [`User`](modules.md#user-2) \| `undefined`                                                                                                                                              |
| `getAccessTokenSilently` | (`opts?`: `GetTokenSilentlyOptions`) => `Promise`<{ `decodedToken`: [`DecodedTokenResponse`](modules.md#decodedtokenresponse-2) \| `Record`<`string`, `never`\> ; `token`: `string` }\> |
| `loginWithRedirect`      | (`o?`: `RedirectLoginOptions`<`any`\>) => `Promise`<`void`\>                                                                                                                            |
| `logout`                 | () => `void`                                                                                                                                                                            |

#### Defined in

[src/authentication/types.ts:43](https://github.com/Orfium/toolbox/blob/34b898e/src/authentication/types.ts#L43)

---

### AuthenticationProviderProps

Ƭ **AuthenticationProviderProps**: `Object`

#### Type declaration

| Name         | Type                 |
| :----------- | :------------------- |
| `overrides?` | `Auth0ClientOptions` |

#### Defined in

[src/authentication/types.ts:54](https://github.com/Orfium/toolbox/blob/34b898e/src/authentication/types.ts#L54)

---

### Authorization

Ƭ **Authorization**: `"anonymous"` \| `"authorized"` \| `"unauthorized"`

**`anonymous:`** general users that can view only public pages - default for all routes without authorization

**`unauthorized:`** only users that are logged in but not authorized to view those routes

**`authorized:`** only users that are logged in and also authorized for these routes

#### Defined in

[src/routing/Routing.tsx:14](https://github.com/Orfium/toolbox/blob/34b898e/src/routing/Routing.tsx#L14)

---

### CreateAPIInstanceProps

Ƭ **CreateAPIInstanceProps**: `Object`

#### Type declaration

| Name                 | Type                                         |
| :------------------- | :------------------------------------------- |
| `baseHeaders?`       | `Record`<`string`, `string` \| `undefined`\> |
| `baseUrl`            | `string`                                     |
| `hasAutomaticToken?` | `boolean`                                    |

#### Defined in

[src/request/createAPIInstance.ts:8](https://github.com/Orfium/toolbox/blob/34b898e/src/request/createAPIInstance.ts#L8)

---

### CreateAPIInstanceType

Ƭ **CreateAPIInstanceType**: `Object`

#### Type declaration

| Name            | Type                                                                                                                                                                             |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `instance`      | [`AxiosInstance`](interfaces/AxiosInstance.md)                                                                                                                                   |
| `createRequest` | <T\>(`props`: [`RequestProps`](modules.md#requestprops-2)) => { `cancelTokenSource`: [`CancelTokenSource`](interfaces/CancelTokenSource.md) ; `request`: () => `Promise`<`T`\> } |
| `deleteToken`   | () => `void`                                                                                                                                                                     |
| `setToken`      | (`token`: `string`) => `void`                                                                                                                                                    |

#### Defined in

[src/request/createAPIInstance.ts:14](https://github.com/Orfium/toolbox/blob/34b898e/src/request/createAPIInstance.ts#L14)

---

### DecodedTokenResponse

Ƭ **DecodedTokenResponse**: `Object`

#### Type declaration

| Name           | Type       |
| :------------- | :--------- |
| `aud?`         | `string`[] |
| `azp?`         | `string`   |
| `exp?`         | `number`   |
| `iat?`         | `number`   |
| `iss?`         | `string`   |
| `org_id?`      | `string`   |
| `permissions?` | `string`[] |
| `scope?`       | `string`   |
| `sub?`         | `string`   |

#### Defined in

[src/authentication/types.ts:7](https://github.com/Orfium/toolbox/blob/34b898e/src/authentication/types.ts#L7)

---

### FallbackPath

Ƭ **FallbackPath**: `"unauthenticated"` \| `"unauthorized"` \| `"authenticatedButAnonymous"`

**`unauthenticated:`** in case a user visits a path and has no authentication

**`unauthorized:`** when a user visits a path without authorization

**`authenticatedbutanonymous:`** when a user has authentication but tries to visit an anonymous path

#### Defined in

[src/routing/Routing.tsx:22](https://github.com/Orfium/toolbox/blob/34b898e/src/routing/Routing.tsx#L22)

---

### Method

Ƭ **Method**: `"get"` \| `"GET"` \| `"delete"` \| `"DELETE"` \| `"head"` \| `"HEAD"` \| `"options"` \| `"OPTIONS"` \| `"post"` \| `"POST"` \| `"put"` \| `"PUT"` \| `"patch"` \| `"PATCH"` \| `"purge"` \| `"PURGE"` \| `"link"` \| `"LINK"` \| `"unlink"` \| `"UNLINK"`

#### Defined in

node_modules/axios/index.d.ts:24

---

### MockRequest

Ƭ **MockRequest**: `MockAdapter`

#### Defined in

[src/request/mock.ts:3](https://github.com/Orfium/toolbox/blob/34b898e/src/request/mock.ts#L3)

---

### Organization

Ƭ **Organization**: `Object`

#### Type declaration

| Name                     | Type                                             |
| :----------------------- | :----------------------------------------------- |
| `branding`               | { `logo_url`: `string` }                         |
| `branding.logo_url`      | `string`                                         |
| `can_administrate`       | `boolean`                                        |
| `display_name`           | `string`                                         |
| `metadata`               | { `product_codes`: `string` ; `type`: `string` } |
| `metadata.product_codes` | `string`                                         |
| `metadata.type`          | `string`                                         |
| `name`                   | `string`                                         |
| `org_id`                 | `string`                                         |

#### Defined in

[src/store/useOrganization.ts:4](https://github.com/Orfium/toolbox/blob/34b898e/src/store/useOrganization.ts#L4)

---

### RequestProps

Ƭ **RequestProps**: { `headers?`: `Record`<`string`, `unknown`\> ; `method`: `Methods` ; `params?`: `Record`<`string`, `unknown`\> ; `url`: `string` } & `Pick`<[`AxiosRequestConfig`](interfaces/AxiosRequestConfig.md), `"onUploadProgress"` \| `"onDownloadProgress"` \| `"responseType"`\>

#### Defined in

[src/request/request.ts:16](https://github.com/Orfium/toolbox/blob/34b898e/src/request/request.ts#L16)

---

### ResponseType

Ƭ **ResponseType**: `"arraybuffer"` \| `"blob"` \| `"document"` \| `"json"` \| `"text"` \| `"stream"`

#### Defined in

node_modules/axios/index.d.ts:36

---

### RouteComponentProps

Ƭ **RouteComponentProps**<`T`\>: `ReactRouterRouteComponentProps`<`any`\> & { `extraProps`: `T` }

This is actual part of the library so you can skip it.
An extension of the React Router Component props to be used with the extra props.
Is being used to the route component to extend its functionality on types

#### Type parameters

| Name | Type      |
| :--- | :-------- |
| `T`  | `unknown` |

#### Defined in

[src/routing/Routing.tsx:35](https://github.com/Orfium/toolbox/blob/34b898e/src/routing/Routing.tsx#L35)

---

### RouteItem

Ƭ **RouteItem**: `Object`

#### Type declaration

| Name             | Type                                                                                  | Description                                                                                                                        |
| :--------------- | :------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------- |
| `authorization?` | [`Authorization`](modules.md#authorization-2)                                         | The authorization level of the route, there are 3: 'anonymous' \| 'authorized' \| 'unauthorized' - **`defaultvalue:`** 'anonymous' |
| `component?`     | `React.FunctionComponent`<[`RouteComponentProps`](modules.md#routecomponentprops-2)\> | A component that the route renders as page. This has all the props and extraProps that have been passed to that route              |
| `extraProps?`    | `unknown`                                                                             | Any custom/extra props that are going to be available on the component                                                             |
| `path`           | `string` \| `string`[]                                                                | The url path or paths of the route that will listen to in order to render                                                          |

#### Defined in

[src/routing/Routing.tsx:41](https://github.com/Orfium/toolbox/blob/34b898e/src/routing/Routing.tsx#L41)

---

### RoutingStructure

Ƭ **RoutingStructure**: `Object`

#### Type declaration

| Name             | Type                                                                         | Description                                                                                                                                                                               |
| :--------------- | :--------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fallbackPaths?` | `Partial`<`Record`<[`FallbackPath`](modules.md#fallbackpath-2), `string`\>\> | Holder of paths relative to the types of authorization. For every type there is a fallback path that a user will be redirected if they don't have access to it based on the authorization |
| `routes`         | [`RouteItem`](modules.md#routeitem-2)[]                                      | -                                                                                                                                                                                         |

#### Defined in

[src/routing/Routing.tsx:24](https://github.com/Orfium/toolbox/blob/34b898e/src/routing/Routing.tsx#L24)

---

### TopBarProps

Ƭ **TopBarProps**: { `logoIcon`: `JSX.Element` ; `userMenu?`: `never` } & `Omit`<`TopAppBarProps`, `"logoIcon"` \| `"userMenu"`\>

#### Defined in

[src/authentication/components/TopBar/TopBar.tsx:8](https://github.com/Orfium/toolbox/blob/34b898e/src/authentication/components/TopBar/TopBar.tsx#L8)

---

### User

Ƭ **User**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Type declaration

| Name                     | Type      |
| :----------------------- | :-------- |
| `address?`               | `string`  |
| `birthdate?`             | `string`  |
| `email?`                 | `string`  |
| `email_verified?`        | `boolean` |
| `family_name?`           | `string`  |
| `gender?`                | `string`  |
| `given_name?`            | `string`  |
| `locale?`                | `string`  |
| `middle_name?`           | `string`  |
| `name?`                  | `string`  |
| `nickname?`              | `string`  |
| `phone_number?`          | `string`  |
| `phone_number_verified?` | `boolean` |
| `picture?`               | `string`  |
| `preferred_username?`    | `string`  |
| `profile?`               | `string`  |
| `sub?`                   | `string`  |
| `updated_at?`            | `string`  |
| `website?`               | `string`  |
| `zoneinfo?`              | `string`  |

#### Defined in

[src/authentication/types.ts:19](https://github.com/Orfium/toolbox/blob/34b898e/src/authentication/types.ts#L19)

## Variables

### Authentication

• `Const` **Authentication**: `React.FC` & `AuthenticationSubComponents`

#### Defined in

[src/authentication/Authentication.tsx:22](https://github.com/Orfium/toolbox/blob/34b898e/src/authentication/Authentication.tsx#L22)

---

### AuthenticationProvider

• `Const` **AuthenticationProvider**: `React.FC`

#### Defined in

[src/authentication/context.tsx:130](https://github.com/Orfium/toolbox/blob/34b898e/src/authentication/context.tsx#L130)

---

### METHODS

• `Const` **METHODS**: `Record`<`MethodsKeys`, `Methods`\>

#### Defined in

[src/request/request.ts:14](https://github.com/Orfium/toolbox/blob/34b898e/src/request/request.ts#L14)

---

### MockRequest

• **MockRequest**: typeof `MockAdapter`

#### Defined in

[src/request/mock.ts:4](https://github.com/Orfium/toolbox/blob/34b898e/src/request/mock.ts#L4)

---

### orfiumIdBaseInstance

• `Const` **orfiumIdBaseInstance**: [`CreateAPIInstanceType`](modules.md#createapiinstancetype-2)

#### Defined in

[src/request/index.ts:6](https://github.com/Orfium/toolbox/blob/34b898e/src/request/index.ts#L6)

## Other Functions

### createAPIInstance

▸ **createAPIInstance**(`__namedParameters`): [`CreateAPIInstanceType`](modules.md#createapiinstancetype-2)

#### Parameters

| Name                | Type                                                            |
| :------------------ | :-------------------------------------------------------------- |
| `__namedParameters` | [`CreateAPIInstanceProps`](modules.md#createapiinstanceprops-2) |

#### Returns

[`CreateAPIInstanceType`](modules.md#createapiinstancetype-2)

#### Defined in

[src/request/createAPIInstance.ts:31](https://github.com/Orfium/toolbox/blob/34b898e/src/request/createAPIInstance.ts#L31)

---

### useAuthentication

▸ **useAuthentication**(): [`AuthenticationContextProps`](modules.md#authenticationcontextprops-2)

#### Returns

[`AuthenticationContextProps`](modules.md#authenticationcontextprops-2)

#### Defined in

[src/authentication/context.tsx:248](https://github.com/Orfium/toolbox/blob/34b898e/src/authentication/context.tsx#L248)

---

### useOrganization

▸ **useOrganization**(): `Object`

#### Returns

`Object`

| Name                   | Type                                                       |
| :--------------------- | :--------------------------------------------------------- |
| `organizations`        | [`Organization`](modules.md#organization-2)[]              |
| `selectedOrganization` | `undefined` \| [`Organization`](modules.md#organization-2) |

#### Defined in

[src/index.ts:8](https://github.com/Orfium/toolbox/blob/34b898e/src/index.ts#L8)

---

## component Functions

### generateRoutes

▸ **generateRoutes**(`props`): `Element`

For each item of the structure it creates a new Route with a Switch statement.
It automatically handles the redirections based on authorization of each route to specific pages
If the fallbacks are defined then those will be used instead.

#### Parameters

| Name                       | Type                                                | Description                                                                                                      |
| :------------------------- | :-------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------- |
| `props`                    | `Object`                                            | Component properties                                                                                             |
| `props.fallbackComponent?` | `ComponentType`<{}\>                                | The component that will render if none of the routes match the url location - @default Page not found            |
| `props.isAuthenticated`    | `boolean`                                           | A boolean that are passed from the parent Application to let the generation of routes know the state of the user |
| `props.structure`          | [`RoutingStructure`](modules.md#routingstructure-2) | A list of Routes that needs to render with authorization level and extra props.                                  |

#### Returns

`Element`

#### Defined in

[src/routing/Routing.tsx:62](https://github.com/Orfium/toolbox/blob/34b898e/src/routing/Routing.tsx#L62)
