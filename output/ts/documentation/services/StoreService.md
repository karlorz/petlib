# StoreService

A list of all methods in the `StoreService` service. Click on the method name to view detailed information about that method.

| Methods                       | Description                                                                                                        |
| :---------------------------- | :----------------------------------------------------------------------------------------------------------------- |
| [getInventory](#getinventory) | Returns a map of status codes to quantities                                                                        |
| [placeOrder](#placeorder)     | Place a new order in the store                                                                                     |
| [getOrderById](#getorderbyid) | For valid response try integer IDs with value \<= 5 or \> 10. Other values will generate exceptions.               |
| [deleteOrder](#deleteorder)   | For valid response try integer IDs with value \< 1000. Anything above 1000 or nonintegers will generate API errors |

## getInventory

Returns a map of status codes to quantities

- HTTP Method: `GET`
- Endpoint: `/store/inventory`

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { SwaggerPetstoreOpenApi3_0 } from 'swaggerpetstore';

(async () => {
  const swaggerPetstoreOpenApi3_0 = new SwaggerPetstoreOpenApi3_0({
    token: 'YOUR_TOKEN',
  });

  const { data } = await swaggerPetstoreOpenApi3_0.store.getInventory();

  console.log(data);
})();
```

## placeOrder

Place a new order in the store

- HTTP Method: `POST`
- Endpoint: `/store/order`

**Parameters**

| Name | Type                        | Required | Description       |
| :--- | :-------------------------- | :------- | :---------------- |
| body | [Order](../models/Order.md) | ❌       | The request body. |

**Return Type**

`Order`

**Example Usage Code Snippet**

```typescript
import { Order, SwaggerPetstoreOpenApi3_0 } from 'swaggerpetstore';

(async () => {
  const swaggerPetstoreOpenApi3_0 = new SwaggerPetstoreOpenApi3_0({
    token: 'YOUR_TOKEN',
  });

  const orderStatus = 'placed';

  const order: Order = {
    id: 10,
    petId: 198772,
    quantity: 7,
    shipDate: 'shipDate',
    status: orderStatus,
    complete: true,
  };

  const { data } = await swaggerPetstoreOpenApi3_0.store.placeOrder(order);

  console.log(data);
})();
```

## getOrderById

For valid response try integer IDs with value \<= 5 or \> 10. Other values will generate exceptions.

- HTTP Method: `GET`
- Endpoint: `/store/order/{orderId}`

**Parameters**

| Name    | Type   | Required | Description                          |
| :------ | :----- | :------- | :----------------------------------- |
| orderId | number | ✅       | ID of order that needs to be fetched |

**Return Type**

`Order`

**Example Usage Code Snippet**

```typescript
import { SwaggerPetstoreOpenApi3_0 } from 'swaggerpetstore';

(async () => {
  const swaggerPetstoreOpenApi3_0 = new SwaggerPetstoreOpenApi3_0({
    token: 'YOUR_TOKEN',
  });

  const { data } = await swaggerPetstoreOpenApi3_0.store.getOrderById(7);

  console.log(data);
})();
```

## deleteOrder

For valid response try integer IDs with value \< 1000. Anything above 1000 or nonintegers will generate API errors

- HTTP Method: `DELETE`
- Endpoint: `/store/order/{orderId}`

**Parameters**

| Name    | Type   | Required | Description                              |
| :------ | :----- | :------- | :--------------------------------------- |
| orderId | number | ✅       | ID of the order that needs to be deleted |

**Example Usage Code Snippet**

```typescript
import { SwaggerPetstoreOpenApi3_0 } from 'swaggerpetstore';

(async () => {
  const swaggerPetstoreOpenApi3_0 = new SwaggerPetstoreOpenApi3_0({
    token: 'YOUR_TOKEN',
  });

  const { data } = await swaggerPetstoreOpenApi3_0.store.deleteOrder(1);

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
