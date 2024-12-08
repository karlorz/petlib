# UserService

A list of all methods in the `UserService` service. Click on the method name to view detailed information about that method.

| Methods                                                       | Description                                  |
| :------------------------------------------------------------ | :------------------------------------------- |
| [create_user](#create_user)                                   | This can only be done by the logged in user. |
| [create_users_with_list_input](#create_users_with_list_input) | Creates list of users with given input array |
| [login_user](#login_user)                                     |                                              |
| [logout_user](#logout_user)                                   |                                              |
| [get_user_by_name](#get_user_by_name)                         |                                              |
| [update_user](#update_user)                                   | This can only be done by the logged in user. |
| [delete_user](#delete_user)                                   | This can only be done by the logged in user. |

## create_user

This can only be done by the logged in user.

- HTTP Method: `POST`
- Endpoint: `/user`

**Parameters**

| Name         | Type                      | Required | Description       |
| :----------- | :------------------------ | :------- | :---------------- |
| request_body | [User](../models/User.md) | ❌       | The request body. |

**Example Usage Code Snippet**

```python
from swagger_petstore_open_api_3_0 import SwaggerPetstoreOpenApi3_0
from swagger_petstore_open_api_3_0.models import User

sdk = SwaggerPetstoreOpenApi3_0(
    access_token="YOUR_ACCESS_TOKEN",
    timeout=10000
)

request_body = User(
    id_=10,
    username="theUser",
    first_name="John",
    last_name="James",
    email="john@email.com",
    password="12345",
    phone="12345",
    user_status=1
)

result = sdk.user.create_user(request_body=request_body)

print(result)
```

## create_users_with_list_input

Creates list of users with given input array

- HTTP Method: `POST`
- Endpoint: `/user/createWithList`

**Parameters**

| Name         | Type                            | Required | Description       |
| :----------- | :------------------------------ | :------- | :---------------- |
| request_body | [List[User]](../models/User.md) | ❌       | The request body. |

**Return Type**

`str`

**Example Usage Code Snippet**

```python
from swagger_petstore_open_api_3_0 import SwaggerPetstoreOpenApi3_0

sdk = SwaggerPetstoreOpenApi3_0(
    access_token="YOUR_ACCESS_TOKEN",
    timeout=10000
)

request_body = [
    {
        "id_": 10,
        "username": "theUser",
        "first_name": "John",
        "last_name": "James",
        "email": "john@email.com",
        "password": "12345",
        "phone": "12345",
        "user_status": 1
    }
]

result = sdk.user.create_users_with_list_input(request_body=request_body)

with open("output-file.ext", "w") as f:
    f.write(result)
```

## login_user

- HTTP Method: `GET`
- Endpoint: `/user/login`

**Parameters**

| Name     | Type | Required | Description                          |
| :------- | :--- | :------- | :----------------------------------- |
| username | str  | ❌       | The user name for login              |
| password | str  | ❌       | The password for login in clear text |

**Return Type**

`str`

**Example Usage Code Snippet**

```python
from swagger_petstore_open_api_3_0 import SwaggerPetstoreOpenApi3_0

sdk = SwaggerPetstoreOpenApi3_0(
    access_token="YOUR_ACCESS_TOKEN",
    timeout=10000
)

result = sdk.user.login_user(
    username="username",
    password="password"
)

with open("output-file.ext", "w") as f:
    f.write(result)
```

## logout_user

- HTTP Method: `GET`
- Endpoint: `/user/logout`

**Example Usage Code Snippet**

```python
from swagger_petstore_open_api_3_0 import SwaggerPetstoreOpenApi3_0

sdk = SwaggerPetstoreOpenApi3_0(
    access_token="YOUR_ACCESS_TOKEN",
    timeout=10000
)

result = sdk.user.logout_user()

print(result)
```

## get_user_by_name

- HTTP Method: `GET`
- Endpoint: `/user/{username}`

**Parameters**

| Name     | Type | Required | Description                                               |
| :------- | :--- | :------- | :-------------------------------------------------------- |
| username | str  | ✅       | The name that needs to be fetched. Use user1 for testing. |

**Return Type**

`str`

**Example Usage Code Snippet**

```python
from swagger_petstore_open_api_3_0 import SwaggerPetstoreOpenApi3_0

sdk = SwaggerPetstoreOpenApi3_0(
    access_token="YOUR_ACCESS_TOKEN",
    timeout=10000
)

result = sdk.user.get_user_by_name(username="username")

with open("output-file.ext", "w") as f:
    f.write(result)
```

## update_user

This can only be done by the logged in user.

- HTTP Method: `PUT`
- Endpoint: `/user/{username}`

**Parameters**

| Name         | Type                      | Required | Description                   |
| :----------- | :------------------------ | :------- | :---------------------------- |
| request_body | [User](../models/User.md) | ❌       | The request body.             |
| username     | str                       | ✅       | name that needs to be updated |

**Example Usage Code Snippet**

```python
from swagger_petstore_open_api_3_0 import SwaggerPetstoreOpenApi3_0
from swagger_petstore_open_api_3_0.models import User

sdk = SwaggerPetstoreOpenApi3_0(
    access_token="YOUR_ACCESS_TOKEN",
    timeout=10000
)

request_body = User(
    id_=10,
    username="theUser",
    first_name="John",
    last_name="James",
    email="john@email.com",
    password="12345",
    phone="12345",
    user_status=1
)

result = sdk.user.update_user(
    request_body=request_body,
    username="username"
)

print(result)
```

## delete_user

This can only be done by the logged in user.

- HTTP Method: `DELETE`
- Endpoint: `/user/{username}`

**Parameters**

| Name     | Type | Required | Description                       |
| :------- | :--- | :------- | :-------------------------------- |
| username | str  | ✅       | The name that needs to be deleted |

**Example Usage Code Snippet**

```python
from swagger_petstore_open_api_3_0 import SwaggerPetstoreOpenApi3_0

sdk = SwaggerPetstoreOpenApi3_0(
    access_token="YOUR_ACCESS_TOKEN",
    timeout=10000
)

result = sdk.user.delete_user(username="username")

print(result)
```

<!-- This file was generated by liblab | https://liblab.com/ -->
