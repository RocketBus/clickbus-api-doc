# Group Print Ticket

## Print ticket [/print_ticket]


You can view the ticket to print, request to clickbus for the implementation details.

# Group Resend Email    

## Resend email [/ticket/resend-email?email={{email}&localizer={{localizer}]

With this endpoint you can resend the tickets to the client email.

### Resend email [GET]

**Parameters**

|PARAMS|VALUE|DESCRIPTION|EXAMPLE|
|:----|:----|:----|:----|
|**client email** (required)|_string_|`email` parameter. Client email|client@email.com
|**localizer** (required)|_string_|`localizer` parameter. Payment type as debit or creditcard|NDYVXG


**Response**

The given request returns a Response _200_, and sent "yes"  on the Response Body, as follow:

**Example**

    - Succesfull response:

      {"sent":"yes"}

    - Error response:

      {"sent":"no"}