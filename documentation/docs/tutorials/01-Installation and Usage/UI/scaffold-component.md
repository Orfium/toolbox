---
id: 'Scaffold Component'
sidebar_label: 'Scaffold Component'
sidebar_position: 3
---

# Scaffold Component

## Overview

In general, the basic HTML structure of almost all Orfium client apps is the following:

- The [`Navigation`](../../../api/Components/Navigation.mdx) element on the left
- The [`TopBar`](../../../api/Components/TopBar.mdx) element at the top, on the right of the [`Navigation`](../../../api/Components/Navigation.mdx) element
- The main content below the [`TopBar`](../../../api/Components/TopBar.mdx), on the right of the [`Navigation`](../../../api/Components/Navigation.mdx) element

![Orfium app structure example](/img/example_structure.png)

The [`Scaffold`](../../../api/Components/Scaffold.mdx) component provides an out-of-the-box solution for setting up your
app with the aforementioned HTML structure.

:::info
Using [`Scaffold`](../../../api/Components/Scaffold.mdx) is not required in order to use [`Navigation`](../../../api/Components/Navigation.mdx) and [`TopBar`](../../../api/Components/TopBar.mdx).
:::

## Usage

In order to use the [`Scaffold`](../../../api/Components/Scaffold.mdx) component, you only have to import it from `@orfium/toolbox` and add it to the file where you build your product's overall layout.
Keep in mind that `@orfium/ictinus` must be installed in your app. Follow these [steps](https://ictinus.herokuapp.com/?path=/story/guide-getting-started--page) before you proceed.

```tsx
//...
// highlight-next-line
import { Navigation, Scaffold, TopBar } from '@orfium/toolbox';
//...

function Layout() {
  // ....

  return (
    <Scaffold
      navigationSlot={
        <Navigation
          header="Earnings & Reports"
          menuItems={regularNavigation}
          adminMenuItems={adminNavigation}
          adminHeader="Orfium Admin"
          adminNavigationURLSegment={routerPaths.admin()}
          enableAdminMode={isAdmin}
        />
      }
      headerSlot={<TopBar />}
    >
      {children}
    </Scaffold>
  );
}
```
