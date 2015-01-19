FORMAT: 1A

# Clickbus Public API

**Behold!** This is the documentation and samples for Clickbus Public API, the words for the Wise and the Brave!

Look! This also can be used as mocked data to simply test API integration.

In this documentation you may find both how to integrate with Clickbus API for any country avaliable in Clickbus 
Portifolio but also use as a guideline to create your own Booking engine and submit to us to quickly implement your 
services and start selling your bus services as well using clickbus (contato@clickubs.com.br for more commercial details).

## **Overview**

Below are the topic Groups to perform every task for your applications:

- **Search** for any routes and travels;
- Obtain **Trip Details** from each route;
- **Seat Block** to lock or unlock seat reservations;
- **Booking** orders;
- Sign your actions with an ID provided by **Session**.

## **Predicates**

1. All sucessfull requests return a **20*** Response header;
2. All requests that may lack a given parameter, which is required, will return a **400** Response header, along with a body message as below:
    ```json
    {
        "message":"Invalid Parameters"
    }
    ```

## **Groups**

# Group Search

## Get Avaliable Trips [/search]

The resource `/search` provides a list with all the information you need about our covered trips.

Remember that each request to `/search` will erase all itens stored in your Pre-Order, so, if you don't have confirmed your Order yet, all the items added to the Pre-Order will be lost.

### Get Avaliable Trips [GET]

**Parameters**


|PARAMS|VALUE|DESCRIPTION|FORMAT|
|:----|:----|:----|:---:|
|**from** (required)|_string_|A destination from where a trip starts.|`sao-paulo-jabaquara-sp`|
|**to** (required)|_string_|A destination to where a trip ends.|`santos-sp`|
|**departure** (required)|_date_|Any valid date, in format `yyyy-mm-dd`.|`2015-02-11`|

**Response**

With the correct params, this resource returns a Response _200_ and a list, in JSON format, with these details as follow:

- Payment types;
- Items, which have:
    - `from` and `to` destinations;
    - `parts` section, which contains:
        - `waypoint` information, such as `schedule` for each waypoint, including `price`, `date` and `time`;
        - Which `busCompany` offer these travels;
        - `availableSeats` provides how many seats are available.

