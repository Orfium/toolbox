---
sidebar_label: 'Authorization Flow'
sidebar_position: 4
---

# Authorization Flow

When you log in any application, the user must consent to the application he is trying to access. Orfium One SSO grants an _authorization code_ that contains the user information and their specified scopes.
After that, there is a specific flow that is happening in the background, that will be covered below.

## The actual flow

For every request to the server we must be sure that there is a valid _authorization code_. The _authorization codes_ must contain the organization you are trying to access.
The following schema describes how we get that _authorization code_ with the organization id in it.

```plantuml
title Authorization Flow

start

repeat
  :Fetch organization list based on the product_code;

  fork
    :Set organizations on the session storage;
  fork again
    if (SelectedOrganization?) then (yes)
       :skip;
    else (no)
      :set selected and saved on local storage;
    endif
  end fork

  :Fetch latest token;

  if (token has org_id?) then (yes)
     :skip;
  else (no)
    :login with selected organization and redirect to the start;
  endif


repeat while (Redirect?)

:Show content;

stop
```

## Refresh Tokens

When you login you get an access token. The access token is returned along with a refresh token, which you can use to renew the access token for the associated user.
A refresh token request returns a renewed access token that contains the same authorization properties as the original access token.

```plantuml
title "Refresh Tokens - Sequence Diagram"

participant Application
participant "Authorization API" as AA
participant API

Application -> AA : Exchange refresh token for access token
Application <-- AA : Granted access token
Application -> API : Request with access token
Application <-- API : Response
```
