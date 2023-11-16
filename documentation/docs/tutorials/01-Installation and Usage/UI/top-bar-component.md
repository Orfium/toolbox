---
id: 'Top Bar Component'
sidebar_label: 'Top Bar Component'
sidebar_position: 2
---

# Top Bar Component

## Overview

The new [`TopBar`](../../../api/Components/TopBar.mdx) component is an essential tool for every Orfium application as it holds information about the currently
logged-in user, and it's also home to the user menu, which includes a list of available actions the user can make.

The component provides a utility slot that sits on the left side, where the user can opt to display things such as
breadcrumbs, or whatever is necessary based on product requirements.

## Usage

In order to use the `TopBar` component you only have to import it from `@orfium/toolbox` and add it to the file where you build your product's overall layout.
Keep in mind that `@orfium/ictinus` must be installed in your app. Follow these [steps](https://ictinus.herokuapp.com/?path=/story/guide-getting-started--page) before you proceed.

```tsx
// ...
// highlight-next-line
import { TopBar } from '@orfium/toolbox';
// ...

function Page() {

  return (
    <...>
      // highlight-next-line
      <header>
        <TopBar
        menuItems={[{ text: 'Settings', url: 'one.orfium.com/settings', iconName: 'settings' }]}
        utilitySection={<div>hello there</div>}
        />
      </header>
      // rest of the page
    </...>
  );
}
```
