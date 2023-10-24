---
id: "modules"
title: "@orfium/toolbox"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

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

- [Authentication](modules.md#authentication-114)
- [Navigation](modules.md#navigation-114)
- [RedirectWithStatePassthrough](modules.md#redirectwithstatepassthrough-14)
- [TopBar](modules.md#topbar-114)
- [createAPIInstance](modules.md#createapiinstance-114)
- [useAuthentication](modules.md#useauthentication-114)
- [useOrfiumProducts](modules.md#useorfiumproducts-18)
- [useOrganizations](modules.md#useorganizations-18)
- [useTopBarUtilitySection](modules.md#usetopbarutilitysection-10)

## component Functions

- [generateRoutes](modules.md#generateroutes-114)

## Type aliases

### AuthenticationContextValue

Ƭ **AuthenticationContextValue**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isAuthenticated` | `boolean` |
| `isLoading` | `boolean` |
| `user` | [`User`](modules.md#user-114) \| `undefined` |
| `getAccessTokenSilently` | (`opts?`: `GetTokenSilentlyOptions`) => `Promise`<`void` \| { `decodedToken`: [`DecodedTokenResponse`](modules.md#decodedtokenresponse-114) \| `Record`<`string`, `never`\> ; `token`: `string`  }\> |
| `loginWithRedirect` | (`o?`: `RedirectLoginOptions`<`any`\>) => `Promise`<`void`\> |
| `logout` | () => `void` |

#### Defined in

[src/authentication/types.ts:45](https://github.com/Orfium/toolbox/blob/50e8912/src/authentication/types.ts#L45)

___

### AuthenticationProps

Ƭ **AuthenticationProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `children` | `ReactNode` |

#### Defined in

[src/authentication/components/Authentication/Authentication.tsx:12](https://github.com/Orfium/toolbox/blob/50e8912/src/authentication/components/Authentication/Authentication.tsx#L12)

___

### Authorization

Ƭ **Authorization**: ``"anonymous"`` \| ``"authorized"`` \| ``"unauthorized"``

**`anonymous:`** general users that can view only public pages - default for all routes without authorization

**`unauthorized:`** only users that are logged in but not authorized to view those routes

**`authorized:`** only users that are logged in and also authorized for these routes

#### Defined in

[src/routing/Routing.tsx:14](https://github.com/Orfium/toolbox/blob/50e8912/src/routing/Routing.tsx#L14)

___

### CreateAPIInstanceProps

Ƭ **CreateAPIInstanceProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `baseHeaders?` | `Record`<`string`, `string` \| `undefined`\> |
| `baseUrl` | `string` |
| `hasAutomaticToken?` | `boolean` |

#### Defined in

[src/request/createAPIInstance.ts:7](https://github.com/Orfium/toolbox/blob/50e8912/src/request/createAPIInstance.ts#L7)

___

### CreateAPIInstanceType

Ƭ **CreateAPIInstanceType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `instance` | [`AxiosInstance`](interfaces/AxiosInstance.md) |
| `createRequest` | <T\>(`props`: [`RequestProps`](modules.md#requestprops-114)) => { `cancelTokenSource`: [`CancelTokenSource`](interfaces/CancelTokenSource.md) ; `request`: () => `Promise`<`T`\>  } |
| `deleteToken` | () => `void` |
| `setToken` | (`token`: `string`) => `void` |

#### Defined in

[src/request/createAPIInstance.ts:13](https://github.com/Orfium/toolbox/blob/50e8912/src/request/createAPIInstance.ts#L13)

___

### DecodedTokenResponse

Ƭ **DecodedTokenResponse**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `aud?` | `string`[] | - |
| `azp?` | `string` | - |
| `exp?` | `number` | - |
| `iat?` | `number` | - |
| `iss?` | `string` | - |
| `org_id?` | `string` | the organization id of the user currently selected |
| `permissions?` | `string`[] | the permissions defined on the user for more info visit https://orfium.atlassian.net/wiki/spaces/OPS/pages/2554134739/Roles+and+Permissions#Organization-Roles |
| `scope?` | `string` | - |
| `sub?` | `string` | - |

#### Defined in

[src/authentication/types.ts:9](https://github.com/Orfium/toolbox/blob/50e8912/src/authentication/types.ts#L9)

___

### FallbackPath

Ƭ **FallbackPath**: ``"unauthenticated"`` \| ``"unauthorized"`` \| ``"authenticatedButAnonymous"``

**`unauthenticated:`** in case a user visits a path and has no authentication

**`unauthorized:`** when a user visits a path without authorization

**`authenticatedbutanonymous:`** when a user has authentication but tries to visit an anonymous path

#### Defined in

[src/routing/Routing.tsx:22](https://github.com/Orfium/toolbox/blob/50e8912/src/routing/Routing.tsx#L22)

___

### MenuItem

Ƭ **MenuItem**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `children?` | [`Optional`](modules.md#optional-114)<[`MenuItem`](modules.md#menuitem-114), ``"iconName"``\>[] |
| `iconName` | `AcceptedIconNames` |
| `text` | `string` |
| `url` | `string` |

#### Defined in

[src/ui/Navigation/types.ts:4](https://github.com/Orfium/toolbox/blob/50e8912/src/ui/Navigation/types.ts#L4)

___

### Method

Ƭ **Method**: ``"get"`` \| ``"GET"`` \| ``"delete"`` \| ``"DELETE"`` \| ``"head"`` \| ``"HEAD"`` \| ``"options"`` \| ``"OPTIONS"`` \| ``"post"`` \| ``"POST"`` \| ``"put"`` \| ``"PUT"`` \| ``"patch"`` \| ``"PATCH"`` \| ``"purge"`` \| ``"PURGE"`` \| ``"link"`` \| ``"LINK"`` \| ``"unlink"`` \| ``"UNLINK"``

#### Defined in

node_modules/axios/index.d.ts:24

___

### MockRequest

Ƭ **MockRequest**: `MockAdapter`

#### Defined in

[src/request/mock.ts:3](https://github.com/Orfium/toolbox/blob/50e8912/src/request/mock.ts#L3)

___

### NavigationProps

Ƭ **NavigationProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `adminButtonTooltipText?` | `string` |
| `adminNavigation?` | [`MenuItem`](modules.md#menuitem-114)[] |
| `adminNavigationHeader?` | `string` |
| `adminNavigationURLSegment?` | `string` |
| `extras?` | { `menuItems`: `Omit`<[`MenuItem`](modules.md#menuitem-114), ``"children"``\>[] ; `title`: `string`  }[] |
| `hideOrgSwitcher?` | `boolean` |
| `navigationHeader` | `string` |
| `regularNavigation` | [`MenuItem`](modules.md#menuitem-114)[] |
| `userIsAdmin?` | `boolean` |

#### Defined in

[src/ui/Navigation/Navigation.tsx:10](https://github.com/Orfium/toolbox/blob/50e8912/src/ui/Navigation/Navigation.tsx#L10)

___

### Optional

Ƭ **Optional**<`T`, `K`\>: `Omit`<`T`, `K`\> & `Partial`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

[src/utils/types.ts:1](https://github.com/Orfium/toolbox/blob/50e8912/src/utils/types.ts#L1)

___

### OrfiumProductsContextValue

Ƭ **OrfiumProductsContextValue**: [`Product`](modules.md#product-18)[] \| ``null``

#### Defined in

[src/authentication/types.ts:57](https://github.com/Orfium/toolbox/blob/50e8912/src/authentication/types.ts#L57)

___

### Organization

Ƭ **Organization**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `branding` | { `logo_url`: `string`  } |
| `branding.logo_url` | `string` |
| `can_administrate` | `boolean` |
| `display_name` | `string` |
| `metadata` | { `product_codes`: `string` ; `type`: `string`  } |
| `metadata.product_codes` | `string` |
| `metadata.type` | `string` |
| `name` | `string` |
| `org_id` | `string` |

#### Defined in

[src/store/organizations.ts:4](https://github.com/Orfium/toolbox/blob/50e8912/src/store/organizations.ts#L4)

___

### OrganizationsContextValue

Ƭ **OrganizationsContextValue**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `organizations` | [`Organization`](modules.md#organization-114)[] |
| `selectedOrganization` | [`Organization`](modules.md#organization-114) \| ``null`` |
| `switchOrganization` | (`organisation`: `string`) => `void` |

#### Defined in

[src/authentication/types.ts:64](https://github.com/Orfium/toolbox/blob/50e8912/src/authentication/types.ts#L64)

___

### Product

Ƭ **Product**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `client_id` | `string` |
| `client_metadata` | `ClientMetadata` |
| `grant_types` | `string` \| ``null`` |
| `icon_url` | `string` |
| `login_url` | `string` |
| `logo_url` | `string` |
| `name` | `string` |
| `organization_usage` | `string` |

#### Defined in

[src/authentication/types.ts:74](https://github.com/Orfium/toolbox/blob/50e8912/src/authentication/types.ts#L74)

___

### RequestProps

Ƭ **RequestProps**: { `headers?`: `Record`<`string`, `unknown`\> ; `method`: `Methods` ; `params?`: `Record`<`string`, `unknown`\> ; `url`: `string`  } & `Pick`<[`AxiosRequestConfig`](interfaces/AxiosRequestConfig.md), ``"onUploadProgress"`` \| ``"onDownloadProgress"`` \| ``"responseType"``\>

#### Defined in

[src/request/request.ts:16](https://github.com/Orfium/toolbox/blob/50e8912/src/request/request.ts#L16)

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

[src/routing/Routing.tsx:35](https://github.com/Orfium/toolbox/blob/50e8912/src/routing/Routing.tsx#L35)

___

### RouteItem

Ƭ **RouteItem**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `authorization?` | [`Authorization`](modules.md#authorization-114) | The authorization level of the route, there are 3: 'anonymous' \| 'authorized' \| 'unauthorized' -  **`defaultvalue:`** 'anonymous' |
| `component?` | `React.FunctionComponent`<[`RouteComponentProps`](modules.md#routecomponentprops-114)\> | A component that the route renders as page. This has all the props and extraProps that have been passed to that route |
| `extraProps?` | `unknown` | Any custom/extra props that are going to be available on the component |
| `path` | `string` \| `string`[] | The url path or paths of the route that will listen to in order to render |

#### Defined in

[src/routing/Routing.tsx:41](https://github.com/Orfium/toolbox/blob/50e8912/src/routing/Routing.tsx#L41)

___

### RoutingStructure

Ƭ **RoutingStructure**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `fallbackPaths?` | `Partial`<`Record`<[`FallbackPath`](modules.md#fallbackpath-114), `string`\>\> | Holder of paths relative to the types of authorization. For every type there is a fallback path that a user will be redirected if they don't have access to it based on the authorization |
| `routes` | [`RouteItem`](modules.md#routeitem-114)[] | - |

#### Defined in

[src/routing/Routing.tsx:24](https://github.com/Orfium/toolbox/blob/50e8912/src/routing/Routing.tsx#L24)

___

### TopBarProps

Ƭ **TopBarProps**: { `utilitySection?`: `ReactNode`  } & `Partial`<`UserMenuProps`\>

#### Defined in

[src/ui/TopBar/TopBar.tsx:9](https://github.com/Orfium/toolbox/blob/50e8912/src/ui/TopBar/TopBar.tsx#L9)

___

### TopBarUtilitySectionContextValue

Ƭ **TopBarUtilitySectionContextValue**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `setTopBarUtilitySection` | `Dispatch`<`SetStateAction`<`ReactNode`\>\> |
| `topBarUtilitySection` | `ReactNode` |

#### Defined in

[src/authentication/types.ts:59](https://github.com/Orfium/toolbox/blob/50e8912/src/authentication/types.ts#L59)

___

### User

Ƭ **User**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `address?` | `string` |
| `birthdate?` | `string` |
| `email?` | `string` |
| `email_verified?` | `boolean` |
| `family_name?` | `string` |
| `gender?` | `string` |
| `given_name?` | `string` |
| `locale?` | `string` |
| `middle_name?` | `string` |
| `name?` | `string` |
| `nickname?` | `string` |
| `phone_number?` | `string` |
| `phone_number_verified?` | `boolean` |
| `picture?` | `string` |
| `preferred_username?` | `string` |
| `profile?` | `string` |
| `sub?` | `string` |
| `updated_at?` | `string` |
| `website?` | `string` |
| `zoneinfo?` | `string` |

#### Defined in

[src/authentication/types.ts:22](https://github.com/Orfium/toolbox/blob/50e8912/src/authentication/types.ts#L22)

## Variables

### DEFAULT\_NAVBAR\_HEIGHT

• `Const` **DEFAULT\_NAVBAR\_HEIGHT**: ``72``

#### Defined in

[src/ui/consts.ts:1](https://github.com/Orfium/toolbox/blob/50e8912/src/ui/consts.ts#L1)

___

### METHODS

• `Const` **METHODS**: `Record`<`MethodsKeys`, `Methods`\>

#### Defined in

[src/request/request.ts:14](https://github.com/Orfium/toolbox/blob/50e8912/src/request/request.ts#L14)

___

### MockRequest

• **MockRequest**: typeof `MockAdapter`

#### Defined in

[src/request/mock.ts:4](https://github.com/Orfium/toolbox/blob/50e8912/src/request/mock.ts#L4)

___

### orfiumIdBaseInstance

• `Const` **orfiumIdBaseInstance**: [`CreateAPIInstanceType`](modules.md#createapiinstancetype-114)

#### Defined in

[src/request/index.ts:6](https://github.com/Orfium/toolbox/blob/50e8912/src/request/index.ts#L6)

## Other Functions

### Authentication

▸ **Authentication**(`__namedParameters`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`AuthenticationProps`](modules.md#authenticationprops-114) |

#### Returns

`Element`

#### Defined in

[src/authentication/components/Authentication/Authentication.tsx:18](https://github.com/Orfium/toolbox/blob/50e8912/src/authentication/components/Authentication/Authentication.tsx#L18)

___

### Navigation

▸ **Navigation**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`NavigationProps`](modules.md#navigationprops-114) |

#### Returns

`Element`

#### Defined in

[src/ui/Navigation/Navigation.tsx:24](https://github.com/Orfium/toolbox/blob/50e8912/src/ui/Navigation/Navigation.tsx#L24)

___

### RedirectWithStatePassthrough

▸ **RedirectWithStatePassthrough**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `RedirectProps` |

#### Returns

`Element`

#### Defined in

src/utils/RedirectWithStatePassthrough/RedirectWithStatePassthrough.tsx:3

___

### TopBar

▸ **TopBar**(`__namedParameters`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`TopBarProps`](modules.md#topbarprops-114) |

#### Returns

`Element`

#### Defined in

[src/ui/TopBar/TopBar.tsx:13](https://github.com/Orfium/toolbox/blob/50e8912/src/ui/TopBar/TopBar.tsx#L13)

___

### createAPIInstance

▸ **createAPIInstance**(`__namedParameters`): [`CreateAPIInstanceType`](modules.md#createapiinstancetype-114)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`CreateAPIInstanceProps`](modules.md#createapiinstanceprops-114) |

#### Returns

[`CreateAPIInstanceType`](modules.md#createapiinstancetype-114)

#### Defined in

[src/request/createAPIInstance.ts:30](https://github.com/Orfium/toolbox/blob/50e8912/src/request/createAPIInstance.ts#L30)

___

### useAuthentication

▸ **useAuthentication**(): [`AuthenticationContextValue`](modules.md#authenticationcontextvalue-114)

#### Returns

[`AuthenticationContextValue`](modules.md#authenticationcontextvalue-114)

#### Defined in

[src/authentication/context.tsx:360](https://github.com/Orfium/toolbox/blob/50e8912/src/authentication/context.tsx#L360)

___

### useOrfiumProducts

▸ **useOrfiumProducts**(): [`OrfiumProductsContextValue`](modules.md#orfiumproductscontextvalue-18)

#### Returns

[`OrfiumProductsContextValue`](modules.md#orfiumproductscontextvalue-18)

#### Defined in

[src/authentication/context.tsx:361](https://github.com/Orfium/toolbox/blob/50e8912/src/authentication/context.tsx#L361)

___

### useOrganizations

▸ **useOrganizations**(): [`OrganizationsContextValue`](modules.md#organizationscontextvalue-18)

#### Returns

[`OrganizationsContextValue`](modules.md#organizationscontextvalue-18)

#### Defined in

[src/authentication/context.tsx:374](https://github.com/Orfium/toolbox/blob/50e8912/src/authentication/context.tsx#L374)

___

### useTopBarUtilitySection

▸ **useTopBarUtilitySection**(`topBarUtilitySectionElement`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `topBarUtilitySectionElement` | `ReactNode` |

#### Returns

`void`

#### Defined in

[src/authentication/context.tsx:363](https://github.com/Orfium/toolbox/blob/50e8912/src/authentication/context.tsx#L363)

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
| `props.structure` | [`RoutingStructure`](modules.md#routingstructure-114) | A list of Routes that needs to render with authorization level and extra props. |

#### Returns

`Element`

#### Defined in

[src/routing/Routing.tsx:62](https://github.com/Orfium/toolbox/blob/50e8912/src/routing/Routing.tsx#L62)
