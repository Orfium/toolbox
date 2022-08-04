---
sidebar_label: 'FAQ'
sidebar_position: 3
---

# FAQ

### I've wrapped my application with `Authentication` but it doesn't do anything'

Make sure you have a `.env` or `.env.local` on your project and you set up the enviroment variables correctly on the first step.

### Refresh tokens don't seem to work.

Something has been mixed-up on the configuration of the application by the person/team responsible. They have to make sure that your API settings have `Allow Offline Access` and `Refresh Token` enabled.

### I see multiple redirects/refreshes, one after the other. What's wrong?

Something has been mixed-up on the configuration of the application by the person/team responsible. Ask them to make sure that the connections of the organizations provided for the application are defined correctly.

### I see other errors like `Callback URL mismatch.` coming after logging in, that don't let me get back on my application

Get in touch with the person/team responsible as they have to define `Allowed Callback URLs`, `Allowed Logout URLs` and `Allowed Web Origins` on the settings of your application on the system.
