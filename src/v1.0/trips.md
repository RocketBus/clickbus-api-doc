# Group Trips

## Get all available Trips [/trips]

The resource `/trips` provides a list with all available trips, with all sort of details you may need.

**ADVICES:**

- Remember that each request to `/trips` will erase all items stored in your Pre-Order, so, if you have not confirmed your Order yet, all the items added to the Pre-Order will be lost.
- The `bookingEngine` value, provided in the sucessfull Response, is one of the most important values on this resource. When you request the return trip, you have to provide in the `engine` parameter the exact same `bookingEngine` value obtained in the departure trip.
- The resourse `/trips` can't be used on locations where `is_group` value is true, the resourse `/search_prepare` must be used before  in order to get a list of all the possible combinations of single origin-destination pairs to be used on `/trips`.
### Get all available Trips [GET]

**Parameters**

|PARAMS|VALUE|DESCRIPTION|EXAMPLE|
|:----|:----|:----|:----|
|**currency** (optional)|_string_|Type of currency to be used, if not included, defaults to `MXN`.|`USD`|
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

 - Searching for travels from _Tijuana, BC. - Mexico_ to _Cd. Obregòn, SON. - Mexico_ in _20th May 2017_, with all correct params:

    - URL:
```
api/v1/trips?currency=MXN&from=terminal-acn-tijuana-b-vista-bc&to=terminal-acn-cd-obregon-son&engine=ecc2883557f6cb8b2a300fa3fb8609ca&departure=2017-05-20
```


 - Response:

```json
{
    "meta": "",
    "items": [
                    {
        "from": "Terminal ACN, Tijuana B. Vista, BC",
        "to": "Terminal ACN, Cd. Obregon, SON",
        "parts": [
        {
            "trip_id":"978",
            "departure": {
                "price": "1,130.00",
                "offer": "0.00",
                "currency": "MXN",
                "waypoint": {
                    "id": "16906",
                    "prices": [{
                        "waypoint": "16853",
                        "price": "1,130.00",
                        "currency": "MXN"
                    }],
                    "schedule": {
                        "id": "84481fe86019f6c101a5a2943826e434",
                        "date": "2017-05-20",
                        "time": "11:00",
                        "timezone": "America/Mexico_City"
                    },
                    "context": "departure",
                    "place": {
                        "country": "MX",
                        "state": "",
                        "city": "Terminal ACN, Tijuana B. Vista, BC",
                        "station": {
                            "current": {
                                "id": "16906",
                                "name": "Terminal ACN, Tijuana B. Vista, BC",
                                "locale": "es_MX"
                            },
                            "default": {
                                "id": "",
                                "name": "",
                                "locale": ""
                            }
                        },
                        "locale": "es_MX",
                        "id": "16906"
                    },
                    "isDeparture": "true",
                    "position": "0"
                }
            },

            "arrival": {
                "price": "1,130.00",
                "offer": "0.00",
                "currency": "MXN",
                "waypoint": {
                    "id": "16853",
                    "prices": [{
                        "waypoint": "",
                        "price": "",
                        "currency": ""
                    }],
                    "schedule": {
                        "id": "84481fe86019f6c101a5a2943826e434",
                        "date": "2017-05-21",
                        "time": "03:15",
                        "timezone": "America/Mexico_City"
                    },
                    "context": "arrival",
                    "place": {
                        "country": "MX",
                        "state": "",
                        "city": "Terminal ACN, Cd. Obregon, SON",
                        "station": {
                            "current": {
                                "id": "16853",
                                "name": "Terminal ACN, Cd. Obregon, SON",
                                "locale": "es_MX"
                            },
                            "default": {
                                "id": "",
                                "name": "",
                                "locale": ""
                            }
                        },
                        "locale": "es_MX",
                        "id": "16853"
                    },
                    "isDeparture": "false",
                    "position": "0"
                }
            },
            "busCompany": {
                "name": "ACN",
                "id": "382",
                "logo_small": "http://s3.amazonaws.com/static-s3.clickbus.com.mx/logos/small/bl-acn-s.jpg"
            },
            "bus": {
                "serviceClass": "GRAN CLASE",
                "name": "GRAN CLASE",
                "id": "128"
            },
            "specialPrices": {"seat_type.adult":{"key":"Normal","type":"seat_type.adult","priceWithoutTax":"1130.00","remain":null,"price":"1130.00"},"seat_type.student":{"key":"Maestro","type":"seat_type.student","priceWithoutTax":"1030.00","remain":null,"price":"1030.00"},"seat_type.elderly":{"key":"Insen","type":"seat_type.elderly","priceWithoutTax":"1030.00","remain":null,"price":"1030.00"},"seat_type.children":{"key":"Menor","type":"seat_type.children","priceWithoutTax":"1030.00","remain":null,"price":"1030.00"}},
            "extraInfo": {"busId":"","arrivalCityId":"Cd. Obregon","departureCityId ":"Tijuana B.Vista","duration":975,"returnTripsOnlySameBookingEngine":true,"transitPoint":true,"transitPointVisible":true,"startDepartureDate":"2017-05-20 10:00","isRoundTrip":false},
            "waypoints": [
            {
                "id": "16906",
                "prices": [
                {
                    "waypoint": "16853",
                    "price": "1,130.00",
                    "currency": "MXN"
                }],
                "schedule": {
                    "id": "84481fe86019f6c101a5a2943826e434",
                    "date": "2017-05-20",
                    "time": "11:00",
                    "timezone": "America/Mexico_City"
                },
                "context": "departure",
                "place": {
                    "country": "MX",
                    "state": "",
                    "city": "Terminal ACN, Tijuana B. Vista, BC",
                    "station": {
                        "current": {
                            "id": "16906",
                            "name": "Terminal ACN, Tijuana B. Vista, BC",
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
                "id": "16853",
                "prices": [
                {
                    "waypoint": "",
                    "price": "1,130.00",
                    "currency": "MXN"
                }],
                "schedule": {
                    "id": "84481fe86019f6c101a5a2943826e434",
                    "date": "2017-05-20",
                    "time": "11:00",
                    "timezone": "America/Sao_Paulo"
                },
                "context": "arrival",
                "place": {
                    "country": "MX",
                    "state": "",
                    "city": "Terminal ACN, Cd. Obregon, SON",
                    "station": {
                        "current": {
                            "id": "16853",
                            "name": "Terminal ACN, Cd. Obregon, SON",
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
            }],
            "seatTypes": [],
            "products": [],
            "availableSeats": "40"
        }]
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
