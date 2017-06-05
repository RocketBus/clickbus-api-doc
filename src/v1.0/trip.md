# Group Trip Details

## Get Trip Details [/trip]

The resource `/trip` return all information related to a specific trip, based on a given schedule ID (check **Trips** resource for more details).

- **WARNING:**
    > One of the most important values obtained in the `/trip` Response is `sessionId`. **Remember to keep this value**: it's required for most of your requests.
    > In order to block return-trip seats (priorly obtained from a call to `/trips` using `return` parameter), you must first invoke your call to `/trip` for the first `scheduleId` then block all the seats for this specific ´scheduleId´ calling `/seat-block`. Secondly you need to call again `/trip` with the second `scheduleId`, and block all the seats for this `scheduleId` calling `/seat-block`.

### Get Trip Details [GET]

**Parameters**

|PARAMS|VALUE|DESCRIPTION|EXAMPLE|
|:----|:----|:----|:----|
|**currency** (optional)|_string_|Type of currency to be used, if not included, defaults to `MXN`.|`USD`|
|**scheduleId** (required)|_string_|A given hash from a search part. See on **Trips** resource, in the output, into each `items` part, the value on `departure.waypoint.schedule.id` node. |`e4479611acd114b9...`|

**Response**

Using a valid `scheduleId`, the request will return a _200_ Response, with the structure as described below:

