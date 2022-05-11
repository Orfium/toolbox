---
id: "ReactRouterDom.NavLinkProps"
title: "Interface: NavLinkProps<S>"
sidebar_label: "NavLinkProps"
custom_edit_url: null
---

[ReactRouterDom](../namespaces/ReactRouterDom.md).NavLinkProps

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | `H.LocationState` |

## Hierarchy

- `Omit`<[`LinkProps`](ReactRouterDom.LinkProps.md)<`S`\>, ``"className"`` \| ``"style"``\>

  ↳ **`NavLinkProps`**

## Properties

### about

• `Optional` **about**: `string`

#### Inherited from

Omit.about

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1850

___

### accessKey

• `Optional` **accessKey**: `string`

#### Inherited from

Omit.accessKey

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1826

___

### activeClassName

• `Optional` **activeClassName**: `string`

#### Defined in

node_modules/@types/react-router-dom/index.d.ts:78

___

### activeStyle

• `Optional` **activeStyle**: `CSSProperties`

#### Defined in

node_modules/@types/react-router-dom/index.d.ts:79

___

### aria-activedescendant

• `Optional` **aria-activedescendant**: `string`

Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.

#### Inherited from

Omit.aria-activedescendant

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1560

___

### aria-atomic

• `Optional` **aria-atomic**: `Booleanish`

Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.

#### Inherited from

Omit.aria-atomic

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1562

___

### aria-autocomplete

• `Optional` **aria-autocomplete**: ``"list"`` \| ``"none"`` \| ``"inline"`` \| ``"both"``

Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.

#### Inherited from

Omit.aria-autocomplete

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1567

___

### aria-busy

• `Optional` **aria-busy**: `Booleanish`

Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.

#### Inherited from

Omit.aria-busy

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1569

___

### aria-checked

• `Optional` **aria-checked**: `boolean` \| ``"true"`` \| ``"false"`` \| ``"mixed"``

Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.

**`see`** aria-pressed @see aria-selected.

#### Inherited from

Omit.aria-checked

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1574

___

### aria-colcount

• `Optional` **aria-colcount**: `number`

Defines the total number of columns in a table, grid, or treegrid.

**`see`** aria-colindex.

#### Inherited from

Omit.aria-colcount

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1579

___

### aria-colindex

• `Optional` **aria-colindex**: `number`

Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.

**`see`** aria-colcount @see aria-colspan.

#### Inherited from

Omit.aria-colindex

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1584

___

### aria-colspan

• `Optional` **aria-colspan**: `number`

Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.

**`see`** aria-colindex @see aria-rowspan.

#### Inherited from

Omit.aria-colspan

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1589

___

### aria-controls

• `Optional` **aria-controls**: `string`

Identifies the element (or elements) whose contents or presence are controlled by the current element.

**`see`** aria-owns.

#### Inherited from

Omit.aria-controls

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1594

___

### aria-current

• `Optional` **aria-current**: `boolean` \| ``"location"`` \| ``"true"`` \| ``"false"`` \| ``"page"`` \| ``"step"`` \| ``"date"`` \| ``"time"``

Indicates the element that represents the current item within a container or set of related elements.

#### Inherited from

Omit.aria-current

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1596

___

### aria-describedby

• `Optional` **aria-describedby**: `string`

Identifies the element (or elements) that describes the object.

**`see`** aria-labelledby

#### Inherited from

Omit.aria-describedby

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1601

___

### aria-details

• `Optional` **aria-details**: `string`

Identifies the element that provides a detailed, extended description for the object.

**`see`** aria-describedby.

#### Inherited from

Omit.aria-details

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1606

___

### aria-disabled

• `Optional` **aria-disabled**: `Booleanish`

Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.

**`see`** aria-hidden @see aria-readonly.

#### Inherited from

Omit.aria-disabled

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1611

___

### aria-dropeffect

• `Optional` **aria-dropeffect**: ``"link"`` \| ``"none"`` \| ``"copy"`` \| ``"execute"`` \| ``"move"`` \| ``"popup"``

Indicates what functions can be performed when a dragged object is released on the drop target.

**`deprecated`** in ARIA 1.1

#### Inherited from

Omit.aria-dropeffect

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1616

___

### aria-errormessage

• `Optional` **aria-errormessage**: `string`

Identifies the element that provides an error message for the object.

**`see`** aria-invalid @see aria-describedby.

#### Inherited from

Omit.aria-errormessage

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1621

___

### aria-expanded

• `Optional` **aria-expanded**: `Booleanish`

Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

#### Inherited from

Omit.aria-expanded

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1623

___

### aria-flowto

• `Optional` **aria-flowto**: `string`

Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.

#### Inherited from

