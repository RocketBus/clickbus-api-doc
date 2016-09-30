# Group Booking

## Create an Order [/booking]

When you have selected all the Seats, then you may proceed to create an Order, which will start the payment process.

**NOTES:**

- Please keep in mind that you need to provide in your header the `PHPSESSID` key with the Session's ID in the Cookie, as below:
    > Cookie: PHPSESSID=g1898g0ogdlh9f3mfra2hl3el3
- We are using Conekta payment service, please read the documentation to know more about how to integrate conekta with your application: https://www.conekta.io/es/docs/tutoriales/pagos-con-tarjeta & https://www.conekta.io/es/docs/referencias/pruebas#cards
- Conekta token: https://www.conekta.io/es/docs/tutoriales/pagos-con-tarjeta


### Create an Order [POST]

To create an Order, the request's body requires a range of data, which, for a better understanding, we will divide in the following blocks below:

- **meta**, which contains the params `model`, `store` and `platform` for each Partner;
- **request**, which contains:
    - **request.buyer** contains all required information about the Buyer;
        - **request.buyer.payment** contains all the Buyer's payment data;
    - **request.orderItems** contains all the Seats, along with their information, added to the Order.

**Parameters**

|PARAMS|VALUE|DESCRIPTION|EXAMPLE|
|:----|:----|:----|:----|
|**meta** (required)|_object_|An empty object. Partners can use this parameter to provide:|`{}`|
|**meta.model** (required)|_string_|Partner's `model` data. |`retail`|
|**meta.store** (required)|_string_|Partner's `store` data. |`newstore`|
|**meta.platform** (required)|_string_|Partner's `platform` data. |`web`|
|**request** (required)|_object_|A container which requires: ||
|**request.sessionId** (required)|_string_|Session's ID, obtained from **Trip Details**.|`dnlfm8aecg2omtjaang62fvla5`|
|**request.buyer** (required)|_object_|A container which requires: ||
|**request.buyer.locale** (required)|_string_|Buyer's locale.|`es_MX`|
|**request.buyer.firstName** (required)|_string_|Buyer's first name.|`Fulano`|
|**request.buyer.lastName** (required)|_string_|Buyer's surname.|`de Silva`|
|**request.buyer.cc_id_number** (required)|_string_|Buyer's document.|`123123123`|
|**request.buyer.email** (required)|_string_|Buyer's email.|`fulano@teste.com.br`|
|**request.buyer.phone** (required)|_string_|Buyer's phone, in format `(AAA)-BBB-BBBB`, where `AAA` stands for the brazilian phone's region code, and `BBB-BBBB` stands for the phone number.|`(011)-232-3333`|
|**request.buyer.terms** (required)|_string_|Buyer's response to the _Therms and Conditions_ acceptance.|`1` stands for _agreed_, `0` stands for _disagreed_|
|**request.buyer.meta** (required)|_object_|An empty object.|`{}`|
|**request.buyer.payment** (required)|_object_|An object containing all the required information according to the payment method.||
|**request.buyer.payment.method** (required)|_string_|Payment type: `card`.|`card`|
|**request.buyer.payment.currency** (required)|_string_|Payment currency.|`TRL`|
|**request.buyer.payment.total** (required)|_int_|Sum of the values of all items in the Order. The first two digits from right to left represent the decimal part of the value. So, for instance, `1400` means `14.00`, and `6050` means `60.50`.|`1400`|
|**request.buyer.payment.installment** (required)|_int_|Indicates on how many installments the payment is settled.|`1`|
|**request.buyer.payment.meta** (required)|_object_|An object which requires the following data:||
|**request.buyer.payment.meta.token** (required)|_object_|Conekta token|`tok_test_visa_4242`|
|**request.buyer.payment.meta.referring_campaign** (optional)|_string_|The campaign `(campaign_free_pass)`.|`campaign_free_pass`|
|**request.buyer.payment.meta.referring_source** (optional)|_string_|The source .|`sem or direct or googleoe bing`|
|**request.buyer.payment.meta.referrer** (optional)|_string_|The referrer  .|`http://google.com`|
|**request.buyer.payment.meta.channel** (optional)|_string_|The channel .|`webapp|mobile|web`|
|**request.orderItems** (required)|_object_|A collection of objects, which may contain at least 1 and a maximum of N to be considered valid. Each object contains:||
|**request.orderItems.seatReservation** (required)|_string_|Schedule's ID, obtained in the **Seat** process.|`NDAxNy0tMzkzNS0tMjAxNS0...`|
|**request.orderItems.passenger** (required)|_object_|A container, which have:||
|**request.orderItems.passenger.firstName** (required)|_string_|Passenger's first name.|`Beltrano`|
|**request.orderItems.passenger.lastName** (required)|_string_|Passenger's surname.|`da Silva`|
|**request.orderItems.passenger.email** (required)|_string_|Passenger's email.|`beltrano@teste.com.br`|
|**request.orderItems.passenger.document** (required)|_string_|Passenger's document.|`11111111111`|
|**request.orderItems.passenger.gender** (required)|_string_|`M` stands for _Male_, and `F`, for _Female_.|`M` or `F`|
|**request.orderItems.passenger.seat** (required)|_string_|`seat` name, obtained on **Seat** proccess.|`01`|
|**request.orderItems.passenger.meta** (required)|_object_|An empty object.|`{}`|

