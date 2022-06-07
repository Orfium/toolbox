---
id: "AxiosError"
title: "Interface: AxiosError<T>"
sidebar_label: "AxiosError"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Hierarchy

- `Error`

  ↳ **`AxiosError`**

## Properties

### code

• `Optional` **code**: `string`

#### Defined in

node_modules/axios/index.d.ts:94

___

### config

• **config**: [`AxiosRequestConfig`](AxiosRequestConfig.md)

#### Defined in

node_modules/axios/index.d.ts:93

___

### isAxiosError

• **isAxiosError**: `boolean`

#### Defined in

node_modules/axios/index.d.ts:97

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

documentation/node_modules/typescript/lib/lib.es5.d.ts:1023

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

documentation/node_modules/typescript/lib/lib.es5.d.ts:1022

___

### request

• `Optional` **request**: `any`

#### Defined in

node_modules/axios/index.d.ts:95

___

### response

• `Optional` **response**: [`AxiosResponse`](AxiosResponse.md)<`T`\>

#### Defined in

node_modules/axios/index.d.ts:96

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

documentation/node_modules/typescript/lib/lib.es5.d.ts:1024

## Methods

### toJSON

▸ **toJSON**(): `object`

#### Returns

`object`

#### Defined in

node_modules/axios/index.d.ts:98
