#LBR-569 - New docs for Brazil API

##Formats

###API Reference
List all endpoints and their HTTP methods.

Examples:

- [Twitter REST docs](https://dev.twitter.com/rest/public)
- [Telegram API endpoints](https://core.telegram.org/methods)
- [Facebook endpoints references](https://developers.facebook.com/docs/graph-api/reference/v2.2/)

###Sample Code
Create scenarios and explain them with code samples ("How to do X").

Examples:

- [Pushbullet HTTP API docs](https://docs.pushbullet.com/http/)
- [MailChimp examples](https://apidocs.mailchimp.com/api/example-code/)
- [Mandrill docs](https://mandrillapp.com/api/docs/)

###Guides or Tutorials
Like a blog post sequence. Explanations flow like detailed posts.

Examples:

- [SoundCloud API](https://developers.soundcloud.com/docs/api/guide)
- [Netflix API](http://api-portal.anypoint.mulesoft.com/netflix/api/netflix-rest-api)


###Structure:

- Define each endpoint;
    - List of all endpoints/methods;
- Explore each method;
    - Tests for every method;
- Ilustrate all contents provided;
    - Use cases (for samples)

###Contents:

####Endpoints (and it's methods):

- Search
    - Get Available Trips (GET `/search`)
- Session
    - Get Session (GET `/session`)
- Trip Details
    - Get Trip Details (GET `/trip`)
- Seat Block
    - Create a lock in a seat based on a session id (PUT `/trip`)
    - Remove a block in a seat (DELETE `/trip`)
- Booking
    - Create and update Orders
        - Create Order (POST `/booking`)
            - Using debit card (POST `/booking`)
            - Using Paypal (POST `/booking`)
        - Update Order (PUT `/booking`)

Read all the entire documentation. Read the code. Execute the code. See what's missing.

All requisitions SHOULD be realized after a OPTIONS request to the server.

### Routes to cover


#APIBUNDLE - PUBLIC CONTROLLER METHODS

- **Booking**
    - Controller: `Rocket\Bus\Brazil\ApiBundle\Controller\BookingController`
    - Methods:
        - `indexAction(Request $request)`
            - Key: `rocket_bus_brazil_api_booking_index`
            - Route: `/booking`
            - Method: [POST]
            - Return: _Response_
        - `getPaypalPaymentData($grandTotal, $orderId, $itemName, $paymentCountryCode)`
            - Key:
            - Route:
            - Method:
            - Return: _array_
        - `isValidRequestBooking()`
            - Key:
            - Route:
            - Method:
            - Return: _boolean_
        - `isValidRequestUpdateBooking()`
            - Key:
            - Route:
            - Method:
            - Return: _boolean_
        - `optionsAction()`
            - Key: `rocket_bus_brazil_api_booking_options`
            - Route: `/booking`
            - Method: [OPTIONS]
            - Return: _Response_
        - `resumePaymentAction(Request $request)`
            - Key: `rocket_bus_brazil_api_booking_resumepayment`
            - Route: `/booking/payment`
            - Method: [ANY]
            - Return: _Response_
        - `updateAction(Request $request)`
            - Key: `rocket_bus_brazil_api_booking_update`
            - Route: `/booking`
            - Method: [PUT]
            - Return: _Response_
- **Search**
    - Controller: `Rocket\Bus\Brazil\ApiBundle\Controller\SearchController`
    - Methods:
        - `decorateRequest()`
            - Key: 
            - Route: 
            - Method: 
            - Return: _void_
        - `indexAction()`
            - Key: `rocket_bus_brazil_api_search_index`
            - Route: `/search` 
            - Method: [GET]
            - Return: _Response_
        - `isValidRequest()`
            - Key:
            - Route:
            - Method:
            - Return: _boolean_
        - `removeServiceFee($paymentTypeConfigurations)`
            - Key:
            - Route:
            - Method:
            - Return: _mixed_
- **Seat Block**
    - Controller: `Rocket\Bus\Brazil\ApiBundle\Controller\ServiceSeatReservationController`
    - Methods:
        - `isValidRequestSeatBlock()`
            - Key:
            - Route:
            - Method:
            - Return: _boolean_
        - `isValidRequestSeatUnblock()`
            - Key:
            - Route:
            - Method:
            - Return: _boolean_
        - `isValidRequestTrip()`
            - Key:
            - Route:
            - Method:
            - Return: _boolean_
        - `seatBlockAction()`
            - Key: `rocket_bus_brazil_api_serviceseatreservation_seatblock`
            - Route: `/seat-block`
            - Method: [PUT]
            - Return: _Response_
        - `seatBlockOptionsAction()`
            - Key: `rocket_bus_brazil_api_serviceseatreservation_seatblockoptions`
            - Route: `/seat-block`
            - Method: [OPTIONS]
            - Return: _Response_
        - `seatUnblockAction()`
            - Key: `rocket_bus_brazil_api_serviceseatreservation_seatunblock`
            - Route: `/seat-block`
            - Method: [DELETE]
            - Return: _Response_
- **Session**
    - Controller: `Rocket\Bus\Brazil\ApiBundle\Controller\SessionController`
    - Methods:
        - `getAction()`
            - Key: `rocket_bus_brazil_api_session_get`
            - Route: `/session`
            - Method: [GET]
            - Return: _Response_
        - `optionsAction()`
            - Key: `rocket_bus_brazil_api_session_options`
            - Route: `/session`
            - Method: [OPTIONS]
            - Return: _Response_
- **Trip Details**
    - Controller: `Rocket\Bus\Brazil\ApiBundle\Controller\ServiceSeatReservationController`
    - Methods:
        - `indexAction()`
            - Key: `rocket_bus_brazil_api_serviceseatreservation_index`
            - Route: `/trip`
            - Method: [GET]
            - Return: _mixed_        
