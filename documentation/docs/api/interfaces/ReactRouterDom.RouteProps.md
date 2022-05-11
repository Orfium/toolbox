---
id: "ReactRouterDom.RouteProps"
title: "Interface: RouteProps<Path, Params>"
sidebar_label: "RouteProps"
custom_edit_url: null
---

[ReactRouterDom](../namespaces/ReactRouterDom.md).RouteProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `Path` | extends `string` = `string` |
| `Params` | extends `Object` = `ExtractRouteParams`<`Path`, `string`\> |

## Properties

### children

• `Optional` **children**: `ReactNode` \| (`props`: [`RouteChildrenProps`](ReactRouterDom.RouteChildrenProps.md)<`Params`, `unknown`\>) => `ReactNode`

#### Defined in

node_modules/@types/react-router/index.d.ts:94

___

### component

• `Optional` **component**: `ComponentType`<[`RouteComponentProps`](ReactRouterDom.RouteComponentProps.md)<`any`, `StaticContext`, `unknown`\>\> \| `ComponentType`<`any`\>

#### Defined in

node_modules/@types/react-router/index.d.ts:92

___

### exact

• `Optional` **exact**: `boolean`

#### Defined in

node_modules/@types/react-router/index.d.ts:96

___

### location

• `Optional` **location**: `Location`<`unknown`\>

#### Defined in

node_modules/@types/react-router/index.d.ts:91

___

### path

• `Optional` **path**: `Path` \| readonly `Path`[]

#### Defined in

node_modules/@types/react-router/index.d.ts:95

___

### render

• `Optional` **render**: (`props`: [`RouteComponentProps`](ReactRouterDom.RouteComponentProps.md)<`Params`, `StaticContext`, `unknown`\>) => `ReactNode`

#### Type declaration

▸ (`props`): `ReactNode`

##### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`RouteComponentProps`](ReactRouterDom.RouteComponentProps.md)<`Params`, `StaticContext`, `unknown`\> |

##### Returns

`ReactNode`

#### Defined in

node_modules/@types/react-router/index.d.ts:93

___

### sensitive

• `Optional` **sensitive**: `boolean`

#### Defined in

node_modules/@types/react-router/index.d.ts:97

___

### strict

• `Optional` **strict**: `boolean`

#### Defined in

node_modules/@types/react-router/index.d.ts:98
