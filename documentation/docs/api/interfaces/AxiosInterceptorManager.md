---
id: "AxiosInterceptorManager"
title: "Interface: AxiosInterceptorManager<V>"
sidebar_label: "AxiosInterceptorManager"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name |
| :------ |
| `V` |

## Methods

### eject

▸ **eject**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`void`

#### Defined in

node_modules/axios/index.d.ts:134

___

### use

▸ **use**<`T`\>(`onFulfilled?`, `onRejected?`): `number`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onFulfilled?` | (`value`: `V`) => `T` \| `Promise`<`T`\> |
| `onRejected?` | (`error`: `any`) => `any` |

#### Returns

`number`

#### Defined in

node_modules/axios/index.d.ts:133
