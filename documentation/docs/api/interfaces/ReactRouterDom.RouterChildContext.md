---
id: "ReactRouterDom.RouterChildContext"
title: "Interface: RouterChildContext<Params>"
sidebar_label: "RouterChildContext"
custom_edit_url: null
---

[ReactRouterDom](../namespaces/ReactRouterDom.md).RouterChildContext

## Type parameters

| Name | Type |
| :------ | :------ |
| `Params` | extends { [K in keyof Params]?: string } = {} |

## Properties

### router

• **router**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `history` | `History`<`unknown`\> |
| `route` | { `location`: `Location`<`unknown`\> ; `match`: [`match`](ReactRouterDom.match.md)<`Params`\>  } |
| `route.location` | `Location`<`unknown`\> |
| `route.match` | [`match`](ReactRouterDom.match.md)<`Params`\> |

#### Defined in

node_modules/@types/react-router/index.d.ts:32
