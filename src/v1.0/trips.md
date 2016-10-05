# Group Trips

## Get all available Trips [/trips]

The resource `/trips` provides a list with all available trips, with all sort of details you may need.

**ADVICES:**

- Remember that each request to `/trips` will erase all items stored in your Pre-Order, so, if you have not confirmed your Order yet, all the items added to the Pre-Order will be lost.
- The `bookingEngine` value, provided in the sucessfull Response, is one of the most important values on this resource: when you request the return trip, you have to provide in the `engine` parameter the exact same `bookingEngine` obtained in the departure trip.
- In order to obtain Autovias' return-trip discounts. It is required you include the `return` parameter. You will obtain a list with all the trips for both ways.

### Get all available Trips [GET]

**Parameters**

|PARAMS|VALUE|DESCRIPTION|EXAMPLE|
|:----|:----|:----|:----|
|**from** (required)|_string_|A destination from where a trip starts.|`queretaro-qro`|
|**to** (required)|_string_|A destination to where a trip ends.|`central-del-norte-ciudad-de-mexico-df`|
|**departure** (required)|_date_|Any valid date, in format `yyyy-mm-dd`.|`2015-07-25`|
|**return** (optional)|_date_|Any valid date, in format `yyyy-mm-dd`.|`2015-07-28`|
|**engine** (optional)|_string_|Specify in what booking engine you want to perform the search; if not provided, the search will be executed in the availiable booking engine on the server.|`5411E7D726991`|

**Response**

With the correct params, this resource returns a Response _200_ and a list, in JSON format, with these details as follow:

- `bookingEngine`, which is the booking engine where the results are based on;
- `items`, a list with the results from the requested `bookingEngine`, which contain:
    - `from` and `to` destinations;
    - `parts` section, which contains:
        - `waypoint` information, such as `schedule` for each waypoint, including `price`, `date` and `time`;
        - Which `busCompany` offer these travels;
        - `availableSeats` provides how many seats are available.

**Examples**

 - Searching for travels from _Querétaro, QRO. - Mexico_ to _Guadalajara, JAL. - Mexico_ in _11th Feb 2015_, with all correct params:

    - URL:
```
/api/v1/trips?from=queretaro-qro&to=central-del-norte-ciudad-de-mexico-df&engine=&departure=2015-07-25
```


 - Response:

```json
        {
    "meta": "",
    "items": [{
            "from": "Querétaro, QRO.",
            "to": "Central del Norte - Ciudad de México, DF.",
            "parts": [
                {
                    "trip_id": "15132179",
                    "departure": {
                        "price": "257.00",
                        "waypoint": {
                            "id": "5068",
                            "prices": [
                                {
                                    "waypoint": "5047",
                                    "price": "257.00"
                                }
                            ],
                            "schedule": {
                                "id": "826a3c756eeff4976893b55dcb1519fd",
                                "date": "2015-07-25",
                                "time": "01:20",
                                "timezone": "America/Mexico_City"
                            },
                            "context": "departure",
                            "place": {
                                "country": "MX",
                                "state": "",
                                "city": "Querétaro, QRO.",
                                "station": {
                                    "current": {
                                        "id": "5068",
                                        "name": "Querétaro, QRO.",
                                        "locale": "es_MX"
                                    },
                                    "default": {
                                        "id": "",
                                        "name": "",
                                        "locale": ""
                                    }
                                },
                                "locale": "es_MX",
                                "id": "5068"
                            },
                            "isDeparture": "true",
                            "position": "0"
                        }
                    },
                    "arrival": {
                        "price": "257.00",
                        "waypoint": {
                            "id": "5047",
                            "prices": [
                                {
                                    "waypoint": "",
                                    "price": ""
                                }
                            ],
                            "schedule": {
                                "id": "826a3c756eeff4976893b55dcb1519fd",
                                "date": "2015-07-25",
                                "time": "01:20",
                                "timezone": "America/Mexico_City"
                            },
                            "context": "arrival",
                            "place": {
                                "country": "MX",
                                "state": "",
                                "city": "Central del Norte - Ciudad de México, DF.",
                                "station": {
                                    "current": {
                                        "id": "5047",
                                        "name": "Central del Norte - Ciudad de México, DF.",
                                        "locale": "es_MX"
                                    },
                                    "default": {
                                        "id": "",
                                        "name": "",
                                        "locale": ""
                                    }
                                },
                                "locale": "es_MX",
                                "id": "5047"
                            },
                            "isDeparture": "false",
                            "position": "0"
                        }
                    },
                    "busCompany": {
                        "name": "Transportes del Norte",
                        "id": "34",
                        "logo_small": "http://static.evaluation.clickbus.com.mx/logos/small/bl-tdn-s.jpg"
                    },
                    "bus": {
                        "serviceClass": "PRIMERA",
                        "name": "PRIMERA",
                        "id": "20"
                    },
                    "waypoints": [
                        {
                            "id": "5068",
                            "prices": [
                                {
                                    "waypoint": "5047",
                                    "price": "257.00"
                                }
                            ],
                            "schedule": {
                                "id": "826a3c756eeff4976893b55dcb1519fd",
                                "date": "2015-07-25",
                                "time": "01:20",
                                "timezone": "America/Mexico_City"
                            },
                            "context": "departure",
                            "place": {
                                "country": "MX",
                                "state": "",
                                "city": "Querétaro, QRO.",
                                "station": {
                                    "current": {
                                        "id": "5068",
                                        "name": "Querétaro, QRO.",
                                        "locale": "es_MX"
                                    },
                                    "default": {
                                        "id": "",
                                        "name": "",
                                        "locale": ""
                                    }
                                },
                                "locale": "es_MX",
                                "id": "123"
                            },
                            "isDeparture": "true",
                            "position": "0"
                        },
                        {
                            "id": "5047",
                            "prices": [
                                {
                                    "waypoint": "",
                                    "price": "257.00"
                                }
                            ],
                            "schedule": {
                                "id": "826a3c756eeff4976893b55dcb1519fd",
                                "date": "2015-07-25",
                                "time": "01:20",
                                "timezone": "America/Sao_Paulo"
                            },
                            "context": "arrival",
                            "place": {
                                "country": "MX",
                                "state": "",
                                "city": "Central del Norte - Ciudad de México, DF.",
                                "station": {
                                    "current": {
                                        "id": "5047",
                                        "name": "Central del Norte - Ciudad de México, DF.",
                                        "locale": "es_MX"
                                    },
                                    "default": {
                                        "id": "",
                                        "name": "",
                                        "locale": ""
                                    }
                                },
                                "locale": "es_MX",
                                "id": ""
                            },
                            "isDeparture": false,
                            "position": 0
                        }
                    ],
                    "seatTypes": [],
                    "products": [],
                    "availableSeats": "30"
                }
            ]
        },
        {...}]
}
```
- Searching for travels from _Querétaro, QRO. - Mexico_ to _Guadalajara, JAL. - Mexico_ using an incorrect or even an unavailable date value on _departure_:
    - URL:
        
        For an incorrect value, like `99/99/9999`:
        ```
        /api/v1/trips?departure=9999-99-99&from=quertaro-qro&to=guadalajara-jal&engine=5411E7D726991
        ``` 
        For an unavailable value, like `1th January, 2010`:
        ```
        /api/v1/trips?departure=2010-01-01&from=quertaro-qro&to=guadalajara-jal&engine=5411E7D726991
        ``` 
    - Response:
        ```json
        {
            "meta": "",
            "bookingEngine": "5411E7D726991",
            "items": []
        }
        ```
