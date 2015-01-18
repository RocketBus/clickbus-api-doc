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
- Sign your actions with **Session**.

## **Groups**

# Group Search

## Get Avaliable Trips [/search]

The resource `/search` provides a list with all the information you need about any trips that you can find.

### Get Avaliable Trips [GET]

This method requires the following params:

|PARAMS|VALUE|DESCRIPTION|FORMAT|
|:----|:----|:----|:---:|
|from|string|A destination from where a trip starts.|`sao-paulo-jabaquara-sp`|
|to|string|A destination to where a trip ends.|`santos-sp`|
|departure|date|Any valid date, in format `yyyy-mm-dd`.|`2015-02-11`|

**Example**

    api/v1/search?from=sao-paulo-jabaquara-sp&to=santos-sp&departure=2015-02-11

The given route returns a list in JSON format with many details, as follow:

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
            }, {
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "3000",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwNjoxMC0tMTItLTMwMDAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                            "date": "2015-02-11",
                            "time": "06:10",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwNjoxMC0tMTItLTMwMDAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                            "date": "2015-02-11",
                            "time": "07:20",
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
                "name": "Expresso Luxo",
                    "id": "12"
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwNjoxMC0tMTItLTMwMDAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                        "date": "2015-02-11",
                        "time": "06:10",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwNjoxMC0tMTItLTMwMDAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                        "date": "2015-02-11",
                        "time": "06:10",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "2950",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwNjoyMC0tNy0tMjk1MC0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "06:20",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwNjoyMC0tNy0tMjk1MC0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "07:30",
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwNjoyMC0tNy0tMjk1MC0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "06:20",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwNjoyMC0tNy0tMjk1MC0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "06:20",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "2934",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwNjozMC0tNy0tMjkzNC0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "06:30",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwNjozMC0tNy0tMjkzNC0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "07:40",
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwNjozMC0tNy0tMjkzNC0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "06:30",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwNjozMC0tNy0tMjkzNC0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "06:30",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "3010",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwNzoxMC0tMTItLTMwMTAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                            "date": "2015-02-11",
                            "time": "07:10",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwNzoxMC0tMTItLTMwMTAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                            "date": "2015-02-11",
                            "time": "08:20",
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
                "name": "Expresso Luxo",
                    "id": "12"
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwNzoxMC0tMTItLTMwMTAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                        "date": "2015-02-11",
                        "time": "07:10",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwNzoxMC0tMTItLTMwMTAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                        "date": "2015-02-11",
                        "time": "07:10",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "2951",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwNzoyMC0tNy0tMjk1MS0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "07:20",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwNzoyMC0tNy0tMjk1MS0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "08:30",
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwNzoyMC0tNy0tMjk1MS0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "07:20",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwNzoyMC0tNy0tMjk1MS0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "07:20",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "3122",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwNzozMC0tNy0tMzEyMi0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "07:30",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwNzozMC0tNy0tMzEyMi0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "08:40",
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwNzozMC0tNy0tMzEyMi0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "07:30",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwNzozMC0tNy0tMzEyMi0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "07:30",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "2952",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwODowMC0tNy0tMjk1Mi0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "08:00",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwODowMC0tNy0tMjk1Mi0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "09:10",
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwODowMC0tNy0tMjk1Mi0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "08:00",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwODowMC0tNy0tMjk1Mi0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "08:00",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "3130",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwODozMC0tMTItLTMxMzAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                            "date": "2015-02-11",
                            "time": "08:30",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwODozMC0tMTItLTMxMzAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                            "date": "2015-02-11",
                            "time": "09:40",
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
                "name": "Expresso Luxo",
                    "id": "12"
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwODozMC0tMTItLTMxMzAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                        "date": "2015-02-11",
                        "time": "08:30",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwODozMC0tMTItLTMxMzAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                        "date": "2015-02-11",
                        "time": "08:30",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "2936",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwOTowMC0tNy0tMjkzNi0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "09:00",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwOTowMC0tNy0tMjkzNi0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "10:10",
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwOTowMC0tNy0tMjkzNi0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "09:00",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwOTowMC0tNy0tMjkzNi0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "09:00",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "2953",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwOTozMC0tNy0tMjk1My0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "09:30",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwOTozMC0tNy0tMjk1My0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "10:40",
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwOTozMC0tNy0tMjk1My0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "09:30",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwOTozMC0tNy0tMjk1My0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "09:30",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "3030",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMDowMC0tMTItLTMwMzAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                            "date": "2015-02-11",
                            "time": "10:00",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMDowMC0tMTItLTMwMzAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                            "date": "2015-02-11",
                            "time": "11:10",
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
                "name": "Expresso Luxo",
                    "id": "12"
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMDowMC0tMTItLTMwMzAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                        "date": "2015-02-11",
                        "time": "10:00",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMDowMC0tMTItLTMwMzAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                        "date": "2015-02-11",
                        "time": "10:00",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "3123",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMDozMC0tNy0tMzEyMy0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "10:30",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMDozMC0tNy0tMzEyMy0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "11:40",
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMDozMC0tNy0tMzEyMy0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "10:30",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMDozMC0tNy0tMzEyMy0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "10:30",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "2954",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMDo0NS0tNy0tMjk1NC0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "10:45",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMDo0NS0tNy0tMjk1NC0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "11:55",
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMDo0NS0tNy0tMjk1NC0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "10:45",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMDo0NS0tNy0tMjk1NC0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "10:45",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "2937",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMTozMC0tNy0tMjkzNy0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "11:30",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMTozMC0tNy0tMjkzNy0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "12:40",
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMTozMC0tNy0tMjkzNy0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "11:30",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMTozMC0tNy0tMjkzNy0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "11:30",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "2955",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMTo0MC0tNy0tMjk1NS0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "11:40",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMTo0MC0tNy0tMjk1NS0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "12:50",
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMTo0MC0tNy0tMjk1NS0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "11:40",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMTo0MC0tNy0tMjk1NS0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "11:40",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "3140",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMjoxMC0tMTItLTMxNDAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                            "date": "2015-02-11",
                            "time": "12:10",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMjoxMC0tMTItLTMxNDAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                            "date": "2015-02-11",
                            "time": "13:20",
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
                "name": "Expresso Luxo",
                    "id": "12"
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMjoxMC0tMTItLTMxNDAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                        "date": "2015-02-11",
                        "time": "12:10",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMjoxMC0tMTItLTMxNDAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                        "date": "2015-02-11",
                        "time": "12:10",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "2938",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMjozMC0tNy0tMjkzOC0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "12:30",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMjozMC0tNy0tMjkzOC0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "13:40",
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMjozMC0tNy0tMjkzOC0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "12:30",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMjozMC0tNy0tMjkzOC0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "12:30",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "2956",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMjo0MC0tNy0tMjk1Ni0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "12:40",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMjo0MC0tNy0tMjk1Ni0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "13:50",
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMjo0MC0tNy0tMjk1Ni0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "12:40",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMjo0MC0tNy0tMjk1Ni0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "12:40",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "3050",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMzoxMC0tMTItLTMwNTAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                            "date": "2015-02-11",
                            "time": "13:10",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMzoxMC0tMTItLTMwNTAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                            "date": "2015-02-11",
                            "time": "14:20",
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
                "name": "Expresso Luxo",
                    "id": "12"
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMzoxMC0tMTItLTMwNTAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                        "date": "2015-02-11",
                        "time": "13:10",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMzoxMC0tMTItLTMwNTAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                        "date": "2015-02-11",
                        "time": "13:10",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "2957",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMzoyMC0tNy0tMjk1Ny0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "13:20",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMzoyMC0tNy0tMjk1Ny0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "14:30",
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMzoyMC0tNy0tMjk1Ny0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "13:20",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMzoyMC0tNy0tMjk1Ny0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "13:20",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "3186",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMzozMC0tNy0tMzE4Ni0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "13:30",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMzozMC0tNy0tMzE4Ni0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "14:40",
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMzozMC0tNy0tMzE4Ni0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "13:30",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxMzozMC0tNy0tMzE4Ni0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "13:30",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "3060",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNDoxNS0tMTItLTMwNjAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                            "date": "2015-02-11",
                            "time": "14:15",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNDoxNS0tMTItLTMwNjAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                            "date": "2015-02-11",
                            "time": "15:25",
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
                "name": "Expresso Luxo",
                    "id": "12"
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNDoxNS0tMTItLTMwNjAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                        "date": "2015-02-11",
                        "time": "14:15",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNDoxNS0tMTItLTMwNjAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                        "date": "2015-02-11",
                        "time": "14:15",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "2958",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNDozMC0tNy0tMjk1OC0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "14:30",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNDozMC0tNy0tMjk1OC0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "15:40",
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNDozMC0tNy0tMjk1OC0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "14:30",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNDozMC0tNy0tMjk1OC0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "14:30",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "2939",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNDo0NS0tNy0tMjkzOS0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "14:45",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNDo0NS0tNy0tMjkzOS0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "15:55",
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNDo0NS0tNy0tMjkzOS0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "14:45",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNDo0NS0tNy0tMjkzOS0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "14:45",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "3070",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNToxNS0tMTItLTMwNzAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                            "date": "2015-02-11",
                            "time": "15:15",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNToxNS0tMTItLTMwNzAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                            "date": "2015-02-11",
                            "time": "16:25",
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
                "name": "Expresso Luxo",
                    "id": "12"
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNToxNS0tMTItLTMwNzAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                        "date": "2015-02-11",
                        "time": "15:15",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNToxNS0tMTItLTMwNzAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                        "date": "2015-02-11",
                        "time": "15:15",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "2959",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNTo0NS0tNy0tMjk1OS0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "15:45",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNTo0NS0tNy0tMjk1OS0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "16:55",
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNTo0NS0tNy0tMjk1OS0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "15:45",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNTo0NS0tNy0tMjk1OS0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "15:45",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "3124",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNjowMC0tNy0tMzEyNC0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "16:00",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNjowMC0tNy0tMzEyNC0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "17:10",
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNjowMC0tNy0tMzEyNC0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "16:00",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNjowMC0tNy0tMzEyNC0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "16:00",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "3080",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNjoxNS0tMTItLTMwODAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                            "date": "2015-02-11",
                            "time": "16:15",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNjoxNS0tMTItLTMwODAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                            "date": "2015-02-11",
                            "time": "17:25",
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
                "name": "Expresso Luxo",
                    "id": "12"
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNjoxNS0tMTItLTMwODAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                        "date": "2015-02-11",
                        "time": "16:15",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNjoxNS0tMTItLTMwODAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                        "date": "2015-02-11",
                        "time": "16:15",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "2940",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNzowMC0tNy0tMjk0MC0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "17:00",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNzowMC0tNy0tMjk0MC0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "18:10",
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNzowMC0tNy0tMjk0MC0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "17:00",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNzowMC0tNy0tMjk0MC0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "17:00",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "3090",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNzoxMC0tMTItLTMwOTAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                            "date": "2015-02-11",
                            "time": "17:10",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNzoxMC0tMTItLTMwOTAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                            "date": "2015-02-11",
                            "time": "18:20",
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
                "name": "Expresso Luxo",
                    "id": "12"
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNzoxMC0tMTItLTMwOTAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                        "date": "2015-02-11",
                        "time": "17:10",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNzoxMC0tMTItLTMwOTAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                        "date": "2015-02-11",
                        "time": "17:10",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "2960",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNzozMC0tNy0tMjk2MC0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "17:30",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNzozMC0tNy0tMjk2MC0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "18:40",
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNzozMC0tNy0tMjk2MC0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "17:30",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNzozMC0tNy0tMjk2MC0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "17:30",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "2941",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNzo0MC0tNy0tMjk0MS0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "17:40",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNzo0MC0tNy0tMjk0MS0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "18:50",
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNzo0MC0tNy0tMjk0MS0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "17:40",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxNzo0MC0tNy0tMjk0MS0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "17:40",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "3100",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxODoxMC0tMTItLTMxMDAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                            "date": "2015-02-11",
                            "time": "18:10",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxODoxMC0tMTItLTMxMDAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                            "date": "2015-02-11",
                            "time": "19:20",
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
                "name": "Expresso Luxo",
                    "id": "12"
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxODoxMC0tMTItLTMxMDAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                        "date": "2015-02-11",
                        "time": "18:10",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxODoxMC0tMTItLTMxMDAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                        "date": "2015-02-11",
                        "time": "18:10",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "2942",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxODozMC0tNy0tMjk0Mi0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "18:30",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxODozMC0tNy0tMjk0Mi0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "19:40",
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxODozMC0tNy0tMjk0Mi0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "18:30",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxODozMC0tNy0tMjk0Mi0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "18:30",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "2961",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxODo1MC0tNy0tMjk2MS0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "18:50",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxODo1MC0tNy0tMjk2MS0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "20:00",
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxODo1MC0tNy0tMjk2MS0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "18:50",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxODo1MC0tNy0tMjk2MS0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "18:50",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "3110",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxOToxMC0tMTItLTMxMTAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                            "date": "2015-02-11",
                            "time": "19:10",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxOToxMC0tMTItLTMxMTAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                            "date": "2015-02-11",
                            "time": "20:20",
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
                "name": "Expresso Luxo",
                    "id": "12"
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxOToxMC0tMTItLTMxMTAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                        "date": "2015-02-11",
                        "time": "19:10",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxOToxMC0tMTItLTMxMTAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                        "date": "2015-02-11",
                        "time": "19:10",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "2962",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxOToyMC0tNy0tMjk2Mi0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "19:20",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxOToyMC0tNy0tMjk2Mi0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "20:30",
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxOToyMC0tNy0tMjk2Mi0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "19:20",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxOToyMC0tNy0tMjk2Mi0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "19:20",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "3187",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxOTozMC0tNy0tMzE4Ny0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "19:30",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxOTozMC0tNy0tMzE4Ny0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "20:40",
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxOTozMC0tNy0tMzE4Ny0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "19:30",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxOTozMC0tNy0tMzE4Ny0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "19:30",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "2963",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxOTo1MC0tNy0tMjk2My0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "19:50",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxOTo1MC0tNy0tMjk2My0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "21:00",
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxOTo1MC0tNy0tMjk2My0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "19:50",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAxOTo1MC0tNy0tMjk2My0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "19:50",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "3120",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAyMDoxNS0tMTItLTMxMjAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                            "date": "2015-02-11",
                            "time": "20:15",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAyMDoxNS0tMTItLTMxMjAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                            "date": "2015-02-11",
                            "time": "21:25",
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
                "name": "Expresso Luxo",
                    "id": "12"
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAyMDoxNS0tMTItLTMxMjAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                        "date": "2015-02-11",
                        "time": "20:15",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAyMDoxNS0tMTItLTMxMjAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                        "date": "2015-02-11",
                        "time": "20:15",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "3125",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAyMDozMC0tNy0tMzEyNS0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "20:30",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAyMDozMC0tNy0tMzEyNS0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "21:40",
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAyMDozMC0tNy0tMzEyNS0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "20:30",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAyMDozMC0tNy0tMzEyNS0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "20:30",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "2964",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAyMDo0NS0tNy0tMjk2NC0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "20:45",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAyMDo0NS0tNy0tMjk2NC0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "21:55",
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAyMDo0NS0tNy0tMjk2NC0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "20:45",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAyMDo0NS0tNy0tMjk2NC0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "20:45",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "3170",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAyMTozMC0tMTItLTMxNzAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                            "date": "2015-02-11",
                            "time": "21:30",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAyMTozMC0tMTItLTMxNzAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                            "date": "2015-02-11",
                            "time": "22:40",
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
                "name": "Expresso Luxo",
                    "id": "12"
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAyMTozMC0tMTItLTMxNzAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                        "date": "2015-02-11",
                        "time": "21:30",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAyMTozMC0tMTItLTMxNzAtLTEtLTEtLTEtLVJPRE9WSUFSSU8=",
                        "date": "2015-02-11",
                        "time": "21:30",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "2943",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAyMTo0NS0tNy0tMjk0My0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "21:45",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAyMTo0NS0tNy0tMjk0My0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "22:55",
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAyMTo0NS0tNy0tMjk0My0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "21:45",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAyMTo0NS0tNy0tMjk0My0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "21:45",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "2965",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAyMjoxNS0tNy0tMjk2NS0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "22:15",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAyMjoxNS0tNy0tMjk2NS0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "23:25",
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAyMjoxNS0tNy0tMjk2NS0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "22:15",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAyMjoxNS0tNy0tMjk2NS0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "22:15",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "2966",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAyMzowMC0tNy0tMjk2Ni0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "23:00",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAyMzowMC0tNy0tMjk2Ni0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-12",
                            "time": "00:10",
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAyMzowMC0tNy0tMjk2Ni0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "23:00",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAyMzowMC0tNy0tMjk2Ni0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "23:00",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "2944",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAyMzoxNS0tNy0tMjk0NC0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "23:15",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAyMzoxNS0tNy0tMjk0NC0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-12",
                            "time": "00:25",
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAyMzoxNS0tNy0tMjk0NC0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "23:15",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAyMzoxNS0tNy0tMjk0NC0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "23:15",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "2945",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAyMzo0NS0tNy0tMjk0NS0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "23:45",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAyMzo0NS0tNy0tMjk0NS0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-12",
                            "time": "00:55",
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAyMzo0NS0tNy0tMjk0NS0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "23:45",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAyMzo0NS0tNy0tMjk0NS0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "23:45",
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
    }

    , {
        "from": "Sao Paulo, SP - Jabaquara",
            "to": "Santos, SP",
            "parts": [{
            "trip_id": "2933",
                "departure": {
                "price": "2191",
                    "waypoint": {
                    "id": "4016",
                        "prices": [{
                        "waypoint": "3935",
                            "price": "2191"
                    }],
                        "schedule": {
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAyMzo1OS0tNy0tMjkzMy0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-11",
                            "time": "23:59",
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
                        "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAyMzo1OS0tNy0tMjkzMy0tMS0tMS0tMS0tQ09OVg==",
                            "date": "2015-02-12",
                            "time": "01:10",
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
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAyMzo1OS0tNy0tMjkzMy0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "23:59",
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
            }, {
                "id": "3935",
                    "prices": [{
                    "waypoint": "",
                        "price": "2191"
                }],
                    "schedule": {
                    "id": "NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAyMzo1OS0tNy0tMjkzMy0tMS0tMS0tMS0tQ09OVg==",
                        "date": "2015-02-11",
                        "time": "23:59",
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
    }

    ]
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