Omit.aria-flowto

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1628

___

### aria-grabbed

• `Optional` **aria-grabbed**: `Booleanish`

Indicates an element's "grabbed" state in a drag-and-drop operation.

**`deprecated`** in ARIA 1.1

#### Inherited from

Omit.aria-grabbed

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1633

___

### aria-haspopup

• `Optional` **aria-haspopup**: `boolean` \| ``"true"`` \| ``"false"`` \| ``"dialog"`` \| ``"grid"`` \| ``"listbox"`` \| ``"menu"`` \| ``"tree"``

Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

#### Inherited from

Omit.aria-haspopup

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1635

___

### aria-hidden

• `Optional` **aria-hidden**: `Booleanish`

Indicates whether the element is exposed to an accessibility API.

**`see`** aria-disabled.

#### Inherited from

Omit.aria-hidden

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1640

___

### aria-invalid

• `Optional` **aria-invalid**: `boolean` \| ``"true"`` \| ``"false"`` \| ``"grammar"`` \| ``"spelling"``

Indicates the entered value does not conform to the format expected by the application.

**`see`** aria-errormessage.

#### Inherited from

Omit.aria-invalid

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1645

___

### aria-keyshortcuts

• `Optional` **aria-keyshortcuts**: `string`

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

#### Inherited from

Omit.aria-keyshortcuts

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1647

___

### aria-label

• `Optional` **aria-label**: `string`

Defines a string value that labels the current element.

**`see`** aria-labelledby.

#### Inherited from

Omit.aria-label

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1652

___

### aria-labelledby

• `Optional` **aria-labelledby**: `string`

Identifies the element (or elements) that labels the current element.

**`see`** aria-describedby.

#### Inherited from

Omit.aria-labelledby

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1657

___

### aria-level

• `Optional` **aria-level**: `number`

Defines the hierarchical level of an element within a structure.

#### Inherited from

Omit.aria-level

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1659

___

### aria-live

• `Optional` **aria-live**: ``"off"`` \| ``"assertive"`` \| ``"polite"``

Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

#### Inherited from

Omit.aria-live

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1661

___

### aria-modal

• `Optional` **aria-modal**: `Booleanish`

Indicates whether an element is modal when displayed.

#### Inherited from

Omit.aria-modal

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1663

___

### aria-multiline

• `Optional` **aria-multiline**: `Booleanish`

Indicates whether a text box accepts multiple lines of input or only a single line.

#### Inherited from

Omit.aria-multiline

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1665

___

### aria-multiselectable

• `Optional` **aria-multiselectable**: `Booleanish`

Indicates that the user may select more than one item from the current selectable descendants.

#### Inherited from

Omit.aria-multiselectable

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1667

___

### aria-orientation

• `Optional` **aria-orientation**: ``"horizontal"`` \| ``"vertical"``

Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

#### Inherited from

Omit.aria-orientation

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1669

___

### aria-owns

• `Optional` **aria-owns**: `string`

Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.

**`see`** aria-controls.

#### Inherited from

Omit.aria-owns

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1675

___

### aria-placeholder

• `Optional` **aria-placeholder**: `string`

Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.

#### Inherited from

Omit.aria-placeholder

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1680

___

### aria-posinset

• `Optional` **aria-posinset**: `number`

Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

**`see`** aria-setsize.

#### Inherited from

Omit.aria-posinset

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1685

___

### aria-pressed

• `Optional` **aria-pressed**: `boolean` \| ``"true"`` \| ``"false"`` \| ``"mixed"``

Indicates the current "pressed" state of toggle buttons.

**`see`** aria-checked @see aria-selected.

#### Inherited from

Omit.aria-pressed

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1690

___

### aria-readonly

• `Optional` **aria-readonly**: `Booleanish`

Indicates that the element is not editable, but is otherwise operable.

**`see`** aria-disabled.

#### Inherited from

Omit.aria-readonly

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1695

___

### aria-relevant

• `Optional` **aria-relevant**: ``"text"`` \| ``"additions"`` \| ``"additions removals"`` \| ``"additions text"`` \| ``"all"`` \| ``"removals"`` \| ``"removals additions"`` \| ``"removals text"`` \| ``"text additions"`` \| ``"text removals"``

Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.

**`see`** aria-atomic.

#### Inherited from

Omit.aria-relevant

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1700

___

### aria-required

• `Optional` **aria-required**: `Booleanish`

Indicates that user input is required on the element before a form may be submitted.

#### Inherited from

Omit.aria-required

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1702

___

### aria-roledescription

• `Optional` **aria-roledescription**: `string`

Defines a human-readable, author-localized description for the role of an element.

#### Inherited from

Omit.aria-roledescription

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1704

___

