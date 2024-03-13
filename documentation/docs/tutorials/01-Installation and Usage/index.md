---
sidebar_label: 'Installation and Usage'
sidebar_position: 1
---

# Installing the package

To install the package run

```bash
$ yarn add @orfium/toolbox
```

Now you can use any of the available exports like so:

```js
import { ... } from '@orfium/toolbox';
```

You will _need_ to use the [`Toolbox`](../../api/Components/Toolbox.mdx) provider component in order to use most of
the functionality provided by this package.

## Example Usage of `Toolbox`

The [`Toolbox`](../../api/Components/Toolbox.mdx) component makes use of hooks provided by [`ThemeProvider`](https://designlab.orfium.com/?path=/docs/design-system-themeprovider--setting-up-a-button-example) and [`Router`](https://v5.reactrouter.com/web/api/Router),
so make sure it is a descendant of both.

```tsx title="App.tsx"
import { ThemeProvider } from '@orfium/ictinus';
import { Toolbox } from '@orfium/toolbox';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Toolbox>{/*...*/}</Toolbox>
      </Router>
    </ThemeProvider>
  );
}
```

:::danger
Due to some [changes](https://react.dev/blog/2022/03/08/react-18-upgrade-guide#updates-to-strict-mode) in the way `StrictMode`
works in React 18, if you are using React 18+ make sure that `<StrictMode>` is a descendant of `<Toolbox>` and not the other way around.
(this is required until a future update on our end)

```tsx title="App.tsx"
import { ThemeProvider } from '@orfium/ictinus';
import { Toolbox } from '@orfium/toolbox';
import { StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Toolbox>
          <StrictMode>{/*...*/}</StrictMode>
        </Toolbox>
      </Router>
    </ThemeProvider>
  );
}
```

:::

For available exports please refer to the [API documentation](/docs/api/)
