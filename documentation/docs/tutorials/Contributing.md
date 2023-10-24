---
sidebar_position: 3
---

# Contributing

Our main focus of this tool is better Developer Experience on the applications that it is going to be used. We want fluent integrations and that is why we spent
quite some time to fine tune the process and documentation for this to happen. So please read the following carefully before proceeding:

## Developing Tools

For developing Toolbox we are using `yalc` and not `npm link`. See more about **_Yalc_** [here](https://github.com/wclr/yalc)

Using `link` will create problems when resolving the correct `node_modules` on the linked project that `yalc` can bypass.

Using `yalc` tool helps us define a fake registry locally like a fake `npm` and add our package to that registry.
This way you will be able to see exactly the same output of the built tool just like `npm` does, but it will be soft-linked with the local version.

Last step is to define the tool on the application you want and start playing around.

**Hot reload and auto-publishing works out-of-the-box.**

## Step by step

1. In order to develop Toolbox you must have `yalc` installed. Using yarn:

```bash
yarn global add yalc
```

2. Run the below on the Toolbox.

```bash
yarn yalc:push
```

This will create a fake publish on the registry and push the latest changes.

3. Now, run the following on your application, to link the package from the registry.

```bash
yalc add @orfium/toolbox
```

This will copy the current version from the registry and inject the `file:.yalc/@orfium/toolbox` dependency on your `package.json`

Your `package.json` should look like this.

```json
...
devDependencies: {
    ...
    "@orfium/toolbox": "file:.yalc/@orfium/toolbox",
    ...
}
...
```

4. Make sure you have added the following to your `.gitignore` file, to avoid pushing any yalc files to git.

```gitignore
....
#yalc
/.yalc
yalc.lock
....
```

5. Lastly, **(optional)** by running

```bash
yarn watch
```

on the Toolbox, any change that you do will automatically reload the linked applications when they are running

**Congrats! Now you are ready! &nbsp;🎉**