### aria-rowcount

• `Optional` **aria-rowcount**: `number`

Defines the total number of rows in a table, grid, or treegrid.

**`see`** aria-rowindex.

#### Inherited from

Omit.aria-rowcount

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1709

___

### aria-rowindex

• `Optional` **aria-rowindex**: `number`

Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.

**`see`** aria-rowcount @see aria-rowspan.

#### Inherited from

Omit.aria-rowindex

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1714

___

### aria-rowspan

• `Optional` **aria-rowspan**: `number`

Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

**`see`** aria-rowindex @see aria-colspan.

#### Inherited from

Omit.aria-rowspan

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1719

___

### aria-selected

• `Optional` **aria-selected**: `Booleanish`

Indicates the current "selected" state of various widgets.

**`see`** aria-checked @see aria-pressed.

#### Inherited from

Omit.aria-selected

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1724

___

### aria-setsize

• `Optional` **aria-setsize**: `number`

Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

**`see`** aria-posinset.

#### Inherited from

Omit.aria-setsize

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1729

___

### aria-sort

• `Optional` **aria-sort**: ``"none"`` \| ``"ascending"`` \| ``"descending"`` \| ``"other"``

Indicates if items in a table or grid are sorted in ascending or descending order.

#### Inherited from

Omit.aria-sort

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1731

___

### aria-valuemax

• `Optional` **aria-valuemax**: `number`

Defines the maximum allowed value for a range widget.

#### Inherited from

Omit.aria-valuemax

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1733

___

### aria-valuemin

• `Optional` **aria-valuemin**: `number`

Defines the minimum allowed value for a range widget.

#### Inherited from

Omit.aria-valuemin

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1735

___

### aria-valuenow

• `Optional` **aria-valuenow**: `number`

Defines the current value for a range widget.

**`see`** aria-valuetext.

#### Inherited from

Omit.aria-valuenow

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1740

___

### aria-valuetext

• `Optional` **aria-valuetext**: `string`

Defines the human readable text alternative of aria-valuenow for a range widget.

#### Inherited from

Omit.aria-valuetext

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1742

___

### autoCapitalize

• `Optional` **autoCapitalize**: `string`

#### Inherited from

Omit.autoCapitalize

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1860

___

### autoCorrect

• `Optional` **autoCorrect**: `string`

#### Inherited from

Omit.autoCorrect

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1861

___

### autoSave

• `Optional` **autoSave**: `string`

#### Inherited from

Omit.autoSave

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1862

___

### children

• `Optional` **children**: `ReactNode`

#### Inherited from

Omit.children

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1348

___

### className

• `Optional` **className**: `string` \| (`isActive`: `boolean`) => `string`

#### Defined in

node_modules/@types/react-router-dom/index.d.ts:84

___

### color

• `Optional` **color**: `string`

#### Inherited from

Omit.color

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1863

___

### component

• `Optional` **component**: `ComponentType`<`any`\>

#### Inherited from

Omit.component

#### Defined in

node_modules/@types/react-router-dom/index.d.ts:63

___

### contentEditable

• `Optional` **contentEditable**: `Booleanish` \| ``"inherit"``

#### Inherited from

Omit.contentEditable

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1828

___

### contextMenu

• `Optional` **contextMenu**: `string`

#### Inherited from

Omit.contextMenu

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1829

___

### dangerouslySetInnerHTML

