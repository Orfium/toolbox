---
id: "modules"
title: "@orfium/toolbox"
sidebar_label: "Exports"
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

- [createAPIInstance](modules.md#createapiinstance)
- [useAuthentication](modules.md#useauthentication)

## component Functions

- [generateRoutes](modules.md#generateroutes)

## Type aliases

### AuthenticationContextProps

Ƭ **AuthenticationContextProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isAuthenticated` | `boolean` |
| `isLoading` | `boolean` |
| `user` | `User` \| `undefined` |
| `getAccessTokenSilently` | (`opts?`: `GetTokenSilentlyOptions`) => `Promise`<{ `decodedToken`: `Record`<`string`, `unknown`\> ; `token`: `string`  }\> |
| `loginWithRedirect` | (`o?`: `RedirectLoginOptions`<`any`\>) => `Promise`<`void`\> |
| `logout` | () => `void` |

#### Defined in

[src/authentication/types.ts:8](https://github.com/Orfium/toolbox/blob/a0882ae/src/authentication/types.ts#L8)

___

### AuthenticationProviderProps

Ƭ **AuthenticationProviderProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `overrides?` | `Auth0ClientOptions` |

#### Defined in

[src/authentication/types.ts:19](https://github.com/Orfium/toolbox/blob/a0882ae/src/authentication/types.ts#L19)

___

### Authorization

Ƭ **Authorization**: ``"anonymous"`` \| ``"authorized"`` \| ``"unauthorized"``

**`anonymous:`** general users that can view only public pages - default for all routes without authorization

**`unauthorized:`** only users that are logged in but not authorized to view those routes

**`authorized:`** only users that are logged in and also authorized for these routes

#### Defined in

[src/routing/Routing.tsx:14](https://github.com/Orfium/toolbox/blob/a0882ae/src/routing/Routing.tsx#L14)

___

### CreateAPIInstanceProps

Ƭ **CreateAPIInstanceProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `baseHeaders?` | `Record`<`string`, `string` \| `undefined`\> |
| `baseUrl` | `string` |

#### Defined in

[src/request/createAPIInstance.ts:8](https://github.com/Orfium/toolbox/blob/a0882ae/src/request/createAPIInstance.ts#L8)

___

### CreateAPIInstanceType

Ƭ **CreateAPIInstanceType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `instance` | [`AxiosInstance`](interfaces/AxiosInstance.md) |
| `createRequest` | <T\>(`props`: [`RequestProps`](modules.md#requestprops)) => { `cancelTokenSource`: [`CancelTokenSource`](interfaces/CancelTokenSource.md) ; `request`: () => `Promise`<`T`\>  } |
| `deleteToken` | () => `void` |
| `setToken` | (`token`: `string`) => `void` |

#### Defined in

[src/request/createAPIInstance.ts:13](https://github.com/Orfium/toolbox/blob/a0882ae/src/request/createAPIInstance.ts#L13)

___

### FallbackPath

Ƭ **FallbackPath**: ``"unauthenticated"`` \| ``"unauthorized"`` \| ``"authenticatedButAnonymous"``

**`unauthenticated:`** in case a user visits a path and has no authentication

**`unauthorized:`** when a user visits a path without authorization

**`authenticatedbutanonymous:`** when a user has authentication but tries to visit an anonymous path

#### Defined in

[src/routing/Routing.tsx:22](https://github.com/Orfium/toolbox/blob/a0882ae/src/routing/Routing.tsx#L22)

___

### Method

Ƭ **Method**: ``"get"`` \| ``"GET"`` \| ``"delete"`` \| ``"DELETE"`` \| ``"head"`` \| ``"HEAD"`` \| ``"options"`` \| ``"OPTIONS"`` \| ``"post"`` \| ``"POST"`` \| ``"put"`` \| ``"PUT"`` \| ``"patch"`` \| ``"PATCH"`` \| ``"purge"`` \| ``"PURGE"`` \| ``"link"`` \| ``"LINK"`` \| ``"unlink"`` \| ``"UNLINK"``

#### Defined in

node_modules/axios/index.d.ts:24

___

### MockRequest

Ƭ **MockRequest**: `MockAdapter`

#### Defined in

[src/request/mock.ts:3](https://github.com/Orfium/toolbox/blob/a0882ae/src/request/mock.ts#L3)

___

### RequestProps

Ƭ **RequestProps**: { `headers?`: `Record`<`string`, `unknown`\> ; `method`: `Methods` ; `params?`: `Record`<`string`, `unknown`\> ; `url`: `string`  } & `Pick`<[`AxiosRequestConfig`](interfaces/AxiosRequestConfig.md), ``"onUploadProgress"`` \| ``"onDownloadProgress"`` \| ``"responseType"``\>

#### Defined in

[src/request/request.ts:16](https://github.com/Orfium/toolbox/blob/a0882ae/src/request/request.ts#L16)

___

### ResponseType

Ƭ **ResponseType**: ``"arraybuffer"`` \| ``"blob"`` \| ``"document"`` \| ``"json"`` \| ``"text"`` \| ``"stream"``

#### Defined in

node_modules/axios/index.d.ts:36

___

### RouteComponentProps

Ƭ **RouteComponentProps**<`T`\>: `ReactRouterRouteComponentProps`<`any`\> & { `extraProps`: `T`  }

This is actual part of the library so you can skip it.
An extension of the React Router Component props to be used with the extra props.
Is being used to the route component to extend its functionality on types

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Defined in

[src/routing/Routing.tsx:35](https://github.com/Orfium/toolbox/blob/a0882ae/src/routing/Routing.tsx#L35)

___

### RouteItem

Ƭ **RouteItem**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `authorization?` | [`Authorization`](modules.md#authorization) | The authorization level of the route, there are 3: 'anonymous' \| 'authorized' \| 'unauthorized' -  **`defaultvalue:`** 'anonymous' |
| `component?` | `React.FunctionComponent`<[`RouteComponentProps`](modules.md#routecomponentprops)\> | A component that the route renders as page. This has all the props and extraProps that have been passed to that route |
| `extraProps?` | `unknown` | Any custom/extra props that are going to be available on the component |
| `path` | `string` \| `string`[] | The url path or paths of the route that will listen to in order to render |

#### Defined in

[src/routing/Routing.tsx:41](https://github.com/Orfium/toolbox/blob/a0882ae/src/routing/Routing.tsx#L41)

___

### RoutingStructure

Ƭ **RoutingStructure**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `fallbackPaths?` | `Partial`<`Record`<[`FallbackPath`](modules.md#fallbackpath), `string`\>\> | Holder of paths relative to the types of authorization. For every type there is a fallback path that a user will be redirected if they don't have access to it based on the authorization |
| `routes` | [`RouteItem`](modules.md#routeitem)[] | - |

#### Defined in

[src/routing/Routing.tsx:24](https://github.com/Orfium/toolbox/blob/a0882ae/src/routing/Routing.tsx#L24)

___

### TopBarProps

Ƭ **TopBarProps**: { `logoIcon`: `JSX.Element` ; `userMenu?`: `UserMenuProps`  } & `Omit`<`TopAppBarProps`, ``"logoIcon"`` \| ``"userMenu"``\>

#### Defined in

[src/authentication/TopBar.tsx:9](https://github.com/Orfium/toolbox/blob/a0882ae/src/authentication/TopBar.tsx#L9)

## Variables

### Authentication

• `Const` **Authentication**: `React.FC` & `AuthenticationSubComponents`

#### Defined in

[src/authentication/Authentication.tsx:18](https://github.com/Orfium/toolbox/blob/a0882ae/src/authentication/Authentication.tsx#L18)

___

### AuthenticationProvider

• `Const` **AuthenticationProvider**: `React.FC`

#### Defined in

[src/authentication/context.tsx:111](https://github.com/Orfium/toolbox/blob/a0882ae/src/authentication/context.tsx#L111)

___

### METHODS

• `Const` **METHODS**: `Record`<`MethodsKeys`, `Methods`\>

#### Defined in

[src/request/request.ts:14](https://github.com/Orfium/toolbox/blob/a0882ae/src/request/request.ts#L14)

___

### MockRequest

• **MockRequest**: typeof `MockAdapter`

#### Defined in

[src/request/mock.ts:4](https://github.com/Orfium/toolbox/blob/a0882ae/src/request/mock.ts#L4)

___

### orfiumIdBaseInstance

• `Const` **orfiumIdBaseInstance**: [`CreateAPIInstanceType`](modules.md#createapiinstancetype)

#### Defined in

[src/request/index.ts:6](https://github.com/Orfium/toolbox/blob/a0882ae/src/request/index.ts#L6)

## Other Functions

### createAPIInstance

▸ **createAPIInstance**(`__namedParameters`): [`CreateAPIInstanceType`](modules.md#createapiinstancetype)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`CreateAPIInstanceProps`](modules.md#createapiinstanceprops) |

#### Returns

[`CreateAPIInstanceType`](modules.md#createapiinstancetype)

#### Defined in

[src/request/createAPIInstance.ts:30](https://github.com/Orfium/toolbox/blob/a0882ae/src/request/createAPIInstance.ts#L30)

___

### useAuthentication

▸ **useAuthentication**(): [`AuthenticationContextProps`](modules.md#authenticationcontextprops)

#### Returns

[`AuthenticationContextProps`](modules.md#authenticationcontextprops)

#### Defined in

[src/authentication/context.tsx:188](https://github.com/Orfium/toolbox/blob/a0882ae/src/authentication/context.tsx#L188)

___

## component Functions

### generateRoutes

▸ **generateRoutes**(`props`): `Element`

For each item of the structure it creates a new Route with a Switch statement.
It automatically handles the redirections based on authorization of each route to specific pages
If the fallbacks are defined then those will be used instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | `Object` | Component properties |
| `props.fallbackComponent?` | `ComponentType`<{}\> | The component that will render if none of the routes match the url location - @default Page not found |
| `props.isAuthenticated` | `boolean` | A boolean that are passed from the parent Application to let the generation of routes know the state of the user |
| `props.structure` | [`RoutingStructure`](modules.md#routingstructure) | A list of Routes that needs to render with authorization level and extra props. |

#### Returns

`Element`

#### Defined in

[src/routing/Routing.tsx:62](https://github.com/Orfium/toolbox/blob/a0882ae/src/routing/Routing.tsx#L62)
