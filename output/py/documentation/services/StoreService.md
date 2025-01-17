# StoreService

A list of all methods in the `StoreService` service. Click on the method name to view detailed information about that method.

| Methods                             | Description                                                                                                        |
| :---------------------------------- | :----------------------------------------------------------------------------------------------------------------- |
| [get_inventory](#get_inventory)     | Returns a map of status codes to quantities                                                                        |
| [place_order](#place_order)         | Place a new order in the store                                                                                     |
| [get_order_by_id](#get_order_by_id) | For valid response try integer IDs with value \<= 5 or \> 10. Other values will generate exceptions.               |
| [delete_order](#delete_order)       | For valid response try integer IDs with value \< 1000. Anything above 1000 or nonintegers will generate API errors |

## get_inventory

Returns a map of status codes to quantities

- HTTP Method: `GET`
- Endpoint: `/store/inventory`

**Return Type**

`dict`

**Example Usage Code Snippet**

```python
from swagger_petstore_open_api_3_0 import SwaggerPetstoreOpenApi3_0

sdk = SwaggerPetstoreOpenApi3_0(
    access_token="YOUR_ACCESS_TOKEN",
    timeout=10000
)

result = sdk.store.get_inventory()

print(result)
```

## place_order

Place a new order in the store

- HTTP Method: `POST`
- Endpoint: `/store/order`

**Parameters**

| Name         | Type                        | Required | Description       |
| :----------- | :-------------------------- | :------- | :---------------- |
| request_body | [Order](../models/Order.md) | ❌       | The request body. |

**Return Type**

`Order`

**Example Usage Code Snippet**

```python
from swagger_petstore_open_api_3_0 import SwaggerPetstoreOpenApi3_0
from swagger_petstore_open_api_3_0.models import Order

sdk = SwaggerPetstoreOpenApi3_0(
    access_token="YOUR_ACCESS_TOKEN",
    timeout=10000
)

request_body = Order(
    id_=10,
    pet_id=198772,
    quantity=7,
    ship_date="shipDate",
    status="placed",
    complete=True
)

result = sdk.store.place_order(request_body=request_body)

print(result)
```

## get_order_by_id

For valid response try integer IDs with value \<= 5 or \> 10. Other values will generate exceptions.

- HTTP Method: `GET`
- Endpoint: `/store/order/{orderId}`

**Parameters**

| Name     | Type | Required | Description                          |
| :------- | :--- | :------- | :----------------------------------- |
| order_id | int  | ✅       | ID of order that needs to be fetched |

**Return Type**

`str`

**Example Usage Code Snippet**

```python
from swagger_petstore_open_api_3_0 import SwaggerPetstoreOpenApi3_0

sdk = SwaggerPetstoreOpenApi3_0(
    access_token="YOUR_ACCESS_TOKEN",
    timeout=10000
)

result = sdk.store.get_order_by_id(order_id=7)

with open("output-file.ext", "w") as f:
    f.write(result)
```

## delete_order

For valid response try integer IDs with value \< 1000. Anything above 1000 or nonintegers will generate API errors

- HTTP Method: `DELETE`
- Endpoint: `/store/order/{orderId}`

**Parameters**

| Name     | Type | Required | Description                              |
| :------- | :--- | :------- | :--------------------------------------- |
| order_id | int  | ✅       | ID of the order that needs to be deleted |

**Example Usage Code Snippet**

```python
from swagger_petstore_open_api_3_0 import SwaggerPetstoreOpenApi3_0

sdk = SwaggerPetstoreOpenApi3_0(
    access_token="YOUR_ACCESS_TOKEN",
    timeout=10000
)

result = sdk.store.delete_order(order_id=1)

print(result)
```

<!-- This file was generated by liblab | https://liblab.com/ -->