• `Optional` **dangerouslySetInnerHTML**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__html` | `string` |

#### Inherited from

Omit.dangerouslySetInnerHTML

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1349

___

### datatype

• `Optional` **datatype**: `string`

#### Inherited from

Omit.datatype

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1851

___

### defaultChecked

• `Optional` **defaultChecked**: `boolean`

#### Inherited from

Omit.defaultChecked

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1820

___

### defaultValue

• `Optional` **defaultValue**: `string` \| `number` \| readonly `string`[]

#### Inherited from

Omit.defaultValue

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1821

___

### dir

• `Optional` **dir**: `string`

#### Inherited from

Omit.dir

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1830

___

### download

• `Optional` **download**: `any`

#### Inherited from

Omit.download

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:2015

___

### draggable

• `Optional` **draggable**: `Booleanish`

#### Inherited from

Omit.draggable

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1831

___

### exact

• `Optional` **exact**: `boolean`

#### Defined in

node_modules/@types/react-router-dom/index.d.ts:80

___

### hidden

• `Optional` **hidden**: `boolean`

#### Inherited from

Omit.hidden

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1832

___

### href

• `Optional` **href**: `string`

#### Inherited from

Omit.href

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:2016

___

### hrefLang

• `Optional` **hrefLang**: `string`

#### Inherited from

Omit.hrefLang

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:2017

___

### id

• `Optional` **id**: `string`

#### Inherited from

Omit.id

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1833

___

### inlist

• `Optional` **inlist**: `any`

#### Inherited from

Omit.inlist

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1852

___

### innerRef

• `Optional` **innerRef**: `Ref`<`HTMLAnchorElement`\>

#### Inherited from

Omit.innerRef

#### Defined in

node_modules/@types/react-router-dom/index.d.ts:66

___

### inputMode

• `Optional` **inputMode**: ``"none"`` \| ``"search"`` \| ``"text"`` \| ``"tel"`` \| ``"url"`` \| ``"email"`` \| ``"numeric"`` \| ``"decimal"``

Hints at the type of data that might be entered by the user while editing the element or its contents

**`see`** https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute

#### Inherited from

Omit.inputMode

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1878

___

### is

• `Optional` **is**: `string`

Specify that a standard HTML element should behave like a defined custom built-in element

**`see`** https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is

#### Inherited from

Omit.is

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1883

___

### itemID

• `Optional` **itemID**: `string`

#### Inherited from

Omit.itemID

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1867

___

### itemProp

• `Optional` **itemProp**: `string`

#### Inherited from

Omit.itemProp

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1864

___

### itemRef

• `Optional` **itemRef**: `string`

#### Inherited from

Omit.itemRef

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1868

___

### itemScope

• `Optional` **itemScope**: `boolean`

#### Inherited from

Omit.itemScope

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1865

___

### itemType

• `Optional` **itemType**: `string`

#### Inherited from

Omit.itemType

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1866

___

### lang

• `Optional` **lang**: `string`

#### Inherited from

Omit.lang

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1834

___

### location

• `Optional` **location**: `Location`<`S`\>

#### Defined in

node_modules/@types/react-router-dom/index.d.ts:83

___

### media

• `Optional` **media**: `string`

#### Inherited from

Omit.media

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:2018

___

### onAbort

• `Optional` **onAbort**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onAbort

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1406

___

### onAbortCapture

• `Optional` **onAbortCapture**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onAbortCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1407

___

### onAnimationEnd

• `Optional` **onAnimationEnd**: `AnimationEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onAnimationEnd

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1536

___

### onAnimationEndCapture

• `Optional` **onAnimationEndCapture**: `AnimationEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onAnimationEndCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1537

___

### onAnimationIteration

• `Optional` **onAnimationIteration**: `AnimationEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onAnimationIteration

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1538

___

### onAnimationIterationCapture

• `Optional` **onAnimationIterationCapture**: `AnimationEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onAnimationIterationCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1539

___

### onAnimationStart

• `Optional` **onAnimationStart**: `AnimationEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onAnimationStart

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1534

___

### onAnimationStartCapture

• `Optional` **onAnimationStartCapture**: `AnimationEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onAnimationStartCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1535

___

### onAuxClick

• `Optional` **onAuxClick**: `MouseEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onAuxClick

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1452

___

### onAuxClickCapture

• `Optional` **onAuxClickCapture**: `MouseEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onAuxClickCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1453

___

### onBeforeInput

• `Optional` **onBeforeInput**: `FormEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onBeforeInput

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1378

___

### onBeforeInputCapture

• `Optional` **onBeforeInputCapture**: `FormEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onBeforeInputCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1379

___

### onBlur

• `Optional` **onBlur**: `FocusEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onBlur

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1372

___

### onBlurCapture

• `Optional` **onBlurCapture**: `FocusEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onBlurCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1373

___

### onCanPlay

• `Optional` **onCanPlay**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onCanPlay

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1408

___

### onCanPlayCapture

• `Optional` **onCanPlayCapture**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onCanPlayCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1409

___

### onCanPlayThrough

• `Optional` **onCanPlayThrough**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onCanPlayThrough

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1410

___

### onCanPlayThroughCapture

• `Optional` **onCanPlayThroughCapture**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onCanPlayThroughCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1411

___

### onChange

• `Optional` **onChange**: `FormEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onChange

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1376

___

### onChangeCapture

• `Optional` **onChangeCapture**: `FormEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onChangeCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1377

___

### onClick

• `Optional` **onClick**: `MouseEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onClick

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1454

___

### onClickCapture

• `Optional` **onClickCapture**: `MouseEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onClickCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1455

___

### onCompositionEnd

• `Optional` **onCompositionEnd**: `CompositionEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onCompositionEnd

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1362

___

### onCompositionEndCapture

• `Optional` **onCompositionEndCapture**: `CompositionEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onCompositionEndCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1363

___

### onCompositionStart

• `Optional` **onCompositionStart**: `CompositionEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onCompositionStart

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1364

___

