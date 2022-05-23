---
id: 'AxiosPromise'
title: 'Interface: AxiosPromise<T>'
sidebar_label: 'AxiosPromise'
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

## Hierarchy

- `Promise`<[`AxiosResponse`](AxiosResponse.md)<`T`\>\>

  ↳ **`AxiosPromise`**

## Properties

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Inherited from

Promise.\_\_@toStringTag@2440

#### Defined in

documentation/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:174

## Methods

### catch

▸ **catch**<`TResult`\>(`onrejected?`): `Promise`<[`AxiosResponse`](AxiosResponse.md)<`T`\> \| `TResult`\>

Attaches a callback for only the rejection of the Promise.

#### Type parameters

| Name      | Type    |
| :-------- | :------ |
| `TResult` | `never` |

#### Parameters

| Name          | Type                                                                  | Description                                           |
| :------------ | :-------------------------------------------------------------------- | :---------------------------------------------------- |
| `onrejected?` | `null` \| (`reason`: `any`) => `TResult` \| `PromiseLike`<`TResult`\> | The callback to execute when the Promise is rejected. |

#### Returns

`Promise`<[`AxiosResponse`](AxiosResponse.md)<`T`\> \| `TResult`\>

A Promise for the completion of the callback.

#### Inherited from

Promise.catch

#### Defined in

documentation/node_modules/typescript/lib/lib.es5.d.ts:1509

---

### finally

▸ **finally**(`onfinally?`): `Promise`<[`AxiosResponse`](AxiosResponse.md)<`T`\>\>

Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
resolved value cannot be modified from the callback.

#### Parameters

| Name         | Type                   | Description                                                                  |
| :----------- | :--------------------- | :--------------------------------------------------------------------------- |
| `onfinally?` | `null` \| () => `void` | The callback to execute when the Promise is settled (fulfilled or rejected). |

#### Returns

`Promise`<[`AxiosResponse`](AxiosResponse.md)<`T`\>\>

A Promise for the completion of the callback.

#### Inherited from

Promise.finally

#### Defined in

documentation/node_modules/typescript/lib/lib.es2018.promise.d.ts:31

---

### then

▸ **then**<`TResult1`, `TResult2`\>(`onfulfilled?`, `onrejected?`): `Promise`<`TResult1` \| `TResult2`\>

Attaches callbacks for the resolution and/or rejection of the Promise.

#### Type parameters

| Name       | Type                                      |
| :--------- | :---------------------------------------- |
| `TResult1` | [`AxiosResponse`](AxiosResponse.md)<`T`\> |
| `TResult2` | `never`                                   |

#### Parameters

| Name           | Type                                                                                                       | Description                                           |
| :------------- | :--------------------------------------------------------------------------------------------------------- | :---------------------------------------------------- |
| `onfulfilled?` | `null` \| (`value`: [`AxiosResponse`](AxiosResponse.md)<`T`\>) => `TResult1` \| `PromiseLike`<`TResult1`\> | The callback to execute when the Promise is resolved. |
| `onrejected?`  | `null` \| (`reason`: `any`) => `TResult2` \| `PromiseLike`<`TResult2`\>                                    | The callback to execute when the Promise is rejected. |

#### Returns

`Promise`<`TResult1` \| `TResult2`\>

A Promise for the completion of which ever callback is executed.

#### Inherited from

Promise.then

#### Defined in

documentation/node_modules/typescript/lib/lib.es5.d.ts:1502
