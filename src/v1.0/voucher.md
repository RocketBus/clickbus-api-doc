# Group Voucher

## Validate Voucher [/validatevoucher/{{voucher-name}/{{client-email}/{{payment-type}]

The resource "/validatevoucher" adds the discount to the current cart or returns an error response.

### Validate Voucher [GET]

**Parameters**

|PARAMS|VALUE|DESCRIPTION|EXAMPLE|
|:----|:----|:----|:----|
|**voucher name** (required)|_string_|`voucher name` parameter. A specific name for each voucher. |bus50
|**client email** (required)|_string_|`model` parameter. Client email|client@email.com
|**payment type** (required)|_string_|`platform` parameter. Payment type as debit or creditcard|creditcard


**Response**

The given request returns a Response _200_, and status 1  on the Response Body, as follow:

**Example**

    - Succesfull response:

      { "status": 1, "msg": "The coupon was successfully applied", "type": "amt", "value": 50 }

    - Error response:

      { "status": 0, "msg": "Invalid coupon"}