### onCompositionStartCapture

• `Optional` **onCompositionStartCapture**: `CompositionEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onCompositionStartCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1365

___

### onCompositionUpdate

• `Optional` **onCompositionUpdate**: `CompositionEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onCompositionUpdate

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1366

___

### onCompositionUpdateCapture

• `Optional` **onCompositionUpdateCapture**: `CompositionEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onCompositionUpdateCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1367

___

### onContextMenu

• `Optional` **onContextMenu**: `MouseEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onContextMenu

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1456

___

### onContextMenuCapture

• `Optional` **onContextMenuCapture**: `MouseEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onContextMenuCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1457

___

### onCopy

• `Optional` **onCopy**: `ClipboardEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onCopy

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1354

___

### onCopyCapture

• `Optional` **onCopyCapture**: `ClipboardEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onCopyCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1355

___

### onCut

• `Optional` **onCut**: `ClipboardEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onCut

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1356

___

### onCutCapture

• `Optional` **onCutCapture**: `ClipboardEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onCutCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1357

___

### onDoubleClick

• `Optional` **onDoubleClick**: `MouseEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onDoubleClick

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1458

___

### onDoubleClickCapture

• `Optional` **onDoubleClickCapture**: `MouseEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onDoubleClickCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1459

___

### onDrag

• `Optional` **onDrag**: `DragEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onDrag

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1460

___

### onDragCapture

• `Optional` **onDragCapture**: `DragEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onDragCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1461

___

### onDragEnd

• `Optional` **onDragEnd**: `DragEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onDragEnd

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1462

___

### onDragEndCapture

• `Optional` **onDragEndCapture**: `DragEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onDragEndCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1463

___

### onDragEnter

• `Optional` **onDragEnter**: `DragEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onDragEnter

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1464

___

### onDragEnterCapture

• `Optional` **onDragEnterCapture**: `DragEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onDragEnterCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1465

___

### onDragExit

• `Optional` **onDragExit**: `DragEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onDragExit

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1466

___

### onDragExitCapture

• `Optional` **onDragExitCapture**: `DragEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onDragExitCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1467

___

### onDragLeave

• `Optional` **onDragLeave**: `DragEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onDragLeave

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1468

___

### onDragLeaveCapture

• `Optional` **onDragLeaveCapture**: `DragEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onDragLeaveCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1469

___

### onDragOver

• `Optional` **onDragOver**: `DragEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onDragOver

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1470

___

### onDragOverCapture

• `Optional` **onDragOverCapture**: `DragEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onDragOverCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1471

___

### onDragStart

• `Optional` **onDragStart**: `DragEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onDragStart

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1472

___

### onDragStartCapture

• `Optional` **onDragStartCapture**: `DragEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onDragStartCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1473

___

### onDrop

• `Optional` **onDrop**: `DragEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onDrop

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1474

___

### onDropCapture

• `Optional` **onDropCapture**: `DragEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onDropCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1475

___

### onDurationChange

• `Optional` **onDurationChange**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onDurationChange

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1412

___

### onDurationChangeCapture

• `Optional` **onDurationChangeCapture**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onDurationChangeCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1413

___

### onEmptied

• `Optional` **onEmptied**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onEmptied

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1414

___

### onEmptiedCapture

• `Optional` **onEmptiedCapture**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onEmptiedCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1415

___

### onEncrypted

• `Optional` **onEncrypted**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onEncrypted

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1416

___

### onEncryptedCapture

• `Optional` **onEncryptedCapture**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onEncryptedCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1417

___

### onEnded

• `Optional` **onEnded**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onEnded

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1418

___

### onEndedCapture

• `Optional` **onEndedCapture**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onEndedCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1419

___

### onError

• `Optional` **onError**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onError

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1392

___

### onErrorCapture

• `Optional` **onErrorCapture**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onErrorCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1393

___

### onFocus

• `Optional` **onFocus**: `FocusEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onFocus

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1370

___

### onFocusCapture

• `Optional` **onFocusCapture**: `FocusEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onFocusCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1371

___

### onGotPointerCapture

• `Optional` **onGotPointerCapture**: `PointerEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onGotPointerCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1520

___

### onGotPointerCaptureCapture

• `Optional` **onGotPointerCaptureCapture**: `PointerEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onGotPointerCaptureCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1521

___

### onInput

• `Optional` **onInput**: `FormEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onInput

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1380

___

### onInputCapture

• `Optional` **onInputCapture**: `FormEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onInputCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1381

___

### onInvalid

• `Optional` **onInvalid**: `FormEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onInvalid

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1386

___

### onInvalidCapture

