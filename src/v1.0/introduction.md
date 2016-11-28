# Clickbus Public API

<!-- include(../versions.md) -->

**Version: 1.0**

This is the documentation and samples for Clickbus Public API. Also this can be used as mocked data to simply test API integration.

In this documentation you may find both how to integrate with Clickbus API for any country avaliable in Clickbus Portifolio but also use as a guideline to create your own Booking engine and submit to us to quickly implement your services and start selling your bus services as well using clickbus (contacto@clickbus.com.mx for more commercial details).

### **Overview**

Below are the topic Groups to perform every task for your applications:

- Obtain a list with all **Places**;
- Search any of our **Trips**;
- Get all information about the available **Payment** methods;
- Obtain **Trip Details** from each route;
- **Seat Block** to lock or unlock seat reservations;
- **Booking** orders;
- Sign your actions with an ID provided by **Session**.

# API Reference

## **Predicates**

1. All sucessfull requests return a **20*** Response header;
2. The params **store**, **model** and **platform** are created for each partner. To obtain these credentials, please contact our commercial department at contacto@clickbus.com.mx.