**Examples**

 - Searching for travels from _Sao Paulo - Brazil_ to _Santos - Brazil_ in _11th Feb 2015_, with all correct params:

    - URL:
        ```
        api/v1/search?from=sao-paulo-jabaquara-sp&to=santos-sp&departure=2015-02-11
        ```
    - Response:
        ```json
        {
            "meta": "",
            "paymentSettings": {
                "bankslip": {
                    "total": "0.00",
                    "discount_id": 0,
                    "discount_type": 0,
                    "discount_value": 0,
                    "savings": 0,
                    "fixedValue": 0,
                    "serviceFee": 0,
                    "serviceFeePercentage": 0
                },
                "creditcard": {
                    "total": {
                        "1": "0.00",
                        "2": "0.00",
                        "3": "0.00",
                        "4": "0.00",
                        "5": "0.00",
                        "6": "0.00",
                        "7": "0.00",
                        "8": "0.00",
                        "9": "0.00",
                        "10": "0.00",
                        "11": "0.00",
                        "12": "0.00"
                    },
                    "discount_id": 0,
                    "discount_type": 0,
                    "discount_value": 0,
                    "savings": 0,
                    "fixedValue": 0,
                    "serviceFee": {
                        "1": 0,
                        "2": 0,
                        "3": 0,
                        "4": 0,
                        "5": 0,
                        "6": 0,
                        "7": 0,
                        "8": 0,
                        "9": 0,
                        "10": 0,
                        "11": 0,
                        "12": 0
                    },
                    "serviceFeePercentage": {
                        "1": "0.00",
                        "2": "0.00",
                        "3": "0.00",
                        "4": "0.00",
                        "5": "0.00",
                        "6": "0.00",
                        "7": "0.00",
                        "8": "0.00",
                        "9": "0.00",
                        "10": "0.00",
                        "11": "0.00",
                        "12": "0.00"
                    }
                },
                "debitcard": {
                    "total": "0.00",
                    "discount_id": 0,
                    "discount_type": 0,
                    "discount_value": 0,
                    "savings": 0,
                    "fixedValue": 0,
                    "serviceFee": 0,
                    "serviceFeePercentage": 0
                },
                "paypal_hpp": {
                    "total": "0.00",
                    "discount_id": 0,
                    "discount_type": 0,
                    "discount_value": 0,
                    "savings": 0,
                    "fixedValue": 0,
                    "serviceFee": 0,
                    "serviceFeePercentage": 0
                },
                "banktransfer": {
                    "total": "0.00",
                    "discount_id": 0,
                    "discount_type": 0,
                    "discount_value": 0,
                    "savings": 0,
                    "fixedValue": 0,
                    "serviceFee": 0,
                    "serviceFeePercentage": "13.00"
                }
            },
            "items": [{
                "from": "Sao Paulo, SP - Jabaquara",
                "to": "Santos, SP",
                "parts": [{
                    "trip_id": "2949",
                    "departure": {
                        "price": "2191",
                        "waypoint": {
                            "id": "4016",
                            "prices": [{
                                "waypoint": "3935",
                                "price": "2191"
                            }],
                            "schedule": {
                                "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwMTowMC0tNy0tMjk0OS0tMS0tMS0tMS0tQ09OVg==",
                                "date": "2015-02-11",
                                "time": "01:00",
                                "timezone": "America/Sao_Paulo"
                            },
                            "context": "departure",
                            "place": {
                                "country": "BRA",
                                "state": "",
                                "city": "Sao Paulo, SP - Jabaquara",
                                "station": {
                                    "current": {
                                        "id": "4016",
                                        "name": "Sao Paulo, SP - Jabaquara",
                                        "locale": "en_US"
                                    },
                                    "default": {
                                        "id": "",
                                        "name": "",
                                        "locale": ""
                                    }
                                },
                                "locale": "pt_BR",
                                "id": "4016"
                            },
                            "isDeparture": "true",
                            "position": "0"
                        }
                    },
                    "arrival": {
                        "price": "2191",
                        "waypoint": {
                            "id": "3935",
                            "prices": [{
                                "waypoint": "",
                                "price": ""
                            }],
                            "schedule": {
                                "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwMTowMC0tNy0tMjk0OS0tMS0tMS0tMS0tQ09OVg==",
                                "date": "2015-02-11",
                                "time": "02:10",
                                "timezone": "America/Sao_Paulo"
                            },
                            "context": "arrival",
                            "place": {
                                "country": "BRA",
                                "state": "",
                                "city": "Santos, SP",
                                "station": {
                                    "current": {
                                        "id": "111",
                                        "name": "Santos, SP",
                                        "locale": "pt_BR"
                                    },
                                    "default": {
                                        "id": "",
                                        "name": "",
                                        "locale": ""
                                    }
                                },
                                "locale": "pt_BR",
                                "id": "3935"
                            },
                            "isDeparture": "false",
                            "position": "0"
                        }
                    },
                    "busCompany": {
                        "name": "Cometa",
                        "id": "7"
                    },
                    "bus": {
                        "serviceClass": "Convencional",
                        "name": "Convencional",
                        "id": "1"
                    },
                    "waypoints": [{
                        "id": "4016",
                        "prices": [{
                            "waypoint": "3935",
                            "price": "2191"
                        }],
                        "schedule": {
                            "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwMTowMC0tNy0tMjk0OS0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "01:00",
                            "timezone": "America/Sao_Paulo"
                        },
                        "context": "departure",
                        "place": {
                            "country": "BRA",
                            "state": "SÃ£o Paulo",
                            "city": "SÃ£o Paulo",
                            "station": {
                                "current": {
                                    "id": "4016",
                                    "name": "Sao Paulo, SP - Jabaquara",
                                    "locale": "pt_BR"
                                },
                                "default": {
                                    "id": "",
                                    "name": "",
                                    "locale": ""
                                }
                            },
                            "locale": "pt_BR",
                            "id": "123"
                        },
                        "isDeparture": "true",
                        "position": "0"
                    },
                    {
                        "id": "3935",
                        "prices": [{
                            "waypoint": "",
                            "price": "2191"
                        }],
                        "schedule": {
                            "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwMTowMC0tNy0tMjk0OS0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "01:00",
                            "timezone": "America/Sao_Paulo"
                        },
                        "context": "arrival",
                        "place": {
                            "country": "BRA",
                            "state": "",
                            "city": "Santos, SP",
                            "station": {
                                "current": {
                                    "id": "3935",
                                    "name": "Santos, SP",
                                    "locale": "pt_BR"
                                },
                                "default": {
                                    "id": "",
                                    "name": "",
                                    "locale": ""
                                }
                            },
                            "locale": "pt_BR",
                            "id": ""
                        },
                        "isDeparture": false,
                        "position": 0
                    }],
                    "seatTypes": [],
                    "products": [],
                    "availableSeats": "44"
                }]
            }]
        }
        ```