• `Optional` **onInvalidCapture**: `FormEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onInvalidCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1387

___

### onKeyDown

• `Optional` **onKeyDown**: `KeyboardEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onKeyDown

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1396

___

### onKeyDownCapture

• `Optional` **onKeyDownCapture**: `KeyboardEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onKeyDownCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1397

___

### onKeyPress

• `Optional` **onKeyPress**: `KeyboardEventHandler`<`HTMLAnchorElement`\>

**`deprecated`**

#### Inherited from

Omit.onKeyPress

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1399

___

### onKeyPressCapture

• `Optional` **onKeyPressCapture**: `KeyboardEventHandler`<`HTMLAnchorElement`\>

**`deprecated`**

#### Inherited from

Omit.onKeyPressCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1401

___

### onKeyUp

• `Optional` **onKeyUp**: `KeyboardEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onKeyUp

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1402

___

### onKeyUpCapture

• `Optional` **onKeyUpCapture**: `KeyboardEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onKeyUpCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1403

___

### onLoad

• `Optional` **onLoad**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onLoad

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1390

___

### onLoadCapture

• `Optional` **onLoadCapture**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onLoadCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1391

___

### onLoadStart

• `Optional` **onLoadStart**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onLoadStart

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1424

___

### onLoadStartCapture

• `Optional` **onLoadStartCapture**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onLoadStartCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1425

___

### onLoadedData

• `Optional` **onLoadedData**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onLoadedData

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1420

___

### onLoadedDataCapture

• `Optional` **onLoadedDataCapture**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onLoadedDataCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1421

___

### onLoadedMetadata

• `Optional` **onLoadedMetadata**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onLoadedMetadata

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1422

___

### onLoadedMetadataCapture

• `Optional` **onLoadedMetadataCapture**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onLoadedMetadataCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1423

___

### onLostPointerCapture

• `Optional` **onLostPointerCapture**: `PointerEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onLostPointerCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1522

___

### onLostPointerCaptureCapture

• `Optional` **onLostPointerCaptureCapture**: `PointerEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onLostPointerCaptureCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1523

___

### onMouseDown

• `Optional` **onMouseDown**: `MouseEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onMouseDown

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1476

___

### onMouseDownCapture

• `Optional` **onMouseDownCapture**: `MouseEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onMouseDownCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1477

___

### onMouseEnter

• `Optional` **onMouseEnter**: `MouseEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onMouseEnter

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1478

___

### onMouseLeave

• `Optional` **onMouseLeave**: `MouseEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onMouseLeave

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1479

___

### onMouseMove

• `Optional` **onMouseMove**: `MouseEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onMouseMove

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1480

___

### onMouseMoveCapture

• `Optional` **onMouseMoveCapture**: `MouseEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onMouseMoveCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1481

___

### onMouseOut

• `Optional` **onMouseOut**: `MouseEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onMouseOut

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1482

___

### onMouseOutCapture

• `Optional` **onMouseOutCapture**: `MouseEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onMouseOutCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1483

___

### onMouseOver

• `Optional` **onMouseOver**: `MouseEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onMouseOver

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1484

___

### onMouseOverCapture

• `Optional` **onMouseOverCapture**: `MouseEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onMouseOverCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1485

___

### onMouseUp

• `Optional` **onMouseUp**: `MouseEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onMouseUp

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1486

___

### onMouseUpCapture

• `Optional` **onMouseUpCapture**: `MouseEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onMouseUpCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1487

___

### onPaste

• `Optional` **onPaste**: `ClipboardEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onPaste

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1358

___

### onPasteCapture

• `Optional` **onPasteCapture**: `ClipboardEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onPasteCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1359

___

### onPause

• `Optional` **onPause**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onPause

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1426

___

### onPauseCapture

• `Optional` **onPauseCapture**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onPauseCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1427

___

### onPlay

• `Optional` **onPlay**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onPlay

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1428

___

### onPlayCapture

• `Optional` **onPlayCapture**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onPlayCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1429

___

### onPlaying

• `Optional` **onPlaying**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onPlaying

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1430

___

### onPlayingCapture

• `Optional` **onPlayingCapture**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onPlayingCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1431

___

### onPointerCancel

• `Optional` **onPointerCancel**: `PointerEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onPointerCancel

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1510

___

### onPointerCancelCapture

• `Optional` **onPointerCancelCapture**: `PointerEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onPointerCancelCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1511

___

### onPointerDown

• `Optional` **onPointerDown**: `PointerEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onPointerDown

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1504

___

### onPointerDownCapture

• `Optional` **onPointerDownCapture**: `PointerEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onPointerDownCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1505

___

### onPointerEnter

• `Optional` **onPointerEnter**: `PointerEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onPointerEnter

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1512

___

