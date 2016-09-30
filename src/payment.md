# Group Payment

## Get all Payment settings [/payment]

The resource `/payment` retrieves all the information that you need according to your `meta` parameters, which are:

- `model`
- `store`
- `platform`

These parameters are created for each partner, and they are required for each request. If you have any doubts or questions about how to obtain these values, please contact our commercial department at contacto@clickbus.com.mx.

### Get all Payment settings [GET]

**Parameters**

|PARAMS|VALUE|DESCRIPTION|EXAMPLE|
|:----|:----|:----|:----|
|**store** (required)|_string_|`store` parameter. A specific param for each partner. Please contact ClickBus at contacto@clickbus.com.mx for more commercial details.|`clickbus`|
|**model** (required)|_string_|`model` parameter. A specific param for each partner. Please contact ClickBus at contacto@clickbus.com.mx for more commercial details.|`retail`|
|**platform** (required)|_string_|`platform` parameter. A specific param for each partner. Please contact ClickBus at contacto@clickbus.com.mx for more commercial details.|`web`|

**Response**

With the correct params, this resource returns a Response _200_ and a list, in JSON format, with these details as follow:

- `paymentSettings` for:
    - `creditcard`, with it's own `serviceFee` and `serviceFeePercentage` which is attributed for each partner (contact ClickBus at contacto@clickbus.com.mx for more commercial details).
    - In case the option `usesRange` is **true** for the payment type you must use the `serviceFeeRanges` to get the correct service fee percentage based on the range criteria.
        - The service fee by range on `creditcard` payment type is only applicable for the installment option **1**

**Examples**

- A request, with all valid parameters:

    - URL:
        ```
        /api/v1/payment?store=clickbus&platform=web&model=retail
        ```
    - Response:
        ```json
        {
            "meta": "",
            "paymentSettings": {
                "creditcard": {
                    "total": {
                        "1": "0.00",
                        "2": "0.00",
                        "3": "0.00",
                        "4": "0.00",
                        "5": "0.00",
                        "6": "0.00"
                    },
                    "fixedValue": 0,
                    "savings": 0,
                    "serviceFee": {
                        "1": 0,
                        "2": 0,
                        "3": 0,
                        "4": 0,
                        "5": 0,
                        "6": 0
                    },
                    "serviceFeePercentage": {
                        "1": "0.00",
                        "2": "0.00",
                        "3": "0.00",
                        "4": "0.00",
                        "5": "0.00",
                        "6": "0.00"
                    },
                    "usesRange": false
                },
                "serviceFeeRanges": [
                {
                 "minimum": 0,
                 "maximum": 250,
                 "serviceFeePercentage": 10
                },
                {
                 "minimum": 250,
                 "maximum": 500,
                 "serviceFeePercentage": 10
                },
                {
                 "minimum": 500,
                 "maximum": 750,
                 "serviceFeePercentage": 8
                },
                {
                 "minimum": 750,
                 "maximum": 1000,
                 "serviceFeePercentage": 8
                },
                {
                 "minimum": 1000,
                 "maximum": 1000000,
                 "serviceFeePercentage": 5
                }
                ]
            }
        }
        ```
        
------------------------

## Get the discounts only available after blocking all seats GET [/booking-discount]

The resource `/booking-discount` returns a list of all the discounts applied in specific booking engines after blocking all seats. As of today GFA (Primera Plus) can only show its return-trip discounts this way.

*NOTE:* The following sequence is compulsory to follow in order to book a ticket with a booking dicount.

1. Get return trip results in one call `/trips`
    - To make a return trip GET request you should add the optional parameter `return` with the return date.
    - In case you have designed your application to make two calls, then you could call a single trip on the first call and a round trip considering the two dates in the second.

2. Get a sessionId `/session`
    - See documentation.

3. Trip details and seat block `/trip` and `/seat-block` must be called in the following sequence.
    - Call `/trip` for the first trip
    - Call `/seat-block` as many times as needed for this trip.
    - Call  `/trip` for the second trip
    - Call `/seat-block` as many times as needed for this trip.

5. GET `/booking-discount` (optional) you can call this endpoint to get the discount. To get the final discount prior booking the tickets.

4. Confirm a booking `/booking`
    - You should call this end point in the same way as in a single trip except that the scheduleId you use in the body for orderItems.seatReservation should be that of the first trip.

### /booking-discount [GET]

**PARAMETERS**

|PARAMS|VALUE|DESCRIPTION|EXAMPLE|
|:----|:----|:----|:----|
|**none**|_N/A_|N/A|N/A|

**NOTES:**

1. Every Request's header shall declare the key `PHPSESSID`, along with it's value, Session's ID (obtained on **Session**), as follow:
    > Cookie: PHPSESSID=g1898g0ogdlh9f3mfra2hl3el3

**RESPONSE**


A successful request will return a _200_ Response, with one of either existent or non-existent discount the structure as described below:

- `flag` whether a trip is a return trip
- `return_discount` the discount response from the booking engine, it will return a false value in case there is no discount available.
    - [DISCOUNT_REFERENCE] the discount reference provided by the booking engine
        - `price` the original (one-way) price of the second trip
        - `newprice` the discounted price of the second trip
    - Alternatively it can return `false` indicating there is no discount available

**Examples**

- Get a list of combinations to prepare an asyncronous call:

    - URL:

        ```
        /api/v1/booking-discount
        ```
    - Response:

        ```json
        {
          "flag": true,
          "return_discount": {
            "0311201509602MEX__01": {
              "price": 870,
              "newprice": 696
            }
          }
        }
        ```

**Errors**

|CODE|DESCRIPTION|DETAILS|
|:---:|:----|:----|
|**None**|_Apliction Error_|It does not exist a detailed error message right now, most probable cause of this error is that the sequence in which seats were blocked was wrong, example, a seat in the first trip was blocked followed by one in the second, another in the first and finally one in the second. This is as opposed of one in the first a second in the first, one in the second and the last one also in the second|

------------------------
