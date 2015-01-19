FORMAT: 1A

# Clickbus Public API
This is the documentation and samples for Clickbus Public API.
Also this can be used as mocked data to simply test API integration.

In this documentation you may find both how to integrate with Clickbus API for any country avaliable in Clickbus Portifolio but also use as a guideline to create your own Booking engine and submit to us to quickly implement your services and start selling your bus services as well using clickbus ( contato@clickubs.com.br for more commercial details ).

# Group Search

## Search [/search{?from,to,departure}]

### Get Avaliable Trips [GET]

+ Parameters

    + from (required, `sao-paulo-tiete-sp`) ... The Station or Place name/alias to perform the search from    
    + to (required, `santos-sp`) ... The Station or Place name/alias to perform the search to    
    + departure (required, `2014-12-03`) ... The departure date to perform the search
    + engine ( optional, `"5411E7D726991"`) ... Specify in what booking engine you want to perform the search, if not provided will search in the availiable booking engine on the server
    + quantity (optional, `2`) ... The minimum ammount of avaliable seats
    + locale (optional, `pt_BR`) ... The locale i want to perform the search in. If you provide nothing the system will try to search in all languages avaliables on the server (that can take more time to respond)

+ Response 200 (application/json)

        {
          "meta": "",
          "paymentSettings": {
            "bankslip": {
              "total": "0.00",
              "savings": 0,
              "fixedValue": 0,
              "serviceFee": 0,
              "serviceFeePercentage": 11
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
              "savings": 0.2,
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
              "savings": 0,
              "fixedValue": 0,
              "serviceFee": 0,
              "serviceFeePercentage": 0
            },
            "banktransfer": {
              "total": "0.00",
              "savings": 0,
              "fixedValue": 0,
              "serviceFee": 0,
              "serviceFeePercentage": 0
            }
          },
          "items": [
            {
              "from": "Sao Paulo - Tiete, SP",
              "to": "Santos, SP",
              "parts": [
                {
                  "trip_id": "4322",
                  "departure": {
                    "price": "564",
                    "waypoint": {
                      "id": "4017",
                      "prices": [
                        {
                          "waypoint": "3935",
                          "price": "564"
                        }
                      ],
                      "schedule": {
                        "id": "AAAFFFD-DAADA-111444ED-GGFFEE",
                        "date": "2014-12-03",
                        "time": "01:00",
                        "timezone": "America/Sao_Paulo"
                      },
                      "context": "departure",
                      "place": {
                        "country": "BRA",
                        "state": "",
                        "city": "Sao Paulo - Tiete, SP",
                        "station": {
                          "current": {
                            "id": "4017",
                            "name": "Sao Paulo - Tiete, SP",
                            "locale": "en_US"
                          },
                          "default": {
                            "id": "",
                            "name": "",
                            "locale": ""
                          }
                        },
                        "locale": "pt_BR",
                        "id": "4017"
                      },
                      "isDeparture": "true",
                      "position": "0"
                    }
                  },
                  "arrival": {
                    "price": "564",
                    "waypoint": {
                      "id": "3935",
                      "prices": [
                        {
                          "waypoint": "",
                          "price": ""
                        }
                      ],
                      "schedule": {
                        "id": "AAAFFFD-DAADA-111444ED-GGFFEE",
                        "date": "2014-12-03",
                        "time": "03:00",
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
                    "name": "Demon",
                    "id": "9"
                  },
                  "bus": {
                    "serviceClass": "Convencional",
                    "name": "Convencional",
                    "id": "1"
                  },
                  "waypoints": [
                    {
                      "id": "4017",
                      "prices": [
                        {
                          "waypoint": "3935",
                          "price": "564"
                        }
                      ],
                      "schedule": {
                        "id": "AAAFFFD-DAADA-111444ED-GGFFEE",
                        "date": "2014-12-03",
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
                            "id": "4017",
                            "name": "Sao Paulo - Tiete, SP",
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
                      "prices": [
                        {
                          "waypoint": "",
                          "price": "564"
                        }
                      ],
                      "schedule": {
                        "id": "AAAFFFD-DAADA-111444ED-GGFFEE",
                        "date": "2014-12-03",
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
                    }
                  ],
                  "seatTypes": [],
                  "products": [],
                  "availableSeats": "1"
                }
              ]
            }
          ]
        }

# Group Session

## Session [/session]

### Get Session [GET]

+ Response 201 (application/json)
        {
            "content" : "AAAFFFD-DAADA-111444ED-GGFFEE"
        }

# Group Trip Details

## Trip Details [/trip{?scheduleId}]

+ Parameters
    + scheduleId (required,`13ASDF-AASDA12-AADDDFF11-ASDASD`) ... Schedule ID from a search result part. Note that if you want details from more than one part ( results can have 1 or more parts if is routed for example ) you need to call details from each part schedule id
        
### Get Trips Details [GET]

+ Response 200 (application/json)

        {
          "meta": {},
          "content": {
            "trip_id": 40123,
            "busCompany": {
              "name": "Cometa"
            },
            "bus": {
              "id": 12222111,
              "name": "Dunha",
              "service_class": "Convencional"
            }
            "seats": [
              {
                "id": 13,
                "name": "A02",
                "available": true,
                "position": {
                  "x": 1,
                  "y": 1,
                  "z": 1
                },
                "details": {
                  "price": "1030",
                  "currency": "BRL",
                  "seatTypes": [
                    {
                      "name": "Professor",
                      "discount": 0.9,
                      "id": 1
                    },
                    {
                      "name": "Handicap",
                      "discount": 0.9,
                      "id": 1
                    }
                  ]
                }
              },
              {
                "id": 14,
                "name": "A03",
                "available": false,
                "position": {
                  "x": 1,
                  "y": 3,
                  "z": 1
                },
                "details": {}
              },
              {
                "id": 15,
                "name": "A04",
                "available": true,
                "position": {
                  "x": 1,
                  "y": 4,
                  "z": 1
                },
                "details": {
                  "price": 800,
                  "currency": "BRL",
                  "seatTypes": [
                    {
                      "name": "Professor",
                      "discount": 0.9,
                      "id": 1
                    },
                    {
                      "name": "Handicap",
                      "discount": 0.9,
                      "id": 1
                    }
                  ]
                }
              },
              {
                "id": 16,
                "name": "A05",
                "available": true,
                "position": {
                  "x": 2,
                  "y": 0,
                  "z": 1
                },
                "details": {
                  "price": 600,
                  "currency": "BRL",
                  "seatTypes": [
                    {
                      "name": "Professor",
                      "discount": 0.9,
                      "id": 1
                    },
                    {
                      "name": "Handicap",
                      "discount": 0.9,
                      "id": 1
                    }
                  ]
                }
              },
              {
                "id": 17,
                "name": "A06",
                "available": true,
                "position": {
                  "x": 2,
                  "y": 1,
                  "z": 1
                },
                "details": {
                  "price": 850,
                  "currency": "BRL",
                  "seatTypes": [
                    {
                      "name": "Professor",
                      "discount": 0.9,
                      "id": 1
                    },
                    {
                      "name": "Handicap",
                      "discount": 0.9,
                      "id": 1
                    }
                  ]
                }
              },
              {
                "id": 18,
                "name": "A07",
                "available": true,
                "position": {
                  "x": 2,
                  "y": 3,
                  "z": 1
                },
                "details": {
                  "price": 550,
                  "currency": "BRL",
                  "seatTypes": [
                    {
                      "name": "Professor",
                      "discount": 0.9,
                      "id": 1
                    },
                    {
                      "name": "Handicap",
                      "discount": 0.9,
                      "id": 1
                    }
                  ]
                }
              },
              {
                "id": 19,
                "name": "A08",
                "available": true,
                "position": {
                  "x": 2,
                  "y": 4,
                  "z": 1
                },
                "details": {
                  "price": 900,
                  "currency": "BRL",
                  "seatTypes": [
                    {
                      "name": "Professor",
                      "discount": 0.9,
                      "id": 1
                    },
                    {
                      "name": "Handicap",
                      "discount": 0.9,
                      "id": 1
                    }
                  ]
                }
              },
              {
                "id": 20,
                "name": "A09",
                "available": true,
                "position": {
                  "x": 3,
                  "y": 0,
                  "z": 1
                },
                "details": {
                  "price": 850,
                  "currency": "BRL",
                  "seatTypes": [
                    {
                      "name": "Professor",
                      "discount": 0.9,
                      "id": 1
                    },
                    {
                      "name": "Handicap",
                      "discount": 0.9,
                      "id": 1
                    }
                  ]
                }
              },
              {
                "id": 21,
                "name": "A10",
                "available": true,
                "position": {
                  "x": 3,
                  "y": 1,
                  "z": 1
                },
                "details": {
                  "price": 650,
                  "currency": "BRL",
                  "seatTypes": [
                    {
                      "name": "Professor",
                      "discount": 0.9,
                      "id": 1
                    },
                    {
                      "name": "Handicap",
                      "discount": 0.9,
                      "id": 1
                    }
                  ]
                }
              },
              {
                "id": 22,
                "name": "A11",
                "available": true,
                "position": {
                  "x": 3,
                  "y": 3,
                  "z": 1
                },
                "details": {
                  "price": 1100,
                  "currency": "BRL",
                  "seatTypes": [
                    {
                      "name": "Professor",
                      "discount": 0.9,
                      "id": 1
                    },
                    {
                      "name": "Handicap",
                      "discount": 0.9,
                      "id": 1
                    }
                  ]
                }
              },
              {
                "id": 23,
                "name": "A12",
                "available": true,
                "position": {
                  "x": 3,
                  "y": 4,
                  "z": 1
                },
                "details": {
                  "price": 1100,
                  "currency": "BRL",
                  "seatTypes": [
                    {
                      "name": "Professor",
                      "discount": 0.9,
                      "id": 1
                    },
                    {
                      "name": "Handicap",
                      "discount": 0.9,
                      "id": 1
                    }
                  ]
                }
              },
              {
                "id": 24,
                "name": "A13",
                "available": true,
                "position": {
                  "x": 4,
                  "y": 0,
                  "z": 1
                },
                "details": {
                  "price": 1100,
                  "currency": "BRL",
                  "seatTypes": [
                    {
                      "name": "Professor",
                      "discount": 0.9,
                      "id": 1
                    },
                    {
                      "name": "Handicap",
                      "discount": 0.9,
                      "id": 1
                    }
                  ]
                }
              },
              {
                "id": 25,
                "name": "A14",
                "available": true,
                "position": {
                  "x": 4,
                  "y": 1,
                  "z": 1
                },
                "details": {
                  "price": 1100,
                  "currency": "BRL",
                  "seatTypes": [
                    {
                      "name": "Professor",
                      "discount": 0.9,
                      "id": 1
                    },
                    {
                      "name": "Handicap",
                      "discount": 0.9,
                      "id": 1
                    }
                  ]
                }
              },
              {
                "id": 26,
                "name": "A15",
                "available": true,
                "position": {
                  "x": 4,
                  "y": 3,
                  "z": 1
                },
                "details": {
                  "price": 1100,
                  "currency": "BRL",
                  "seatTypes": [
                    {
                      "name": "Professor",
                      "discount": 0.9,
                      "id": 1
                    },
                    {
                      "name": "Handicap",
                      "discount": 0.9,
                      "id": 1
                    }
                  ]
                }
              },
              {
                "id": 27,
                "name": "A16",
                "available": true,
                "position": {
                  "x": 4,
                  "y": 4,
                  "z": 1
                },
                "details": {
                  "price": 1100,
                  "currency": "BRL",
                  "seatTypes": [
                    {
                      "name": "Professor",
                      "discount": 0.9,
                      "id": 1
                    },
                    {
                      "name": "Handicap",
                      "discount": 0.9,
                      "id": 1
                    }
                  ]
                }
              },
              {
                "id": 28,
                "name": "A17",
                "available": true,
                "position": {
                  "x": 5,
                  "y": 0,
                  "z": 1
                },
                "details": {
                  "price": 1100,
                  "currency": "BRL",
                  "seatTypes": [
                    {
                      "name": "Professor",
                      "discount": 0.9,
                      "id": 1
                    },
                    {
                      "name": "Handicap",
                      "discount": 0.9,
                      "id": 1
                    }
                  ]
                }
              },
              {
                "id": 29,
                "name": "A18",
                "available": true,
                "position": {
                  "x": 5,
                  "y": 1,
                  "z": 1
                },
                "details": {
                  "price": 1100,
                  "currency": "BRL",
                  "seatTypes": [
                    {
                      "name": "Professor",
                      "discount": 0.9,
                      "id": 1
                    },
                    {
                      "name": "Handicap",
                      "discount": 0.9,
                      "id": 1
                    }
                  ]
                }
              },
              {
                "id": 30,
                "name": "A19",
                "available": true,
                "position": {
                  "x": 5,
                  "y": 3,
                  "z": 1
                },
                "details": {
                  "price": 1100,
                  "currency": "BRL",
                  "seatTypes": [
                    {
                      "name": "Professor",
                      "discount": 0.9,
                      "id": 1
                    },
                    {
                      "name": "Handicap",
                      "discount": 0.9,
                      "id": 1
                    }
                  ]
                }
              },
              {
                "id": 31,
                "name": "A20",
                "available": true,
                "position": {
                  "x": 5,
                  "y": 4,
                  "z": 1
                },
                "details": {
                  "price": 1100,
                  "currency": "BRL",
                  "seatTypes": [
                    {
                      "name": "Professor",
                      "discount": 0.9,
                      "id": 1
                    },
                    {
                      "name": "Handicap",
                      "discount": 0.9,
                      "id": 1
                    }
                  ]
                }
              },
              {
                "id": 32,
                "name": "A21",
                "available": true,
                "position": {
                  "x": 6,
                  "y": 0,
                  "z": 1
                },
                "details": {
                  "price": 1100,
                  "currency": "BRL",
                  "seatTypes": [
                    {
                      "name": "Professor",
                      "discount": 0.9,
                      "id": 1
                    },
                    {
                      "name": "Handicap",
                      "discount": 0.9,
                      "id": 1
                    }
                  ]
                }
              },
              {
                "id": 33,
                "name": "A22",
                "available": true,
                "position": {
                  "x": 6,
                  "y": 1,
                  "z": 1
                },
                "details": {
                  "price": 1100,
                  "currency": "BRL",
                  "seatTypes": [
                    {
                      "name": "Professor",
                      "discount": 0.9,
                      "id": 1
                    },
                    {
                      "name": "Handicap",
                      "discount": 0.9,
                      "id": 1
                    }
                  ]
                }
              },
              {
                "id": 34,
                "name": "A23",
                "available": true,
                "position": {
                  "x": 6,
                  "y": 3,
                  "z": 1
                },
                "details": {
                  "price": 1100,
                  "currency": "BRL",
                  "seatTypes": [
                    {
                      "name": "Professor",
                      "discount": 0.9,
                      "id": 1
                    },
                    {
                      "name": "Handicap",
                      "discount": 0.9,
                      "id": 1
                    }
                  ]
                }
              },
              {
                "id": 35,
                "name": "A24",
                "available": true,
                "position": {
                  "x": 6,
                  "y": 4,
                  "z": 1
                },
                "details": {
                  "price": 1100,
                  "currency": "BRL",
                  "seatTypes": [
                    {
                      "name": "Professor",
                      "discount": 0.9,
                      "id": 1
                    },
                    {
                      "name": "Handicap",
                      "discount": 0.9,
                      "id": 1
                    }
                  ]
                }
              },
              {
                "id": 36,
                "name": "A25",
                "available": true,
                "position": {
                  "x": 7,
                  "y": 0,
                  "z": 1
                },
                "details": {
                  "price": 1100,
                  "currency": "BRL",
                  "seatTypes": [
                    {
                      "name": "Professor",
                      "discount": 0.9,
                      "id": 1
                    },
                    {
                      "name": "Handicap",
                      "discount": 0.9,
                      "id": 1
                    }
                  ]
                }
              },
              {
                "id": 37,
                "name": "A26",
                "available": true,
                "position": {
                  "x": 7,
                  "y": 1,
                  "z": 1
                },
                "details": {
                  "price": 1100,
                  "currency": "BRL",
                  "seatTypes": [
                    {
                      "name": "Professor",
                      "discount": 0.9,
                      "id": 1
                    },
                    {
                      "name": "Handicap",
                      "discount": 0.9,
                      "id": 1
                    }
                  ]
                }
              },
              {
                "id": 38,
                "name": "A27",
                "available": true,
                "position": {
                  "x": 7,
                  "y": 3,
                  "z": 1
                },
                "details": {
                  "price": 1100,
                  "currency": "BRL",
                  "seatTypes": [
                    {
                      "name": "Professor",
                      "discount": 0.9,
                      "id": 1
                    },
                    {
                      "name": "Handicap",
                      "discount": 0.9,
                      "id": 1
                    }
                  ]
                }
              },
              {
                "id": 39,
                "name": "A28",
                "available": true,
                "position": {
                  "x": 7,
                  "y": 4,
                  "z": 1
                },
                "details": {
                  "price": 1100,
                  "currency": "BRL",
                  "seatTypes": [
                    {
                      "name": "Professor",
                      "discount": 0.9,
                      "id": 1
                    },
                    {
                      "name": "Handicap",
                      "discount": 0.9,
                      "id": 1
                    }
                  ]
                }
              },
              {
                "id": 40,
                "name": "A29",
                "available": true,
                "position": {
                  "x": 8,
                  "y": 0,
                  "z": 1
                },
                "details": {
                  "price": 1100,
                  "currency": "BRL",
                  "seatTypes": [
                    {
                      "name": "Professor",
                      "discount": 0.9,
                      "id": 1
                    },
                    {
                      "name": "Handicap",
                      "discount": 0.9,
                      "id": 1
                    }
                  ]
                }
              },
              {
                "id": 41,
                "name": "A30",
                "available": true,
                "position": {
                  "x": 8,
                  "y": 1,
                  "z": 1
                },
                "details": {
                  "price": 1100,
                  "currency": "BRL",
                  "seatTypes": [
                    {
                      "name": "Professor",
                      "discount": 0.9,
                      "id": 1
                    },
                    {
                      "name": "Handicap",
                      "discount": 0.9,
                      "id": 1
                    }
                  ]
                }
              },
              {
                "id": 42,
                "name": "A31",
                "available": true,
                "position": {
                  "x": 8,
                  "y": 3,
                  "z": 1
                },
                "details": {
                  "price": 1100,
                  "currency": "BRL",
                  "seatTypes": [
                    {
                      "name": "Professor",
                      "discount": 0.9,
                      "id": 1
                    },
                    {
                      "name": "Handicap",
                      "discount": 0.9,
                      "id": 1
                    }
                  ]
                }
              },
              {
                "id": 43,
                "name": "A32",
                "available": true,
                "position": {
                  "x": 8,
                  "y": 4,
                  "z": 1
                },
                "details": {
                  "price": 1100,
                  "currency": "BRL",
                  "seatTypes": [
                    {
                      "name": "Professor",
                      "discount": 0.9,
                      "id": 1
                    },
                    {
                      "name": "Handicap",
                      "discount": 0.9,
                      "id": 1
                    }
                  ]
                }
              }
            ]
          }
        }        

# Group Seat Block

## Seat Block [/seat-block]

### Create a lock in a seat based on a session id [PUT]
+ Headers
    Cookie: PHPSESSID=g1898g0ogdlh9f3mfra2hl3el3

+ Parameters
    + meta
    + request (required,object,`{}`) ... The request object content
    + request.seat (required,numeric, `01`) ... The seat id from the given Seat in TripDetails call
    + request.passenger (required,object) ... Passenger data
    + request.passenger.name (required,string,`Joe Doe`) ... The passenger name
    + request.passenger.document (optional,alphanumeric,`1111123123`) ... Passenger document if the api request so
    + request.passenger.documentType (optional,alphanumeric,`RG`) ... Passenger document type
    + request.passenger.gender (optional,alphanumeric,`M`) ... Passenger gender
    + request.schedule (required,object) ... Schedule object from the previous search result part call
    + request.schedule.id (required,alphanumeric,`FFFDDD-DAFASD-DFFF3344-DDASSS`) ... Schedule id
    + sessionId (required, alphanumeric, `g1898g0ogdlh9f3mfra2hl3el3`) ... Order/Booking unique identifier.

+ Request

    + Body
    
            {
              "meta": {},
              "request": {
                "seat": "01",
                "passenger": {
                  "name": "Pedrinn Ribeiro",
                  "document": "12345",
                  "documentType": "RG",
                  "gender": "M"
                },
                "schedule": {
                  "id": "DDFF999-AAACCC-DDDFFF@113-AFAFDD"
                },
                "sessionId": "g1898g0ogdlh9f3mfra2hl3el3"
              }
            }

+ Response 201 (application/json)

    + Body
    
            {
              "meta": {},
              "items": [
                {
                  "seat": "05",
                  "schedule": {
                    "id": "DDFF999-AAACCC-DDDFFF@113-AFAFDD",
                    "date": "2014-10-30",
                    "time": "11:00",
                    "timezone": "America/Sao_Paulo"
                  },
                  "status": "blocked",
                  "sessionId": "g8qegjpd6kl0h557q0gjc02815",
                  "createdAt": {
                    "date": "2014-10-10 14:04:13.000000",
                    "timezone_type": 3,
                    "timezone": "America/New_York"
                  },
                  "expireAt": {
                    "date": "2014-10-10 14:14:13.000000",
                    "timezone_type": 3,
                    "timezone": "America/New_York"
                  }
                }
              ]
            }

### Remove a block in a seat [DELETE]
+ Headers
    Cookie: PHPSESSID=g1898g0ogdlh9f3mfra2hl3el3

+ Parameters

    + meta
    + request (required,object,`{}`) ... The request object content
    + request.seat (required,numeric, `01`) ... The seat id from the given Seat in TripDetails call
    + request.schedule (required,object) ... Schedule object from the previous search result part call
    + request.schedule.id (required,alphanumeric,`FFFDDD-DAFASD-DFFF3344-DDASSS`) ... Schedule id
    + sessionId (required, alphanumeric, `g1898g0ogdlh9f3mfra2hl3el3`) ... Order/Booking unique identifier.


+ Request (application/json)

    + Body

            {
              "meta": {},
              "request": {
                "seat": "12A",
                "schedule": {
                  "id": "DDFF999-AAACCC-DDDFFF@113-AFAFDDDDFF999-AAACCC-DDDFFF@113-AFAFDD"
                },
                "sessionId": "g8qegjpd6kl0h557q0gjc02815"
              }
            }

+ Response 202 (application/json)

        {
            "meta": {},
            "content": {
                "status": "canceled",
                "messages": [],
                "sessionId": "g8qegjpd6kl0h557q0gjc02815"
            }
        }
        
# Group Booking

## Create and update orders [/booking]

### Create Order [POST]
+ Headers
    Cookie: PHPSESSID=g1898g0ogdlh9f3mfra2hl3el3

+ Parameters

      + meta (optional,object)
      + meta.model (optional,alphanumeric,`lorem`) ... Your model identifier
      + meta.store (optional,alphanumeric,`ipsum`) ... Your store identifier
      + meta.platform (optional,alphanumeric,`dolor`) ... Your platform identifier
      + request (required,object)
      + request.sessionId (required,alphanumeric,`egqviudfa9i43j5dj8hodqikk6`) ... The session id from the TripDetails call
      + request.buyer (required,object) ... Buyer data
      + request.buyer.firstName (required,string,`Joe`) ... Buyer's first name
      + request.buyer.lastName (required,string,`Doe`) ... Buyer's last name
      + request.buyer.email (required,alphanumeric,`joe.doe@clickbus.com.br`) ... Buyer's email
      + request.buyer.phone (optional,alphanumeric,`+5511981231234`) ... Buyer's phone
      + request.buyer.document (optional,alphanumeric,`123123123123`) ... Buyer's document
      + request.buyer.gender (optional,string,`M`) ... Buyer's gender
      + request.buyer.birthday (optional,alphanumeric,`1986-05-17`) ... Buyer's birthday
      + request.buyer.meta (optional,object) ... Any other data you want to store from the buyer such as cookies or anything (will not be necessarely used by the system)
      + request.buyer.payment (required,object) ... Payment data and settings
      + request.buyer.payment.method (required,alphanumeric,`creditcard`) ... Allowed payment method token ( given in search paymentSettings )
      + request.buyer.payment.currency (required,alphanumeric) ... Payment prefered currency
      + request.buyer.payment.total (required,numeric) ... Total value to double check with server's session ( this is meant only for security reasons once the server validate it's value anyway)
      + request.buyer.payment.meta (required,object) ... Payment method data. Each payment method may have it's own values here once they are pretty different from each other (transparent, syncronous, asyncronous, hosted, redirected, etc... The sample will follow a transparent credit card flow)
      + request.buyer.payment.meta.card (required,numeric) ... Credit Card number without hyphens
      + request.buyer.payment.meta.code (required,numeric) ... Credit Card CVV number (security code)
      + request.buyer.payment.meta.name (required,string) ... Name of the holder in credit card ( same as is )
      + request.buyer.payment.meta.expiration (required,alphanumeric,`2017-03`) ... Expiration date of the credit card
      + request.buyer.payment.meta.installment (optional,numeric,`1`) ... Number of installments (if not set 1 will be considered as default once its the minimum amount)
      + request.buyer.payment.meta.callbackUrl (optional,string,`http://mystore.com/checkout/success`) ... URL to redirect (HTTP 302) client after payment resolution
      + request.buyer.payment.meta.postbackUrl (optional,string,`http://mystore.com/checkout/postback-receiver`) ... URL to notify merchant about payment updates, when payment method is assinchronous.
      + request.buyer.payment.meta.zipcode (optional,numeric,`123123123`) ... Some countries require this to perform anti-fraud check, however it's optional and depends on each payment type or anti-fraud service
      + request.orderItems (required,array) ... Order items to perform the request
      + request.orderItems[0].context (required,alphanumeric,`departure`) ... Context of the trip ( departure or return )
      + request.orderItems[0].seatReservation (required,alphanumeric) ... Seat reservation code from Seat Block call
      + request.orderItems[0].passenger (required,object) ... Passenger Data
      + request.orderItems[0].passenger.firstName (required,string,`Joe`) ... Passenger's first name
      + request.orderItems[0].passenger.lastName (required,string,`Doe`) ... Passenger's last name
      + request.orderItems[0].passenger.email (required,alphanumeric,`joe.doe@clickbus.com.br`) ... Passenger's email
      + request.orderItems[0].passenger.phone (optional,alphanumeric,`+5511981231234`) ... Passenger's phone
      + request.orderItems[0].passenger.document (optional,alphanumeric,`123123123123`) ... Passenger's document
      + request.orderItems[0].passenger.gender (optional,string,`M`) ... Passenger's gender
      + request.orderItems[0].passenger.birthday (optional,alphanumeric,`1986-05-17`) ... Passenger's birthday
      + request.orderItems[0].passenger.meta (optional,object) ... Passenger's meta data you want to store ( not necessarely will be used by the system )
      + request.orderItems[0].products (optional,array) ... Passenger's meta data you want to store ( not necessarely will be used by the system )
      + request.orderItems[0].products[0] (optional,object) ... Product's details ( it can be a extra lugedt, bike seat, potato chips, etc... )
      + request.orderItems[0].products[0].uuid (required,alphanumeric) ... Product's unique identifier
      + request.orderItems[0].products[0].quantity (required,float) ... Product's amount

+ Request (application/json)
            
    + Body        
            
            {
              "meta": {
                "model": "lorem",
                "store": "ipsum",
                "platform": "dolor"
              },
              "request": {
                "sessionId": "egqviudfa9i43j5dj8hodqikk6",
                "buyer": {
                  "locale" : "pt_BR",
                  "firstName": "Joe",
                  "lastName": "Doe",
                  "email": "joe.doe@clickbus.com.br",
                  "phone": "+5511981231234",
                  "document": "123.123.123-01",
                  "gender": "M",
                  "birthday": "1986-05-17",
                  "meta": {},
                  "payment": {
                    "method": "creditcard",
                    "currency": "BRL",
                    "total": 3900,
                    "installment": "1",
                    "meta": {
                      "card": "4111111111111111",
                      "code": "887",
                      "name": "CESARIO MARTINS",
                      "expiration": "2017-03",
                      "zipcode": "08265390"
                    }
                  }
                },
                "orderItems": [
                  {
                    "context" : "departure",
                    "seatReservation": "NDAxNy0tMzkzNS0tMjAxNC0wNi0yMiAwMTowMC0tOS0tNDMyMi0tMS0tMS0tMS0tQ09OVg==",
                    "passenger": {
                      "firstName": "Pedrinn",
                      "lastName": "Ribeiro",
                      "email": "dev@clickbus.com.br",
                      "document": "123.123.123-01",
                      "gender": "M",
                      "birthday": "1986-05-17",
                      "meta": {}
                    },
                    "products": [
                      {
                        "uuid": "abcd123s",
                        "quantity": 2
                      }
                    ]
                  }
                ]
              }
            }


+ Response 201 (application/json)

        {
          "meta": {
            "model": "lorem",
            "store": "ipsum",
            "platform": "dolor"
          },
          "content": {
            "id": 123,
            "status": "pending",
            "localizer": "53347e09aee47",
            "payment": {
              "method": "creditcard",
              "total": 3900,
              "currency": "BRL",
              "status": "pending",
              "meta": {
                "card": "XXXX-XXXX-XXXX-1234",
                "code": "XXX",
                "name": "Klederson Bueno Bezerra da Silva",
                "expiration": "XXXX-XX"
              }
            },
            "items": [
              {
                "context" : "departure",
                "localizer" : "XPTO123",
                "trip_id": 123123123,
                "order_item": 1234,
                "departure": {
                  "waypoint": 113,
                  "schedule": {
                    "id": "FFDSAAA-ASDADS-AAADDFF-GGFFER3",
                    "date": "2014-10-31",
                    "time": "10:00",
                    "timezone": "America/Sao_Paulo"
                  }
                },
                "arrival": {
                  "waypoint": 123,
                  "schedule": {
                    "id": 15,
                    "date": "2014-10-31",
                    "time": "23:00",
                    "timezone": "America/Sao_Paulo"
                  }
                },
                "seat": {
                  "seatReservation" : "ADADSASD-ASDADS-AAADDFF-AASDASD",
                  "id": 14,
                  "name": "A01",
                  "price": 1000,
                  "status": "pending",
                  "currency": "BRL",
                  "type": {
                    "name": "Professor",
                    "discount": 0.9,
                    "id": 1
                  }
                },
                "passenger": {
                  "firstName": "Klederson",
                  "lastName": "Bueno",
                  "email": "dev@clickbus.com.br",
                  "document": "123.123.123-01",
                  "gender": "M",
                  "birthday": "1986-05-17",
                  "meta": {}
                },
                "products": [
                  {
                    "uuid": "abcd123s",
                    "name": "Potato Chips",
                    "quantity": 2,
                    "price": 500,
                    "currency": "BRL"
                  }
                ],
                "subtotal": 1900
              }
            ],
            "createdAt": "2010-10-30"
          }
        }

### Create a Order using debit card [POST]

#### Uses same parameters of regular order creation
In the response, a _content.payment.meta.continuePaymentURL_ should be returned. You must redirect your
client to bank authorization and after it you will be redirected to API.

If a _request.buyer.payment.meta.postbackUrl_ was sent, a postback will notify you about the payment status.

If a _request.buyer.payment.meta.callbackUrl_ was sent, after bank approvation, the application will redirect
you to this URL.

Note: To authorize a test using this payment method, you must choose a trip with any value that the last two digits (cents) are zeros. Otherwise, all transactions will be denied. 


+ Request (application/json)

    + Body
        
            {
                "meta": {
                    "model": "Retail",
                    "store": "ClickBus",
                    "platform": "Mobile"
                },
                "request": {
                  "sessionId": "pb3tlvfik8kiif4hvets3shfn3",
                  "buyer": {
                    "locale": "pt_BR",
                    "firstName": "Nome",
                    "lastName": "Sobrenome",
                    "email": "teste@clickbus.com.br",
                    "phone": "11999999999",
                    "document": "123.123.123-01",
                    "gender": "M",
                    "birthday": "1980-01-01",
                    "meta": {},
                    "payment": {
                        "method": "debitcard",
                        "currency": "BRL",
                        "total": 3900,
                        "installment": "1",
                        "meta": {
                            "card": "4551870000000183",
                            "code": "737",
                            "name": "NOME SOBRENOME",
                            "expiration": "2017-03",
                            "zipcode": "08265390",
                            "postbackUrl": "http://my.host.com/postbackUrl",
                            "callbackUrl": "http://my.host.com/callbackUrl"
                        }
                    }
                },
                "orderItems": [
                {
                    "seatReservation": "NDAxNy0tMzkzNS0tMjAxNC0xMi0yMCAyMDoxMC0tOS0tMDAxMy0tMS0tMS0tMS0tQ09OVg==",
                    "passenger": {
                        "firstName": "Nome",
                        "lastName": "Sobrenome",
                        "email": "dev@clickbus.com.br",
                        "document": "123.123.123-01",
                        "gender": "M",
                        "birthday": "1986-05-17",
                        "seat": "49",
                        "meta": {}
                        },
                        "products":{
                            "meta": {},
                            "request": {
                              "sessionId": "pb3tlvfik8kiif4hvets3shfn3",
                              "buyer": {
                                "locale": "pt_BR",
                                "firstName": "Nome",
                                "lastName": "Sobrenome",
                                "email": "teste@clickbus.com.br",
                                "phone": "11999999999",
                                "document": "123.123.123-01",
                                "gender": "M",
                                "birthday": "1980-01-01",
                                "meta": {},
                                "payment": {
                                  "method": "debitcard",
                                  "currency": "BRL",
                                  "total": 3900,
                                  "installment": "1",
                                  "meta": {
                                    "card": "4551870000000183",
                                    "code": "737",
                                    "name": "NOME SOBRENOME",
                                    "expiration": "2017-03",
                                    "zipcode": "08265390"
                                }
                            }
                            },
                            "orderItems": [
                            {
                                "seatReservation": "NDAxNy0tMzkzNS0tMjAxNC0xMi0yMCAyMDoxMC0tOS0tMDAxMy0tMS0tMS0tMS0tQ09OVg==",
                                "passenger": {
                                    "firstName": "Nome",
                                    "lastName": "Sobrenome",
                                    "email": "dev@clickbus.com.br",
                                    "document": "123.123.123-01",
                                    "gender": "M",
                                    "birthday": "1986-05-17",
                                    "seat": "49",
                                    "meta": {}
                                },
                                "products": [
                                    {
                                        "uuid": "abcd123s",
                                        "quantity": 2
                                    }
                                ]
                            }]
                        }
                    } [
                    {
                        "uuid": "abcd123s",
                        "quantity": 2
                    }
                    ]}
                ]}
            }
            
+ Response 201 (application/json)

    + Body
    
            {
                "meta": {
                    "model": "Retail",
                    "store": "ClickBus",
                    "platform": "Mobile"
                },
                "content": {
                    "id": "627",
                    "status": "clarify_debit_card_payment_pending",
                    "localizer": "FDDAQQ",
                    "uuid": "",
                    "payment": {
                        "method": "payment.debitcard",
                        "total": "4.717",
                        "currency": "BRL",
                        "status": "clarify_debit_card_payment_pending",
                        "meta": {
                            "continuePaymentURL": "https://qasecommerce.cielo.com.br/web/index.cbmp?id=4734430bf6ad6336ad84c464c95357f1",
                            "card": "4551-XXXX-XXXX-0183",
                            "code": "XXX",
                            "name": "NOME SOBRENOME",
                            "expiration": "XXXX-XX-XX",
                            "postbackUrl": "http://my.host.com/postbackUrl",
                            "callbackUrl": "http://my.host.com/callbackUrl"
                        }
                    },
                    "items": [
                        {
                            "trip_id": "0013",
                            "context": "departure",
                            "order_item": "678",
                            "serviceClass": "Convencional",
                            "departure": {
                                "waypoint": "4017",
                                "schedule": {
                                    "id": "",
                                    "date": "2014-12-20",
                                    "time": "20:10",
                                    "timezone": "America/Sao_Paulo"
                                }
                            },
                            "arrival": {
                                "waypoint": "3935",
                                "schedule": {
                                    "id": "",
                                    "date": "2014-12-20",
                                    "time": "21:09",
                                    "timezone": "America/Sao_Paulo"
                                }
                            },
                            "seat": {
                                "id": "49",
                                "name": "49",
                                "price": "5.30",
                                "status": "reserved",
                                "currency": "BRL",
                                "type": {}
                            },
                            "passenger": {
                                "firstName": "Test User",
                                "lastName": "",
                                "email": "teste@clickbus.com.br",
                                "document": "123.456.789-0",
                                "gender": "",
                                "birthday": "",
                                "meta": {}
                            },
                            "products": [],
                            "subtotal": "5.30"
                        }
                    ],
                    "createdAt": "2014-11-12"
                }
            }

### Create a Order using Paypal [POST]

#### Uses same parameters of regular order creation
In the response, a _content.payment.meta.postUrl_ and _content.payment.meta.postData_ should be returned. You must redirect your
client to Paypal page and after it you will be redirected to API.

The _content.payment.meta.postUrl_ of response, describe the Paypal URL that your app need to redirect the shopper.

The _content.payment.meta.postData_ of response, describe the post data that you need to send to Paypel URL ( _content.payment.meta.postUrl_ ).

If a _request.buyer.payment.meta.postbackUrl_ was sent, a postback will notify you about the payment status.

If a _request.buyer.payment.meta.callbackUrl_ was sent, after bank approvation, the application will redirect
you to this URL.

+ Request (application/json)

    + Body
        
            {
                "meta": {},
                "request": {
                  "sessionId": "orcut0kb0evdihcl39l4raebh7",
                  "buyer": {
                    "locale": "en_US",
                    "firstName": "Nome",
                    "lastName": "Sobrenome",
                    "email": "teste@clickbus.com.br",
                    "phone": "11999999999",
                    "document": "123.123.123-01",
                    "gender": "M",
                    "birthday": "1980-01-01",
                    "meta": {
                        "card": "4111111111111111",
                        "code": "123",
                        "name": "BUS S AGEND LTDA",
                        "expiration": "2021-07",
                        "zipcode": "08265390"
                    },
                    "payment": {
                      "method": "paypal_hpp",
                      "currency": "BRL",
                      "total": 3900,
                      "installment": "1",
                      "meta": {
                        "postbackUrl": "http://my.host.com/postbackUrl",
                        "callbackUrl": "http://my.host.com/callbackUrl"
                      }
                    }
                  },
                  "orderItems": [
                    {
                        "seatReservation": "NDAxNi0tMzkzNS0tMjAxNC0xMi0wNSAwNjoxMC0tMTItLTMwMDAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                        "passenger": {
                            "firstName": "Developer",
                            "lastName": "Clickbus",
                            "email": "developers@clickbus.com.br",
                            "document": "123.123.123-01",
                            "gender": "M",
                            "birthday": "1986-05-17",
                            "seat": "13",
                            "meta": {}
                        },
                        "products": [
                            {
                                "uuid": "abcd123s",
                                "quantity": 2
                            }
                        ]
                    }
                  ]
                }
            }
            
+ Response 201 (application/json)

    + Body
    
            {
                "meta": {
                    "model": "Retail",
                    "store": "ClickBus",
                    "platform": "Mobile"
                },
                "content": {
                    "id": "132",
                    "status": "order_pending",
                    "localizer": "U8Q9RH",
                    "uuid": "",
                    "payment": {
                        "method": "payment.paypal_hpp",
                        "total": "21.25",
                        "currency": "BRL",
                        "status": "order_pending",
                        "meta": {
                            "postUrl": "https://www.sandbox.paypal.com/cgi-bin/webscr",
                            "postData": {
                                "cmd": "_xclick",
                                "business": "contato@clickbus.com.br",
                                "item_name": "Passagem de onibus - Clickbus",
                                "amount": "21.25",
                                "currency_code": "BRL",
                                "button_subtype": "services",
                                "bn": "PP-BuyNowBF:btn_buynowCC_LG.gif:NonHosted",
                                "invoice": "132",
                                "custom": "pt",
                                "return": "http://api.clickbus.dev.br/api/v1/booking/payment?orderId=132",
                                "lc": "PT"
                            },
                            "postbackUrl": "http://my.host.com/postbackUrl",
                            "callbackUrl": "http://my.host.com/callbackUrl"
                        }
                    },
                    "items": [
                        {
                            "trip_id": "3000",
                            "context": "departure",
                            "order_item": "132",
                            "serviceClass": "Convencional",
                            "departure": {
                                "waypoint": "4016",
                                "schedule": {
                                    "id": "",
                                    "date": "2014-12-30",
                                    "time": "06:10",
                                    "timezone": "America/Sao_Paulo"
                                }
                            },
                            "arrival": {
                                "waypoint": "3935",
                                "schedule": {
                                    "id": "",
                                    "date": "2014-12-30",
                                    "time": "07:20",
                                    "timezone": "America/Sao_Paulo"
                                }
                            },
                            "seat": {
                                "id": "10",
                                "name": "10",
                                "price": "21.25",
                                "status": "reserved",
                                "currency": "BRL",
                                "type": {}
                            },
                            "passenger": {
                                "firstName": "Rafael Silveira",
                                "lastName": "",
                                "email": "teste@clickbus.com.br",
                                "document": "123.456.789-0",
                                "gender": "",
                                "birthday": "",
                                "meta": {}
                            },
                            "products": [],
                            "subtotal": "21.25"
                        }
                    ],
                    "createdAt": "2014-11-13"
                }
            }

### Update Order [PUT]

#### This method update an order status and is availiable only for allowed credentials
+ Headers
    Cookie: PHPSESSID=g1898g0ogdlh9f3mfra2hl3el3

+ Parameters
    + localizer (required, alphanumeric, "53347e09aee47") ... The given localizer in the order generation
    + status (required,alphanumeric,"confirmed") ... the new status to be updated
    
+ Request
        {
            "request" : {
                "localizer" : "53347e09aee47",
                "status":  "confirmed"
            }
        }
    
+ Response 202 (application/json)

        {
          "meta": {},
          "content": {
            "id": 123,
            "status": "pending",
            "localizer": "53347e09aee47",
            "payment": {
              "method": "creditcard",
              "total": 3900,
              "currency": "BRL",
              "status": "pending",
              "meta": {
                "card": "XXXX-XXXX-XXXX-1234",
                "code": "XXX",
                "name": "Klederson Bueno Bezerra da Silva",
                "expiration": "XXXX-XX"
              }
            },
            "items": [
              {
                "context" : "departure",
                "localizer" : "XPTO123",
                "trip_id": 123123123,
                "order_item": 1234,
                "departure": {
                  "waypoint": 113,
                  "schedule": {
                    "id": "FFDSAAA-ASDADS-AAADDFF-GGFFER3",
                    "date": "2014-10-31",
                    "time": "10:00",
                    "timezone": "America/Sao_Paulo"
                  }
                },
                "arrival": {
                  "waypoint": 123,
                  "schedule": {
                    "id": 15,
                    "date": "2014-10-31",
                    "time": "23:00",
                    "timezone": "America/Sao_Paulo"
                  }
                },
                "seat": {
                  "seatReservation" : "ADADSASD-ASDADS-AAADDFF-AASDASD",
                  "id": 14,
                  "name": "A01",
                  "price": 1000,
                  "status": "pending",
                  "currency": "BRL",
                  "type": {
                    "name": "Professor",
                    "discount": 0.9,
                    "id": 1
                  }
                },
                "passenger": {
                  "firstName": "Klederson",
                  "lastName": "Bueno",
                  "email": "dev@clickbus.com.br",
                  "document": "123.123.123-01",
                  "gender": "M",
                  "birthday": "1986-05-17",
                  "meta": {}
                },
                "products": [
                  {
                    "uuid": "abcd123s",
                    "name": "Potato Chips",
                    "quantity": 2,
                    "price": 500,
                    "currency": "BRL"
                  }
                ],
                "subtotal": 1900
              }
            ],
            "createdAt": "2010-10-30"
          }
        }