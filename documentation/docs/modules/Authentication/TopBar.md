---
sidebar_label: 'TopBar Addition'
sidebar_position: 2
---

## Overview

TopBar is an essential tool for every Orfium application. It's a Component that shows all of Orfium's products per organization, as well as the current user.
The TopBar's UI is based on the [Ictinus Component](https://ictinus.herokuapp.com/?path=/story/design-system-topnavbar--with-logo-placeholder) and its logic has been put here.
Also, TopBar is part of the Authentication process, which is why it is under the Authentication module.

## Usage

In order to use the `Authentication.TopBar` you only have to import it from the toolbox and add it to your Page component or App Wrapper.
Keep in mind that `@orfium/ictinus` must be installed in your app. Follow these [steps](https://ictinus.herokuapp.com/?path=/story/guide-getting-started--page) before you proceeding.
The only required field is `logoIcon`, compared to the [Ictinus Component](https://ictinus.herokuapp.com/?path=/story/design-system-topnavbar--with-logo-placeholder)

```jsx
...
// highlight-next-line
import { Authentication } from '@orfium/toolbox';
// your app logo
import { ReactComponent as Logo } from 'assets/Logo.svg';
...

const Page: React.FC = () => {
  const [toggle, setToggle] = useState(false); // state for drawer

  return (
    <>
      // highlight-next-line
      <Authentication.TopBar logoIcon={<Logo />} onMenuIconClick={toggle} />
      // rest of the page
    </>
  );
}
```

## Final outcome

The final outcome should be like this:

![What Contains](/img/TopBarExample.png)