- Searching for travels from _Sao Paulo - Brazil_ to _Santos - Brazil_ using an incorrect date value on _departure_:
    - URL:
        ```
        api/v1/search?from=sao-paulo-jabaquara-sp&to=santos-sp&departure=9999-99-99
        ```
    - Response:
        ```json
        {
            "meta": "",
            "paymentSettings": {...},
            "items": []
        }
        ```


# Group Trip Details

## Get Trip Details [/trip{?}]

Evil Dead ipsum dolor sit amet manor Klaatu woods, human flesh esse Nickel deroza darobza culpa. Forest anim human blood eu, 
exercitation nostrud danz Mortis et. Laborum Naturam id ansobar ut cupidatat adipisicing nisi. Fugiat Nikto Neckturn, dolore 
irure dolor consectetur. Montum boomstick exercitation, veniam human blood irure sunt Ash do Groovy Dead excepteur non ut. 
Cupidatat darobza elit esse Nickel ad labore nisi Book irure amistrobin anim tempor De. Occaecat elit Groovy the, practices 
Tatra in sunt exercitation non.

### Get Trip Details [GET]
    Evil Dead ipsum dolor sit amet manor Klaatu woods, human flesh esse Nickel deroza darobza culpa. Forest anim human blood eu, exercitation nostrud danz Mortis et. Laborum Naturam id ansobar ut cupidatat adipisicing nisi. Fugiat Nikto Neckturn, dolore irure dolor consectetur. Montum boomstick exercitation, veniam human blood irure sunt Ash do Groovy Dead excepteur non ut. Cupidatat darobza elit esse Nickel ad labore nisi Book irure amistrobin anim tempor De. Occaecat elit Groovy the, practices Tatra in sunt exercitation non.



# Group Booking

## Options [/booking]

The execution of this method is required for every request made to this API, so please do not forget to use it before any request.

### <> [OPTIONS]

