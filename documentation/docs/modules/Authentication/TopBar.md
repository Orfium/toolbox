---
sidebar_label: 'TopBar'
sidebar_position: 2
---

## Overview

TopBar is an essential tool for every Orfium application. Is a Component that is showing all of Orfium's products per organization and the user.
TopBar is based on the [Ictinus Component](https://ictinus.herokuapp.com/?path=/story/design-system-topnavbar--with-logo-placeholder) as the UI part and put all the logic here.
Also TopBar is part of the process of the Authentication that is why is under the Authentication module.

## Usage

In order to use the `Authentication.TopBar` you only have to import if from the toolbox and add it to your Page component or App Wrapper.
The only required field now is `logoIcon` compare to the [Ictinus Component](https://ictinus.herokuapp.com/?path=/story/design-system-topnavbar--with-logo-placeholder)

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

The final outcome should be like the below.

![What Contains](/img/TopBarExample.png)
