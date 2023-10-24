# Requests

## Overview

In order to spare the users having to implement and maintain their own HTTP requests solution, toolbox provides you with
a couple of options:

- [`orfiumIdBaseInstance`](../../../api/Utilities/Singletons/orfiumIdBaseInstance) - A pre-configured [`CreateAPIInstanceType`](../../../api/Types/CreateAPIInstanceType)
- [`createAPIInstance`](../../../api/Utilities/Functions/createAPIInstance) - A factory function that creates user-configured [`CreateAPIInstanceType`](../../../api/Types/CreateAPIInstanceType)

**_Important Note_** it is important to mention that when [`orfiumIdBaseInstance`](../../../api/Utilities/Singletons/orfiumIdBaseInstance)
or [`createAPIInstance`](../../../api/Utilities/Functions/createAPIInstance) are used alongside the [`Toolbox`](../../../api/Components/Toolbox)
component, they will automatically use the `Authorization` token header for all requests based on the Orfium Authentication system.
If you need to pass another token for any other calls (3rd party S3, Google etc.) you only have to [define it](./Usage#setdelete-authentication-token)
and it will be overwritten.
