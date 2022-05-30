---
id: 'AxiosRequestConfig'
title: 'Interface: AxiosRequestConfig'
sidebar_label: 'AxiosRequestConfig'
sidebar_position: 0
custom_edit_url: null
---

## Properties

### adapter

• `Optional` **adapter**: [`AxiosAdapter`](AxiosAdapter.md)

#### Defined in

node_modules/axios/index.d.ts:63

---

### auth

• `Optional` **auth**: [`AxiosBasicCredentials`](AxiosBasicCredentials.md)

#### Defined in

node_modules/axios/index.d.ts:64

---

### baseURL

• `Optional` **baseURL**: `string`

#### Defined in

node_modules/axios/index.d.ts:53

---

### cancelToken

• `Optional` **cancelToken**: [`CancelToken`](CancelToken.md)

#### Defined in

node_modules/axios/index.d.ts:78

---

### data

• `Optional` **data**: `any`

#### Defined in

node_modules/axios/index.d.ts:59

---

### decompress

• `Optional` **decompress**: `boolean`

#### Defined in

node_modules/axios/index.d.ts:79

---

### headers

• `Optional` **headers**: `any`

#### Defined in

node_modules/axios/index.d.ts:56

---

### httpAgent

• `Optional` **httpAgent**: `any`

#### Defined in

node_modules/axios/index.d.ts:75

---

### httpsAgent

• `Optional` **httpsAgent**: `any`

#### Defined in

node_modules/axios/index.d.ts:76

---

### maxBodyLength

• `Optional` **maxBodyLength**: `number`

#### Defined in

node_modules/axios/index.d.ts:72

---

### maxContentLength

• `Optional` **maxContentLength**: `number`

#### Defined in

node_modules/axios/index.d.ts:70

---

### maxRedirects

• `Optional` **maxRedirects**: `number`

#### Defined in

node_modules/axios/index.d.ts:73

---

### method

• `Optional` **method**: [`Method`](../modules.md#method-20)

#### Defined in

node_modules/axios/index.d.ts:52

---

### params

• `Optional` **params**: `any`

#### Defined in

node_modules/axios/index.d.ts:57

---

### proxy

• `Optional` **proxy**: `false` \| [`AxiosProxyConfig`](AxiosProxyConfig.md)

#### Defined in

node_modules/axios/index.d.ts:77

---

### responseType

• `Optional` **responseType**: [`ResponseType`](../modules.md#responsetype-20)

#### Defined in

node_modules/axios/index.d.ts:65

---

### socketPath

• `Optional` **socketPath**: `null` \| `string`

#### Defined in

node_modules/axios/index.d.ts:74

---

### timeout

• `Optional` **timeout**: `number`

#### Defined in

node_modules/axios/index.d.ts:60

---

### timeoutErrorMessage

• `Optional` **timeoutErrorMessage**: `string`

#### Defined in

node_modules/axios/index.d.ts:61

---

### transformRequest

• `Optional` **transformRequest**: [`AxiosTransformer`](AxiosTransformer.md) \| [`AxiosTransformer`](AxiosTransformer.md)[]

#### Defined in

node_modules/axios/index.d.ts:54

---

### transformResponse

• `Optional` **transformResponse**: [`AxiosTransformer`](AxiosTransformer.md) \| [`AxiosTransformer`](AxiosTransformer.md)[]

#### Defined in

node_modules/axios/index.d.ts:55

---

### transitional

• `Optional` **transitional**: [`TransitionalOptions`](TransitionalOptions.md)

#### Defined in

node_modules/axios/index.d.ts:80

---

### url

• `Optional` **url**: `string`

#### Defined in

node_modules/axios/index.d.ts:51

---

### validateStatus

• `Optional` **validateStatus**: `null` \| (`status`: `number`) => `boolean`

#### Defined in

node_modules/axios/index.d.ts:71

---

### withCredentials

• `Optional` **withCredentials**: `boolean`

#### Defined in

node_modules/axios/index.d.ts:62

---

### xsrfCookieName

• `Optional` **xsrfCookieName**: `string`

#### Defined in

node_modules/axios/index.d.ts:66

---

### xsrfHeaderName

• `Optional` **xsrfHeaderName**: `string`

#### Defined in

node_modules/axios/index.d.ts:67

## Methods

### onDownloadProgress

▸ `Optional` **onDownloadProgress**(`progressEvent`): `void`

#### Parameters

| Name            | Type  |
| :-------------- | :---- |
| `progressEvent` | `any` |

#### Returns

`void`

#### Defined in

node_modules/axios/index.d.ts:69

---

### onUploadProgress

▸ `Optional` **onUploadProgress**(`progressEvent`): `void`

#### Parameters

| Name            | Type  |
| :-------------- | :---- |
| `progressEvent` | `any` |

#### Returns

`void`

#### Defined in

node_modules/axios/index.d.ts:68

---

### paramsSerializer

▸ `Optional` **paramsSerializer**(`params`): `string`

#### Parameters

| Name     | Type  |
| :------- | :---- |
| `params` | `any` |

#### Returns

`string`

#### Defined in

node_modules/axios/index.d.ts:58
