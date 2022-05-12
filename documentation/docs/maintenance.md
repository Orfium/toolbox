---
sidebar_position: 2
---
# Developer Maintenance

Our main focus is DevExp of this tool on the applications that is going to be used. We want fluent integrations and that is why we spent
quite some time to fine tune the process and documentation for this to happen. So please read the following carefully before proc

## Developing Tools

For developing Toolbox we are using `yalc` and not `npm link`.  

Using `link` will create problem for resolving the correct `node_modules` on the linked project that `yalc` bypass.

Using `yalc` tool help us define a fake registry locally like a fake `npm` and add our package to that registry. 
This way you will be able to see exactly the same output of the built tool just like `npm` does but this will be soft linked with the local version.

Last step is to define the tool on the application you want and start playing around. 

**Hot reload and auto publishing works out-of-the-box.**


## Step by step

1) in order to develop Toolbox you must have `yalc` installed. Using yarn:
```
yarn global add yalc
```
2) Run `yarn yalc:push` on the Toolbox. This will create a fake publish on the registry and push latest changes.

3) Now, run `yalc add @orfium/toolbox` on your local application to link the package from the registry.
This will copy the current version from the registry and inject the `file:.yalc/@orfium/toolbox` dependecy on your `package.json`

Your `package.json` should look like this.
```
devDependencies: {
    ...
    "@orfium/toolbox": "file:.yalc/@orfium/toolbox",
    ...
}
```

4) Lastly, **(optional)** by running `yarn watch` on the Toolbox any change that you do it will automatically reload the linked applications when they are running

**Congrats! 🎉 &nbsp;Now you are ready.**
