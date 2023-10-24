---
sidebar_label: 'FAQ'
sidebar_position: 10
---

# FAQ

### I've wrapped my application with `Toolbox` but it doesn't do anything'

Make sure you have a `.env` or `.env.local` on your project and you set up the enviroment variables correctly on the first step.

### How i can filter based on user permissions?

To use the current user permissions you must use the `decodedToken` returned by the `getAccessTokenSilently` function. The `decodedToken` returns the permissions that based on those you will do the decision-making from the application level.

### Refresh tokens don't seem to work.

Something has been mixed-up on the configuration of the application by the person/team responsible. They have to make sure that your API settings have `Allow Offline Access` and `Refresh Token` enabled.

### I see multiple redirects/refreshes, one after the other. What's wrong?

Something has been mixed-up on the configuration of the application by the person/team responsible. Ask them to make sure that the connections of the organizations provided for the application are defined correctly.

### I see other errors like `Callback URL mismatch.` coming after logging in, that don't let me get back on my application

Get in touch with the person/team responsible as they have to define `Allowed Callback URLs`, `Allowed Logout URLs` and `Allowed Web Origins` on the settings of your application on the system.
