---
id: 'auth'
title: 'Namespace: auth'
sidebar_label: 'auth'
sidebar_position: 0
custom_edit_url: null
---

## Variables

### AuthenticationProvider

• `Const` **AuthenticationProvider**: `React.FC`

#### Defined in

[src/authentication/context.tsx:38](https://github.com/Orfium/toolbox/blob/2121dd5/src/authentication/context.tsx#L38)

## Functions

### guardContext

▸ **guardContext**<`T`\>(`contextProps`, `errorMessage`): `T`

takes the context props and an error message and returns a proxy in case something is used
outside of the provider

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name           | Type     |
| :------------- | :------- |
| `contextProps` | `T`      |
| `errorMessage` | `string` |

#### Returns

`T`

#### Defined in

[src/authentication/context.tsx:13](https://github.com/Orfium/toolbox/blob/2121dd5/src/authentication/context.tsx#L13)

---

### useAuthentication

▸ **useAuthentication**(): `AuthenticationContextProps`

#### Returns

`AuthenticationContextProps`

#### Defined in

[src/authentication/context.tsx:44](https://github.com/Orfium/toolbox/blob/2121dd5/src/authentication/context.tsx#L44)
