---
id: 'AxiosStatic'
title: 'Interface: AxiosStatic'
sidebar_label: 'AxiosStatic'
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

| Name     | Type                                          |
| :------- | :-------------------------------------------- |
| `config` | [`AxiosRequestConfig`](AxiosRequestConfig.md) |

#### Returns

[`AxiosPromise`](AxiosPromise.md)<`any`\>

#### Defined in

node_modules/axios/index.d.ts:138

### AxiosStatic

▸ **AxiosStatic**(`url`, `config?`): [`AxiosPromise`](AxiosPromise.md)<`any`\>

#### Parameters

| Name      | Type                                          |
| :-------- | :-------------------------------------------- |
| `url`     | `string`                                      |
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

---

### CancelToken

• **CancelToken**: [`CancelTokenStatic`](CancelTokenStatic.md)

#### Defined in

node_modules/axios/index.d.ts:159

---

### defaults

• **defaults**: [`AxiosRequestConfig`](AxiosRequestConfig.md)

#### Inherited from

[AxiosInstance](AxiosInstance.md).[defaults](AxiosInstance.md#defaults)

#### Defined in

node_modules/axios/index.d.ts:140

---

### interceptors

• **interceptors**: `Object`

#### Type declaration

| Name       | Type                                                                                                    |
| :--------- | :------------------------------------------------------------------------------------------------------ |
| `request`  | [`AxiosInterceptorManager`](AxiosInterceptorManager.md)<[`AxiosRequestConfig`](AxiosRequestConfig.md)\> |
| `response` | [`AxiosInterceptorManager`](AxiosInterceptorManager.md)<[`AxiosResponse`](AxiosResponse.md)<`any`\>\>   |

#### Inherited from

[AxiosInstance](AxiosInstance.md).[interceptors](AxiosInstance.md#interceptors)

#### Defined in

node_modules/axios/index.d.ts:141

## Methods

### all

▸ **all**<`T`\>(`values`): `Promise`<`T`[]\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name     | Type                       |
| :------- | :------------------------- |
| `values` | (`T` \| `Promise`<`T`\>)[] |

#### Returns

`Promise`<`T`[]\>

#### Defined in

node_modules/axios/index.d.ts:161

---

### create

▸ **create**(`config?`): [`AxiosInstance`](AxiosInstance.md)

#### Parameters

| Name      | Type                                          |
| :-------- | :-------------------------------------------- |
| `config?` | [`AxiosRequestConfig`](AxiosRequestConfig.md) |

#### Returns

[`AxiosInstance`](AxiosInstance.md)

#### Defined in

node_modules/axios/index.d.ts:157

---

### delete

▸ **delete**<`T`, `R`\>(`url`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type                                      |
| :--- | :---------------------------------------- |
| `T`  | `any`                                     |
| `R`  | [`AxiosResponse`](AxiosResponse.md)<`T`\> |

#### Parameters

| Name      | Type                                          |
| :-------- | :-------------------------------------------- |
| `url`     | `string`                                      |
| `config?` | [`AxiosRequestConfig`](AxiosRequestConfig.md) |

#### Returns

`Promise`<`R`\>

#### Inherited from

[AxiosInstance](AxiosInstance.md).[delete](AxiosInstance.md#delete)

#### Defined in

node_modules/axios/index.d.ts:148

---

### get

▸ **get**<`T`, `R`\>(`url`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type                                      |
| :--- | :---------------------------------------- |
| `T`  | `any`                                     |
| `R`  | [`AxiosResponse`](AxiosResponse.md)<`T`\> |

#### Parameters

| Name      | Type                                          |
| :-------- | :-------------------------------------------- |
| `url`     | `string`                                      |
| `config?` | [`AxiosRequestConfig`](AxiosRequestConfig.md) |

#### Returns

`Promise`<`R`\>

#### Inherited from

[AxiosInstance](AxiosInstance.md).[get](AxiosInstance.md#get)

#### Defined in

node_modules/axios/index.d.ts:147

---

### getUri

▸ **getUri**(`config?`): `string`

#### Parameters

| Name      | Type                                          |
| :-------- | :-------------------------------------------- |
| `config?` | [`AxiosRequestConfig`](AxiosRequestConfig.md) |

#### Returns

`string`

#### Inherited from

[AxiosInstance](AxiosInstance.md).[getUri](AxiosInstance.md#geturi)

#### Defined in

node_modules/axios/index.d.ts:145

---

### head

▸ **head**<`T`, `R`\>(`url`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type                                      |
| :--- | :---------------------------------------- |
| `T`  | `any`                                     |
| `R`  | [`AxiosResponse`](AxiosResponse.md)<`T`\> |

#### Parameters

| Name      | Type                                          |
| :-------- | :-------------------------------------------- |
| `url`     | `string`                                      |
| `config?` | [`AxiosRequestConfig`](AxiosRequestConfig.md) |

#### Returns

`Promise`<`R`\>

#### Inherited from

[AxiosInstance](AxiosInstance.md).[head](AxiosInstance.md#head)

#### Defined in

node_modules/axios/index.d.ts:149

---

### isAxiosError

▸ **isAxiosError**(`payload`): payload is AxiosError<any\>

#### Parameters

| Name      | Type  |
| :-------- | :---- |
| `payload` | `any` |

#### Returns

payload is AxiosError<any\>

#### Defined in

node_modules/axios/index.d.ts:163

---

### isCancel

▸ **isCancel**(`value`): `boolean`

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

node_modules/axios/index.d.ts:160

---

### options

▸ **options**<`T`, `R`\>(`url`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type                                      |
| :--- | :---------------------------------------- |
| `T`  | `any`                                     |
| `R`  | [`AxiosResponse`](AxiosResponse.md)<`T`\> |

#### Parameters

| Name      | Type                                          |
| :-------- | :-------------------------------------------- |
| `url`     | `string`                                      |
| `config?` | [`AxiosRequestConfig`](AxiosRequestConfig.md) |

#### Returns

`Promise`<`R`\>

#### Inherited from

[AxiosInstance](AxiosInstance.md).[options](AxiosInstance.md#options)

#### Defined in

node_modules/axios/index.d.ts:150

---

### patch

▸ **patch**<`T`, `R`\>(`url`, `data?`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type                                      |
| :--- | :---------------------------------------- |
| `T`  | `any`                                     |
| `R`  | [`AxiosResponse`](AxiosResponse.md)<`T`\> |

#### Parameters

| Name      | Type                                          |
| :-------- | :-------------------------------------------- |
| `url`     | `string`                                      |
| `data?`   | `any`                                         |
| `config?` | [`AxiosRequestConfig`](AxiosRequestConfig.md) |

#### Returns

`Promise`<`R`\>

#### Inherited from

[AxiosInstance](AxiosInstance.md).[patch](AxiosInstance.md#patch)

#### Defined in

node_modules/axios/index.d.ts:153

---

### post

▸ **post**<`T`, `R`\>(`url`, `data?`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type                                      |
| :--- | :---------------------------------------- |
| `T`  | `any`                                     |
| `R`  | [`AxiosResponse`](AxiosResponse.md)<`T`\> |

#### Parameters

| Name      | Type                                          |
| :-------- | :-------------------------------------------- |
| `url`     | `string`                                      |
| `data?`   | `any`                                         |
| `config?` | [`AxiosRequestConfig`](AxiosRequestConfig.md) |

#### Returns

`Promise`<`R`\>

#### Inherited from

[AxiosInstance](AxiosInstance.md).[post](AxiosInstance.md#post)

#### Defined in

node_modules/axios/index.d.ts:151

---

### put

▸ **put**<`T`, `R`\>(`url`, `data?`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name | Type                                      |
| :--- | :---------------------------------------- |
| `T`  | `any`                                     |
| `R`  | [`AxiosResponse`](AxiosResponse.md)<`T`\> |

#### Parameters

| Name      | Type                                          |
| :-------- | :-------------------------------------------- |
| `url`     | `string`                                      |
| `data?`   | `any`                                         |
| `config?` | [`AxiosRequestConfig`](AxiosRequestConfig.md) |

#### Returns

`Promise`<`R`\>

#### Inherited from

[AxiosInstance](AxiosInstance.md).[put](AxiosInstance.md#put)

#### Defined in

node_modules/axios/index.d.ts:152

---

### request

▸ **request**<`T`, `R`\>(`config`): `Promise`<`R`\>

#### Type parameters

| Name | Type                                      |
| :--- | :---------------------------------------- |
| `T`  | `any`                                     |
| `R`  | [`AxiosResponse`](AxiosResponse.md)<`T`\> |

#### Parameters

| Name     | Type                                          |
| :------- | :-------------------------------------------- |
| `config` | [`AxiosRequestConfig`](AxiosRequestConfig.md) |

#### Returns

`Promise`<`R`\>

#### Inherited from

[AxiosInstance](AxiosInstance.md).[request](AxiosInstance.md#request)

#### Defined in

node_modules/axios/index.d.ts:146

---

### spread

▸ **spread**<`T`, `R`\>(`callback`): (`array`: `T`[]) => `R`

#### Type parameters

| Name |
| :--- |
| `T`  |
| `R`  |

#### Parameters

| Name       | Type                      |
| :--------- | :------------------------ |
| `callback` | (...`args`: `T`[]) => `R` |

#### Returns

`fn`

▸ (`array`): `R`

##### Parameters

| Name    | Type  |
| :------ | :---- |
| `array` | `T`[] |

##### Returns

`R`

#### Defined in

node_modules/axios/index.d.ts:162
