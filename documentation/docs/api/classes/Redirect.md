---
id: 'Redirect'
title: 'Class: Redirect'
sidebar_label: 'Redirect'
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `Component`<`RedirectProps`, `any`\>

  ↳ **`Redirect`**

## Constructors

### constructor

• **new Redirect**(`props`)

#### Parameters

| Name    | Type                                            |
| :------ | :---------------------------------------------- |
| `props` | `RedirectProps` \| `Readonly`<`RedirectProps`\> |

#### Inherited from

React.Component<RedirectProps, any\>.constructor

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:472

• **new Redirect**(`props`, `context`)

**`deprecated`**

**`see`** https://reactjs.org/docs/legacy-context.html

#### Parameters

| Name      | Type            |
| :-------- | :-------------- |
| `props`   | `RedirectProps` |
| `context` | `any`           |

#### Inherited from

React.Component<RedirectProps, any\>.constructor

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:477

## Properties

### context

• **context**: `unknown`

If using the new style context, re-declare this in your class to be the
`React.ContextType` of your `static contextType`.
Should be used with type annotation or static contextType.

```ts
static contextType = MyContext
// For TS pre-3.7:
context!: React.ContextType<typeof MyContext>
// For TS 3.7 and above:
declare context: React.ContextType<typeof MyContext>
```

**`see`** https://reactjs.org/docs/context.html

#### Inherited from

React.Component.context

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:470

---

### props

• `Readonly` **props**: `Readonly`<`RedirectProps`\>

#### Inherited from

React.Component.props

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:490

---

### refs

• **refs**: `Object`

**`deprecated`**
https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs

#### Index signature

▪ [key: `string`]: `ReactInstance`

#### Inherited from

React.Component.refs

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:496

---

### state

• **state**: `Readonly`<`any`\>

#### Inherited from

React.Component.state

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:491

---

### contextType

▪ `Static` `Optional` **contextType**: `Context`<`any`\>

If set, `this.context` will be set at runtime to the current value of the given Context.

Usage:

```ts
type MyContext = number;
const Ctx = React.createContext<MyContext>(0);

class Foo extends React.Component {
  static contextType = Ctx;
  context!: React.ContextType<typeof Ctx>;
  render() {
    return <>My context's value: {this.context}</>;
  }
}
```

**`see`** https://reactjs.org/docs/context.html#classcontexttype

#### Inherited from

React.Component.contextType

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:453

## Methods

### UNSAFE_componentWillMount

▸ `Optional` **UNSAFE_componentWillMount**(): `void`

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Returns

`void`

#### Inherited from

React.Component.UNSAFE_componentWillMount

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:687

---

### UNSAFE_componentWillReceiveProps

▸ `Optional` **UNSAFE_componentWillReceiveProps**(`nextProps`, `nextContext`): `void`

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name          | Type                         |
| :------------ | :--------------------------- |
| `nextProps`   | `Readonly`<`RedirectProps`\> |
| `nextContext` | `any`                        |

#### Returns

`void`

#### Inherited from

React.Component.UNSAFE_componentWillReceiveProps

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:719

---

### UNSAFE_componentWillUpdate

▸ `Optional` **UNSAFE_componentWillUpdate**(`nextProps`, `nextState`, `nextContext`): `void`

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name          | Type                         |
| :------------ | :--------------------------- |
| `nextProps`   | `Readonly`<`RedirectProps`\> |
| `nextState`   | `Readonly`<`any`\>           |
| `nextContext` | `any`                        |

#### Returns

`void`

#### Inherited from

React.Component.UNSAFE_componentWillUpdate

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:747

---

### componentDidCatch

▸ `Optional` **componentDidCatch**(`error`, `errorInfo`): `void`

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

#### Parameters

| Name        | Type        |
| :---------- | :---------- |
| `error`     | `Error`     |
| `errorInfo` | `ErrorInfo` |

#### Returns

`void`

#### Inherited from

React.Component.componentDidCatch

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:616

---

### componentDidMount

▸ `Optional` **componentDidMount**(): `void`

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

#### Returns

`void`

#### Inherited from

React.Component.componentDidMount

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:595

---

### componentDidUpdate

▸ `Optional` **componentDidUpdate**(`prevProps`, `prevState`, `snapshot?`): `void`

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters

| Name        | Type                         |
| :---------- | :--------------------------- |
| `prevProps` | `Readonly`<`RedirectProps`\> |
| `prevState` | `Readonly`<`any`\>           |
| `snapshot?` | `any`                        |

#### Returns

`void`

#### Inherited from

React.Component.componentDidUpdate

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:658

---

### componentWillMount

▸ `Optional` **componentWillMount**(): `void`

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Returns

`void`

#### Inherited from

React.Component.componentWillMount

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:673

---

### componentWillReceiveProps

▸ `Optional` **componentWillReceiveProps**(`nextProps`, `nextContext`): `void`

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name          | Type                         |
| :------------ | :--------------------------- |
| `nextProps`   | `Readonly`<`RedirectProps`\> |
| `nextContext` | `any`                        |

#### Returns

`void`

#### Inherited from

React.Component.componentWillReceiveProps

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:702

---

### componentWillUnmount

▸ `Optional` **componentWillUnmount**(): `void`

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

#### Returns

`void`

#### Inherited from

React.Component.componentWillUnmount

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:611

---

### componentWillUpdate

▸ `Optional` **componentWillUpdate**(`nextProps`, `nextState`, `nextContext`): `void`

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name          | Type                         |
| :------------ | :--------------------------- |
| `nextProps`   | `Readonly`<`RedirectProps`\> |
| `nextState`   | `Readonly`<`any`\>           |
| `nextContext` | `any`                        |

#### Returns

`void`

#### Inherited from

React.Component.componentWillUpdate

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:732

---

### forceUpdate

▸ **forceUpdate**(`callback?`): `void`

#### Parameters

| Name        | Type         |
| :---------- | :----------- |
| `callback?` | () => `void` |

#### Returns

`void`

#### Inherited from

React.Component.forceUpdate

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:487

---

### getSnapshotBeforeUpdate

▸ `Optional` **getSnapshotBeforeUpdate**(`prevProps`, `prevState`): `any`

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

#### Parameters

| Name        | Type                         |
| :---------- | :--------------------------- |
| `prevProps` | `Readonly`<`RedirectProps`\> |
| `prevState` | `Readonly`<`any`\>           |

#### Returns

`any`

#### Inherited from

React.Component.getSnapshotBeforeUpdate

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:652

---

### render

▸ **render**(): `ReactNode`

#### Returns

`ReactNode`

#### Inherited from

React.Component.render

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:488

---

### setState

▸ **setState**<`K`\>(`state`, `callback?`): `void`

#### Type parameters

| Name | Type                                     |
| :--- | :--------------------------------------- |
| `K`  | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name        | Type         |
| :---------- | :----------- |
| `state`     | `any`        |
| `callback?` | () => `void` |

#### Returns

`void`

#### Inherited from

React.Component.setState

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:482

---

### shouldComponentUpdate

▸ `Optional` **shouldComponentUpdate**(`nextProps`, `nextState`, `nextContext`): `boolean`

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

#### Parameters

| Name          | Type                         |
| :------------ | :--------------------------- |
| `nextProps`   | `Readonly`<`RedirectProps`\> |
| `nextState`   | `Readonly`<`any`\>           |
| `nextContext` | `any`                        |

#### Returns

`boolean`

#### Inherited from

React.Component.shouldComponentUpdate

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:606
