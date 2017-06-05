# Group Order Check/Uncheck

## Order Check [/order/check]

This application validates and book all selected seats, especially useful with ADO travel.

**NOTE** After executing this request, you will not be able to block or unblock more seats until you call order/uncheck.


### Reserve all selected seats [PUT]

**Response**

The succesfull request returns a _200_ status code, on error will have an error status code (like _400_) an error description on message attribute and an error type:

**Example**
```json
    - Succesfull response:
      {
        "status": true,
        "errors": "[]",
        "sessionId": "cl64mqv1b2dshdfcllb9jk4dk7",
        "orderItems": [
          {
            "trip_id": 12434,
            "order_item": null,
            "departure": {
              "waypoint": 16526,
              "schedule": {
                "id": "578d105d6e4f6",
                "dateTime": {
                  "date": "2016-07-20 07:00:00.000000",
                  "timezone_type": 3,
                  "timezone": "America/Mexico_City"
                },
                "date": "2016-07-20",
                "time": "07:00",
                "timezone": "America/Mexico_City"
              },
              "name": "TAPO ADO, Ciudad de México, DF"
            },
            "arrival": {
              "waypoint": 16440,
              "schedule": {
                "id": "578d105d6e5a5",
                "dateTime": {
                  "date": "2016-07-20 12:20:00.000000",
                  "timezone_type": 3,
                  "timezone": "America/Mexico_City"
                },
                "date": "2016-07-20",
                "time": "12:20",
                "timezone": "America/Mexico_City"
              },
              "name": "Central de Autobuses, Veracruz, VER"
            },
            "seat": {
              "id": "4",
              "name": "Tester Clickbus",
              "price": 500,
              "serviceClass": "Primera",
              "busLine": "ADO Primera",
              "status": "pending",
              "currency": "MXN",
              "type": {
                "name": "seattype.standard",
                "discount": 1,
                "id": 1
              },
              "discount_applied": null
            },
            "passenger": {
              "firstName": "Tester",
              "lastName": "Clickbus",
              "document": null,
              "email": "",
              "gender": "",
              "birthday": "",
              "reservationCode": "100119184",
              "meta": {}
            },
            "products": [],
            "subtotal": 500
          }
        ],
        "orderAbandonedId": null,
        "orderAbandonedEmail": null
      }
```
------------------------      


    - Error response:

      { 
        "message": "There was an error on booking engine", 
        "type":"AE2"
      }

## Order uncheck [/order/uncheck]

This request will release all selected seats blocked. The succesfull request returns a _200_ status code, on error will have an error status code (like _400_) an error description on message attribute and an error type:

### Release all selected seats [DELETE]
    - Succesfull response:
      {
        "message": "Cart Cleared"
      }
------------------------      
      - Error response:

      { 
        "message": "There was an error on booking engine", 
        "type":"AE2"
      }