- `sessionId`, which is the current session's ID;
    - `content`, containing:
        - `trip_id` which is the trip ID (each trip has it's own ID);
        - The `busCompany` name;
        - The `bus` vehicle itself;
        - The `services` the buse includes, with:
            - The `Type` of the service;
            - The seat where the service is, denoted by `originalType`;
            - The `position` coordinates explained below;
            - The number of `deck`s;
            - The `description` of the service;
        - The `seat_type` which describes all types of different Seats offered by the bus company:
            - `children` applies to individuals under _12_ years old;
            - `adult` applies to individuals between _12_ and _59_ years old;
            - `elderly` applies to individuals over _59_ years old;
            - There is also some specific seat types, which lasts only during specific seasons: 
                - `teacher` and `student` stands for the school's vacation period.
        - Each bus seat is listed on `seats`, with:
            - A single `id`;
            - The seat's `name`;
            - If this given seat is `available` or not;
            - The seat `position`, which is useful to understand how the **Seat** proccess works, distributed in:
                - `x` is for the horizontal axis;
                - `y` is for the vertical axis;
                - `z` indicates on which floor the **Seat** is located (only for double-decker vehicles).
            - The seat `details`, which provides:
                - **Seat**'s `price`, `currency` and `seatTypes`.

**Examples**

- Get the trip details from _Tijuana, BC. - Mexico_ to _Cd. Obregòn, SON. - Mexico_ in _20th May 2017_ from a single part of this search.

    - URL:
        ```
        api/v1/trip?scheduleId=39f1d75fd3ae4ac0b3c9a0af4b375d04
        ```
    - Response:
        ```json
        {
          "meta": {},
          "sessionId": "fti0jvgussd97licqp4mloft10",
          "content": {
            "trip_id": "1013",
            "busCompany": {
              "name": "ACN"
            },
            "bus": {
              "id": "",
              "name": ""
            },
            "services": [
              [
                {
                  "type": "TV",
                  "originalType": 1,
                  "position": {
                    "x": 0,
                    "y": 1
                  },
                  "deck": 1,
                  "description": "TV"
                },
                {
                  "type": "TV",
                  "originalType": 11,
                  "position": {
                    "x": 4,
                    "y": 3
                  },
                  "deck": 1,
                  "description": "TV"
                },
                {
                  "type": "TV",
                  "originalType": 21,
                  "position": {
                    "x": 0,
                    "y": 6
                  },
                  "deck": 1,
                  "description": "TV"
                },
                {
                  "type": "TV",
                  "originalType": 27,
                  "position": {
                    "x": 4,
                    "y": 7
                  },
                  "deck": 1,
                  "description": "TV"
                },
                {
                  "type": "WC_MIXED",
                  "originalType": 0,
                  "position": {
                    "x": 1,
                    "y": 11
                  },
                  "deck": 1,
                  "description": "Baño"
                },
                {
                  "type": "WC_MIXED",
                  "originalType": 0,
                  "position": {
                    "x": 3,
                    "y": 11
                  },
                  "deck": 1,
                  "description": "Baño"
                }
              ]
            ],
            "seat_type": [
              {
                "seat_type.adult": {
                  "key": "Normal",
                  "type": "seat_type.adult",
                  "priceWithoutTax": "750.00",
                  "remain": null,
                  "price": "750.00"
                },
                "seat_type.student": {
                  "key": "Maestro",
                  "type": "seat_type.student",
                  "priceWithoutTax": "750.00",
                  "remain": null,
                  "price": "750.00"
                },
                "seat_type.elderly": {
                  "key": "Insen",
                  "type": "seat_type.elderly",
                  "priceWithoutTax": "750.00",
                  "remain": null,
                  "price": "750.00"
                },
                "seat_type.children": {
                  "key": "Menor",
                  "type": "seat_type.children",
                  "priceWithoutTax": "750.00",
                  "remain": null,
                  "price": "750.00"
                }
              }
            ],
            "seats": [
              {
                "id": "1",
                "name": "1",
                "available": "",
                "position": {
                  "x": "1",
                  "y": "0",
                  "z": "0"
                }, {...}]
            }
        }
        ```
- Incorrect request (using a invalid or incorrect schedule ID):
    - URL:
        ```
        api/v1/trip?scheduleId=0123456789abc
        ``` 
    - Response (status code: _400_):
        ```json
        {
            "message": "seat_reservation.errors.parameters.scheduleId_not_saved"
        }
        ```

## How Seat Position works [/trip]

According to the explanation about the `seats` node information, retrieved on `/trip` resource, the Seat manipulation is as follow:

Let's have a look back to our `seats` node, found inside the `/trip` Response:

```json
{
    "seats": [{
        "id": "1",
        "name": "14",
        "available": "1",
        "position": {
            "x": "2",
            "y": "1",
            "z": "1"
        },
        "details": {
            "price": "10000",
            "currency": "MXN",
            "seatTypes": []
        }
    }]
}
```

The concept here is pretty simple: in the `position` node, we have 3 different values:

- `x`, which represents the horizontal axis;
- `y`, which represents the horizontal axis;
- `z`, which indicates the **Seat**'s floor (only for double-decker vehicles).

Consider the image below:

![Seat Selection - source: http://www.clickbus.com.mx](./../../img/1_bus.png)

In this image, we can represent the Seat manipulation as an array, with X and Y axis:

![Seat Selection - source: http://www.clickbus.com.mx](./../../img/2_array.png)

So, if you have the following coordinates: `{(X: 3, Y: 3, Z: 0),(X: 3, Y: 4, Z: 0),(X: 7, Y: 1, Z: 0),(X: 4, Y: 1, Z: 1)}`, you have selected the the following Seats, in sequence:

- 1st floor
    - `(X: 3, Y: 3, Z: 0)` stands for Seat `"name": "16"`, 1rst floor;
    - `(X: 3, Y: 4, Z: 0)` stands for Seat `"name": "15"`, 1rst floor;
    - `(X: 7, Y: 1, Z: 0)` stands for Seat `"name": "30"`, 1rst floor;
    
    ![Seat Selection - source: http://www.clickbus.com.mx](./../../img/3_seats.png)
    
- 2nd floor
    - `(X: 4, Y: 1, Z: 1)` stands for Seat `"name": "18"`, 2nd floor;

    ![Seat Selection - source: http://www.clickbus.com.mx](./../../img/4_seats_2nd.png)
