---
id: "AxiosRequestConfig"
title: "Interface: AxiosRequestConfig"
sidebar_label: "AxiosRequestConfig"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### adapter

• `Optional` **adapter**: [`AxiosAdapter`](AxiosAdapter.md)

#### Defined in

node_modules/axios/index.d.ts:63

___

### auth

• `Optional` **auth**: [`AxiosBasicCredentials`](AxiosBasicCredentials.md)

#### Defined in

node_modules/axios/index.d.ts:64

___

### baseURL

• `Optional` **baseURL**: `string`

#### Defined in

node_modules/axios/index.d.ts:53

___

### cancelToken

• `Optional` **cancelToken**: [`CancelToken`](CancelToken.md)

#### Defined in

node_modules/axios/index.d.ts:78

___

### data

• `Optional` **data**: `any`

#### Defined in

node_modules/axios/index.d.ts:59

___

### decompress

• `Optional` **decompress**: `boolean`

#### Defined in

node_modules/axios/index.d.ts:79

___

### headers

• `Optional` **headers**: `any`

#### Defined in

node_modules/axios/index.d.ts:56

___

### httpAgent

• `Optional` **httpAgent**: `any`

#### Defined in

node_modules/axios/index.d.ts:75

___

### httpsAgent

• `Optional` **httpsAgent**: `any`

#### Defined in

node_modules/axios/index.d.ts:76

___

### maxBodyLength

• `Optional` **maxBodyLength**: `number`

#### Defined in

node_modules/axios/index.d.ts:72

___

### maxContentLength

• `Optional` **maxContentLength**: `number`

#### Defined in

node_modules/axios/index.d.ts:70

___

### maxRedirects

• `Optional` **maxRedirects**: `number`

#### Defined in

node_modules/axios/index.d.ts:73

___

### method

• `Optional` **method**: [`Method`](../modules.md#method-112)

#### Defined in

node_modules/axios/index.d.ts:52

___

### params

• `Optional` **params**: `any`

#### Defined in

node_modules/axios/index.d.ts:57

___

### proxy

• `Optional` **proxy**: ``false`` \| [`AxiosProxyConfig`](AxiosProxyConfig.md)

#### Defined in

node_modules/axios/index.d.ts:77

___

### responseType

• `Optional` **responseType**: [`ResponseType`](../modules.md#responsetype-112)

#### Defined in

node_modules/axios/index.d.ts:65

___

### socketPath

• `Optional` **socketPath**: ``null`` \| `string`

#### Defined in

node_modules/axios/index.d.ts:74

___

### timeout

• `Optional` **timeout**: `number`

#### Defined in

node_modules/axios/index.d.ts:60

___

### timeoutErrorMessage

• `Optional` **timeoutErrorMessage**: `string`

#### Defined in

node_modules/axios/index.d.ts:61

___

### transformRequest

• `Optional` **transformRequest**: [`AxiosTransformer`](AxiosTransformer.md) \| [`AxiosTransformer`](AxiosTransformer.md)[]

#### Defined in

node_modules/axios/index.d.ts:54

___

### transformResponse

• `Optional` **transformResponse**: [`AxiosTransformer`](AxiosTransformer.md) \| [`AxiosTransformer`](AxiosTransformer.md)[]

#### Defined in

node_modules/axios/index.d.ts:55

___

### transitional

• `Optional` **transitional**: [`TransitionalOptions`](TransitionalOptions.md)

#### Defined in

node_modules/axios/index.d.ts:80

___

### url

• `Optional` **url**: `string`

#### Defined in

node_modules/axios/index.d.ts:51

___

### validateStatus

• `Optional` **validateStatus**: ``null`` \| (`status`: `number`) => `boolean`

#### Defined in

node_modules/axios/index.d.ts:71

___

### withCredentials

• `Optional` **withCredentials**: `boolean`

#### Defined in

node_modules/axios/index.d.ts:62

___

### xsrfCookieName

• `Optional` **xsrfCookieName**: `string`

#### Defined in

node_modules/axios/index.d.ts:66

___

### xsrfHeaderName

• `Optional` **xsrfHeaderName**: `string`

#### Defined in

node_modules/axios/index.d.ts:67

## Methods

### onDownloadProgress

▸ `Optional` **onDownloadProgress**(`progressEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `progressEvent` | `any` |

#### Returns

`void`

#### Defined in

node_modules/axios/index.d.ts:69

___

### onUploadProgress

▸ `Optional` **onUploadProgress**(`progressEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `progressEvent` | `any` |

#### Returns

`void`

#### Defined in

node_modules/axios/index.d.ts:68

___

### paramsSerializer

▸ `Optional` **paramsSerializer**(`params`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`string`

#### Defined in

node_modules/axios/index.d.ts:58
