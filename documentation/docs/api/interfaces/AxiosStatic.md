---
id: "AxiosStatic"
title: "Interface: AxiosStatic"
sidebar_label: "AxiosStatic"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`AxiosInstance`](AxiosInstance.md)

  ↳ **`AxiosStatic`**

## Callable

### AxiosStatic

▸ **AxiosStatic**(`config`): [`AxiosPromise`](AxiosPromise.md)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`AxiosRequestConfig`](AxiosRequestConfig.md) |

#### Returns

[`AxiosPromise`](AxiosPromise.md)<`any`\>

#### Defined in

node_modules/axios/index.d.ts:138

### AxiosStatic

▸ **AxiosStatic**(`url`, `config?`): [`AxiosPromise`](AxiosPromise.md)<`any`\>

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

### Cancel

• **Cancel**: [`CancelStatic`](CancelStatic.md)

#### Defined in

node_modules/axios/index.d.ts:158

___

### CancelToken

• **CancelToken**: [`CancelTokenStatic`](CancelTokenStatic.md)

#### Defined in

node_modules/axios/index.d.ts:159

___

### defaults

• **defaults**: [`AxiosRequestConfig`](AxiosRequestConfig.md)

#### Inherited from

[AxiosInstance](AxiosInstance.md).[defaults](AxiosInstance.md#defaults-12)

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

#### Inherited from

[AxiosInstance](AxiosInstance.md).[interceptors](AxiosInstance.md#interceptors-12)

#### Defined in

node_modules/axios/index.d.ts:141

## Methods

### all

▸ **all**<`T`\>(`values`): `Promise`<`T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | (`T` \| `Promise`<`T`\>)[] |

#### Returns

`Promise`<`T`[]\>

#### Defined in

node_modules/axios/index.d.ts:161

___

### create

▸ **create**(`config?`): [`AxiosInstance`](AxiosInstance.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | [`AxiosRequestConfig`](AxiosRequestConfig.md) |

#### Returns

[`AxiosInstance`](AxiosInstance.md)

#### Defined in

node_modules/axios/index.d.ts:157

___

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

#### Inherited from

[AxiosInstance](AxiosInstance.md).[delete](AxiosInstance.md#delete-12)

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

#### Inherited from

[AxiosInstance](AxiosInstance.md).[get](AxiosInstance.md#get-12)

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

#### Inherited from

[AxiosInstance](AxiosInstance.md).[getUri](AxiosInstance.md#geturi-12)

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

#### Inherited from

[AxiosInstance](AxiosInstance.md).[head](AxiosInstance.md#head-12)

#### Defined in

node_modules/axios/index.d.ts:149

___

### isAxiosError

▸ **isAxiosError**(`payload`): payload is AxiosError<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `any` |

#### Returns

payload is AxiosError<any\>

#### Defined in

node_modules/axios/index.d.ts:163

___

### isCancel

▸ **isCancel**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

node_modules/axios/index.d.ts:160

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

#### Inherited from

[AxiosInstance](AxiosInstance.md).[options](AxiosInstance.md#options-12)

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

#### Inherited from

[AxiosInstance](AxiosInstance.md).[patch](AxiosInstance.md#patch-12)

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

#### Inherited from

[AxiosInstance](AxiosInstance.md).[post](AxiosInstance.md#post-12)

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

#### Inherited from

[AxiosInstance](AxiosInstance.md).[put](AxiosInstance.md#put-12)

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

#### Inherited from

[AxiosInstance](AxiosInstance.md).[request](AxiosInstance.md#request-12)

#### Defined in

node_modules/axios/index.d.ts:146

___

### spread

▸ **spread**<`T`, `R`\>(`callback`): (`array`: `T`[]) => `R`

#### Type parameters

| Name |
| :------ |
| `T` |
| `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (...`args`: `T`[]) => `R` |

#### Returns

`fn`

▸ (`array`): `R`

##### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `T`[] |

##### Returns

`R`

#### Defined in

node_modules/axios/index.d.ts:162
