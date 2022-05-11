---
id: "modules"
title: "@orfium/toolbox"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Namespaces

- [ReactRouterDom](namespaces/ReactRouterDom.md)

## Type aliases

### Authorization

Ƭ **Authorization**: ``"anonymous"`` \| ``"authorized"`` \| ``"unauthorized"``

anonymous: general users that can view only public pages - default for all routes without authorization
unauthorized: only users that are logged in but not authorized to view those routes
authorized: only users that are logged in and also authorized for these routes

#### Defined in

[src/routing/Routing.tsx:10](https://github.com/Orfium/toolbox/blob/6cc9b48/src/routing/Routing.tsx#L10)

___

### FallbackPath

Ƭ **FallbackPath**: ``"unauthenticated"`` \| ``"unauthorized"`` \| ``"authenticatedButAnonymous"``

unauthenticated: in case a user visits a path and has no authentication
unauthorized: when a user visits a path without authorization
authenticatedButAnonymous: when a user has authentication but tries to visit an anonymous path

#### Defined in

[src/routing/Routing.tsx:18](https://github.com/Orfium/toolbox/blob/6cc9b48/src/routing/Routing.tsx#L18)

___

### MockRequest

Ƭ **MockRequest**: `MockAdapter`

#### Defined in

[src/request/mock.ts:3](https://github.com/Orfium/toolbox/blob/6cc9b48/src/request/mock.ts#L3)

___

### RouteComponentProps

Ƭ **RouteComponentProps**<`T`\>: [`RouteComponentProps`](interfaces/ReactRouterDom.RouteComponentProps.md)<`any`\> & { `extraProps`: `T`  }

This is actual part of the library so you can skip it.
An extension of the React Router Component props to be used with the extra props.
Is being used to the route component to extend its functionality on types

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Defined in

[src/routing/Routing.tsx:30](https://github.com/Orfium/toolbox/blob/6cc9b48/src/routing/Routing.tsx#L30)

___

### RoutingStructure

Ƭ **RoutingStructure**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `fallbackPaths?` | `Partial`<`Record`<[`FallbackPath`](modules.md#fallbackpath), `string`\>\> | Holder of paths relative to the types of authorization. For every type there is a fallback path that a user will be redirected if they don't have access to it based on the authorization |
| `routes` | `RouteItem`[] | - |

#### Defined in

[src/routing/Routing.tsx:20](https://github.com/Orfium/toolbox/blob/6cc9b48/src/routing/Routing.tsx#L20)

## Variables

### METHODS

• `Const` **METHODS**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `DELETE` | `string` |
| `GET` | `string` |
| `PATCH` | `string` |
| `POST` | `string` |
| `PUT` | `string` |

#### Defined in

[src/request/index.ts:11](https://github.com/Orfium/toolbox/blob/6cc9b48/src/request/index.ts#L11)

___

### MockRequest

• **MockRequest**: typeof `MockAdapter`

#### Defined in

[src/request/mock.ts:4](https://github.com/Orfium/toolbox/blob/6cc9b48/src/request/mock.ts#L4)

___

### generateRoutes

• `Const` **generateRoutes**: `FunctionComponent`<`Props`\>

For each item of the structure it creates a new Route with a Switch statement.
It automatically handles the redirections based on authorization of each route to specific pages
If the fallbacks are defined then those will be used instead.

**`param`** defines from the parent if the user is authenticated or not

**`param`** the Array of Routes that needs to render with authorization level and extra props.

**`param`** the component that will render if none of the routes match the url location

#### Defined in

[src/routing/Routing.tsx:63](https://github.com/Orfium/toolbox/blob/6cc9b48/src/routing/Routing.tsx#L63)
