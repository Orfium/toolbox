# Routing

## Overview

Routing is about putting all the pieces of your Application together. In order to avoid each application having their own routing system, toolbox is providing all the necessary functions to accomplish that through simple configuration.

## Structure

It is important to take a look on the structure to understand how the routing works.

The structure consists of three things:

[`routes`](/docs/api/Types/Routeitem)
`isAuthenticated`
[`fallbackPaths`](/docs/api/Types/Fallbackpath)

`routes` definition requires two things to work, a `path` that defines the URL, which, when matched, will render the `component`.
Authorization defaults to `anonymous` if not defined, which is the state that any user can access. You can see [here](/docs/api/Types/Authorization) about what authorization supports.

By passing the `isAuthenticated` prop, the routing system knows when the user is authenticated or not. Then, it will automatically define the routing restrictions, based on the information provided on each route through the configuration object, using the `authorization` key.

By default, Routing will redirect the user to the default paths/routes, if they are either unauthenticated or unauthorized. With `fallbackPaths` you can **overwrite**
the default logic and define your own default paths. **_Important_** - For each `fallbackPath` you provide, there **_must_** be a defined route, otherwise it will redirect to a dead page. See cases [here](/docs/api/Types/Fallbackpath)