**Example:** [`http://api.clickbus.com.br/api/v1/booking`](http://api.clickbus.com.br/api/v1/booking)

    Evil Dead ipsum dolor sit amet manor Klaatu woods, human flesh esse Nickel deroza darobza culpa. Forest anim human blood eu, exercitation nostrud danz Mortis et. Laborum Naturam id ansobar ut cupidatat adipisicing nisi. Fugiat Nikto Neckturn, dolore irure dolor consectetur. Montum boomstick exercitation, veniam human blood irure sunt Ash do Groovy Dead excepteur non ut. Cupidatat darobza elit esse Nickel ad labore nisi Book irure amistrobin anim tempor De. Occaecat elit Groovy the, practices Tatra in sunt exercitation non.

## Create Order [/search{?from,to,departure}]

Evil Dead ipsum dolor sit amet manor Klaatu woods, human flesh esse Nickel deroza darobza culpa. Forest anim human blood eu, 
exercitation nostrud danz Mortis et. Laborum Naturam id ansobar ut cupidatat adipisicing nisi. Fugiat Nikto Neckturn, dolore 
irure dolor consectetur. Montum boomstick exercitation, veniam human blood irure sunt Ash do Groovy Dead excepteur non ut. 
Cupidatat darobza elit esse Nickel ad labore nisi Book irure amistrobin anim tempor De. Occaecat elit Groovy the, practices 
Tatra in sunt exercitation non.

### Create Order [POST]

    Evil Dead ipsum dolor sit amet manor Klaatu woods, human flesh esse Nickel deroza darobza culpa. Forest anim human blood eu, exercitation nostrud danz Mortis et. Laborum Naturam id ansobar ut cupidatat adipisicing nisi. Fugiat Nikto Neckturn, dolore irure dolor consectetur. Montum boomstick exercitation, veniam human blood irure sunt Ash do Groovy Dead excepteur non ut. Cupidatat darobza elit esse Nickel ad labore nisi Book irure amistrobin anim tempor De. Occaecat elit Groovy the, practices Tatra in sunt exercitation non.

## Create Order using debit card [/search{?from,to,departure}]

Evil Dead ipsum dolor sit amet manor Klaatu woods, human flesh esse Nickel deroza darobza culpa. Forest anim human blood eu, 
exercitation nostrud danz Mortis et. Laborum Naturam id ansobar ut cupidatat adipisicing nisi. Fugiat Nikto Neckturn, dolore 
irure dolor consectetur. Montum boomstick exercitation, veniam human blood irure sunt Ash do Groovy Dead excepteur non ut. 
Cupidatat darobza elit esse Nickel ad labore nisi Book irure amistrobin anim tempor De. Occaecat elit Groovy the, practices 
Tatra in sunt exercitation non.\

### Create Order using debit card [POST]
    Evil Dead ipsum dolor sit amet manor Klaatu woods, human flesh esse Nickel deroza darobza culpa. Forest anim human blood eu, exercitation nostrud danz Mortis et. Laborum Naturam id ansobar ut cupidatat adipisicing nisi. Fugiat Nikto Neckturn, dolore irure dolor consectetur. Montum boomstick exercitation, veniam human blood irure sunt Ash do Groovy Dead excepteur non ut. Cupidatat darobza elit esse Nickel ad labore nisi Book irure amistrobin anim tempor De. Occaecat elit Groovy the, practices Tatra in sunt exercitation non.

## Create Order using PayPal [/search{?from,to,departure}]

Evil Dead ipsum dolor sit amet manor Klaatu woods, human flesh esse Nickel deroza darobza culpa. Forest anim human blood eu, 
exercitation nostrud danz Mortis et. Laborum Naturam id ansobar ut cupidatat adipisicing nisi. Fugiat Nikto Neckturn, dolore 
irure dolor consectetur. Montum boomstick exercitation, veniam human blood irure sunt Ash do Groovy Dead excepteur non ut. 
Cupidatat darobza elit esse Nickel ad labore nisi Book irure amistrobin anim tempor De. Occaecat elit Groovy the, practices 
Tatra in sunt exercitation non.

### Create Order using PayPal [POST]
    Evil Dead ipsum dolor sit amet manor Klaatu woods, human flesh esse Nickel deroza darobza culpa. Forest anim human blood eu, exercitation nostrud danz Mortis et. Laborum Naturam id ansobar ut cupidatat adipisicing nisi. Fugiat Nikto Neckturn, dolore irure dolor consectetur. Montum boomstick exercitation, veniam human blood irure sunt Ash do Groovy Dead excepteur non ut. Cupidatat darobza elit esse Nickel ad labore nisi Book irure amistrobin anim tempor De. Occaecat elit Groovy the, practices Tatra in sunt exercitation non.

## Update Order [/search{?from,to,departure}]

Evil Dead ipsum dolor sit amet manor Klaatu woods, human flesh esse Nickel deroza darobza culpa. Forest anim human blood eu, 
exercitation nostrud danz Mortis et. Laborum Naturam id ansobar ut cupidatat adipisicing nisi. Fugiat Nikto Neckturn, dolore 
irure dolor consectetur. Montum boomstick exercitation, veniam human blood irure sunt Ash do Groovy Dead excepteur non ut. 
Cupidatat darobza elit esse Nickel ad labore nisi Book irure amistrobin anim tempor De. Occaecat elit Groovy the, practices 
Tatra in sunt exercitation non.

### Update Order [PUT]
    Evil Dead ipsum dolor sit amet manor Klaatu woods, human flesh esse Nickel deroza darobza culpa. Forest anim human blood eu, exercitation nostrud danz Mortis et. Laborum Naturam id ansobar ut cupidatat adipisicing nisi. Fugiat Nikto Neckturn, dolore irure dolor consectetur. Montum boomstick exercitation, veniam human blood irure sunt Ash do Groovy Dead excepteur non ut. Cupidatat darobza elit esse Nickel ad labore nisi Book irure amistrobin anim tempor De. Occaecat elit Groovy the, practices Tatra in sunt exercitation non.

# Group Session

## Options [/search{?from,to,departure}]

Evil Dead ipsum dolor sit amet manor Klaatu woods, human flesh esse Nickel deroza darobza culpa. Forest anim human blood eu, 
exercitation nostrud danz Mortis et. Laborum Naturam id ansobar ut cupidatat adipisicing nisi. Fugiat Nikto Neckturn, dolore 
irure dolor consectetur. Montum boomstick exercitation, veniam human blood irure sunt Ash do Groovy Dead excepteur non ut. 
Cupidatat darobza elit esse Nickel ad labore nisi Book irure amistrobin anim tempor De. Occaecat elit Groovy the, practices 
Tatra in sunt exercitation non.

### Options [OPTIONS]
    Evil Dead ipsum dolor sit amet manor Klaatu woods, human flesh esse Nickel deroza darobza culpa. Forest anim human blood eu, exercitation nostrud danz Mortis et. Laborum Naturam id ansobar ut cupidatat adipisicing nisi. Fugiat Nikto Neckturn, dolore irure dolor consectetur. Montum boomstick exercitation, veniam human blood irure sunt Ash do Groovy Dead excepteur non ut. Cupidatat darobza elit esse Nickel ad labore nisi Book irure amistrobin anim tempor De. Occaecat elit Groovy the, practices Tatra in sunt exercitation non.

## Get Session [/search{?from,to,departure}]

Evil Dead ipsum dolor sit amet manor Klaatu woods, human flesh esse Nickel deroza darobza culpa. Forest anim human blood eu, 
exercitation nostrud danz Mortis et. Laborum Naturam id ansobar ut cupidatat adipisicing nisi. Fugiat Nikto Neckturn, dolore 
irure dolor consectetur. Montum boomstick exercitation, veniam human blood irure sunt Ash do Groovy Dead excepteur non ut. 
Cupidatat darobza elit esse Nickel ad labore nisi Book irure amistrobin anim tempor De. Occaecat elit Groovy the, practices 
Tatra in sunt exercitation non.

### Get Session [GET]
    Evil Dead ipsum dolor sit amet manor Klaatu woods, human flesh esse Nickel deroza darobza culpa. Forest anim human blood eu, exercitation nostrud danz Mortis et. Laborum Naturam id ansobar ut cupidatat adipisicing nisi. Fugiat Nikto Neckturn, dolore irure dolor consectetur. Montum boomstick exercitation, veniam human blood irure sunt Ash do Groovy Dead excepteur non ut. Cupidatat darobza elit esse Nickel ad labore nisi Book irure amistrobin anim tempor De. Occaecat elit Groovy the, practices Tatra in sunt exercitation non.


# Group Seat Block

## Options [/search{?from,to,departure}]

Evil Dead ipsum dolor sit amet manor Klaatu woods, human flesh esse Nickel deroza darobza culpa. Forest anim human blood eu, 
exercitation nostrud danz Mortis et. Laborum Naturam id ansobar ut cupidatat adipisicing nisi. Fugiat Nikto Neckturn, dolore 
irure dolor consectetur. Montum boomstick exercitation, veniam human blood irure sunt Ash do Groovy Dead excepteur non ut. 
Cupidatat darobza elit esse Nickel ad labore nisi Book irure amistrobin anim tempor De. Occaecat elit Groovy the, practices 
Tatra in sunt exercitation non.

### Options [OPTIONS]
    Evil Dead ipsum dolor sit amet manor Klaatu woods, human flesh esse Nickel deroza darobza culpa. Forest anim human blood eu, exercitation nostrud danz Mortis et. Laborum Naturam id ansobar ut cupidatat adipisicing nisi. Fugiat Nikto Neckturn, dolore irure dolor consectetur. Montum boomstick exercitation, veniam human blood irure sunt Ash do Groovy Dead excepteur non ut. Cupidatat darobza elit esse Nickel ad labore nisi Book irure amistrobin anim tempor De. Occaecat elit Groovy the, practices Tatra in sunt exercitation non.

## Create a lock in a seat based on a session id [/search{?from,to,departure}]

Evil Dead ipsum dolor sit amet manor Klaatu woods, human flesh esse Nickel deroza darobza culpa. Forest anim human blood eu, 
exercitation nostrud danz Mortis et. Laborum Naturam id ansobar ut cupidatat adipisicing nisi. Fugiat Nikto Neckturn, dolore 
irure dolor consectetur. Montum boomstick exercitation, veniam human blood irure sunt Ash do Groovy Dead excepteur non ut. 
Cupidatat darobza elit esse Nickel ad labore nisi Book irure amistrobin anim tempor De. Occaecat elit Groovy the, practices 
Tatra in sunt exercitation non.

### Create a lock in a seat based on a session id [PUT]
    Evil Dead ipsum dolor sit amet manor Klaatu woods, human flesh esse Nickel deroza darobza culpa. Forest anim human blood eu, exercitation nostrud danz Mortis et. Laborum Naturam id ansobar ut cupidatat adipisicing nisi. Fugiat Nikto Neckturn, dolore irure dolor consectetur. Montum boomstick exercitation, veniam human blood irure sunt Ash do Groovy Dead excepteur non ut. Cupidatat darobza elit esse Nickel ad labore nisi Book irure amistrobin anim tempor De. Occaecat elit Groovy the, practices Tatra in sunt exercitation non.

## Remove a block in a seat [/search{?from,to,departure}]

Evil Dead ipsum dolor sit amet manor Klaatu woods, human flesh esse Nickel deroza darobza culpa. Forest anim human blood eu, 
exercitation nostrud danz Mortis et. Laborum Naturam id ansobar ut cupidatat adipisicing nisi. Fugiat Nikto Neckturn, dolore 
irure dolor consectetur. Montum boomstick exercitation, veniam human blood irure sunt Ash do Groovy Dead excepteur non ut. 
Cupidatat darobza elit esse Nickel ad labore nisi Book irure amistrobin anim tempor De. Occaecat elit Groovy the, practices 
Tatra in sunt exercitation non.

### Remove a block in a seat [DELETE]
    Evil Dead ipsum dolor sit amet manor Klaatu woods, human flesh esse Nickel deroza darobza culpa. Forest anim human blood eu, exercitation nostrud danz Mortis et. Laborum Naturam id ansobar ut cupidatat adipisicing nisi. Fugiat Nikto Neckturn, dolore irure dolor consectetur. Montum boomstick exercitation, veniam human blood irure sunt Ash do Groovy Dead excepteur non ut. Cupidatat darobza elit esse Nickel ad labore nisi Book irure amistrobin anim tempor De. Occaecat elit Groovy the, practices Tatra in sunt exercitation non.


| RESOURCES                                   | METHOD  |     |                       |                             |
|:------------------------------------------- |:-------:|:---:|:---------------------:|:----------------------------|
| rocket_bus_brazil_api_booking_options       | OPTIONS | ANY |  api.clickbus.dev.br  |  `/api/v1/booking`          |
| rocket_bus_brazil_api_booking_index         | POST    | ANY |  api.clickbus.dev.br  |  `/api/v1/booking`          |
| rocket_bus_brazil_api_booking_update        | PUT     | ANY |  api.clickbus.dev.br  |  `/api/v1/booking`          |
| rocket_bus_brazil_api_booking_resumepayment | ANY     | ANY |  api.clickbus.dev.br  |  `/api/v1/booking/payment`  |