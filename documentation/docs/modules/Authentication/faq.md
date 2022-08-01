---
sidebar_label: 'FAQ'
sidebar_position: 3
---

# FAQ

### I've wrapped my application with `Authentication` but it doesn't do anything'

Make sure you have a `.env` or `.env.local` on your project and you set up the enviroments correctly on the first step.

### Refresh tokens doesn't seem to work.

Something has been missed on the configuration of the application by the person/team responsible. They have to make sure that your API settings has `Allow Offline Access` and `Refresh Token` enabled.

### I see redirects/refresh one after the other, what's wrong?

Something has been missed on the configuration of the application by the person/team responsible. Get in touch with them and emphasize to check connections of the organizations provided for the application.

### I see other errors like `Callback URL mismatch.` coming after login that doesn't let me get back on my application

Get in touch with the person/team responsible as they have to define `Allowed Callback URLs`, `Allowed Logout URLs` and `Allowed Web Origins` on the settings of your application on the system.
