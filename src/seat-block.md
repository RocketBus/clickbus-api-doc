# Group Seat Block

## Create a block in a Seat [/seat-block]

This request creates a block in a Seat, which indicates that this Seat is now unavailable for other passengers.

**NOTES:**

1. This block may last ~10 minutes. After that, the seat is available again;
2. Every Request's header shall declare the key `PHPSESSID`, along with it's value, Session's ID (obtained on **Trip Details**), as follow:
    > Cookie: PHPSESSID=g1898g0ogdlh9f3mfra2hl3el3
3. You can create up to 5 Seat blocks per Order;
4. According to Mexican laws, no children is allowed to travel unaccompanied by and adult. In order to follow this requirement, every request for this resource to create the first **Seat Block** for any Order can only use `adult`, `elderly` or `teacher` as valid `seat_type`. In order to follow this rule, if you try to select a `children` as the first **Seat Block**, you may receive a _400_ Response with the following message:
    ```json
    {
        "message":"adult_first"
    }
    ```
   After you've created a **Seat Block** for at least one of these three `seat_type` then you can proceed to create a **Seat Block** using the `children` `seat_type`.

**WARNING:**
    > In order to block return-trip seats (priorly obtained from a call to `/trips` using `return` parameter), you must first invoke your call to `/trip` for the first `scheduleId` then block all the seats for this specific ´scheduleId´ calling `/seat-block`. Secondly you need to call again `/trip` with the second `scheduleId`, and block all the seats for this `scheduleId` calling `/seat-block`.

### Create a block in a Seat [PUT]

**Parameters**

|PARAMS|VALUE|DESCRIPTION|EXAMPLE|
|:----|:----|:----|:----|
|**meta** (required)|_object_|An empty object. Partners can use this parameter to provide their own `meta` information: `store`, `platform` and `model`. |`{}`|
|**request** (required)|_object_|A container which requires: ||
|**request.from** (required)|_string_|A destination from where a trip starts. Same value used on **Trips**.|`quertaro-qro`|
|**request.to** (required)|_string_|A destination to where a trip ends. Same value used on **Trips**.|`guadalajara-jal`|
|**request.seat** (required)|_object_|A container with:||
|**request.seat.name** (required)|_string_|The seat’s `name`, obtained on **Trip Details**.|`01`|
|**request.seat.type** (required)|_string_|One of the valid seat `type`, obtained on **Trip Details**.|`adult`|
|**request.passenger** (required)|_object_|A container which contains multiple items, one for each passenger: ||
|**request.passenger.name** (required)|_string_|Passenger's name.|`Fulano da Silva`|
|**request.passenger.document** (required)|_string_|Passenger's document.|`123.456.789-00`|
|**request.passenger.documentType** (required)|_string_|Type of the passenger's `document`.|`id`|
|**request.passenger.gender** (required)|_string_|`M` stands for _Male_, and `F`, for _Female_.|`M` or `F`|
|**request.schedule** (required)|_object_|A container which requires: ||
|**request.schedule.id** (required)|_string_|Schedule's ID, obtained from **Trip Details**.|`e4479611acd114b958871fe4cb8130af`|
|**request.schedule.date** (required)|_string_|Any valid date, in format `yyyy-mm-dd`. Use the same value applied on **Trips**.|`2015-01-27`|
|**request.schedule.time** (required)|_string_|Any valid time between `00:00` and `23:59`, in format `HH:ii`.|`10:30`|
|**request.schedule.timezone** (required)|_string_|Timezone information, based on actual country.|`America/Mexico_City`|
|**request.sessionId** (required)|_string_|Session's ID, obtained from **Trip Details**.|`dnlfm8aecg2omtjaang62fvla5`|

**Request**

- Created a block for a Seat, named _01_, for an _Adult_, on a travel from _Querétaro, QRO. - Central del Norte - Ciudad de México_ in _25th Jul 2015_, with all params correct:

```json
{
    "meta": {},
    "request": {
        "from": "queretaro-qro",
        "to": "central-del-norte-ciudad-de-mexico-df",
        "seat": {
            "name": "8",
            "type": "seat_type.adult"
        },
        "passenger": {
            "name": "Teste de Passageiro",
            "document": "123.456.789-00",
            "documentType": "id",
            "gender": "M"
        },
        "schedule": {
            "id": "0ada399ed49596fe6c56ff421ae7848f",
            "date": "2015-07-25",
            "time": "0",
            "timezone": "America/Mexico_City"
        },
        "sessionId": "b1vd4mhonggecviranmsa164k5"
    }
}
```

**Response**

This request, with all correct params and being executed before the Seat block's life time ends, will return a Response _200_, with the following Response body:

```json
{
   "meta":{
   },
   "items":[
      {
         "seat":"8",
         "schedule":{
            "id":"0ada399ed49596fe6c56ff421ae7848f",
            "date":"",
            "time":"",
            "timezone":"America/Mexico_City"
         },
         "status":"blocked",
         "sessionId":"b1vd4mhonggecviranmsa164k5",
         "expireAt":"2015-07-21 12:35"
      }
   ]
}
```

**NOTE:** If, while a Request to create a Seat Block, the selected Seat is already blocked by other Request executed previously, you may receive the following _400_ Response:

```json
{
    "message":"Busy seat"
}
```

## Remove a block in a Seat [/seat-block]

As opposed to the Create proccess, the Remove will delete a block created on a Seat, which automatically turns a Seat available for all passengers.

**NOTE:**

- Every Request's header shall declare the key `PHPSESSID`, along with it's value, Session's ID (obtained on **Session**), as follow:
    > Cookie: PHPSESSID=g1898g0ogdlh9f3mfra2hl3el3

### Remove a block in a Seat [DELETE]

**Parameters**

|PARAMS|VALUE|DESCRIPTION|EXAMPLE|
|:----|:----|:----|:----|
|**meta** (required)|_object_|An empty object. Partners can use this parameter to provide their own `meta` information: `store`, `platform` and `model`. |`{}`|
|**request** (required)|_object_|A container which requires: ||
|**request.seat** (required)|_string_|The seat’s `name`, obtained on **Trip Details**.|`07`|
|**request.schedule** (required)|_object_|A container which requires: ||
|**request.schedule.id** (required)|_string_|Schedule's ID, obtained from **Trip Details**.|`e4479611acd114b958871fe4cb8130af`|
|**request.sessionId** (required)|_string_|Session's ID, obtained from **Trip Details**.|`dnlfm8aecg2omtjaang62fvla5`|

**Request**

- Removing the Seat block, named _07_, on a travel from _Querétaro, QRO. - Mexico_ to _Guadalajara, JAL. - Mexico_ in _11th Feb 2015_, with all params correct:

    ```json
    {
        "meta": {},
        "request": {
            "seat": "07",
            "schedule": {
                "id": "e4479611acd114b958871fe4cb8130af"
            },
            "sessionId": "dnlfm8aecg2omtjaang62fvla5"
        }
    }
    ```

**Response**

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

**NOTE** If the `sessionId` or the lifetime of the Seat block have already expired, you may obtain a _400_ Response with the following Response body:

```json
{
    "message": "Invalid Parameters"
}
```
