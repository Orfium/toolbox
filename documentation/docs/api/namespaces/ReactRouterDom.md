---
id: "ReactRouterDom"
title: "Namespace: ReactRouterDom"
sidebar_label: "ReactRouterDom"
sidebar_position: 0
custom_edit_url: null
---

## Classes

- [BrowserRouter](../classes/ReactRouterDom.BrowserRouter.md)
- [HashRouter](../classes/ReactRouterDom.HashRouter.md)
- [MemoryRouter](../classes/ReactRouterDom.MemoryRouter.md)
- [Prompt](../classes/ReactRouterDom.Prompt.md)
- [Redirect](../classes/ReactRouterDom.Redirect.md)
- [Route](../classes/ReactRouterDom.Route.md)
- [Router](../classes/ReactRouterDom.Router.md)
- [StaticRouter](../classes/ReactRouterDom.StaticRouter.md)
- [Switch](../classes/ReactRouterDom.Switch.md)

## Interfaces

- [BrowserRouterProps](../interfaces/ReactRouterDom.BrowserRouterProps.md)
- [HashRouterProps](../interfaces/ReactRouterDom.HashRouterProps.md)
- [Link](../interfaces/ReactRouterDom.Link.md)
- [LinkProps](../interfaces/ReactRouterDom.LinkProps.md)
- [MemoryRouterProps](../interfaces/ReactRouterDom.MemoryRouterProps.md)
- [NavLink](../interfaces/ReactRouterDom.NavLink.md)
- [NavLinkProps](../interfaces/ReactRouterDom.NavLinkProps.md)
- [PromptProps](../interfaces/ReactRouterDom.PromptProps.md)
- [RedirectProps](../interfaces/ReactRouterDom.RedirectProps.md)
- [RouteChildrenProps](../interfaces/ReactRouterDom.RouteChildrenProps.md)
- [RouteComponentProps](../interfaces/ReactRouterDom.RouteComponentProps.md)
- [RouteProps](../interfaces/ReactRouterDom.RouteProps.md)
- [RouterChildContext](../interfaces/ReactRouterDom.RouterChildContext.md)
- [RouterProps](../interfaces/ReactRouterDom.RouterProps.md)
- [StaticRouterProps](../interfaces/ReactRouterDom.StaticRouterProps.md)
- [SwitchProps](../interfaces/ReactRouterDom.SwitchProps.md)
- [match](../interfaces/ReactRouterDom.match.md)

## Functions

### Link

▸ **Link**<`S`\>(...`params`): `ReturnType`<[`Link`](ReactRouterDom.md#link)<`S`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...params` | [props: LinkProps<S\> & RefAttributes<HTMLAnchorElement\>] |

#### Returns

`ReturnType`<[`Link`](ReactRouterDom.md#link)<`S`\>\>

#### Defined in

node_modules/@types/react-router-dom/index.d.ts:68

___

### NavLink

▸ **NavLink**<`S`\>(`props`): `ReturnType`<[`NavLink`](ReactRouterDom.md#navlink)<`S`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`NavLinkProps`](../interfaces/ReactRouterDom.NavLinkProps.md)<`S`\> & `RefAttributes`<`HTMLAnchorElement`\> |

#### Returns

`ReturnType`<[`NavLink`](ReactRouterDom.md#navlink)<`S`\>\>

#### Defined in

node_modules/@types/react-router-dom/index.d.ts:91

___

### generatePath

▸ **generatePath**<`S`\>(`path`, `params?`): `string`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `S` |
| `params?` | `ExtractRouteParams`<`S`, `string` \| `number` \| `boolean`\> |

#### Returns

`string`

#### Defined in

node_modules/@types/react-router/index.d.ts:169

___

### matchPath

▸ **matchPath**<`Params`\>(`pathname`, `props`, `parent?`): [`match`](../interfaces/ReactRouterDom.match.md)<`Params`\> \| ``null``

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Params` | extends { [K in string \| number \| symbol]?: string } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathname` | `string` |
| `props` | `string` \| [`RouteProps`](../interfaces/ReactRouterDom.RouteProps.md)<`string`, {}\> \| `string`[] |
| `parent?` | ``null`` \| [`match`](../interfaces/ReactRouterDom.match.md)<`Params`\> |

#### Returns

[`match`](../interfaces/ReactRouterDom.match.md)<`Params`\> \| ``null``

#### Defined in

node_modules/@types/react-router/index.d.ts:143

___

### useHistory

▸ **useHistory**<`HistoryLocationState`\>(): `H.History`<`HistoryLocationState`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `HistoryLocationState` | `unknown` |

#### Returns

`H.History`<`HistoryLocationState`\>

#### Defined in

node_modules/@types/react-router/index.d.ts:189

___

### useLocation

▸ **useLocation**<`S`\>(): `H.Location`<`S`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | `unknown` |

#### Returns

`H.Location`<`S`\>

#### Defined in

node_modules/@types/react-router/index.d.ts:191

___

### useParams

▸ **useParams**<`Params`\>(): `Params`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Params` | extends { [K in string \| number \| symbol]?: string } = {} |

#### Returns

`Params`

#### Defined in

node_modules/@types/react-router/index.d.ts:193

___

### useRouteMatch

▸ **useRouteMatch**<`Params`\>(): [`match`](../interfaces/ReactRouterDom.match.md)<`Params`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Params` | extends { [K in string \| number \| symbol]?: string } = {} |

#### Returns

[`match`](../interfaces/ReactRouterDom.match.md)<`Params`\>

#### Defined in

node_modules/@types/react-router/index.d.ts:195

▸ **useRouteMatch**<`Params`\>(`path`): [`match`](../interfaces/ReactRouterDom.match.md)<`Params`\> \| ``null``

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Params` | extends { [K in string \| number \| symbol]?: string } = {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` \| [`RouteProps`](../interfaces/ReactRouterDom.RouteProps.md)<`string`, {}\> \| `string`[] |

#### Returns

[`match`](../interfaces/ReactRouterDom.match.md)<`Params`\> \| ``null``

#### Defined in

node_modules/@types/react-router/index.d.ts:196

___

### withRouter

▸ **withRouter**<`P`, `C`\>(`component`): `React.ComponentClass`<`Omit`<`P`, keyof [`RouteComponentProps`](../interfaces/ReactRouterDom.RouteComponentProps.md)<`any`\>\> & `WithRouterProps`<`C`\>\> & `WithRouterStatics`<`C`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`RouteComponentProps`](../interfaces/ReactRouterDom.RouteComponentProps.md)<`any`, `StaticContext`, `unknown`, `P`\> |
| `C` | extends `ComponentType`<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | `C` & `ComponentClass`<`P`, `any`\> & `C` & `FunctionComponent`<`P`\> |

#### Returns

`React.ComponentClass`<`Omit`<`P`, keyof [`RouteComponentProps`](../interfaces/ReactRouterDom.RouteComponentProps.md)<`any`\>\> & `WithRouterProps`<`C`\>\> & `WithRouterStatics`<`C`\>

#### Defined in

node_modules/@types/react-router/index.d.ts:183
