# Group Pre Order

- The next json snippet is part of the `seat_type` of a `/trip` response. You can see an array of prices, below this json you can see the screenshots of the clickbus implementation.

      {
          "seat_type": [  
            {  
              "seat_type.pre_order":{  
                 "key":"1",
                 "type":"seat_type.pre_order",
                 "prices":[  
                    {  
                       "price":13,
                       "priceWithoutTax":11.21,
                       "internalPrice":8.62,
                       "remain":1,
                       "priority":4
                    },
                    {  
                       "price":364,
                       "priceWithoutTax":313.79,
                       "internalPrice":241.38,
                       "remain":1,
                       "priority":3
                    },
                    {  
                       "price":605,
                       "priceWithoutTax":521.55,
                       "internalPrice":401.72,
                       "remain":1,
                       "priority":2
                    },
                    {  
                       "price":700.5,
                       "priceWithoutTax":603.87,
                       "internalPrice":543.1,
                       "remain":1,
                       "priority":1
                    }
                 ]
              },
              "seat_type.adult":{  
                 "key":"1",
                 "type":"seat_type.adult",
                 "priceWithoutTax":"603.87",
                 "remain":"25",
                 "price":"700.5"
              },
              "seat_type.children":{  
                 "key":"2",
                 "type":"seat_type.children",
                 "priceWithoutTax":"301.93",
                 "remain":"2",
                 "price":"350.24"
              },
              "seat_type.elderly":{  
                 "key":"3",
                 "type":"seat_type.elderly",
                 "priceWithoutTax":"301.93",
                 "remain":"3",
                 "price":"350.24"
              }
           }
        ]
      }

- First of all we show the price with maximum priority, there is only one seat available for this price (remain:1).

    ![Seat One - source: http://www.clickbus.com.mx](./../../dist/img/pre_order_seat_one.png)


- When you want to select the second seat, the pre-order price as changed, to the price with maximum priority.

    ![Seat Two - source: http://www.clickbus.com.mx](./../../dist/img/pre_order_seat_two.png)


- With the third and fourth seat is the same, the price change on every selected seat because all this prices have remain=1.

    ![Seat Three - source: http://www.clickbus.com.mx](./../../dist/img/pre_order_seat_three.png)

    ![Seat Four - source: http://www.clickbus.com.mx](./../../dist/img/pre_order_seat_four.png)


- With the fifth seat, there are no more pre-order prices.

    ![Seat Five - source: http://www.clickbus.com.mx](./../../dist/img/pre_order_seat_five.png)