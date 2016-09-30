# Group Session

## Get Session [/session]

The resource `/session` retrieves the current Session ID, which is useful to obtain data from the current session, like add a reservation by locking a seat using the **Seat Block** resource.

**NOTE:** The token have a lifetime of ~15 minutes. After that, the token is expired, so you have to execute a new request to `/session` to generate a new token.

### Get Session [GET]

**Parameters**

_None_

**Response**

The given request returns a Response _200_, and the session ID on the Response Body, as follow:

**Example**

 - Sucessfull request:

    - URL:
        ```
        api/v1/session
        ```
    - Response:
        ```json
        {
            "sessionId": "or8k5s91s66fsl3bp6ksu96qs7"
        }
        ```