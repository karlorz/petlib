# UserService

A list of all methods in the `UserService` service. Click on the method name to view detailed information about that method.

| Methods                                               | Description                                  |
| :---------------------------------------------------- | :------------------------------------------- |
| [createUser](#createuser)                             | This can only be done by the logged in user. |
| [createUsersWithListInput](#createuserswithlistinput) | Creates list of users with given input array |
| [loginUser](#loginuser)                               |                                              |
| [logoutUser](#logoutuser)                             |                                              |
| [getUserByName](#getuserbyname)                       |                                              |
| [updateUser](#updateuser)                             | This can only be done by the logged in user. |
| [deleteUser](#deleteuser)                             | This can only be done by the logged in user. |

## createUser

This can only be done by the logged in user.

- HTTP Method: `POST`
- Endpoint: `/user`

**Parameters**

| Name | Type                      | Required | Description       |
| :--- | :------------------------ | :------- | :---------------- |
| body | [User](../models/User.md) | ❌       | The request body. |

**Example Usage Code Snippet**

```typescript
import { SwaggerPetstoreOpenApi3_0, User } from 'swaggerpetstore';

(async () => {
  const swaggerPetstoreOpenApi3_0 = new SwaggerPetstoreOpenApi3_0({
    token: 'YOUR_TOKEN',
  });

  const user: User = {
    id: 10,
    username: 'theUser',
    firstName: 'John',
    lastName: 'James',
    email: 'john@email.com',
    password: '12345',
    phone: '12345',
    userStatus: 1,
  };

  const { data } = await swaggerPetstoreOpenApi3_0.user.createUser(user);

  console.log(data);
})();
```

## createUsersWithListInput

Creates list of users with given input array

- HTTP Method: `POST`
- Endpoint: `/user/createWithList`

**Parameters**

| Name | Type                        | Required | Description       |
| :--- | :-------------------------- | :------- | :---------------- |
| body | [User[]](../models/User.md) | ❌       | The request body. |

**Return Type**

`User`

**Example Usage Code Snippet**

```typescript
import { SwaggerPetstoreOpenApi3_0 } from 'swaggerpetstore';

(async () => {
  const swaggerPetstoreOpenApi3_0 = new SwaggerPetstoreOpenApi3_0({
    token: 'YOUR_TOKEN',
  });

  const { data } = await swaggerPetstoreOpenApi3_0.user.createUsersWithListInput();

  console.log(data);
})();
```

## loginUser

- HTTP Method: `GET`
- Endpoint: `/user/login`

**Parameters**

| Name     | Type   | Required | Description                          |
| :------- | :----- | :------- | :----------------------------------- |
| username | string | ❌       | The user name for login              |
| password | string | ❌       | The password for login in clear text |

**Return Type**

`string`

**Example Usage Code Snippet**

```typescript
import { SwaggerPetstoreOpenApi3_0 } from 'swaggerpetstore';

(async () => {
  const swaggerPetstoreOpenApi3_0 = new SwaggerPetstoreOpenApi3_0({
    token: 'YOUR_TOKEN',
  });

  const { data } = await swaggerPetstoreOpenApi3_0.user.loginUser({
    username: 'username',
    password: 'password',
  });

  console.log(data);
})();
```

## logoutUser

- HTTP Method: `GET`
- Endpoint: `/user/logout`

**Example Usage Code Snippet**

```typescript
import { SwaggerPetstoreOpenApi3_0 } from 'swaggerpetstore';

(async () => {
  const swaggerPetstoreOpenApi3_0 = new SwaggerPetstoreOpenApi3_0({
    token: 'YOUR_TOKEN',
  });

  const { data } = await swaggerPetstoreOpenApi3_0.user.logoutUser();

  console.log(data);
})();
```

## getUserByName

- HTTP Method: `GET`
- Endpoint: `/user/{username}`

**Parameters**

| Name     | Type   | Required | Description                                               |
| :------- | :----- | :------- | :-------------------------------------------------------- |
| username | string | ✅       | The name that needs to be fetched. Use user1 for testing. |

**Return Type**

`User`

**Example Usage Code Snippet**

```typescript
import { SwaggerPetstoreOpenApi3_0 } from 'swaggerpetstore';

(async () => {
  const swaggerPetstoreOpenApi3_0 = new SwaggerPetstoreOpenApi3_0({
    token: 'YOUR_TOKEN',
  });

  const { data } = await swaggerPetstoreOpenApi3_0.user.getUserByName('username');

  console.log(data);
})();
```

## updateUser

This can only be done by the logged in user.

- HTTP Method: `PUT`
- Endpoint: `/user/{username}`

**Parameters**

| Name     | Type                      | Required | Description                   |
| :------- | :------------------------ | :------- | :---------------------------- |
| body     | [User](../models/User.md) | ❌       | The request body.             |
| username | string                    | ✅       | name that needs to be updated |

**Example Usage Code Snippet**

```typescript
import { SwaggerPetstoreOpenApi3_0, User } from 'swaggerpetstore';

(async () => {
  const swaggerPetstoreOpenApi3_0 = new SwaggerPetstoreOpenApi3_0({
    token: 'YOUR_TOKEN',
  });

  const user: User = {
    id: 10,
    username: 'theUser',
    firstName: 'John',
    lastName: 'James',
    email: 'john@email.com',
    password: '12345',
    phone: '12345',
    userStatus: 1,
  };

  const { data } = await swaggerPetstoreOpenApi3_0.user.updateUser('username', user);

  console.log(data);
})();
```

## deleteUser

This can only be done by the logged in user.

- HTTP Method: `DELETE`
- Endpoint: `/user/{username}`

**Parameters**

| Name     | Type   | Required | Description                       |
| :------- | :----- | :------- | :-------------------------------- |
| username | string | ✅       | The name that needs to be deleted |

**Example Usage Code Snippet**

```typescript
import { SwaggerPetstoreOpenApi3_0 } from 'swaggerpetstore';

(async () => {
  const swaggerPetstoreOpenApi3_0 = new SwaggerPetstoreOpenApi3_0({
    token: 'YOUR_TOKEN',
  });

  const { data } = await swaggerPetstoreOpenApi3_0.user.deleteUser('username');

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
