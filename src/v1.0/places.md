## **Groups**

# Group Places

## Get All Places [/places]

The resource `/places` retrieves all the available Places, where each Place can be used as a destination point to our travels and routes.

One of the most important values on this resource is the `slug`, which contains the name to use when referencing to a Place in a **Trips** request.

### Get All Places [GET]

**Parameters**

_None_

**Response**

The given request returns a Response _200_, with a list in JSON format filled with all Places:

**Example**

```json
{
   "meta":"",
   "items":[
    {
      "id": 17466,
      "station_id": 17466,
      "slug": "abilene-tx",
      "locale": "es-MX",
      "name": "Abilene, TX",
      "terminal_name": "",
      "terminal_type": "Terminal",
      "is_primary": "true",
      "is_group": false,
      "in_group": false,
      "created_at": "2017-03-06 17:21:00",
      "updated_at": "2017-03-06 17:21:00",
      "city": "Abilene",
      "place": {
        "id": 17466,
        "place_id": 17466,
        "locale": "es-MX",
        "name": "Abilene, TX",
        "created_at": "2017-03-06 17:21:00",
        "updated_at": "2017-03-06 17:21:00",
        "latitude": null,
        "longitude": null,
        "state": {
          "code": "TX (EUA)",
          "name": "Texas"
        }
      }
    },
    {
      "id": 16950,
      "station_id": 16950,
      "slug": "acambaro-gto",
      "locale": "es-MX",
      "name": "Acambaro, Gto",
      "terminal_name": "",
      "terminal_type": "Terminal",
      "is_primary": "true",
      "is_group": false,
      "in_group": false,
      "created_at": "2017-02-21 17:25:00",
      "updated_at": "2017-02-21 17:25:00",
      "city": "Acambaro",
      "place": {
        "id": 16950,
        "place_id": 16950,
        "locale": "es-MX",
        "name": "Acambaro, Gto",
        "created_at": "2017-02-21 17:25:00",
        "updated_at": "2017-02-21 17:25:00",
        "latitude": null,
        "longitude": null,
        "state": {
          "code": "GTO",
          "name": "Guanajuato"
        }
      }
    },
      {...}
   ]
}
 ```

## Prepare search for asyncronous calls  [/search-prepare]

The resource `/search-prepare` returns a list of all the possible combinations of booking engines and pairs of origins-destinations serving a given route. This is specially useful to execute asyncronous calls to each booking engine in order to speed up the search results. It is also the only way available to get all the combinations of origins and destinations for grouped places.

### Prepared the search [GET]

**PARAMETERS**

|PARAMS|VALUE|DESCRIPTION|EXAMPLE|
|:----|:----|:----|:----|
|**from**|_string_|This is the place slug for the desired origin. It can be either a grouped or individual place slug.|`ixtapa-gro`|
|**to**|_string_|This is the place slug for the desired destination. It can be either a grouped or individual place slug.|`zihuatanejo-gro`|
|**isReturn** (optional)|_boolean_|Whether you are looking for a round or single way trip. The default value is false|`true`|

**RESPONSE**

A successful request will return a _200_ Response, with the structure as described below:

- `origin`, which is an array of results containing a combination of origin, destination and booking engine:
    - `originPlace` a single place collection of values regarding the place of origin:
        - `id` ClickBus internal placeId
        - `original_name` a description name of the place of origin
        - `slug` a slug (an easily read name by computers) for the place of origin
    - `destinationPlace` a single place collection of values regarding the place of destination:
        - `id` ClickBus internal placeId
        - `original_name` a description name of the place of destination
        - `slug` a slug (an easily read name by computers) for the place of destination
    - `bookingEngine` a collection of values regading the booking engine
        - `id` ClickBus internal booking engine id
        - `uuid` a unique identifier used for calling the booking engine to filter out the results in the /trips results
        - `name` the actual name of the booking engine
- `destination`, an array of results containin a combination of origin, destination and booking engine for the place of destination. The body of this value is contructed in the same way as origin's.


**Examples**

