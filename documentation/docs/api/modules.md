---
id: 'modules'
title: '@orfium/toolbox'
sidebar_label: 'Exports'
sidebar_position: 0.5
custom_edit_url: null
---

## Classes

- [BrowserRouter](classes/BrowserRouter.md)
- [Redirect](classes/Redirect.md)
- [Route](classes/Route.md)

## component Functions

- [generateRoutes](modules.md#generateroutes)

## Type aliases

### Authorization

Ƭ **Authorization**: `"anonymous"` \| `"authorized"` \| `"unauthorized"`

**`anonymous:`** general users that can view only public pages - default for all routes without authorization

**`unauthorized:`** only users that are logged in but not authorized to view those routes

**`authorized:`** only users that are logged in and also authorized for these routes

#### Defined in

[src/routing/Routing.tsx:14](https://github.com/Orfium/toolbox/blob/25c0a99/src/routing/Routing.tsx#L14)

---

### FallbackPath

Ƭ **FallbackPath**: `"unauthenticated"` \| `"unauthorized"` \| `"authenticatedButAnonymous"`

**`unauthenticated:`** in case a user visits a path and has no authentication

**`unauthorized:`** when a user visits a path without authorization

**`authenticatedbutanonymous:`** when a user has authentication but tries to visit an anonymous path

#### Defined in

[src/routing/Routing.tsx:22](https://github.com/Orfium/toolbox/blob/25c0a99/src/routing/Routing.tsx#L22)

---

### MockRequest

Ƭ **MockRequest**: `MockAdapter`

#### Defined in

[src/request/mock.ts:3](https://github.com/Orfium/toolbox/blob/25c0a99/src/request/mock.ts#L3)

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

[src/routing/Routing.tsx:35](https://github.com/Orfium/toolbox/blob/25c0a99/src/routing/Routing.tsx#L35)

---

### RouteItem

Ƭ **RouteItem**: `Object`

#### Type declaration

| Name             | Type                                                                                | Description                                                                                                                        |
| :--------------- | :---------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| `authorization?` | [`Authorization`](modules.md#authorization)                                         | The authorization level of the route, there are 3: 'anonymous' \| 'authorized' \| 'unauthorized' - **`defaultvalue:`** 'anonymous' |
| `component?`     | `React.FunctionComponent`<[`RouteComponentProps`](modules.md#routecomponentprops)\> | A component that the route renders as page. This has all the props and extraProps that have been passed to that route              |
| `extraProps?`    | `unknown`                                                                           | Any custom/extra props that are going to be available on the component                                                             |
| `path`           | `string` \| `string`[]                                                              | The url path or paths of the route that will listen to in order to render                                                          |

#### Defined in

[src/routing/Routing.tsx:41](https://github.com/Orfium/toolbox/blob/25c0a99/src/routing/Routing.tsx#L41)

---

### RoutingStructure

Ƭ **RoutingStructure**: `Object`

#### Type declaration

| Name             | Type                                                                       | Description                                                                                                                                                                               |
| :--------------- | :------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fallbackPaths?` | `Partial`<`Record`<[`FallbackPath`](modules.md#fallbackpath), `string`\>\> | Holder of paths relative to the types of authorization. For every type there is a fallback path that a user will be redirected if they don't have access to it based on the authorization |
| `routes`         | [`RouteItem`](modules.md#routeitem)[]                                      | -                                                                                                                                                                                         |

#### Defined in

[src/routing/Routing.tsx:24](https://github.com/Orfium/toolbox/blob/25c0a99/src/routing/Routing.tsx#L24)

## Variables

### METHODS

• `Const` **METHODS**: `Object`

#### Type declaration

| Name     | Type     |
| :------- | :------- |
| `DELETE` | `string` |
| `GET`    | `string` |
| `PATCH`  | `string` |
| `POST`   | `string` |
| `PUT`    | `string` |

#### Defined in

[src/request/index.ts:12](https://github.com/Orfium/toolbox/blob/25c0a99/src/request/index.ts#L12)

---

### MockRequest

• **MockRequest**: typeof `MockAdapter`

#### Defined in

[src/request/mock.ts:4](https://github.com/Orfium/toolbox/blob/25c0a99/src/request/mock.ts#L4)

## component Functions

### generateRoutes

▸ **generateRoutes**(`props`): `Element`

For each item of the structure it creates a new Route with a Switch statement.
It automatically handles the redirections based on authorization of each route to specific pages
If the fallbacks are defined then those will be used instead.

#### Parameters

| Name                       | Type                                              | Description                                                                          |
| :------------------------- | :------------------------------------------------ | :----------------------------------------------------------------------------------- |
| `props`                    | `Object`                                          | Component properties                                                                 |
| `props.fallbackComponent?` | `ComponentType`<{}\>                              | The {Array} of Routes that needs to render with authorization level and extra props. |
| `props.isAuthenticated`    | `boolean`                                         | Defines from the parent if the user is authenticated or not                          |
| `props.structure`          | [`RoutingStructure`](modules.md#routingstructure) | The component that will render if none of the routes match the url location          |

#### Returns

`Element`

#### Defined in

[src/routing/Routing.tsx:62](https://github.com/Orfium/toolbox/blob/25c0a99/src/routing/Routing.tsx#L62)
