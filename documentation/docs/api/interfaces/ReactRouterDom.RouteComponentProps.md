---
id: "ReactRouterDom.RouteComponentProps"
title: "Interface: RouteComponentProps<Params, C, S>"
sidebar_label: "RouteComponentProps"
custom_edit_url: null
---

[ReactRouterDom](../namespaces/ReactRouterDom.md).RouteComponentProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `Params` | extends { [K in keyof Params]?: string } = {} |
| `C` | extends `StaticContext` = `StaticContext` |
| `S` | `H.LocationState` |

## Properties

### history

• **history**: `History`<`S`\>

#### Defined in

node_modules/@types/react-router/index.d.ts:75

___

### location

• **location**: `Location`<`S`\>

#### Defined in

node_modules/@types/react-router/index.d.ts:76

___

### match

• **match**: [`match`](ReactRouterDom.match.md)<`Params`\>

#### Defined in

node_modules/@types/react-router/index.d.ts:77

___

### staticContext

• `Optional` **staticContext**: `C`

#### Defined in

node_modules/@types/react-router/index.d.ts:78