- Get a list of combinations to prepare an asyncronous call:

    - URL:
        ```
        api/v1/search-prepare?from=ixtapa-gro&to=zihuatanejo-gro&isReturn=true
        ```
    - Response:
        ```json
        {
          "origin": [
            {
              "originPlace": {
                "id": 15385,
                "original_name": "Central de autobuses, Ixtapa, GRO",
                "slug": "ixtapa-gro"
              },
              "destinationPlace": {
                "id": 5112,
                "original_name": "Terminal, Zihuatanejo, GRO",
                "slug": "zihuatanejo-gro"
              },
              "bookingEngine": {
                "id": 5,
                "uuid": "847685145545385233326f3.40428976",
                "name": "Autovias"
              }
            },
            {
              "originPlace": {
                "id": 15385,
                "original_name": "Central de autobuses, Ixtapa, GRO",
                "slug": "ixtapa-gro"
              },
              "destinationPlace": {
                "id": 5112,
                "original_name": "Terminal, Zihuatanejo, GRO",
                "slug": "zihuatanejo-gro"
              },
              "bookingEngine": {
                "id": 9,
                "uuid": "603884687547f59f4e1a1b4.29639698",
                "name": "Costaline"
              }
            },
            {
              "originPlace": {
                "id": 15385,
                "original_name": "Central de autobuses, Ixtapa, GRO",
                "slug": "ixtapa-gro"
              },
              "destinationPlace": {
                "id": 5112,
                "original_name": "Terminal, Zihuatanejo, GRO",
                "slug": "zihuatanejo-gro"
              },
              "bookingEngine": {
                "id": 12,
                "uuid": "c8681642e10bb8bd9a4982a604177897",
                "name": "Tap"
              }
            },
            {
              "originPlace": {
                "id": 15385,
                "original_name": "Central de autobuses, Ixtapa, GRO",
                "slug": "ixtapa-gro"
              },
              "destinationPlace": {
                "id": 5112,
                "original_name": "Terminal, Zihuatanejo, GRO",
                "slug": "zihuatanejo-gro"
              },
              "bookingEngine": {
                "id": 2,
                "uuid": "490779718545384f2cdbba9.36799433",
                "name": "GFA"
              }
            }
          ],
          "destination": [
            {
              "originPlace": {
                "id": 5112,
                "original_name": "Terminal, Zihuatanejo, GRO",
                "slug": "zihuatanejo-gro"
              },
              "destinationPlace": {
                "id": 15385,
                "original_name": "Central de autobuses, Ixtapa, GRO",
                "slug": "ixtapa-gro"
              },
              "bookingEngine": {
                "id": 5,
                "uuid": "847685145545385233326f3.40428976",
                "name": "Autovias"
              }
            },
            {
              "originPlace": {
                "id": 5112,
                "original_name": "Terminal, Zihuatanejo, GRO",
                "slug": "zihuatanejo-gro"
              },
              "destinationPlace": {
                "id": 15385,
                "original_name": "Central de autobuses, Ixtapa, GRO",
                "slug": "ixtapa-gro"
              },
              "bookingEngine": {
                "id": 9,
                "uuid": "603884687547f59f4e1a1b4.29639698",
                "name": "Costaline"
              }
            },
            {
              "originPlace": {
                "id": 5112,
                "original_name": "Terminal, Zihuatanejo, GRO",
                "slug": "zihuatanejo-gro"
              },
              "destinationPlace": {
                "id": 15385,
                "original_name": "Central de autobuses, Ixtapa, GRO",
                "slug": "ixtapa-gro"
              },
              "bookingEngine": {
                "id": 12,
                "uuid": "c8681642e10bb8bd9a4982a604177897",
                "name": "Tap"
              }
            },
            {
              "originPlace": {
                "id": 5112,
                "original_name": "Terminal, Zihuatanejo, GRO",
                "slug": "zihuatanejo-gro"
              },
              "destinationPlace": {
                "id": 15385,
                "original_name": "Central de autobuses, Ixtapa, GRO",
                "slug": "ixtapa-gro"
              },
              "bookingEngine": {
                "id": 2,
                "uuid": "490779718545384f2cdbba9.36799433",
                "name": "GFA"
              }
            }
          ]
        }
        ```
**Errors**

|CODE|DESCRIPTION|DETAILS|
|:---:|:----|:----|
|**None**|_Apliction Error_|It does not exist a detailed error message right now, most probable cause of this error is a missing or malformed origin or destination slug.|