### onPointerEnterCapture

• `Optional` **onPointerEnterCapture**: `PointerEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onPointerEnterCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1513

___

### onPointerLeave

• `Optional` **onPointerLeave**: `PointerEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onPointerLeave

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1514

___

### onPointerLeaveCapture

• `Optional` **onPointerLeaveCapture**: `PointerEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onPointerLeaveCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1515

___

### onPointerMove

• `Optional` **onPointerMove**: `PointerEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onPointerMove

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1506

___

### onPointerMoveCapture

• `Optional` **onPointerMoveCapture**: `PointerEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onPointerMoveCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1507

___

### onPointerOut

• `Optional` **onPointerOut**: `PointerEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onPointerOut

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1518

___

### onPointerOutCapture

• `Optional` **onPointerOutCapture**: `PointerEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onPointerOutCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1519

___

### onPointerOver

• `Optional` **onPointerOver**: `PointerEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onPointerOver

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1516

___

### onPointerOverCapture

• `Optional` **onPointerOverCapture**: `PointerEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onPointerOverCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1517

___

### onPointerUp

• `Optional` **onPointerUp**: `PointerEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onPointerUp

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1508

___

### onPointerUpCapture

• `Optional` **onPointerUpCapture**: `PointerEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onPointerUpCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1509

___

### onProgress

• `Optional` **onProgress**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onProgress

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1432

___

### onProgressCapture

• `Optional` **onProgressCapture**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onProgressCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1433

___

### onRateChange

• `Optional` **onRateChange**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onRateChange

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1434

___

### onRateChangeCapture

• `Optional` **onRateChangeCapture**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onRateChangeCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1435

___

### onReset

• `Optional` **onReset**: `FormEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onReset

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1382

___

### onResetCapture

• `Optional` **onResetCapture**: `FormEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onResetCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1383

___

### onScroll

• `Optional` **onScroll**: `UIEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onScroll

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1526

___

### onScrollCapture

• `Optional` **onScrollCapture**: `UIEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onScrollCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1527

___

### onSeeked

• `Optional` **onSeeked**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onSeeked

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1436

___

### onSeekedCapture

• `Optional` **onSeekedCapture**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onSeekedCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1437

___

### onSeeking

• `Optional` **onSeeking**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onSeeking

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1438

___

### onSeekingCapture

• `Optional` **onSeekingCapture**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onSeekingCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1439

___

### onSelect

• `Optional` **onSelect**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onSelect

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1490

___

### onSelectCapture

• `Optional` **onSelectCapture**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onSelectCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1491

___

### onStalled

• `Optional` **onStalled**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onStalled

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1440

___

### onStalledCapture

• `Optional` **onStalledCapture**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onStalledCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1441

___

### onSubmit

• `Optional` **onSubmit**: `FormEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onSubmit

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1384

___

### onSubmitCapture

• `Optional` **onSubmitCapture**: `FormEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onSubmitCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1385

___

### onSuspend

• `Optional` **onSuspend**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onSuspend

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1442

___

### onSuspendCapture

• `Optional` **onSuspendCapture**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onSuspendCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1443

___

### onTimeUpdate

• `Optional` **onTimeUpdate**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onTimeUpdate

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1444

___

### onTimeUpdateCapture

• `Optional` **onTimeUpdateCapture**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onTimeUpdateCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1445

___

### onTouchCancel

• `Optional` **onTouchCancel**: `TouchEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onTouchCancel

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1494

___

### onTouchCancelCapture

• `Optional` **onTouchCancelCapture**: `TouchEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onTouchCancelCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1495

___

### onTouchEnd

• `Optional` **onTouchEnd**: `TouchEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onTouchEnd

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1496

___

### onTouchEndCapture

• `Optional` **onTouchEndCapture**: `TouchEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onTouchEndCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1497

___

### onTouchMove

• `Optional` **onTouchMove**: `TouchEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onTouchMove

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1498

___

### onTouchMoveCapture

• `Optional` **onTouchMoveCapture**: `TouchEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onTouchMoveCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1499

___

### onTouchStart

• `Optional` **onTouchStart**: `TouchEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onTouchStart

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1500

___

### onTouchStartCapture

• `Optional` **onTouchStartCapture**: `TouchEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onTouchStartCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1501

___

### onTransitionEnd

• `Optional` **onTransitionEnd**: `TransitionEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onTransitionEnd

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1542

___

### onTransitionEndCapture

• `Optional` **onTransitionEndCapture**: `TransitionEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onTransitionEndCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1543

___

### onVolumeChange

• `Optional` **onVolumeChange**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onVolumeChange

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1446

___

### onVolumeChangeCapture

• `Optional` **onVolumeChangeCapture**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onVolumeChangeCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1447

___

### onWaiting

• `Optional` **onWaiting**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onWaiting

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1448

___

### onWaitingCapture

• `Optional` **onWaitingCapture**: `ReactEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onWaitingCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1449

