---
sidebar_label: 'Navigation Component'
sidebar_position: 2
---

## Overview

The new unified `Navigation` component aims to bring together all Orfium products, under a single navigational element in
addition to refreshing the familiar drawer navigation.
It consists of two main parts:

- **The global navigation bar**: Includes links to all available Orfium products, as well a special action button (available only to administrative users) which gives access to some extra navigational options in the local navigation drawer.
- **The local navigation drawer**: Home to the selected product's navigation and the client picker, which was moved over from the Top Bar. There is also a new optional extra section at the bottom, where products can list links to educational or troubleshooting material.

In order to make usage easier for the user, the `Navigation` component:
* integrates with authentication related data on its own, without the need for user provided logic or actions.
* is solely responsible for controlling its expanded or collapsed state and it's not possible to control this aspect externally.

## Usage

In order to use the `Navigation` component, you only have to import it from `@orfium/toolbox` and add it to the file where you build your product's overall layout.
Keep in mind that `@orfium/ictinus` must be installed in your app. Follow these [steps](https://ictinus.herokuapp.com/?path=/story/guide-getting-started--page) before you proceed.

```jsx
...
// highlight-next-line
import { Navigation } from '@orfium/toolbox';
...

const Page: React.FC = () => {

  return (
    <...>
      // ...
      <aside>
      // highlight-next-line
        <Navigation
          userIsAdmin
          regularNavigation={navItems}
          adminNavigation={adminNavItems}
          navigationHeader="Earnings & Reports"
          adminNavigationHeader="Finance"
          extras={[
            {
              title: 'Yolo',
              menuItems: [
                {
                  text: 'User manual',
                  iconName: 'referenceFile',
                  url: '/',
                },
                {
                  text: 'Docs',
                  iconName: 'referenceFile',
                  url: '/',
                },
              ],
            },
            {
              title: 'Yolo 2',
              menuItems: [
                {
                  text: 'User manual 2',
                  iconName: 'referenceFile',
                  url: '/',
                },
              ],
            },
          ]}
        />
      </aside>
      // rest of the page
    </...>
  );
}
```

