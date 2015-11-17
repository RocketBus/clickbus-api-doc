FORMAT: 1A

# ClickBus Public API

This is the documentation and samples for Clickbus Public API. The contents here can also be used as mocked data to simply test API integration.

In this document, you may find both how to integrate with Clickbus API but also use it as a guideline to create your own Booking engine and submit to us to quickly implement your services and start selling your bus services as well using ClickBus (contato@clickbus.com.br for more commercial details).

----------------------------------------------------------------

# Group Overview

## Introduction [/intro]

Below are the topic Groups to perform every task for your applications:

- Obtain a list with all **Places**;
- Search any of our **Trips**;
- See all information from our supported **Bus Companies**;
- Calculate your roundtrip items before the purchase with the **Payments** resource;
- Obtain **Trip Details** from each route;
- **Seat Block** to lock or unlock seat reservations;
- **Booking** orders;
- Purchase roundtrip orders in **Checkout**;
- Sign your actions with an ID provided by **Session**;
- Check your **Order** status.

----------------------------------------------------------------

## Predicates [/intro]

1. All sucessfull requests return a **20*** Response header;
2. The **Evaluation** environment (https://api-evaluation.clickbus.com.br/api/v1) have only the following routes, for both departure and return:
    - From **Sao Paulo, SP - Tiete** (`sao-paulo-tiete-sp`) to **Santos, SP** (`santos-sp`);
    - From **Santos, SP** (`santos-sp`) to **Sao Paulo, SP - Tiete** (`sao-paulo-tiete-sp`).


3. The params **store**, **model** and **platform** are required and singular for each partner. To obtain these credentials, please contact our commercial department at contato@clickbus.com.br.



# Group Places 

## Get All Places [/places]

The resource `/places` retrieves all the available Places, where each Place can be used as a destination point to our travels and routes.

One of the most important values on this resource is the `slug`, which contains the name to use when referencing to a Place in a **Trips** request.

### Get All Places [GET]

**PARAMETERS**

_None_

**EXAMPLE**

The given request returns a Response _200_, with a list in JSON format filled with all Places.

**REQUEST**

```
api/v1/places
```

**RESPONSE (application/json)**

 ```json
 {
    "meta": "",
    "items": [
        {
            "id": 4017,
            "station_id": 34523,
            "slug": "sao-paulo-tiete-sp",
            "locale": "pt-BR",
            "name": "",
            "is_primary": "true",
            "created_at": "2014-09-05 13:04:27",
            "updated_at": "2014-09-05 13:04:59",
            "place": {
                "id": 34523,
                "place_id": 4017,
                "locale": "pt-BR",
                "name": "Sao Paulo, SP - Tiete",
                "created_at": "2014-09-05 13:04:27",
                "updated_at": "2014-09-05 13:04:59",
                "latitude": "-9.0237964",
                "longitude": "-70.8119953",
                "state": {
                    "code": "",
                    "name": "Sao Paulo, SP - Tiete"
                }
            }
        },
        {
            "id": 9209,
            "station_id": 7648,
            "slug": "santos-sp",
            "locale": "pt-BR",
            "name": "Santos, SP",
            "is_primary": "true",
            "created_at": "2014-05-26 16:19:36",
            "updated_at": "2014-05-26 16:38:32",
            "place": {
                "id": 7648,
                "place_id": 7648,
                "locale": "pt-BR",
                "name": "Santos, SP",
                "created_at": "2014-05-26 16:19:36",
                "updated_at": "2014-05-26 16:38:32",
                "latitude": "",
                "longitude": "",
                "state": {
                    "code": "",
                    "name": "Santos, SP"
                }
            }
        },
        { ... }
    ]
}
 ```

 **ERRORS**

|CODE|DESCRIPTION|DETAILS|
|:---:|:----|:----|
|**F1**|_The Application encountered a temporary error and could not complete your request._|An error occurred while proccessing your Request.|
|**F2**|_The Server encountered a temporary error and could not complete your request._|An error occurred after sending your Request.|
 

# Group Trips

## Get all available Trips [/trips]

The resource `/trips` provides a list with all available trips, with all sort of details you may need.

**ADVICE:** Remember that each request to `/trips` will erase all itens stored in your Pre-Order, so, if you don't have confirmed your Order yet, all the items added to the Pre-Order will be lost.

### Get all available Trips [GET]

**PARAMETERS**

|PARAMS|VALUE|DESCRIPTION|EXAMPLE|
|:----|:----|:----|:----|
|**from** (required)|_string_|A destination from where a trip starts.|`sao-paulo-tiete-sp`|
|**to** (required)|_string_|A destination to where a trip ends.|`santos-sp`|
|**departure** (required)|_date_|Any valid date, in format `yyyy-mm-dd`.|`2015-02-11`|
|**engine** (optional)|_string_|Specify in what booking engine you want to perform the search; if not provided, the search will be executed in the availiable booking engine on the server.|`5411E7D726991`|

With the correct params, this resource returns a Response 200 and a list, in JSON format, with these details as follow:

- `items`, which have:
    - `from` and `to` destinations;
    - parts section, which contains:
        - `waypoint` information, such as `schedule` for each waypoint, including `price`, `date` and `time`;
        - Which `busCompany` offer these travels;
        - `availableSeats` provides how many seats are available.

**EXAMPLE**

Searching for travels from _Sao Paulo, SP - Tiete_ to _Santos, SP_ in _11th Feb 2015_, with all correct params:

**REQUEST**

```
api/v1/trips?from=sao-paulo-tiete-sp&to=santos-sp&departure=2015-02-11
```

**RESPONSE (application/json)**

```json
{
    "meta": "",
    "items": [{
        "from": "Sao Paulo, SP - Tiete",
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
                        "city": "Sao Paulo, SP - Tiete",
                        "station": {
                            "current": {
                                "id": "4016",
                                "name": "Sao Paulo, SP - Tiete",
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
                "id": "7",
                "logo": "https://api-evaluation.clickbus.com.br/bundles/frontend/img/logos/buslines/small/bl-demon-s.png"
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
                            "name": "Sao Paulo, SP - Tiete",
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

**EXAMPLE**

Searching for travels from _Sao Paulo, SP - Tiete_ to _Santos, SP_ using an incorrect or even an unavailable date value on _departure_:

**REQUEST**

- For an incorrect value, like `99/99/9999`:
    ```
    api/v1/trips?from=sao-paulo-tiete-sp&to=santos-sp&departure=9999-99-99
    ``` 
- For an unavailable value, like `1th January, 2010`:
    ```
    api/v1/trips?from=sao-paulo-tiete-sp&to=santos-sp&departure=2010-01-01
    ``` 

**RESPONSE (application/json)**

```json
{
    "meta": "",
    "items": []
}
```


**ERRORS**

|CODE|DESCRIPTION|DETAILS|
|:---:|:----|:----|
|**J1**|_Please provide the `from` parameter._|The parameter `from` is missing from the Request.|
|**J2**|_Please provide the `to` parameter._|The parameter `to` is missing from the Request.|
|**J3**|_Please provide the `departure` parameter._|The parameter `departure` is missing from the Request.|
|**J4**|_The given `from` value is invalid or incorrect._|The provided value for `from` is not a valid **Place**.|
|**J5**|_The given `to` value is invalid or incorrect._|The provided value for `to` is not a valid **Place**.|
|**J6**|_The Application encountered a temporary error and could not complete your request._|An error occurred while proccessing your Request before it's sent to the booking engine.|
|**J7**|_The Server encountered a temporary error and could not complete your request._|An error occurred after sending your Request to the booking engine.|
|**J8**|_Please provide a valid date for `departure`._|The value for `departure` is invalid or incorrect.|
|**J9**|_The `departure` date cannot occur in a day before today._|The value for `departure` cannot be a date in the past.|

# Group Bus Companies

## List All Bus Companies [/buscompanies]

The resource `/buscompanies` provides a list of all available Bus Companies offered in ClickBus routes. This is useful to provide logos, identifiers and alias related to each Bus Company for any purposes that your application may use.

### List All Bus Companies [GET]

**PARAMETERS**

_None_

In the response, you can map the data as described below:

- The `meta` parameter contains all data for pagination, as:
    - `total` is the amount of results obtained.
    - `perPage` is the limit of results per page.
    - `currentPage` displays on which page you actually are.
    - `totalPages` indicates the amount of pages.
    - `busCompanies` provides an array of Bus Companies, described as:
        - `id` is the identifier, unique for each result.
        - `name` is the Bus Company name.
        - `logo` is an object containing `url`, which is the path for the Bus Company logo image file.


**EXAMPLE**

Listing all bus companies and their data.

**REQUEST**

```
api/v1/buscompanies
```

**RESPONSE (application/json)**

```json
{
    "meta": {
        "total": 67,
        "perPage": 50,
        "currentPage": 1,
        "totalPages": 2
    },
    "busCompanies": [
        {
            "id": 1,
            "name": "1001",
            "logo": {
                "url": "https://s3-sa-east-1.amazonaws.com/legacy-static/bl-1001-s.jpg"
            }
        },
        {
            "id": 2,
            "name": "Andorinha",
            "logo": {
                "url": "https://s3-sa-east-1.amazonaws.com/legacy-static/bl-andorinha-s.jpg"
            }
        },
        {...}
    ]
}
```

## Get a Single Bus Company  [/buscompanies{/id}]

Once you have all identifiers for all Bus Companies, the resource `/buscompanies` provide a shortcut to retrieve a single Bus Company, related to the given `id`.

### Get a Single Bus Company [GET]

**PARAMETERS**

|PARAMS|VALUE|DESCRIPTION|EXAMPLE|
|:----|:----|:----|:----|
|**id** (required)|_integer_|An identifier related to any Bus Company.|`10`|

As there is no pagination data for a single result, the `meta` parameter contains only an empty object.
- `busCompanies` contains an array with a single Bus Company, described as:
    - `id` is the identifier, unique for each result.
    - `name` is the Bus Company name.
    - `logo` is an object containing `url`, which is the path for the Bus Company logo image file.

**EXAMPLE**

Searching for a bus company, using the ID `2` (related to the `Andorinha` bus company). 

**REQUEST**

```
api/v1/buscompanies/2
```

**RESPONSE (application/json)**

```
{
    "meta": {},
    "busCompanies": [
        {
            "id": 2,
            "name": "Andorinha",
            "logo": {
                "url": "https://s3-sa-east-1.amazonaws.com/legacy-static/bl-andorinha-s.jpg"
            }
        }
    ]
}
```


# Group Session

## Get Session [/session]

The resource `/session` retrieves the current Session ID, which is useful to obtain data from the current session, like add a reservation by locking a seat using the **Seat Block** resource.

**NOTE:** The token have a lifetime of ~15 minutes. After that, the token is expired, so you have to execute a new request to `/session` to generate a new token.

### Get Session [GET]

**PARAMETERS**

_None_

The given request returns a Response _201_, and the Session ID can be found at the response body, as follow:

**EXAMPLE**

Requesting a new Session ID.

**REQUEST**

```
api/v1/session
```

**RESPONSE (application/json)**

```json
{
    "content": "or8k5s91s66fsl3bp6ksu96qs7"
}
```
     

# Group Trip Details

## Get Trip Details [/trip]

The resource `/trip` return all information related to a specific trip, based on a given schedule ID (check **[Trips](#trips)** resource for more details).

### Get Trip Details [GET]

**PARAMETERS**

|PARAMS|VALUE|DESCRIPTION|EXAMPLE|
|:----|:----|:----|:----|
|**scheduleId** (required)|_string_|A given hash from a search part. See on **[Trips](#trips)** resource, in the output, into each `items` part, the value on `departure.waypoint.schedule.id` node. |`NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwM...`|

Using a valid `scheduleId`, the request will return a _200_ Response, with the structure as described below:

- `sessionId`, which is the current session's ID;
    - `content`, containing:
        - `trip_id` which is the trip ID (each trip has it's own ID);
        - The `busCompany` name;
        - The `bus` vehicle itself;
        - Each bus seat is listed on `seats`, with:
            - A single `id`;
            - The seat's `name`;
            - If the seat is `available` or not:
                - `"1"` if the Seat is available; otherwise, it will return an empty string (`""`).
            - The seat `position`, which is useful to understand how the **Seat** proccess works, distributed in:
                - `x` is for the horizontal axis;
                - `y` is for the vertical axis;
                - **NOTE:** the `z` value is only required for double-decker vehicles.
            - The seat `details`, which provides:
                - Seat's `price`, `currency` and `seatTypes`.


**EXAMPLE**

Get the trip details from _Sao Paulo, SP - Tiete_ to _Santos, SP_ in _11th Feb 2015_ from a single part of this search.

**REQUEST**

```
api/v1/trip?scheduleId=NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwMTowMC0tNy0tMjk0OS0tMS0tMS0tMS0tQ09OVg==
```

**RESPONSE (application/json)**

```json
{
    "meta": {},
    "sessionId": "oeccq3hugiknuj5f2luvvruvj7",
    "content": {
        "trip_id": "2949",
        "busCompany": {
            "name": "Cometa"
        },
        "bus": {
            "id": "",
            "name": ""
        },
        "seats": [{
            "id": "01",
            "name": "01",
            "available": "",
            "position": {
                "x": "1",
                "y": "0",
                "z": ""
            },
            "details": {
                "price": "2191",
                "currency": "R$",
                "seatTypes": []
            }
        }, {...}
        ]
    }
}
```

**EXAMPLE**
        
Incorrect request (using a invalid or incorrect schedule ID).

**REQUEST**

```
api/v1/trip?scheduleId=0123456789abcdefghijklmnopqrstuvxz
``` 

**RESPONSE (application/json)**

```json
{
    "error": [
        {
            "code": "I2",
            "type": "Invalid Parameters",
            "message": "The given 'scheduleId' is invalid."
        }
    ]
}
```

**ERRORS**

|CODE|DESCRIPTION|DETAILS|
|:---:|:----|:----|
|**I1**|_Please provide the `scheduleId`._|The parameter `scheduleId` is missing from the Request.|
|**I2**|_The given `scheduleId` is invalid._|The value for `scheduleId` is invalid or incorrect.|
|**I3**|_Application Error_|The Application encountered a temporary error and could not complete your request.|
|**I4**|_Server Error_|The Server encountered a temporary error and could not complete your request.|


## How Seat Position works [/trip]

According to the explanation about the `seats` node information, retrieved on `/trip` resource, the Seat manipulation is as follow:

Let's have a look back to our `seats` node, found inside the `/trip` Response:

```json
{
    "seats": [{
        "id": "01",
        "name": "01",
        "available": "",
        "position": {
            "x": "1",
            "y": "0",
            "z": ""
        },
        "details": {
            "price": "2191",
            "currency": "R$",
            "seatTypes": []
        }
    }]
}
```

The concept here is pretty simple: in the `position` node, we have 3 different values:

- `x`, which represents the horizontal axis;
- `y`, which represents the horizontal axis;
- `z`, which we may disconsider by now (it's only applied for double-decker vehicles).

Consider the image below:

![Seat Selection - source: http://www.clickbus.com.br](img/1_bus.png)

In this image, we can represent the Seat manipulation as an array, with X and Y axis:

![Seat Selection - source: http://www.clickbus.com.br](img/2_array.png)

So, if you have the following coordinates: `{(X: 3, Y: 3),(X: 3, Y: 4),(X: 7, Y: 1)}`, you have selected the the following Seats, in sequence:

- `(X: 3, Y: 3)` stands for Seat `"name": "16"`;
- `(X: 3, Y: 4)` stands for Seat `"name": "15"`;
- `(X: 7, Y: 1)` stands for Seat `"name": "30"`;

![Seat Selection - source: http://www.clickbus.com.br](img/3_seats.png)


# Group Seat Block

## Create a block in a Seat [/seat-block]

This request creates a block in a Seat, which indicates that this Seat is now unavailable for other passengers.

**NOTES:**

1. This block may last ~10 minutes. After that, the seat is available again;
2. Every Request's header shall declare the key `PHPSESSID`, along with it's value, Session's ID (obtained on **Session**), as follow:
    > Cookie: PHPSESSID=g1898g0ogdlh9f3mfra2hl3el3
3. You can create up to 5 Seat blocks per Order.


### Create a block in a Seat [PUT]

**PARAMETERS**

|PARAMS|VALUE|DESCRIPTION|EXAMPLE|
|:----|:----|:----|:----|
|**meta** (required)|_object_|An empty object. Partners can use this parameter to provide their own `meta` information: `store`, `platform` and `model`. |`{}`|
|**request** (required)|_object_|A container which requires: ||
|**request.from** (required)|_string_|A destination from where a trip starts. Same value used on **Trips**.|`sao-paulo-tiete-sp`|
|**request.to** (required)|_string_|A destination to where a trip ends. Same value used on **Trips**.|`santos-sp`|
|**request.seat** (required)|_string_|The seat’s `name`, obtained on **Trip Details**.|`07`|
|**request.passenger** (required)|_object_|A container which contains multiple items, one for each passenger: ||
|**request.passenger.name** (required)|_string_|Passenger's name.|`Fulano da Silva`|
|**request.passenger.document** (required)|_string_|Passenger's document.|`12345678900`|
|**request.passenger.documentType** (required)|_string_|Type of the passenger's `document`. It must be a document with a photo.|`rg`, `passport`, ...|
|**request.passenger.gender** (required)|_string_|`M` stands for _Male_, and `F`, for _Female_.|`M` or `F`|
|**request.schedule** (required)|_object_|A container which requires: ||
|**request.schedule.id** (required)|_string_|Schedule's ID, obtained from **Trip Details**.|`NDAxNy0tMzkzNS0tMjAxNS0wMi0xMSAw...`|
|**request.schedule.date** (required)|_string_|Any valid date, in format `yyyy-mm-dd`. Use the same value applied on **Trips**.|`2015-01-27`|
|**request.schedule.time** (required)|_string_|Any valid time between `00:00` and `23:59`, in format `HH:ii`.|`10:30`|
|**request.schedule.timezone** (required)|_string_|Timezone information, based on actual country.|`America/Sao_Paulo`|
|**request.sessionId** (required)|_string_|Session's ID, obtained from **Session**.|`dnlfm8aecg2omtjaang62fvla5`|

**EXAMPLE**

Created a block for a Seat, named _07_, on a travel from _Sao Paulo, SP - Tiete_ to _Santos, SP_ in _27th January 2015_, with all params correct:

**REQUEST (application/json)**

```json
{
    "meta": {},
    "request": {
        "from": "sao-paulo-tiete-sp",
        "to": "santos-sp",
        "seat": "07",
        "passenger": {
            "name": "Fulano da Silva",
            "document": "12345678900",
            "documentType": "rg",
            "gender": "M"
        },
        "schedule": {
            "id": "NDAxNy0tMzkzNS0tMjAxNS0wMi0xMSAwMTowMC0tOS0tNDMyMi0tMS0tMS0tMS0tQ09OVg==",
            "date": "2015-01-27",
            "time": "10:30",
            "timezone": "America/Sao_Paulo"
        },
        "sessionId": "dnlfm8aecg2omtjaang62fvla5"
    }
}
```

**RESPONSE (application/json)**

This request, with all correct params and being executed before the Seat block's life time ends, will return a Response _200_, with the following Response body:

```json
{
    "meta": {},
    "items": [{
        "seat": "07",
        "schedule": {
            "id": "NDAxNy0tMzkzNS0tMjAxNS0wMi0xMSAwMTowMC0tOS0tNDMyMi0tMS0tMS0tMS0tQ09OVg==",
            "date": "",
            "time": "",
            "timezone": "America/Sao_Paulo"
        },
        "status": "blocked",
        "sessionId": "dnlfm8aecg2omtjaang62fvla5",
        "expireAt": "2015-01-20 17:46"
    }]
}
```

**NOTE:** If, while a Request to create a Seat Block, the selected Seat is already blocked by other Request executed previously, you may receive the following _400_ Response:

```json
{
    "error": [
        {
            "code": "H13",
            "type": "Unavailable Seat",
            "message": "The selected Seat is unavailable."
        }
    ]
}
```

**ERRORS**

|CODE|DESCRIPTION|DETAILS|
|:---:|:----|:----|
|**H1**|_Please provide the passenger's `name`._|The Passenger's `name` is missing.|
|**H2**|_Please provide a value for the passenger's `name`._|The Passenger's `name` is empty.|
|**H3**|_Please provide the passengers `document`._|The Passenger's `document` is missing.|
|**H4**|_Please provide a value for the passenger's `document`._|The Passenger's `document` is empty.|
|**H5**|_Please provide the passenger's `gender`._|The Passenger's `gender` is missing. Use `M` for _Male_, and `F`, for _Female_.|
|**H6**|_Please provide a valid option for the passenger's `gender`._|The parameter `scheduleId` is missing from the Request.|
|**H7**|_Please provide a `sessionId`._|The parameter `sessionId` is missing from the Request.|
|**H8**|_The given `sessionId` has expired._|The value for `sessionId` has expired and is no longer valid. Please request a new value in **Session**.|
|**H9**|_Please provide the `scheduleId`._|The parameter `scheduleId` is missing from the Request.|
|**H10**|_The given `scheduleId` is invalid._|The value for `scheduleId` has expired and is no longer valid. Please request a new value in **Trips**.|
|**H11**|_The Application encountered a temporary error and could not complete your request._|An error occurred while proccessing your Request before it's sent to the booking engine.|
|**H12**|_The Server encountered a temporary error and could not complete your request._|An error occurred after sending your Request to the booking engine.|
|**H13**|_The selected Seat is unavailable._|The selected Seat is already taken by another user.|
|**H21**|_Please provide the passenger's document type._|The Passenger's `documentType` is missing.|
|**H22**|_Please provide a value for the passenger's document type._|The Passenger's `documentType` is empty.|

## Remove a block in a Seat [/seat-block]

As opposed to the Create proccess, the Remove will delete a block created on a Seat, which automatically turns a Seat available for all passengers.

**NOTE:**

- Every Request's header shall declare the key `PHPSESSID`, along with it's value, Session's ID (obtained on **Session**), as follow:
    > Cookie: PHPSESSID=g1898g0ogdlh9f3mfra2hl3el3

### Remove a block in a Seat [DELETE]

**PARAMETERS**

|PARAMS|VALUE|DESCRIPTION|EXAMPLE|
|:----|:----|:----|:----|
|**meta** (required)|_object_|An empty object. Partners can use this parameter to provide their own `meta` information: `store`, `platform` and `model`. |`{}`|
|**request** (required)|_object_|A container which requires: ||
|**request.seat** (required)|_string_|The seat’s `name`, obtained on **Trip Details**.|`07`|
|**request.schedule** (required)|_object_|A container which requires: ||
|**request.schedule.id** (required)|_string_|Schedule's ID, obtained from **Trip Details**.|`NDAxNy0tMzkzNS0tMjAxNS0wMi0xMSAw...`|
|**request.sessionId** (required)|_string_|Session's ID, obtained from **Session**.|`dnlfm8aecg2omtjaang62fvla5`|

**EXAMPLE**

Removing the Seat block, named _07_, on a travel from _Sao Paulo, SP - Tiete_ to _Santos, SP_ in _27th January 2015_, with all params correct:

**REQUEST (application/json)**

```json
{
    "meta": {},
    "request": {
        "seat": "07",
        "schedule": {
            "id": "NDAxNy0tMzkzNS0tMjAxNS0wMi0xMSAwMTowMC0tOS0tNDMyMi0tMS0tMS0tMS0tQ09OVg=="
        },
        "sessionId": "dnlfm8aecg2omtjaang62fvla5"
    }
}
```

**RESPONSE (application/json)**

This request, with all correct params, will return a Response _202_, with the following Response body:

```json
{
    "meta": {},
    "content": {
        "status": "canceled",
        "messages": [],
        "sessionId": "dnlfm8aecg2omtjaang62fvla5"
    }
}
```

**ERRORS**

|CODE|DESCRIPTION|DETAILS|
|:---:|:----|:----|
|**H14**|_Please provide a `sessionId`._|The parameter `sessionId` is missing from the Request.|
|**H15**|_The given `sessionId` has expired._|The value for `sessionId` has expired and is no longer valid. Please request a new value in **Session**.|
|**H16**|_Please provide the `scheduleId`._|The parameter `scheduleId` is missing from the Request.|
|**H17**|_The given `scheduleId` is invalid._|The value for `scheduleId` has expired and is no longer valid. Please request a new value in **Trips**.|
|**H18**|_The Application encountered a temporary error and could not complete your request._|An error occurred while proccessing your Request before it's sent to the booking engine.|
|**H19**|_The Server encountered a temporary error and could not complete your request._|An error occurred after sending your Request to the booking engine.|
|**H20**|_Busy seat._|The lifetime of the Seat Block is expired.|


# Group Payments

## Calculate your Items [/payments]

The resource `/payments` retrieves all the payment details without the need of a purchase, according to your `meta` parameters, which are:

- `model`
- `store`
- `platform`

These parameters are created for each partner, and they are required for each request. If you have any doubts or questions about how to obtain these values, please contact our commercial department at contato@clickbus.com.br.

### Calculate your Items [POST]

**PARAMETERS**

|PARAMS|VALUE|DESCRIPTION|EXAMPLE|
|:----|:----|:----|:----|
|**meta** (required)|_object_|An object, where you should provide the values fot `store`, `model` and `platform`.||
|**meta.model** (required)|_string_|`model` parameter. A specific param for each partner. Please contact ClickBus at contato@clickbus.com.br for more commercial details.|`retail`|
|**meta.store** (required)|_string_|`store` parameter. A specific param for each partner. Please contact ClickBus at contato@clickbus.com.br for more commercial details.|`newstore`|
|**meta.platform** (required)|_string_|`platform` parameter. A specific param for each partner. Please contact ClickBus at contato@clickbus.com.br for more commercial details.|`web`|
|**contents** (required)|_array_|An array of objects, where each object shall contain the following values:||
|**scheduleId** (required)|_string_|The `scheduleId` for each of the desired trips (departure or return).|`SUVScFpTQkVhV1VnVFh...`|
|**ticket_amount** (required)|_integer_|The amount of seats for this trip (departure or return).|`8`|

**EXAMPLE**

Calculate a purchase of 10 seats, from `sao-paulo-tiete-sp` to `santos-sp`, being 5 seats for each trip.

**REQUEST (application/json)**

```json
{
    "meta": {
        "store": "clickbus",
        "model": "retail",
        "platform": "web"
    },
    "contents": [
        {
            "scheduleId": "YmFzZTY0LCBu8YXNlNjQsIGJpdGNoZXMhIGJhc2U2NCwgYml0Y2hlcyE=",
            "ticket_amount" : 5
        },
        {
            "scheduleId": "SGV5ISBUaGlzIGlzIG5vdCB5b3VyIHNoaXR0eSBtZDUsIGR1bWJhc3Mh",
            "ticket_amount" : 5
        }
    ]
}
```

**RESPONSE (application/json)**

With the correct params, this resource returns a Response _200 OK_, as below:

```json
{
    "meta": {
        "store": "clickbus",
        "model": "retail",
        "platform": "web"
    },
    "ticket_amount": 10,
    "original_cost": 42.75,
    "items": {
        "payment_methods": [
            {
                "name": "creditcard",
                "details": [
                    {
                        "brand": "mastercard",
                        "discount_value": 0,
                        "installments": {
                            "1": {
                                "fee": 5.56,
                                "installment": 48.31,
                                "total": 48.31,
                                "total_with_discount": 48.31
                            },
                            "2": {
                                "fee": 5.56,
                                "installment": 24.16,
                                "total": 48.31,
                                "total_with_discount": 48.31
                            }, { ... }
                        }
                    },
                    {
                        "brand": "visa",
                        "discount_value": 7.7,
                        "installments": {
                            "1": {
                                "fee": 5.56,
                                "installment": 40.61,
                                "total": 48.31,
                                "total_with_discount": 40.61
                            },
                            "2": {
                                "fee": 5.56,
                                "installment": 20.31,
                                "total": 48.31,
                                "total_with_discount": 40.61
                            }, { ... }
                        }
                    },
                    {
                        "brand": "amex",
                        "discount_value": 0,
                        "installments": {
                            "1": {
                                "fee": 5.56,
                                "installment": 48.31,
                                "total": 48.31,
                                "total_with_discount": 48.31
                            },
                            "2": {
                                "fee": 5.56,
                                "installment": 24.16,
                                "total": 48.31,
                                "total_with_discount": 48.31
                            }, { ... }
                        }
                    },
                    {
                        "brand": "diners",
                        "discount_value": 0,
                        "installments": {
                            "1": {
                                "fee": 5.56,
                                "installment": 48.31,
                                "total": 48.31,
                                "total_with_discount": 48.31
                            },
                            "2": {
                                "fee": 5.56,
                                "installment": 24.16,
                                "total": 48.31,
                                "total_with_discount": 48.31
                            }, { ... }
                        }
                    },
                    {
                        "brand": "hipercard",
                        "discount_value": 0,
                        "installments": {
                            "1": {
                                "fee": 5.56,
                                "installment": 48.31,
                                "total": 48.31,
                                "total_with_discount": 48.31
                            },
                            "2": {
                                "fee": 5.56,
                                "installment": 24.16,
                                "total": 48.31,
                                "total_with_discount": 48.31
                            }, { ... }
                        }
                    },
                    {
                        "brand": "elo",
                        "discount_value": 0,
                        "installments": {
                            "1": {
                                "fee": 5.56,
                                "installment": 48.31,
                                "total": 48.31,
                                "total_with_discount": 48.31
                            },
                            "2": {
                                "fee": 5.56,
                                "installment": 24.16,
                                "total": 48.31,
                                "total_with_discount": 48.31
                            }, { ... }
                        }
                    }
                ]
            },
            {
                "name": "paypal_hpp",
                "details": [
                    {
                        "brand": "paypal",
                        "discount_value": 0,
                        "installments": {
                            "1": {
                                "fee": 0,
                                "installment": 42.75,
                                "total": 42.75,
                                "total_with_discount": 42.75
                            }
                        }
                    }
                ]
            },
            {
                "name": "debitcard",
                "details": [
                    {
                        "brand": "visa-electron",
                        "discount_value": 0,
                        "installments": {
                            "1": {
                                "fee": 0,
                                "installment": 42.75,
                                "total": 42.75,
                                "total_with_discount": 42.75
                            }
                        }
                    },
                    {
                        "brand": "mastercard-maestro",
                        "discount_value": 0,
                        "installments": {
                            "1": {
                                "fee": 0,
                                "installment": 42.75,
                                "total": 42.75,
                                "total_with_discount": 42.75
                            }
                        }
                    }
                ]
            }
        ]
    }
}
```

**ERRORS**

|CODE|DESCRIPTION|DETAILS|
|:---:|:----|:----|
|**K1**|_Please provide the `meta` block._|The parameter `meta` is missing from the Request.|
|**K2**|_Please provide your store parameters for meta._|At least one of the parameters `store`, `model` or `platform` is missing.|
|**K3**|_One of the following parameters are incorrect: `store`, `platform` or `model`._|One of the `meta` values is incorrect (`store`, `model` or `platform`).|
|**K4**|_Please provide the `contents` block._|The parameter `contents` is missing from the Request.|
|**K5**|_Please provide at least one seat information._|The parameter `contents` is empty.|
|**K6**|_Please provide the right params for the seats._|At least one of the values inside `contents` is missing one of it's required parameters: `scheduleId` or `ticket_amount`.|
|**K7**|_The given `scheduleId` is incorrect._|One of the given `scheduleId` is incorrect or invalid.|
|**K8**|_The given `ticket_amount` is incorrect._|One of the given `ticket_amount` is incorrect.|
|**K9**|_The request is malformed. Please check the contents of your request._|Please check your request for any JSON malforming.|


## How Payments Works [/payments]

This resource provides a list for each payment option that our API offers. The calculus is based on the following operation:

* `ticket_amount` stands for the seats quantity, based on how many seats were provided in the request;
* `original_cost` stands for the ticket's original price;
* `payment_methods[].details[].discount_value` is the discount value that will be applied for this brand;
* `installment` is the installment value itself, calculated as:
    > ((`original_cost` + `fee`) - `discount_value`) / `installment` quantity
                
   So, based on the following example:
                
    ```json
    "1": {
        "fee": 5.43,
        "installment": 47.23,
        "total": 47.23,
        "total_with_discount": 47.23
    },
    "2": {
        "fee": 6.27,
        "installment": 24.03,
        "total": 48.07,
        "total_with_discount": 48.07
    }
    ```

    * If the customer decides to pay in a single installment:
        * The `original_cost` is _41.80_, the `fee` is _5.43_ and the `discount_value` is _0_;
            > (41.8 + 5.43) = **47.23** is the `total` value.
            > 
            > ((`total`) - 0) / 1 = **47.23** is the value for each `installment`.

    * If the customer decides to pay in two installments:
        * The `original_cost` is _41.80_, the `fee` is _6.27_ and the `discount_value` is _0_;
            > (41.8 + 6.27) = **48.07** is the `total` value.
            > 
            > ((`total`) - 0) / 2 = **24.03** is the value for each `installment`.
             
    * If the customer decides to pay in two installments, but there is a discount value:
        * The `original_cost` is _41.80_, the `fee` is _6.27_ and the `discount_value` is _7.52_;
            > (41.8 + 6.27) = **48.07** is the `total` value.
            > 
            > ((`total`) - 7.52) / 2 = **20.27** is the value for each `installment`.
            
* `total` is the total value, based on `installment` + `fee`;
* `total_with_discount` is the same total value, but applying the `discount_value`.

----------------------------------------

##Supported Card Brands [/payments]

Below you can find a list of supported card brands, based on each payment method:

- **Credit Card** (`creditcard`):
    - American Express (`amex`)
    - Diners (`diners`)
    - Elo (`elo`)
    - Hipercard (`hipercard`)
    - MasterCard (`mastercard`)
    - Visa (`visa`)


- **Debit Card** (`debitcard`)
    - Visa Electron (`visa-electron`)
    - MasterCard Maestro (`mastercard-maestro`)

For **PayPal** (`paypal_hpp`), there is no specific limitation for brands.

# Group Booking

## How to Check an Order Status [/booking]

If you wish to check the status of your Orders, please follow these steps:

- For every Request to **Create and Order**, add the optional parameter `api_key` into the `meta` object, with the value of your API Public Key, as below:
    - Example:
        ```json
        {
            "meta": {
                "model": "Model",
                "store": "clickbus",
                "platform": "Medium",
                "api_key": "dbb648c2d6f4df1b7422b56265947f261cd80e27"
            }, {...}
        }
        ```
- For more details about the Public API Key and how to obtain your Key, please check the chapter **Authentication Required** [here](#order-details-authentication-required).
- You can only check the Orders where this value (`api_key`) was provided in the request to **Create an Order**.
- The same settings can be applied to the `/checkout` endpoint.

------------------------

# Create an Order [/booking]

When you have selected all the Seats, then you may proceed to create an Order, which will start the payment process.

**NOTES:**

- For every Response, please remember to keep the `content.localizer` value; this value is required for any **Update Order** Request;
- Please keep in mind that you need to provide in your header the `PHPSESSID` key with the Session's ID in the Cookie, as below:
    > Cookie: PHPSESSID=g1898g0ogdlh9f3mfra2hl3el3

## Create an Order [POST]

To create an Order, the request's body requires a range of data, which, for a better understanding, we will divide in the following blocks below:

- **meta**, which contains the params `model`, `store` and `platform` for each Partner;
- **request**, which contains:
    - **request.buyer** contains all required information about the Buyer;
        - **request.buyer.payment** contains all the Buyer's payment data;
    - **request.orderItems** contains all the Seats, along with their information, added to the Order.

Each `/booking` have the same structure block except for `payment` block, which is based on each payment method (see details below):

|PARAMS|VALUE|DESCRIPTION|EXAMPLE|
|:----|:----|:----|:----|
|**meta** (required)|_object_|An empty object. Partners can use this parameter to provide:|`{}`|
|**meta.model** (required)|_string_|Partner's `model` data. |`retail`|
|**meta.store** (required)|_string_|Partner's `store` data. |`newstore`|
|**meta.platform** (required)|_string_|Partner's `platform` data. |`web`|
|**request** (required)|_object_|A container which requires: ||
|**request.sessionId** (required)|_string_|Session's ID, obtained from **Session**.|`dnlfm8aecg2omtjaang62fvla5`|
|**request.ip** (optional)|_string_|IP address from where the request was sent.|`192.168.14.1`|
|**request.buyer** (required)|_object_|A container which requires: ||
|**request.buyer.locale** (required)|_string_|Buyer's locale.|`pt_BR`|
|**request.buyer.firstName** (required)|_string_|Buyer's first name.|`Fulano`|
|**request.buyer.lastName** (required)|_string_|Buyer's surname.|`de Silva`|
|**request.buyer.email** (required)|_string_|Buyer's email.|`fulano@teste.com.br`|
|**request.buyer.phone** (required)|_string_|Buyer's phone, in format `AABBBBBBBBB`, where `AA` stands for the brazilian phone's region code, and `BBBBBBBBB` stands for the phone number.|`11912345678`|
|**request.buyer.document** (required)|_string_|Buyer's document.|`123.456.789-00`|
|**request.buyer.gender** (required)|_string_|`M` stands for _Male_, and `F`, for _Female_.|`M` or `F`|
|**request.buyer.birthday** (required)|_string_|Buyer's birth date, in format `yyyy-mm-dd`.|`1970-01-15`|
|**request.buyer.meta** (required)|_object_|An empty object.|`{}`|
|**request.buyer.payment** (required)|_object_|An object containing all the required information according to the payment method.||
|**request.orderItems** (required)|_object_|A collection of objects, which may contain at least 1 and a maximum of N to be considered valid. Each object contains:||
|**request.orderItems.seatReservation** (required)|_string_|Schedule's ID, obtained in the **Seat** process.|`NDAxNy0tMzkzNS0tMjAxNS0...`|
|**request.orderItems.passenger** (required)|_object_|A container, which have:||
|**request.orderItems.passenger.firstName** (required)|_string_|Passenger's first name.|`Beltrano`|
|**request.orderItems.passenger.lastName** (required)|_string_|Passenger's surname.|`da Silva`|
|**request.orderItems.passenger.email** (required)|_string_|Passenger's email.|`beltrano@teste.com.br`|
|**request.orderItems.passenger.document** (required)|_string_|Passenger's document.|`123.456.789-00`|
|**request.orderItems.passenger.gender** (required)|_string_|`M` stands for _Male_, and `F`, for _Female_.|`M` or `F`|
|**request.orderItems.passenger.birthday** (required)|_string_|Passenger's birth date, in format `yyyy-mm-dd`.|`1970-01-15`|
|**request.orderItems.passenger.seat** (required)|_string_|`seat` name, obtained on **Seat** proccess.|`08`|
|**request.orderItems.passenger.meta** (required)|_object_|An empty object.|`{}`|
|**request.orderItems.products** (optional)|_array_|A collection of objects, which may have:|`{}`|
|**request.orderItems.products.uuid** (optional)|_string_||`abcd123s`|
|**request.orderItems.products.quantity** (optional)|_int_||`{}`|

 The `/booking` request have 4 valid options to proceed to the payment:

- **Credit Card using the card's data**
- **Credit Card using Mercado Pago tokens**
- **Debit Card**
- **PayPal**

Based on each of the 4 valid payment options:

**1) Credit Card using the card's data**

For this option, it's required to provide the customer's credit card data in your request, which we'll submit it to the payment gateway and handle the response through our services.

**PARAMETERS**

|PARAMS|VALUE|DESCRIPTION|EXAMPLE|
|:----|:----|:----|:----|
|**request.buyer.payment.method** (required)|_string_|Payment type: `creditcard`.|`creditcard`|
|**request.buyer.payment.currency** (required)|_string_|Payment currency.|`BRL`|
|**request.buyer.payment.total** (required)|_int_|Sum of the values of all items in the Order. The first two digits from right to left represent the decimal part of the value. So, for instance, `1400` means `14.00`, and `6050` means `60.50`.|`1400`|
|**request.buyer.payment.installment** (required)|_int_|Indicates on how many installments the payment is settled.|`1`|
|**request.buyer.payment.meta** (required)|_object_|An object which requires the following data:||
|**request.buyer.payment.meta.card** (required)|_string_|Credit card's number.|`1234567812345678`|
|**request.buyer.payment.meta.code** (required)|_string_|Credit card's security code.|`065`|
|**request.buyer.payment.meta.name** (required)|_string_|Credit card owner's name, in all upper case.|`CICRANO SILVA`|
|**request.buyer.payment.meta.expiration** (required)|_string_|Credit card's expiration date, in format `yyyy-mm`.|`2016-02`|
|**request.buyer.payment.meta.zipcode** (required)|_string_|Credit card owner's zip code, with only digits.|`12345678`|

**EXAMPLE**

Create an Order with the following data:
- Created from a `store` called _NewWorld_;
- Selected 1 Seat for _Fulano da Silva_ and 1 Seat for _Beltrano da Silva_ in the same Order;
- Each item costs R$ 12.35, so the `request.buyer.payment.total` value is _2470_;
- The payment is settled to a single `installment`, using `creditcard`.

**REQUEST (application/json)**

```json
{
    "meta": {
        "model": "foo",
        "store": "newworld",
        "platform": "bar"
    },
    "request": {
        "sessionId": "oeccq3hugiknuj5f2luvvruvj7",
        "ip": "192.168.14.1",
        "buyer": {
            "locale": "pt_BR",
            "firstName": "Cicrano",
            "lastName": "da Silva",
            "email": "cicrano@teste.com.br",
            "phone": "12934567890",
            "document": "123.456.789-00",
            "gender": "M",
            "birthday": "1986-05-17",
            "meta": {},
            "payment": {
                "method": "creditcard",
                "currency": "BRL",
                "total": 2470,
                "installment": "1",
                "meta": {
                    "card": "1234567887654321",
                    "code": "093",
                    "name": "DELTRANO SILVA",
                    "expiration": "2022-03",
                    "zipcode": "12345678"
                }
            }
        },
        "orderItems": [
            {
                "seatReservation": "NDAxNy0tMzkzNS0tMjAxNS0wMS0wMSAwMTowMC0tOS0tNDMyMS0tMS0tMS0tMS0tQ09OVg==",
                "passenger": {
                    "firstName": "Fulano",
                    "lastName": "da Silva",
                    "email": "fulano@teste.com.br",
                    "document": "123.123.123-01",
                    "gender": "M",
                    "birthday": "1986-05-17",
                    "seat": "11",
                    "meta": {}
                },
                "products": [{
                    "uuid": "abcd123s",
                    "quantity": 1
                }]
            },
            {
                "seatReservation": "NDAxNy0tMzkzNS0tMjAxNS0wMS0wMSAwMTowMC0tOS0tNDMyMS0tMS0tMS0tMS0tQ09OVg==",
                "passenger": {
                    "firstName": "Beltrano",
                    "lastName": "da Silva",
                    "email": "beltrano@teste.com.br",
                    "document": "987.654.321-99",
                    "gender": "M",
                    "birthday": "1942-10-17",
                    "seat": "02",
                    "meta": {}
                },
                "products": [{
                    "uuid": "abcd123s",
                    "quantity": 1
                }]
            }
        ]
    }
}
```

**RESPONSE (application/json)**

The following Request, with all correct parameters, will return a _201_ Response, with all details from the Order, as the example below.

```json
{
    "meta": {
        "model": "foo",
        "store": "newworld",
        "platform": "bar"
    },
    "content": {
        "id": "1062",
        "status": "order_finalized_successfully",
        "localizer": "5EBP2M",
        "uuid": "",
        "payment": {
            "method": "payment.creditcard",
            "total": "6.3",
            "currency": "BRL",
            "status": "order_finalized_successfully",
            "meta": {
                "card": "4111-XXXX-XXXX-1111",
                "code": "XXX",
                "name": "NOME DE TESTE DA COMPRA",
                "expiration": "XXXX-XX-XX",
                "postbackUrl": "",
                "callbackUrl": ""
            }
        },
        "items": [{
            "trip_id": "4321",
            "localizer": "KPFHNB",
            "ticket_code": "6462297",
            "context": "departure",
            "order_item": "1228",
            "serviceClass": "Convencional",
            "departure": {
                "waypoint": "4017",
                "schedule": {
                    "id": "",
                    "date": "2015-02-11",
                    "time": "01:00",
                    "timezone": "America/Sao_Paulo"
                }
            },
            "arrival": {
                "waypoint": "3935",
                "schedule": {
                    "id": "",
                    "date": "2015-02-11",
                    "time": "03:00",
                    "timezone": "America/Sao_Paulo"
                }
            },
            "seat": {
                "id": "42",
                "name": "42",
                "price": "6.30",
                "status": "reserved",
                "currency": "BRL",
                "type": {}
            },
            "passenger": {
                "firstName": "Nome Passageiro",
                "lastName": "",
                "email": "passageiro@teste.com.br",
                "document": "123.456.789-00",
                "gender": "",
                "birthday": "",
                "meta": {}
            },
            "products": [],
            "subtotal": "6.30"
        }],
        "createdAt": "2015-01-23"
    }
}
```

**2) Credit Card using Mercado Pago tokens**

This payment method is available only for credit card. To use this payment method, it's requires to obtain a token trough the MercadoPago services and then provide it in your request to our services, along with the credit card brand, instead of sending the credit card data right to our services.

- **ATTENTION:**
    > 1. We provide a JavaScript library to make the token generation with ease. This library is maintained by ClickBus and you can check the instructions on how to install and use it through [this link](https://github.com/RocketBus/clickbus-payments.js/wiki). If you have any questions related to this library, please contact us at contato@clickbus.com.br and we'll assist you in any questions.
    > 2. This payment option restricts the installments options. It does not accept installments for `7`, `8` nor `11` as valid options. If you provide one of these options in your requests, it will be rejected with the error message `Payments in this installment amount are not processed`, so we suggest you to avoid offer these installment options if you're using this payment option.

**PARAMETERS**

|PARAMS|VALUE|DESCRIPTION|EXAMPLE|
|:----|:----|:----|:----|
|**request.buyer.payment.method** (required)|_string_|Payment type: `creditcard`.|`creditcard`|
|**request.buyer.payment.currency** (required)|_string_|Payment currency.|`BRL`|
|**request.buyer.payment.total** (required)|_int_|Sum of the values of all items in the Order. The first two digits from right to left represent the decimal part of the value. So, for instance, `1400` means `14.00`, and `6050` means `60.50`.|`1400`|
|**request.buyer.payment.installment** (required)|_int_|Indicates on how many installments the payment is settled.|`1`|
|**request.buyer.payment.meta** (required)|_object_|An object which requires the following data:||
|**request.buyer.payment.meta.token** (required)|_string_|Token generated through the Mercado Pago JS library.|`cd844cde3fb6269`|
|**request.buyer.payment.meta.card_brand** (required)|_string_|Credit card's brand.|Check the list of available card brands at [Supported Card Brands](/#payments-supported-card-brands).|
|**request.buyer.payment.meta.zipcode** (required)|_string_|Credit card owner's zip code, with only digits.|`12345678`|

**EXAMPLE**

Create an Order with the following data:
- Created from a `store` called _NewWorld_;
- Selected 1 Seat for _Cicrano da Silva_ and 1 Seat for _Deltrano da Silva_ in the same Order;
- Each item costs R$ 12.35, so the `request.buyer.payment.total` value is _2470_;
- The payment is settled to a single `installment`, using `creditcard` and providing both token and credit card brand (in this example, Visa).

**REQUEST (application/json)**

```json
{
    "meta": {
        "model": "foo",
        "store": "newworld",
        "platform": "bar"
    },
    "request": {
        "sessionId": "oeccq3hugiknuj5f2luvvruvj7",
        "ip": "192.168.14.1",
        "buyer": {
            "locale": "pt_BR",
            "firstName": "Cicrano",
            "lastName": "da Silva",
            "email": "cicrano@teste.com.br",
            "phone": "12934567890",
            "document": "123.456.789-00",
            "gender": "M",
            "birthday": "1986-05-17",
            "meta": {},
            "payment": {
                "method": "creditcard",
                "currency": "BRL",
                "total": 2470,
                "installment": "1",
                "meta": {
                    "token": "cd844c9fd6e300c7a235880de3fb6269",
                    "card_brand": "visa",
                    "zipcode": "12345678"
                }
            }
        },
        "orderItems": [
            {
                "seatReservation": "NDAxNy0tMzkzNS0tMjAxNS0wMS0wMSAwMTowMC0tOS0tNDMyMS0tMS0tMS0tMS0tQ09OVg==",
                "passenger": {
                    "firstName": "Cicrano",
                    "lastName": "da Silva",
                    "email": "fulano@teste.com.br",
                    "document": "12312312301",
                    "gender": "M",
                    "birthday": "1986-05-17",
                    "seat": "11",
                    "meta": {}
                },
                "products": [{
                    "uuid": "abcd123s",
                    "quantity": 1
                }]
            },
            {
                "seatReservation": "NDAxNy0tMzkzNS0tMjAxNS0wMS0wMSAwMTowMC0tOS0tNDMyMS0tMS0tMS0tMS0tQ09OVg==",
                "passenger": {
                    "firstName": "Deltrano",
                    "lastName": "da Silva",
                    "email": "beltrano@teste.com.br",
                    "document": "98765432199",
                    "gender": "M",
                    "birthday": "1942-10-17",
                    "seat": "02",
                    "meta": {}
                },
                "products": [{
                    "uuid": "abcd123s",
                    "quantity": 1
                }]
            }
        ]
    }
}
```

**RESPONSE (application/json)**

The following Request, with all correct parameters, will return a _201_ Response, with all details from the Order, as the example below.

```json
{
    "meta": {
        "model": "foo",
        "store": "newworld",
        "platform": "bar"
    },
    "content": {
        "id": "655503",
        "status": "order_finalized_successfully",
        "localizer": "2PRMUT",
        "uuid": "",
        "payment": {
            "method": "payment.creditcard.mercadopago",
            "total": "3.249",
            "currency": "BRL",
            "status": "order_finalized_successfully",
            "meta": {
                "postbackUrl": "",
                "callbackUrl": ""
            }
        },
        "items": [
            {
                "trip_id": "2528",
                "localizer": "OCYNQB",
                "ticket_code": "0686102",
                "context": "departure",
                "order_item": "1057494",
                "serviceClass": "Convencional",
                "departure": {
                    "waypoint": "3097",
                    "schedule": {
                        "id": "",
                        "date": "2015-12-12",
                        "time": "05:10",
                        "timezone": "America/Sao_Paulo"
                    }
                },
                "arrival": {
                    "waypoint": "3535",
                    "schedule": {
                        "id": "",
                        "date": "2015-12-12",
                        "time": "05:29",
                        "timezone": "America/Sao_Paulo"
                    }
                },
                "seat": {
                    "id": "11",
                    "name": "11",
                    "price": "12.35",
                    "status": "reserved",
                    "currency": "BRL",
                    "type": {}
                },
                "passenger": {
                    "firstName": "Cicrano da Silva",
                    "lastName": "",
                    "email": "cicrano@teste.com.br",
                    "document": "1236547890",
                    "gender": "",
                    "birthday": "",
                    "meta": {}
                },
                "products": [],
                "subtotal": "12.35"
            },
            {
                "trip_id": "2528",
                "localizer": "OCYNQB",
                "ticket_code": "0686102",
                "context": "departure",
                "order_item": "1057494",
                "serviceClass": "Convencional",
                "departure": {
                    "waypoint": "3097",
                    "schedule": {
                        "id": "",
                        "date": "2015-12-12",
                        "time": "05:10",
                        "timezone": "America/Sao_Paulo"
                    }
                },
                "arrival": {
                    "waypoint": "3535",
                    "schedule": {
                        "id": "",
                        "date": "2015-12-12",
                        "time": "05:29",
                        "timezone": "America/Sao_Paulo"
                    }
                },
                "seat": {
                    "id": "02",
                    "name": "02",
                    "price": "12.35",
                    "status": "reserved",
                    "currency": "BRL",
                    "type": {}
                },
                "passenger": {
                    "firstName": "Deltrano da Silva",
                    "lastName": "",
                    "email": "deltrano@teste.com.br",
                    "document": "0987654321",
                    "gender": "",
                    "birthday": "",
                    "meta": {}
                },
                "products": [],
                "subtotal": "12.35"
            }
        ],
        "createdAt": "2015-11-10"
    }
}
```

**3) Debit Card**

This payment option will require that your application redirects the user to the given `continuePaymentURL` to proceed with the payment, also that the user must have the required plugins correctly installed in it's browser, depending on which bank corporation it may uses.

**PARAMETERS**

|PARAMS|VALUE|DESCRIPTION|EXAMPLE|
|:----|:----|:----|:----|
|**request.buyer.payment.method** (required)|_string_|Payment type: `debitcard`.|`debitcard`|
|**request.buyer.payment.currency** (required)|_string_|Payment currency.|`BRL`|
|**request.buyer.payment.total** (required)|_int_|Sum of the values of all items in the Order. The first two digits from right to left represent the decimal part of the value. So, for instance, `1400` means `14.00`, and `6050` means `60.50`.|`1400`|
|**request.buyer.payment.installment** (required)|_int_|Indicates on how many installments the payment is settled.|`1`|
|**request.buyer.payment.meta** (required)|_object_|An object which requires the following data:||
|**request.buyer.payment.meta.card** (required)|_string_|Debit card's number.|`1234567812345678`|
|**request.buyer.payment.meta.code** (required)|_string_|Debit card's security code.|`065`|
|**request.buyer.payment.meta.name** (required)|_string_|Debit card owner's name, in all upper case.|`CICRANO SILVA`|
|**request.buyer.payment.meta.expiration** (required)|_string_|Debit card's expiration date, in format `yyyy-mm`.|`2016-02`|
|**request.buyer.payment.meta.zipcode** (required)|_string_|Debit card owner's zip code, with only digits.|`12345678`|

**EXAMPLE**

Create an Order with the following data:
- Created from a `store` called _NewWorld_;
- Selected 1 Seat for _Fulano da Silva_;
- Each item costs R$ 22.50, so the `request.buyer.payment.total` value is _2250_;
- The payment is settled to a single `installment`, using `debitcard`.

**REQUEST (application/json)**

```json
{
    "meta": {
        "model": "foo",
        "store": "newworld",
        "platform": "bar"
    },
    "request": {
        "sessionId": "oeccq3hugiknuj5f2luvvruvj7",
        "ip": "192.168.14.1",
        "buyer": {
            "locale": "pt_BR",
            "firstName": "Cicrano",
            "lastName": "da Silva",
            "email": "cicrano@teste.com.br",
            "phone": "12934567890",
            "document": "123.456.789-00",
            "gender": "M",
            "birthday": "1986-05-17",
            "meta": {},
            "payment": {
                "method": "debitcard",
                "currency": "BRL",
                "total": 2250,
                "installment": "1",
                "meta": {
                    "card": "1234567887654321",
                    "code": "093",
                    "name": "DELTRANO SILVA",
                    "expiration": "2022-03",
                    "zipcode": "12345678"
                }
            }
        },
        "orderItems": [
            {
                "seatReservation": "NDAxNy0tMzkzNS0tMjAxNS0wMS0wMSAwMTowMC0tOS0tNDMyMS0tMS0tMS0tMS0tQ09OVg==",
                "passenger": {
                    "firstName": "Fulano",
                    "lastName": "da Silva",
                    "email": "fulano@teste.com.br",
                    "document": "123.123.123-01",
                    "gender": "M",
                    "birthday": "1986-05-17",
                    "seat": "11",
                    "meta": {}
                },
                "products": [{
                    "uuid": "abcd123s",
                    "quantity": 1
                }]
            }
        ]
    }
}
```

**RESPONSE (application/json)**

**NOTICE:** Attention to `content.payment.meta.continuePaymentURL`, which contains the URL to redirect after payment.

```json
{
    "meta": {
        "model": "foo",
        "store": "newworld",
        "platform": "bar"
    },
    "content": {
        "id": "1064",
        "status": "clarify_debit_card_payment_pending",
        "localizer": "EXQMD5",
        "uuid": "",
        "payment": {
            "method": "payment.debitcard",
            "total": "6.3",
            "currency": "BRL",
            "status": "clarify_debit_card_payment_pending",
            "meta": {
                "continuePaymentURL": "https://qasecommerce.cielo.com.br/web/index.cbmp?id=43b07288a66a8e2fd86bb693d4af426b",
                "card": "4111-XXXX-XXXX-1111",
                "code": "XXX",
                "name": "NOME SOBRENOME",
                "expiration": "XXXX-XX-XX",
                "postbackUrl": "",
                "callbackUrl": ""
            }
        },
        "items": [{
            "trip_id": "2311",
            "context": "departure",
            "order_item": "1230",
            "serviceClass": "Convencional",
            "departure": {
                "waypoint": "4017",
                "schedule": {
                    "id": "",
                    "date": "2015-02-11",
                    "time": "02:00",
                    "timezone": "America/Sao_Paulo"
                }
            },
            "arrival": {
                "waypoint": "3935",
                "schedule": {
                    "id": "",
                    "date": "2015-02-11",
                    "time": "12:15",
                    "timezone": "America/Sao_Paulo"
                }
            },
            "seat": {
                "id": "14",
                "name": "14",
                "price": "6.30",
                "status": "reserved",
                "currency": "BRL",
                "type": {}
            },
            "passenger": {
                "firstName": "Charles Bukowski",
                "lastName": "",
                "email": "teste@clickbus.com.br",
                "document": "123.456.789-00",
                "gender": "",
                "birthday": "",
                "meta": {}
            },
            "products": [],
            "subtotal": "6.30"
        }],
        "createdAt": "2015-01-23"
    }
}
```

**4) PayPal**

This payment method provides a redirect link in the response body, provided after PayPal's request.

**PARAMETERS**

|PARAMS|VALUE|DESCRIPTION|EXAMPLE|
|:----|:----|:----|:----|
|**request.buyer.payment.method** (required)|_string_|Payment type: `paypal_hpp`.|`paypal_hpp`|
|**request.buyer.payment.currency** (required)|_string_|Payment currency.|`BRL`|
|**request.buyer.payment.total** (required)|_int_|Sum of the values of all items in the Order. The first two digits from right to left represent the decimal part of the value. So, for instance, `1400` means `14.00`, and `6050` means `60.50`.|`1400`|
|**request.buyer.payment.installment** (required)|_int_|Indicates on how many installments the payment is settled.|`1`|
|**request.buyer.payment.meta** (required)|_object_|An empty object.||

**EXAMPLE**

Create an Order with the following data:
- Created from a `store` called _NewWorld_;
- Selected 1 Seat for _Charles Bukowski_;
- Each item costs R$ 6.30, so the `request.buyer.payment.total` value is _630_;
- The payment is settled to a single `installment`, using `paypal_hpp`.

**REQUEST (application/json)**

```json
{
    "meta": {
        "model": "foo",
        "store": "newworld",
        "platform": "bar"
    },
    "request": {
        "sessionId": "oeccq3hugiknuj5f2luvvruvj7",
        "ip": "192.168.14.1",
        "buyer": {
            "locale": "pt_BR",
            "firstName": "Cicrano",
            "lastName": "da Silva",
            "email": "cicrano@teste.com.br",
            "phone": "12934567890",
            "document": "123.456.789-00",
            "gender": "M",
            "birthday": "1986-05-17",
            "meta": {},
            "payment": {
                "method": "paypal_hpp",
                "currency": "BRL",
                "total": 630,
                "installment": "1",
                "meta": {}
            }
        },
        "orderItems": [
            {
                "seatReservation": "NDAxNy0tMzkzNS0tMjAxNS0wMS0wMSAwMTowMC0tOS0tNDMyMS0tMS0tMS0tMS0tQ09OVg==",
                "passenger": {
                    "firstName": "Charles",
                    "lastName": "Bukowski",
                    "email": "teste@novo.com.br",
                    "document": "123.123.123-01",
                    "gender": "M",
                    "birthday": "1986-05-17",
                    "seat": "26",
                    "meta": {}
                },
                "products": [{
                    "uuid": "abcd123s",
                    "quantity": 1
                }]
            }
        ]
    }
}
```

**RESPONSE (application/json)**

```json
{
    "meta": {
        "model": "foo",
        "store": "newworld",
        "platform": "bar"
    },
    "content": {
        "id": "1063",
        "status": "order_pending",
        "localizer": "GXGTWNM6A",
        "uuid": "",
        "payment": {
            "method": "payment.paypal_hpp",
            "total": "6.3",
            "currency": "BRL",
            "status": "order_pending",
            "meta": {
                "postUrl": "https://www.paypal.com/cgi-bin/webscr",
                "postData": {
                    "cmd": "_xclick",
                    "business": "contato@clickbus.com.br",
                    "item_name": "Passagem de onibus - Clickbus",
                    "amount": "6.30",
                    "currency_code": "BRL",
                    "button_subtype": "services",
                    "bn": "PP-BuyNowBF:btn_buynowCC_LG.gif:NonHosted",
                    "invoice": "1063",
                    "custom": "pt",
                    "return": "http://api-evaluation.clickbus.com.br/api/v1/booking/payment?orderId=1063",
                    "lc": "BR"
                },
                "postbackUrl": "",
                "callbackUrl": ""
            }
        },
        "items": [{
            "trip_id": "4321",
            "context": "departure",
            "order_item": "1229",
            "serviceClass": "Convencional",
            "departure": {
                "waypoint": "4017",
                "schedule": {
                    "id": "",
                    "date": "2015-02-11",
                    "time": "01:00",
                    "timezone": "America/Sao_Paulo"
                }
            },
            "arrival": {
                "waypoint": "3935",
                "schedule": {
                    "id": "",
                    "date": "2015-02-11",
                    "time": "03:00",
                    "timezone": "America/Sao_Paulo"
                }
            },
            "seat": {
                "id": "29",
                "name": "29",
                "price": "6.30",
                "status": "reserved",
                "currency": "BRL",
                "type": {}
            },
            "passenger": {
                "firstName": "Charles Bukowski",
                "lastName": "",
                "email": "teste@teste.com.br",
                "document": "123.456.789-00",
                "gender": "",
                "birthday": "",
                "meta": {}
            },
            "products": [],
            "subtotal": "6.30"
        }],
        "createdAt": "2015-01-23"
    }
}
```

**ERRORS**

|CODE|DESCRIPTION|DETAILS|
|:---:|:----|:----|
|**A1**|_Please provide a `sessionId`._|The parameter `sessionId` is missing from the Request.|
|**A2**|_The given `sessionId` has expired._|The value for `sessionId` has expired and is no longer valid. Please request a new value in **Session**.|
|**A3**|_Please provide the `seatReservation` for all your Order Items._|One or more of your Items in the Order does not have the `seatReservation` parameter.|
|**A4**|_Missing parameters in your payment data._|One or more of the following  `buyer` parameters are missing: `name`, `card`, `code`, `zipcode` or `expiration`.|
|**A5**|_The expiration data is invalid or incorrect._|The expiration data provided in the card is incorrect or invalid.|
|**A6**|_Please provide the `installment` for the payment data._|The parameter `installment` is missing from the Request.|
|**A7**|_The Order Cart is empty._|You have tried to proceed to Checkout without creating any **Seat Block**.|
|**A12**|_There was a problem with your Order. Please contact us for more details._|Your Order could not be completed. Please contact us at contato@clickbus.com.br for support and details.|
|**A13**|_Checkout Error_|An internal error ocurred at the conclusion of your Request.|
|**A14**|_Application Error_|An error occurred before send the success email of your Request.|
|**A15**|_An unexpected issue happened in your Request. Please contact us for more details._|Troubles while requesting data from the booking engine. Please contact us at contato@clickbus.com.br for support and details.|
|**A16**|_The number of passengers does not match with the data already informed._|There is a difference between the amount of seats provided in the request and the the amount of seats that were reserved previously at the Seat Block. Please contact us for more details about the subject and how to troubleshoot.|
|**A27**|_Inconsistencies were found. Please check your Payment Data._|One or more values provided for the payment data are invalid or incorrect. Please check these values before send a new request.|
|**A28**|_The given credit card brand is not supported by the payment method._|The card brand is not supported by our payment methods. Please contact us or check the [Payments](#payments) resource to verify if the given card brand is declared in the supported list.|
|**A29**|_Checkout Error_|It's required to authorize this purchase with the card issuer.|
|**A30**|_Checkout Error_|The payment was not authorized. We suggest you to check the card information before proceed.|
|**A31**|_Checkout Error_|The payment was not authorized. We suggest you to check the card information before proceed.|
|**A32**|_Checkout Error_|A problem ocurred while authorizing the purchase. Please check the card data or contact us for more details.|
|**A33**|_Checkout Error_|The payment was not authorized. We suggest you to check the card information before proceed.|
|**A34**|_Checkout Error_|The payment could not be processed.|
|**A35**|_Checkout Error_|Please check if the card is ok or if it still requires it's activation before proceed with your payment.|
|**A36**|_Checkout Error_|It was not possible to process the purchase.|
|**A37**|_Checkout Error_|You have already made a purchase with the same value. If you need to pay the same amount again, please, use another card or payment method.|
|**A38**|_Checkout Error_|Your payment was rejected. We recommend you to pay with other payment methods available.|
|**A39**|_Checkout Error_|There is no credit available for this credit card.|
|**A40**|_Checkout Error_|Payments in this installment amount are not processed. Please, choose other installment value.|
|**A41**|_Checkout Error_|You have reached limit of tries. Please, use another card or payment method.|
|**A42**|_Checkout Error_|The payment could not be processed.|
|**A43**|_Checkout Error_|Payment not authorized. Please, check your credit card information.|


## Credit/Debit Card Rejection [/booking]

If, for any circunstances listed above, the Request detects any kind of problem related to the given credit/debit card, as above:

- The maximum credit limit was reached;
- The credit, for any reason, is blocked;
- There is an error with any of the credit/debit card's data. 

If this happens, then the API will return a _400_ Response with the following content:

```json
{
    "description": "Credit card was rejected."
}
```

-----------------------------

## Cancel an Order [/booking]

This Request aims to update an Order Status to `order_canceled`, which means that the Order has been sucessfully canceled.

**ATTENTION:** 
1. Once an Order status is settled to `order_canceled`, the action is irreversible;
2. You can cancel an Order until **3 hours** before the departure time.

### Cancel an Order [PUT]

**PARAMETERS**

|PARAMS|VALUE|DESCRIPTION|EXAMPLE|
|:----|:----|:----|:----|
|**request** (required)|_object_|A container which requires:||
|**request.localizer** (required)|_string_|A localizer which points to your Order, obtained while creating an **Order**.|`53347e09aee47`|
|**request.status** (required)|_string_|**Cancel** status.|`order_canceled`|

The given request returns a Response _201_, with all Order details in the Response body:

**EXAMPLE**

Canceling an Order, which is related to the `RXNHIN` localizer.

**REQUEST (application/json)**

```json
{
    "request": {
      "localizer": "RXNHIN",
      "status": "order_canceled"
    }
}
```

**RESPONSE (application/json)**

```json
{
    "meta": {
        "model": "model",
        "store": "store",
        "platform": "platform"
    },
    "content": {
        "id": "1059",
        "status": "cancelation_booking_engine_confirmation_successful",
        "localizer": "RXNHIN",
        "uuid": "",
        "payment": {
            "method": "payment.creditcard",
            "total": "6.30",
            "currency": "BRL",
            "status": "cancelation_booking_engine_confirmation_successful",
            "meta": {
                "card": "1234567887654321",
                "code": "093",
                "name": "DELTRANO SILVA",
                "expiration": "2022-03",
                "zipcode": "12345678"
            }
        },
        "items": [{
            "trip_id": "4322",
            "localizer": "PPNPNT",
            "context": "departure",
            "order_item": "1225",
            "serviceClass": "Convencional",
            "departure": {
                "waypoint": "4017",
                "schedule": {
                    "id": "",
                    "date": "2015-02-11",
                    "time": "01:00",
                    "timezone": "America/Sao_Paulo"
                }
            },
            "arrival": {
                "waypoint": "3935",
                "schedule": {
                    "id": "",
                    "date": "2015-02-11",
                    "time": "03:00",
                    "timezone": "America/Sao_Paulo"
                }
            },
            "seat": {
                "id": "07",
                "name": "07",
                "price": "6.30",
                "status": "reserved",
                "currency": "BRL",
                "type": {}
            },
            "passenger": {
                "firstName": "Fulano da Silva",
                "lastName": "",
                "email": "fulano@teste.com.br",
                "document": "12345678900",
                "gender": "",
                "birthday": "",
                "meta": {}
            },
            "products": [],
            "subtotal": "6.30"
        }],
        "createdAt": "2015-02-23"
    }
}
```

**ERRORS**

|CODE|DESCRIPTION|DETAILS|
|:---:|:----|:----|
|**A8**|_Please provide a `localizer`._|The parameter `localizer` is missing from the Request.|
|**A9**|_The Request Status is invalid._|The value for the `status` is invalid. Use `order_canceled`.|
|**A10**|_The given localizer is invalid._|The value for `localizer` is invalid or could not be found.|
|**A24**|_The cancelation request failed. Please check the Order status for more details._|The request for cancelation of the given Order was started but could not achieve success. Please contact us for more details.|
|**A25**|_The Order Cancelation Workflow can't be executed for the given Order. Please check the Order Status for more info._|The actual Order status does not allow to proceed to it's cancelation and your application should not repeat this request. Please contact us for more details.|
|**A26**|_Server Error_|The Server encountered a temporary error and could not complete your request.|


# Group Checkout

The `/checkout` endpoint allows you to pick the seats and create the Order in the same request.

As opposed to `/booking`, `/checkout` **does not need previous requests to `/seat-block`.** Instead, you provide the `scheduleId` for each trip (departure, return, or even only departure or only return) along with the minimum required data for each passenger. 
    
- **ATTENTION:** 
    > This resource provides an easier approach for creating Orders, once that you don't need to request `/seat-block` for each seat. However, there are chances that one or more of the desired seats are unavailable.

**NOTES:**

- For every Response, please remember to keep the `content.localizer` value; this value is required for any **Update Order** Request;
- Please keep in mind that you need to provide in your header the `PHPSESSID` key with the Session's ID in the Cookie, as below:
    > Cookie: PHPSESSID=g1898g0ogdlh9f3mfra2hl3el3

## Create an Order [/checkout]

### Create an Order [POST]

To create an Order, the request's body requires a range of data, which, for a better understanding, we will divide in the following blocks below:

- **meta**, which contains the params `model`, `store` and `platform` for each Partner;
- **request**, which contains:
    - **request.buyer** contains all required information about the Buyer;
        - **request.buyer.payment** contains all the Buyer's payment data;
    - **request.orderItems** contains all the Seats, along with their information, added to the Order.

Each `/checkout` have the same structure block except for `payment` block, which is based on each payment method (see details below):

|PARAMS|VALUE|DESCRIPTION|EXAMPLE|
|:----|:----|:----|:----|
|**meta** (required)|_object_|An empty object. Partners can use this parameter to provide:|`{}`|
|**meta.model** (required)|_string_|Partner's `model` data. |`retail`|
|**meta.store** (required)|_string_|Partner's `store` data. |`newstore`|
|**meta.platform** (required)|_string_|Partner's `platform` data. |`web`|
|**request** (required)|_object_|A container which requires: ||
|**request.ip** (optional)|_string_|IP address from where the request was sent.|`192.168.14.1`|
|**request.buyer** (required)|_object_|A container which requires: ||
|**request.buyer.locale** (required)|_string_|Buyer's locale.|`pt_BR`|
|**request.buyer.firstName** (required)|_string_|Buyer's first name.|`Fulano`|
|**request.buyer.lastName** (required)|_string_|Buyer's surname.|`de Silva`|
|**request.buyer.email** (required)|_string_|Buyer's email.|`fulano@teste.com.br`|
|**request.buyer.phone** (required)|_string_|Buyer's phone, in format `AABBBBBBBBB`, where `AA` stands for the brazilian phone's region code, and `BBBBBBBBB` stands for the phone number.|`11912345678`|
|**request.buyer.document** (required)|_string_|Buyer's document.|`123.456.789-00`|
|**request.buyer.gender** (required)|_string_|`M` stands for _Male_, and `F`, for _Female_.|`M` or `F`|
|**request.buyer.birthday** (required)|_string_|Buyer's birth date, in format `yyyy-mm-dd`.|`1970-01-15`|
|**request.buyer.meta** (required)|_object_|An empty object.|`{}`|
|**request.buyer.payment** (required)|_object_|An object containing all the required information according to the payment method.||
|**request.items** (required)|_array_|A collection of objects, which may contain at least 1 and a maximum of N to be considered valid. Each object contains:|`[]`|
|**request.items.seat** (required)|_string_|The seat number for a single passenger.|`13`|
|**request.items.passenger** (required)|_object_|An object, which have:|`{}`|
|**request.items.passenger.name** (required)|_string_|Passenger's full name.|`Fulano da Silva`|
|**request.items.passenger.document** (required)|_string_|Passenger's document.|`123.456.789-00`|
|**request.items.passenger.documentType** (required)|_string_|Passenger's document type. It must be a document with the passenger's picture.|`rg`|
|**request.items.scheduleId** (required)|_string_|The `scheduleId` for one of the desired trips (departure or return).|`NDAxNy0tMzkzNS0tMjAxNS0wNS0...`|

 As the `/booking` endpoint, the `/checkout` request support the same 4 valid payment options:

- **Credit Card using the card’s data**
- **Credit Card using MercadoPago tokens**
- **Debit Card**
- **PayPal**

**1) Credit Card using the card’s data**

**PARAMETERS**

The values are the same for the `payment` block, as described in the [`/booking` endpoint](#booking-create-an-order).

**EXAMPLE**

Create an Order with the following data:
- Created from a `store` called _NewWorld_;
- Selected 1 Seat (number _13_) on departure for _Fulano da Silva_ and 1 Seat (number _17_) on return for the same passenger;
- Each item costs R$ 12.35, so the `request.buyer.payment.total` value is _2470_;
- The payment is settled to a single `installment`, using `creditcard`.

**REQUEST (application/json)**

```json
{
    "meta": {
        "model": "Retail",
        "store": "NewWorld",
        "platform": "Web"
    },
    "request": {
        "ip": "192.168.14.1",
        "buyer": {
            "locale": "pt_BR",
            "firstName": "Clickbus",
            "lastName": "Test",
            "email": "test-orders@clickbus.com",
            "phone": "12098765432",
            "document": "176.768.826-13",
            "gender": "M",
            "birthday": "1986-04-18",
            "meta": {},
            "payment": {
                "method": "creditcard",
                "currency": "BRL",
                "total": 2470,
                "installment": "1",
                "meta": {
                    "card": "4111111111111111",
                    "code": "737",
                    "name": "FULANO SILVA",
                    "expiration": "2017-07",
                    "zipcode": "04104080"
                }
            }
        },
        "items": [
            {
                "seat": "13",
                "passenger": {
                    "name": "Fulano da Silva",
                    "document": "12.345.678-9",
                    "documentType": "rg"
                },
                "scheduleId": "NDAxNy0tMzkzNS0tMjAxNS0wNS0yNSAyMDoxMC0tOS0tMDAxMy0tMS0tMS0tMS0tQ09OVi0tNjYuMzY="
            },
            {
                "seat": "17",
                "passenger": {
                    "name": "Fulano da Silva",
                    "document": "12.345.678-9",
                    "documentType": "rg"
                },
                "scheduleId": "MzkzNS0tNDAxNy0tMjAxNS0wNS0yNSAwMzo1MC0tOS0tMDA4Mi0tMS0tMS0tMS0tQ09OVi0tMTA="
            }
        ]
    }
}
```

**RESPONSE (application/json)**

The following Request, with all correct parameters, will return a _201_ Response, with all details from the Order, as the example below.

```json
{
    "meta": {
        "model": "Retail",
        "store": "ClickBus",
        "platform": "Web"
    },
    "content": {
        "id": "1062",
        "status": "order_finalized_successfully",
        "localizer": "5EBP2M",
        "payment": {
            "method": "payment.creditcard",
            "total": "2470",
            "currency": "BRL",
            "status": "order_finalized_successfully",
            "meta": {
                "card": "4111-XXXX-XXXX-1111",
                "code": "XXX",
                "name": "FULANO SILVA",
                "expiration": "XXXX-XX-XX",
                "postbackUrl": "",
                "callbackUrl": ""
            }
        },
        "items": [
            {
                "trip_id": "4321",
                "localizer": "KPFHNB",
                "ticket_code": "6462297",
                "context": "departure",
                "order_item": "1228",
                "serviceClass": "Convencional",
                "departure": {
                    "waypoint": "4017",
                    "schedule": {
                        "date": "2015-02-11",
                        "time": "01:00",
                        "timezone": "America/Sao_Paulo"
                    }
                },
                "arrival": {
                    "waypoint": "3935",
                    "schedule": {
                        "date": "2015-02-11",
                        "time": "03:00",
                        "timezone": "America/Sao_Paulo"
                    }
                },
                "seat": {
                    "name": "13",
                    "price": "12.35",
                    "status": "reserved",
                    "currency": "BRL",
                    "type": {}
                },
                "passenger": {
                    "firstName": "Fulano",
                    "lastName": "da Silva",
                    "document": "123.456.789-00",
                    "meta": {}
                },
                "products": [],
                "subtotal": "12.35"
            },
            {
                "trip_id": "7340",
                "localizer": "ZXSMTM",
                "ticket_code": "5762464",
                "context": "departure",
                "order_item": "1229",
                "serviceClass": "Convencional",
                "departure": {
                    "waypoint": "4017",
                    "schedule": {
                        "date": "2015-02-11",
                        "time": "01:00",
                        "timezone": "America/Sao_Paulo"
                    }
                },
                "arrival": {
                    "waypoint": "3935",
                    "schedule": {
                        "date": "2015-02-11",
                        "time": "03:00",
                        "timezone": "America/Sao_Paulo"
                    }
                },
                "seat": {
                    "name": "17",
                    "price": "12.35",
                    "status": "reserved",
                    "currency": "BRL",
                    "type": {}
                },
                "passenger": {
                    "firstName": "Fulano",
                    "lastName": "da Silva",
                    "document": "123.456.789-00",
                    "meta": {}
                },
                "products": [],
                "subtotal": "12.35"
            }
        ],
        "createdAt": "2015-01-23"
    }
}
```

**2) Credit Card using MercadoPago tokens**

**PARAMETERS**

The values are the same for the `payment` block, as described in the [`/booking` endpoint](#booking-create-an-order).

**EXAMPLE**

Create an Order with the following data:
- Created from a `store` called _NewWorld_;
- Selected 1 Seat (number _13_) on departure for _Fulano da Silva_ and 1 Seat (number _17_) on return for the same passenger;
- Each item costs R$ 12.35, so the `request.buyer.payment.total` value is _2470_;
- The payment is settled to a single `installment`, using `creditcard` through the MercadoPago payment gateway, providing both token and card brand.

**REQUEST (application/json)**

```json
{
    "meta": {
        "model": "Retail",
        "store": "NewWorld",
        "platform": "Web"
    },
    "request": {
        "ip": "192.168.14.1",
        "buyer": {
            "locale": "pt_BR",
            "firstName": "Clickbus",
            "lastName": "Test",
            "email": "test-orders@clickbus.com",
            "phone": "12098765432",
            "document": "176.768.826-13",
            "gender": "M",
            "birthday": "1986-04-18",
            "meta": {},
            "payment": {
                "method": "creditcard",
                "currency": "BRL",
                "total": 2470,
                "installment": "1",
                "meta": {
                    "token": "cd844c9fd6e300c7a235880de3fb6269",
                    "card_brand": "visa",
                    "zipcode": "12345678"
                }
            }
        },
        "items": [
            {
                "seat": "13",
                "passenger": {
                    "name": "Fulano da Silva",
                    "document": "12.345.678-9",
                    "documentType": "rg"
                },
                "scheduleId": "NDAxNy0tMzkzNS0tMjAxNS0wNS0yNSAyMDoxMC0tOS0tMDAxMy0tMS0tMS0tMS0tQ09OVi0tNjYuMzY="
            },
            {
                "seat": "17",
                "passenger": {
                    "name": "Fulano da Silva",
                    "document": "12.345.678-9",
                    "documentType": "rg"
                },
                "scheduleId": "MzkzNS0tNDAxNy0tMjAxNS0wNS0yNSAwMzo1MC0tOS0tMDA4Mi0tMS0tMS0tMS0tQ09OVi0tMTA="
            }
        ]
    }
}
```

**RESPONSE (application/json)**

The following Request, with all correct parameters, will return a _201_ Response, with all details from the Order, as the example below.

```json
{
    "meta": {
        "model": "Retail",
        "store": "ClickBus",
        "platform": "Web"
    },
    "content": {
        "id": "1062",
        "status": "order_finalized_successfully",
        "localizer": "5EBP2M",
        "payment": {
            "method": "payment.creditcard.mercadopago",
            "total": "2470",
            "currency": "BRL",
            "status": "order_finalized_successfully",
            "meta": {
                "postbackUrl": "",
                "callbackUrl": ""
            }
        },
        "items": [
            {
                "trip_id": "4321",
                "localizer": "KPFHNB",
                "ticket_code": "6462297",
                "context": "departure",
                "order_item": "1228",
                "serviceClass": "Convencional",
                "departure": {
                    "waypoint": "4017",
                    "schedule": {
                        "date": "2015-02-11",
                        "time": "01:00",
                        "timezone": "America/Sao_Paulo"
                    }
                },
                "arrival": {
                    "waypoint": "3935",
                    "schedule": {
                        "date": "2015-02-11",
                        "time": "03:00",
                        "timezone": "America/Sao_Paulo"
                    }
                },
                "seat": {
                    "name": "13",
                    "price": "12.35",
                    "status": "reserved",
                    "currency": "BRL",
                    "type": {}
                },
                "passenger": {
                    "firstName": "Fulano",
                    "lastName": "da Silva",
                    "document": "123.456.789-00",
                    "meta": {}
                },
                "products": [],
                "subtotal": "12.35"
            },
            {
                "trip_id": "7340",
                "localizer": "ZXSMTM",
                "ticket_code": "5762464",
                "context": "departure",
                "order_item": "1229",
                "serviceClass": "Convencional",
                "departure": {
                    "waypoint": "4017",
                    "schedule": {
                        "date": "2015-02-11",
                        "time": "01:00",
                        "timezone": "America/Sao_Paulo"
                    }
                },
                "arrival": {
                    "waypoint": "3935",
                    "schedule": {
                        "date": "2015-02-11",
                        "time": "03:00",
                        "timezone": "America/Sao_Paulo"
                    }
                },
                "seat": {
                    "name": "17",
                    "price": "12.35",
                    "status": "reserved",
                    "currency": "BRL",
                    "type": {}
                },
                "passenger": {
                    "firstName": "Fulano",
                    "lastName": "da Silva",
                    "document": "123.456.789-00",
                    "meta": {}
                },
                "products": [],
                "subtotal": "12.35"
            }
        ],
        "createdAt": "2015-01-23"
    }
}
```

**ERRORS**

|CODE|DESCRIPTION|DETAILS|
|:---:|:----|:----|
|**L1**|_Please provide the 'passenger's name._|One of the passenger's `name` is missing from the request.|
|**L2**|_Please provide a value for the passenger's first name._|One of the passenger's `name` is empty.|
|**L3**|_Please provide the 'passenger's document._|One of the passenger's `document` is missing from the request.|
|**L4**|_Please provide a value for the passenger's document._|One of the passenger's `document` is empty.|
|**L5**|_Please provide the 'scheduleId'._|The `scheduleId` for one of the order items is missing from the Request.|
|**L6**|_The given 'scheduleId' is invalid._|The `scheduleId` for one of the order items is invalid or incorrect.|
|**L7**|_Invalid Parameters_|(**Deprecated**: check for **L25**) Missing parameters in your payment data.|
|**L8**|_The expiration data is invalid or incorrect._|The expiration data provided in the card is incorrect or invalid.|
|**L9**|_Please provide the 'installment' for the payment data._|The parameter `installment` is missing from the Request.|
|**L10**|_An unexpected issue happened in your Request. Please contact us for more details._|Troubles while requesting data from the booking engine. Please contact us at contato@clickbus.com.br for support and details.|
|**L12**|_The Server encountered a temporary error and could not complete your request._|An error occurred after sending your Request.|
|**L13**|_Please check you card number._|The card, or any other information provided for the payment form is incorrect.|
|**L14**|_There was a problem with your Order. Please contact us for more details._|Your Order could not be completed. Please contact us at contato@clickbus.com.br for support and details.|
|**L15**|_Checkout Error_|An internal error ocurred at the conclusion of your Request.|
|**L16**|_Application Error_|An error occurred before send the success email of your Request.|
|**L17**|_Application Error_|There was a problem with the communication with the booking engine. Please retry your request.|
|**L23**|_The Order Cart is empty._|No Seats were found in your cart to finish your purchase. Please contact us for more details.|
|**L24**|_The installment value is less than the minimum value supported._|The value based for each installment of your request is lower than the minimum supported value. Please contact us for more details.|
|**L25**|_Inconsistencies were found. Please check your Payment Data._|Some required values for your payment data are missing. Please review your request before proceed.|
|**L26**|_The given credit card brand is not supported by the payment method._|The card brand is not supported by our payment methods. Please contact us or check the [Payments](#payments) resource to verify if the given card brand is declared in the supported list.|
|**L27**|_Checkout Error_|It's required to authorize this purchase with the card issuer.|
|**L28**|_Checkout Error_|The payment was not authorized. We suggest you to check the card information before proceed.|
|**L29**|_Checkout Error_|The payment was not authorized. We suggest you to check the card information before proceed.|
|**L30**|_Checkout Error_|A problem ocurred while authorizing the purchase. Please check the card data or contact us for more details.|
|**L31**|_Checkout Error_|The payment was not authorized. We suggest you to check the card information before proceed.|
|**L32**|_Checkout Error_|The payment could not be processed.|
|**L33**|_Checkout Error_|Please check if the card is ok or if it still requires it's activation before proceed with your payment.|
|**L34**|_Checkout Error_|It was not possible to process the purchase.|
|**L35**|_Checkout Error_|You have already made a purchase with the same value. If you need to pay the same amount again, please, use another card or payment method.|
|**L36**|_Checkout Error_|Your payment was rejected. We recommend you to pay with other payment methods available.|
|**L37**|_Checkout Error_|There is no credit available for this credit card.|
|**L38**|_Checkout Error_|Payments in this installment amount are not processed. Please, choose other installment value.|
|**L39**|_Checkout Error_|You have reached limit of tries. Please, use another card or payment method.|
|**L40**|_Checkout Error_|The payment could not be processed.|
|**L41**|_Checkout Error_|Payment not authorized. Please, check your credit card information.|
|**L42**|_Checkout Error_|The maximum execution time was exceeded. Please check the [Order](#order-details) resource to check the actual status of your Order.|

## Unavailable Seats [/checkout]

As stated at the beginning of this group info, _there are chances that one or more of the desired seats are unavailable._ So, requests to `/checkout` may find Seats previously reserved before your request is received and, if this situation may happen, this endpoint have a proper error message that provide all details that your application need to troubleshoot this issue.


|CODE|DESCRIPTION|DETAILS|
|:---:|:----|:----|
|**L22**|_Unavailable Seat_|One or more Seats received in the request were reserved before your request, or the booking engine could not create reservations for the given Seats.|

The `message` param of this response contains a JSON list with the Seats that were available in your request, in the format as below:

**EXAMPLE**

Selected 1 Seat (number _29_) for _Fulano da Silva_ and 1 Seat for _Beltrano da Silva_ (number _21_), both for the same departure;
    
**REQUEST (application/json)**

```json
{
    "meta": {
        "model": "Retail",
        "store": "NewWorld",
        "platform": "Web"
    },
    "request": {
        "ip": "192.168.14.1",
        "buyer": {
            "locale": "pt_BR",
            "firstName": "Clickbus",
            "lastName": "Test",
            "email": "test-orders@clickbus.com",
            "phone": "12098765432",
            "document": "176.768.826-13",
            "gender": "M",
            "birthday": "1986-04-18",
            "meta": {},
            "payment": {
                "method": "creditcard",
                "currency": "BRL",
                "total": 2470,
                "installment": "1",
                "meta": {
                    "card": "4111111111111111",
                    "code": "737",
                    "name": "FULANO SILVA",
                    "expiration": "2017-07",
                    "zipcode": "04104080"
                }
            }
        },
        "items": [
            {
                "seat": "29",
                "passenger": {
                    "name": "Fulano da Silva",
                    "document": "12.345.678-9",
                    "documentType": "rg"
                },
                "scheduleId": "MzA5Ny0tMzUzNS0tMjAxNS0wNi0yNSAwNzo1NS0tMTUtLTE4MTUtLTEtLTEtLTEtLUNPTUVSQ0lBTC0tMi44NQ=="
            },
            {
                "seat": "21",
                "passenger": {
                    "name": "Beltrano da Silva",
                    "document": "98.765.432-1",
                    "documentType": "rg"
                },
                "scheduleId": "MzA5Ny0tMzUzNS0tMjAxNS0wNi0yNSAwNzo1NS0tMTUtLTE4MTUtLTEtLTEtLTEtLUNPTUVSQ0lBTC0tMi44NQ=="
            }
        ]
    }
}
```

**RESPONSE (application/json)**

For this request, only one seat (for _Fulano da Silva_) was available. So the response will describe that only that Seat (_29_) was available, along with it's `scheduleId`, to identify for which trip the Seats were unavailable, as below:

```json
{
    "error": [
        {
            "code": "L22",
            "type": "Unavailable Seat",
            "message": "{\"Successful seats:\":[{\"seatNumber\":\"29\",\"scheduleId\":\"MzA5Ny0tMzUzNS0tMjAxNS0wNi0yNSAwNzo1NS0tMTUtLTE4MTUtLTEtLTEtLTEtLUNPTUVSQ0lBTC0tMi44NQ==\"}]}"
        }
    ]
}
```


# Group Order Details

## Authentication Required [/order]

In order to access the resources for this endpoint, you have to provide a Public API Key for each Request. This key shall be declared in the headers section of your Request, as follow:

    X-API-KEY: dbb648c2d6f4df1b7422b56265947f261cd80e27

This value is generated for each partner. Once you receive your API Key, please do not share or publish this value. Please contact contato@clickbus.com.br for more information about your credentials.

**OBS:** For implementation and test purposes, use the following value: `dbb648c2d6f4df1b7422b56265947f261cd80e27`.

---------------

## Get Order List [/order]

The resource `/order` return a list of Orders with a limit of 50 results per page, where each object provide the details for a single Order.

### Get Order List [GET]

**PARAMETERS**

|PARAMS|VALUE|DESCRIPTION|EXAMPLE|
|:----|:----|:----|:----|
|**page** (optional)|_integer_|Use this parameter to navigate through the result pages.|`2`|

A successful request will return a _200_ Response, with the structure as described below:

- `items`, which is a collection of Orders. Each Order contains:
    - `uuid` is the Order ID;
    - `localizer` is the Order `localizer` property, required to **Cancel an Order**;
    - `buyer_firstname`, `buyer_lastname`, `buyer_email` and `buyer_phone` are related to the Order's Buyer;
    - `payment_method` is the Payment Method applied on this Order;
    - `total` stands for the Order total value;
    - `status` is the Order actual status, which can be one of the following:
        - `order_finalized_successfully` it's when the Order was successfuly accepted;
        - `order_canceled` it's when the Order was successfuly canceled;
        - `order_pending` it's when the Order is waiting for a response from the asynchronous payment method.
    - `created_at` stands for the date and time that the Order was created;
    - `order_items`, which is a collection of Items related to this Order:
        - `ticket_code` is the value provided from the Booking Engine, related to the ticket created for this Order;
        - `seat_reference` is the Seat number;
        - `seat_price` is the Seat monetary value;
        - `passenger_firstname`, `passenger_lastname` and `passenger_document` are related to the Passenger;
        - `departure_datetime` is the date and time selected for the departure;
        - `timezone` stands for the timezone from the server;
        - `origin_station_name` is the departure point, related in the `from` parameter used in the **Trips** Request for this Order;
        - `destination_station_name` is the destination point, related in the `to` parameter used in the **Trips** Request for this Order;
        - `subtotal` is the monetary value related to this Item.

**EXAMPLE**

Get a list of Orders, using a proper API Public Key:

**REQUEST**

```
api/v1/order
```

**RESPONSE (application/json)**

```json
{
    "meta": "",
    "items": [
        {
            "uuid": 88,
            "localizer": "YDSKRH",
            "buyer_firstname": "Peter",
            "buyer_lastname": "Nile",
            "buyer_email": "peter@email.com.br",
            "buyer_gender": "",
            "buyer_birthday": "",
            "buyer_document": "",
            "buyer_document_type": "",
            "buyer_phone": "11983864125",
            "payment_method": "payment.creditcard",
            "total": 23.59,
            "status": "order_finalized_successfully",
            "created_at": "2015-03-02 17:48:58",
            "updated_at": "",
            "order_items": [
                {
                    "localizer": "",
                    "ticket_code": "305913",
                    "seat_reference": "09",
                    "seat_price": 21.25,
                    "passenger_firstname": "John",
                    "passenger_lastname": "Doe",
                    "passenger_document": "123.456.789-00",
                    "passenger_document_type": "",
                    "passenger_email": "",
                    "passenger_gender": "",
                    "passenger_birthday": "",
                    "departure_datetime": "2015-03-25 06:30:00",
                    "timezone": "America/Sao_Paulo",
                    "origin_station_name": "Sao Paulo, SP - Tiete",
                    "destination_station_name": "Santos, SP",
                    "origin_city_name": "Sao Paulo, SP - Tiete",
                    "destination_city_name": "Santos, SP",
                    "subtotal": 21.25,
                    "created_at": "2015-03-02 17:48:58",
                    "updated_at": ""
                }
            ]
        },
        {...}
    ]
}
```

**EXAMPLE**

Incorrect request (permission denied):

**REQUEST**

```
api/v1/order
``` 

**RESPONSE (application/json)**
        
Status code: _401_.

```json
{
    "error": [
        {
            "code": "D1",
            "type": "Unauthorized",
            "message": "Unauthorized access."
        }
    ]
}
```

**ERRORS**

|CODE|DESCRIPTION|DETAILS|
|:---:|:----|:----|
|**D1**|_Unauthorized access._|You are not authorized to view the contents of this resource. Please use a valid API Public Key.|
|**D2**|_The Application encountered a temporary error and could not complete your request._|An error occurred while proccessing your Request before it's sent to the booking engine.|
|**D3**|_The Server encountered a temporary error and could not complete your request._|An error occurred after sending your Request to the booking engine.|

## Get Order [/order/{id}]

The resource `/order/{id}` provides all details of a single Order, based on the given ID.

### Get Order [GET]

**PARAMETERS**

|PARAMS|VALUE|DESCRIPTION|EXAMPLE|
|:----|:----|:----|:----|
|**id** (required)|_int_|A valid ID for any created Order.|`10`|

Using a valid `id`, and providing a valid and authentic API Key, the request will return a _200_ Response, displaying an Order distributed in the following structure:

- `content`, which contains:
    - `uuid` is the Order ID;
    - `localizer` is the Order `localizer` property, required to **Cancel an Order**;
    - `buyer_firstname`, `buyer_lastname`, `buyer_email` and `buyer_phone` are related to the Order’s Buyer;
    - `payment_method` is the Payment Method applied on this Order;
    - `total` stands for the Order total value;
    - `status` is the Order actual status, which can be one of the following:
        - `order_finalized_successfully` it's when the Order was successfuly accepted;
        - `order_canceled` it's when the Order was successfuly canceled;
        - `order_pending` it's when the Order is waiting for a response from the asynchronous payment method.
    - `created_at` stands for the date and time that the Order was created;
    - `order_items`, which is a collection of Items related to this Order:
        - `ticket_code` is the value provided from the Booking Engine, related to the ticket created for this Order;
        - `seat_reference` is the Seat number;
        - `seat_price` is the Seat monetary value;
        - `passenger_firstname`, `passenger_lastname` and `passenger_document` are related to the Passenger;
        - `departure_datetime` is the date and time selected for the departure;
        - `timezone` stands for the timezone from the server;
        - `origin_station_name` is the departure point, related in the from parameter used in the Trips Request for this Order;
        - `destination_station_name` is the destination point, related in the to parameter used in the Trips Request for this Order;
        - `origin_city_name` is the city's name related to the origin point;
        - `destination_city_name` is the city's name related to the destination point;
        - `subtotal` is the monetary value related to this Item.

**EXAMPLE**

Get the results from an Order with an ID `88`, related with an existing Order.

**REQUEST**

```
api/v1/order/88
```

**RESPONSE (application/json)**

```json
{
    "meta": "",
    "content": {
        "uuid": 88,
        "localizer": "YDSKRH",
        "buyer_firstname": "Peter",
        "buyer_lastname": "Silva",
        "buyer_email": "peter@email.com.br",
        "buyer_gender": "",
        "buyer_birthday": "",
        "buyer_document": "",
        "buyer_document_type": "",
        "buyer_phone": "11983864125",
        "payment_method": "payment.creditcard",
        "total": 23.59,
        "status": "order_finalized_successfully",
        "created_at": "2015-03-02 17:48:58",
        "updated_at": "",
        "order_items": [
            {
                "localizer": "",
                "ticket_code": "305913",
                "seat_reference": "09",
                "seat_price": 21.25,
                "passenger_firstname": "Jhon",
                "passenger_lastname": "Doe",
                "passenger_document": "123.456.789-00",
                "passenger_document_type": "",
                "passenger_email": "",
                "passenger_gender": "",
                "passenger_birthday": "",
                "departure_datetime": "2015-03-25 06:30:00",
                "timezone": "America/Sao_Paulo",
                "origin_station_name": "Sao Paulo - Tiete, SP",
                "destination_station_name": "Santos, SP",
                "origin_city_name": "Sao Paulo - Tiete, SP",
                "destination_city_name": "Santos, SP",
                "subtotal": 21.25,
                "created_at": "2015-03-02 17:48:58",
                "updated_at": ""
            }
        ]
    }
}
```

**EXAMPLE**

Incorrect request (permission denied).

**REQUEST**

```
api/v1/order/100
```

**RESPONSE (application/json)**

Status code: _401_.

```json
{
    "error":[
        {
            "code":"D1",
            "type":"Unauthorized",
            "message":"Unauthorized access."
        }
    ]
}
```

**EXAMPLE**

Incorrect request, using `89` as the ID value, which relates to no Order (Order not found).

**REQUEST**

```
api/v1/order/89
``` 

**RESPONSE (application/json)**

Status code: _404_.

```json
{
    "error":[
        {
            "code":"D5",
            "type":"Not Found",
            "message":"Item not found."
        }
    ]
}
```

**ERRORS**

|CODE|DESCRIPTION|DETAILS|
|:---:|:----|:----|
|**D1**|_Unauthorized access._|You are not authorized to view the contents of this resource. Please use a valid API Public Key.|
|**D4**|_The given Order ID is invalid._|The value provided for `id` is invalid or incorrect.|
|**D5**|_Item not found._|The requested Order could not be found.|

## Order Status List [/order]

Below is a reference to consider when checking this service, to understand the status described in the `content.status` parameter. Any other status found in this service must be considered as a pending step, which will evolve to other scenarios before the Order is concluded.

|STATUS|DESCRIPTION|
|:----|:----|
|`order_canceled`|Order canceled.|
|`order_booking_engine_confirmation_refund_successful`|Ticket canceled with the booking engine / bus company after payment failure.|
|`clarify_booking_engine_confirmation_refund_failure`|Ticket cancelation failed after payment failure.|
|`order_finalized_successfully`|Order finalized OK.|
|`payment_confirmed`|Payment was successfuly confirmed.|