___

### onWheel

• `Optional` **onWheel**: `WheelEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onWheel

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1530

___

### onWheelCapture

• `Optional` **onWheelCapture**: `WheelEventHandler`<`HTMLAnchorElement`\>

#### Inherited from

Omit.onWheelCapture

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1531

___

### ping

• `Optional` **ping**: `string`

#### Inherited from

Omit.ping

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:2019

___

### placeholder

• `Optional` **placeholder**: `string`

#### Inherited from

Omit.placeholder

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1835

___

### prefix

• `Optional` **prefix**: `string`

#### Inherited from

Omit.prefix

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1853

___

### property

• `Optional` **property**: `string`

#### Inherited from

Omit.property

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1854

___

### radioGroup

• `Optional` **radioGroup**: `string`

#### Inherited from

Omit.radioGroup

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1844

___

### referrerPolicy

• `Optional` **referrerPolicy**: `HTMLAttributeReferrerPolicy`

#### Inherited from

Omit.referrerPolicy

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:2023

___

### rel

• `Optional` **rel**: `string`

#### Inherited from

Omit.rel

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:2020

___

### replace

• `Optional` **replace**: `boolean`

#### Inherited from

Omit.replace

#### Defined in

node_modules/@types/react-router-dom/index.d.ts:65

___

### resource

• `Optional` **resource**: `string`

#### Inherited from

Omit.resource

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1855

___

### results

• `Optional` **results**: `number`

#### Inherited from

Omit.results

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1869

___

### role

• `Optional` **role**: `AriaRole`

#### Inherited from

Omit.role

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1847

___

### security

• `Optional` **security**: `string`

#### Inherited from

Omit.security

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1870

___

### sensitive

• `Optional` **sensitive**: `boolean`

#### Defined in

node_modules/@types/react-router-dom/index.d.ts:89

___

### slot

• `Optional` **slot**: `string`

#### Inherited from

Omit.slot

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1836

___

### spellCheck

• `Optional` **spellCheck**: `Booleanish`

#### Inherited from

Omit.spellCheck

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1837

___

### strict

• `Optional` **strict**: `boolean`

#### Defined in

node_modules/@types/react-router-dom/index.d.ts:81

___

### style

• `Optional` **style**: `CSSProperties` \| (`isActive`: `boolean`) => `CSSProperties`

#### Defined in

node_modules/@types/react-router-dom/index.d.ts:85

___

### suppressContentEditableWarning

• `Optional` **suppressContentEditableWarning**: `boolean`

#### Inherited from

Omit.suppressContentEditableWarning

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1822

___

### suppressHydrationWarning

• `Optional` **suppressHydrationWarning**: `boolean`

#### Inherited from

Omit.suppressHydrationWarning

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1823

___

### tabIndex

• `Optional` **tabIndex**: `number`

#### Inherited from

Omit.tabIndex

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1839

___

### target

• `Optional` **target**: `HTMLAttributeAnchorTarget`

#### Inherited from

Omit.target

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:2021

___

### title

• `Optional` **title**: `string`

#### Inherited from

Omit.title

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1840

___

### to

• **to**: `LocationDescriptor`<`S`\> \| (`location`: `Location`<`S`\>) => `LocationDescriptor`<`S`\>

#### Inherited from

Omit.to

#### Defined in

node_modules/@types/react-router-dom/index.d.ts:64

___

### translate

• `Optional` **translate**: ``"yes"`` \| ``"no"``

#### Inherited from

Omit.translate

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1841

___

### type

• `Optional` **type**: `string`

#### Inherited from

Omit.type

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:2022

___

### typeof

• `Optional` **typeof**: `string`

#### Inherited from

Omit.typeof

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1856

___

### unselectable

• `Optional` **unselectable**: ``"on"`` \| ``"off"``

#### Inherited from

Omit.unselectable

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1871

___

### vocab

• `Optional` **vocab**: `string`

#### Inherited from

Omit.vocab

#### Defined in

node_modules/@types/react-router/node_modules/@types/react/index.d.ts:1857

## Methods

### isActive

▸ `Optional` **isActive**<`Params`\>(`match`, `location`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Params` | extends { [K in string \| number \| symbol]?: string } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `match` | ``null`` \| [`match`](ReactRouterDom.match.md)<`Params`\> |
| `location` | `Location`<`S`\> |

#### Returns

`boolean`

#### Defined in

node_modules/@types/react-router-dom/index.d.ts:82
