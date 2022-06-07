---
id: "AxiosInstance"
title: "Interface: AxiosInstance"
sidebar_label: "AxiosInstance"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- **`AxiosInstance`**

  ↳ [`AxiosStatic`](AxiosStatic.md)

## Callable

### AxiosInstance

▸ **AxiosInstance**(`config`): [`AxiosPromise`](AxiosPromise.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`AxiosRequestConfig`](AxiosRequestConfig.md) |

#### Returns

[`AxiosPromise`](AxiosPromise.md)<`any`\>

#### Defined in

node_modules/axios/index.d.ts:138

### AxiosInstance

▸ **AxiosInstance**(`url`, `config?`): [`AxiosPromise`](AxiosPromise.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `config?` | [`AxiosRequestConfig`](AxiosRequestConfig.md) |

#### Returns

[`AxiosPromise`](AxiosPromise.md)<`any`\>

#### Defined in

node_modules/axios/index.d.ts:139

## Properties

### defaults

• **defaults**: [`AxiosRequestConfig`](AxiosRequestConfig.md)

#### Defined in

node_modules/axios/index.d.ts:140

___

### interceptors

• **interceptors**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `request` | [`AxiosInterceptorManager`](AxiosInterceptorManager.md)<[`AxiosRequestConfig`](AxiosRequestConfig.md)\> |
| `response` | [`AxiosInterceptorManager`](AxiosInterceptorManager.md)<[`AxiosResponse`](AxiosResponse.md)<`any`\>\> |

#### Defined in

node_modules/axios/index.d.ts:141

## Methods

### delete

▸ **delete**<`T`, `R`\>(`url`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](AxiosResponse.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `config?` | [`AxiosRequestConfig`](AxiosRequestConfig.md) |

#### Returns

`Promise`<`R`\>

#### Defined in

node_modules/axios/index.d.ts:148

___

### get

▸ **get**<`T`, `R`\>(`url`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](AxiosResponse.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `config?` | [`AxiosRequestConfig`](AxiosRequestConfig.md) |

#### Returns

`Promise`<`R`\>

#### Defined in

node_modules/axios/index.d.ts:147

___

### getUri

▸ **getUri**(`config?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | [`AxiosRequestConfig`](AxiosRequestConfig.md) |

#### Returns

`string`

#### Defined in

node_modules/axios/index.d.ts:145

___

### head

▸ **head**<`T`, `R`\>(`url`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](AxiosResponse.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `config?` | [`AxiosRequestConfig`](AxiosRequestConfig.md) |

#### Returns

`Promise`<`R`\>

#### Defined in

node_modules/axios/index.d.ts:149

___

### options

▸ **options**<`T`, `R`\>(`url`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](AxiosResponse.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `config?` | [`AxiosRequestConfig`](AxiosRequestConfig.md) |

#### Returns

`Promise`<`R`\>

#### Defined in

node_modules/axios/index.d.ts:150

___

### patch

▸ **patch**<`T`, `R`\>(`url`, `data?`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](AxiosResponse.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `any` |
| `config?` | [`AxiosRequestConfig`](AxiosRequestConfig.md) |

#### Returns

`Promise`<`R`\>

#### Defined in

node_modules/axios/index.d.ts:153

___

### post

▸ **post**<`T`, `R`\>(`url`, `data?`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](AxiosResponse.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `any` |
| `config?` | [`AxiosRequestConfig`](AxiosRequestConfig.md) |

#### Returns

`Promise`<`R`\>

#### Defined in

node_modules/axios/index.d.ts:151

___

### put

▸ **put**<`T`, `R`\>(`url`, `data?`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](AxiosResponse.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `data?` | `any` |
| `config?` | [`AxiosRequestConfig`](AxiosRequestConfig.md) |

#### Returns

`Promise`<`R`\>

#### Defined in

node_modules/axios/index.d.ts:152

___

### request

▸ **request**<`T`, `R`\>(`config`): `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `R` | [`AxiosResponse`](AxiosResponse.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`AxiosRequestConfig`](AxiosRequestConfig.md) |

#### Returns

`Promise`<`R`\>

#### Defined in

node_modules/axios/index.d.ts:146