**Request - Example**

- Create an Order with the following data:
    - Created from a `store` called _NewWorld_;
    - Selected 1 Seat for _Fulano da Silva_;
    - Each item costs R$ 12.35, so the `request.buyer.payment.total` value is _1235_.

        ```json
        {
            "meta": {
                "store": "newworld",
                "platform": "web",
                "model": "retail"
            },
            "request": {
                "sessionId": "njivqofna5umqu6k3cla588462",
                "buyer": {
                    "locale": "es_MX",
                    "firstName": "Beltrano",
                    "lastName": "Silva",
                    "cc_id_number": "123123123",
                    "email": "teste@teste.com",
                    "phone": "(011)-232-3333",
                    "terms": "1",
                    "meta": {},
                    "payment": {
                        "method": "card",
                        "currency": "TRL",
                        "total": 1000,
                        "installment": "1",
                        "meta": {
                            "token": "tok_test_visa_4242",
                            "referring_campaign":"agua",
            					 "referring_source":"any",
			        			 "referrer" : "http://anything.com",
            					 "channel" : "mobile"
                        }
                    }
                },
                "orderItems": [{
                    "seatReservation": "e9f7adff6cd8eeaf8734615c97317386",
                    "passenger": {
                        "firstName": "Teste",
                        "lastName": "Teste",
                        "email": "dev@clickbus.com.br",
                        "document": "11111111111",
                        "gender": "M",
                        "seat": "1",
                        "meta": {}
                    }
                }]
            }
        }
        ```

**Response**

The following Request, with all correct parameters, will return a _201_ Response, with all details from the Order, as the example below.

```json
{
    "meta": {
        "model": "corporate",
        "store": "clickbus",
        "platform": "Web"
    },
    "content": {
        "id": "1062",
        "status": "order_finalized_successfully",
        "localizer": "5EBP2M",
        "uuid": "",
        "payment": {
            "method": "payment.creditcard",
            "total": "6.3",
            "currency": "MXN",
            "status": "order_finalized_successfully",
            "meta": {
                "token": "tok_test_visa_4242"
            }
        },
        "items": [{
            "trip_id": "4321",
            "localizer": "KPFHNB",
            "context": "departure",
            "order_item": "1228",
            "serviceClass": "Convencional",
            "departure": {
                "waypoint": "4017",
                "schedule": {
                    "id": "",
                    "date": "2015-02-11",
                    "time": "01:00",
                    "timezone": "America/Mexico_City"
                }
            },
            "arrival": {
                "waypoint": "3935",
                "schedule": {
                    "id": "",
                    "date": "2015-02-11",
                    "time": "03:00",
                    "timezone": "America/Mexico_City"
                }
            },
            "seat": {
                "id": "42",
                "name": "42",
                "price": "6.30",
                "status": "reserved",
                "currency": "MXN",
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

## Credit Card Rejection [/booking]

If, for any circunstances listed above, the Request detects any kind of problem related to the given credit card, as above:

- The maximum credit limit was reached;
- The credit, for any reason, is blocked;
- There is an error with any of the credit card's data. 

If this happens, then the API will return a _400_ Response with the following content:

```json
{
    "message": "Credit card was rejected.",
    "payment_code": "payment_rejected"
}
```