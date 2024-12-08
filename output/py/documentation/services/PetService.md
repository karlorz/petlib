# PetService

A list of all methods in the `PetService` service. Click on the method name to view detailed information about that method.

| Methods                                       | Description                                                                                   |
| :-------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| [add_pet](#add_pet)                           | Add a new pet to the store                                                                    |
| [update_pet](#update_pet)                     | Update an existing pet by Id                                                                  |
| [find_pets_by_status](#find_pets_by_status)   | Multiple status values can be provided with comma separated strings                           |
| [find_pets_by_tags](#find_pets_by_tags)       | Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing. |
| [get_pet_by_id](#get_pet_by_id)               | Returns a single pet                                                                          |
| [update_pet_with_form](#update_pet_with_form) |                                                                                               |
| [delete_pet](#delete_pet)                     |                                                                                               |
| [upload_file](#upload_file)                   |                                                                                               |

## add_pet

Add a new pet to the store

- HTTP Method: `POST`
- Endpoint: `/pet`

**Parameters**

| Name         | Type                    | Required | Description       |
| :----------- | :---------------------- | :------- | :---------------- |
| request_body | [Pet](../models/Pet.md) | ✅       | The request body. |

**Return Type**

`str`

**Example Usage Code Snippet**

```python
from swagger_petstore_open_api_3_0 import SwaggerPetstoreOpenApi3_0
from swagger_petstore_open_api_3_0.models import Pet

sdk = SwaggerPetstoreOpenApi3_0(
    access_token="YOUR_ACCESS_TOKEN",
    timeout=10000
)

request_body = Pet(
    id_=10,
    name="doggie",
    category={
        "id_": 1,
        "name": "Dogs"
    },
    photo_urls=[
        "photoUrls"
    ],
    tags=[
        {
            "id_": 10,
            "name": "name"
        }
    ],
    status="available"
)

result = sdk.pet.add_pet(request_body=request_body)

with open("output-file.ext", "w") as f:
    f.write(result)
```

## update_pet

Update an existing pet by Id

- HTTP Method: `PUT`
- Endpoint: `/pet`

**Parameters**

| Name         | Type                    | Required | Description       |
| :----------- | :---------------------- | :------- | :---------------- |
| request_body | [Pet](../models/Pet.md) | ✅       | The request body. |

**Return Type**

`str`

**Example Usage Code Snippet**

```python
from swagger_petstore_open_api_3_0 import SwaggerPetstoreOpenApi3_0
from swagger_petstore_open_api_3_0.models import Pet

sdk = SwaggerPetstoreOpenApi3_0(
    access_token="YOUR_ACCESS_TOKEN",
    timeout=10000
)

request_body = Pet(
    id_=10,
    name="doggie",
    category={
        "id_": 1,
        "name": "Dogs"
    },
    photo_urls=[
        "photoUrls"
    ],
    tags=[
        {
            "id_": 10,
            "name": "name"
        }
    ],
    status="available"
)

result = sdk.pet.update_pet(request_body=request_body)

with open("output-file.ext", "w") as f:
    f.write(result)
```

## find_pets_by_status

Multiple status values can be provided with comma separated strings

- HTTP Method: `GET`
- Endpoint: `/pet/findByStatus`

**Parameters**

| Name   | Type                                                          | Required | Description                                         |
| :----- | :------------------------------------------------------------ | :------- | :-------------------------------------------------- |
| status | [FindPetsByStatusStatus](../models/FindPetsByStatusStatus.md) | ❌       | Status values that need to be considered for filter |

**Return Type**

`str`

**Example Usage Code Snippet**

```python
from swagger_petstore_open_api_3_0 import SwaggerPetstoreOpenApi3_0
from swagger_petstore_open_api_3_0.models import FindPetsByStatusStatus

sdk = SwaggerPetstoreOpenApi3_0(
    access_token="YOUR_ACCESS_TOKEN",
    timeout=10000
)

result = sdk.pet.find_pets_by_status(status="available")

with open("output-file.ext", "w") as f:
    f.write(result)
```

## find_pets_by_tags

Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.

- HTTP Method: `GET`
- Endpoint: `/pet/findByTags`

**Parameters**

| Name | Type      | Required | Description       |
| :--- | :-------- | :------- | :---------------- |
| tags | List[str] | ❌       | Tags to filter by |

**Return Type**

`str`

**Example Usage Code Snippet**

```python
from swagger_petstore_open_api_3_0 import SwaggerPetstoreOpenApi3_0

sdk = SwaggerPetstoreOpenApi3_0(
    access_token="YOUR_ACCESS_TOKEN",
    timeout=10000
)
tags=[
    "tags"
]

result = sdk.pet.find_pets_by_tags(tags=tags)

with open("output-file.ext", "w") as f:
    f.write(result)
```

## get_pet_by_id

Returns a single pet

- HTTP Method: `GET`
- Endpoint: `/pet/{petId}`

**Parameters**

| Name   | Type | Required | Description         |
| :----- | :--- | :------- | :------------------ |
| pet_id | int  | ✅       | ID of pet to return |

**Return Type**

`str`

**Example Usage Code Snippet**

```python
from swagger_petstore_open_api_3_0 import SwaggerPetstoreOpenApi3_0

sdk = SwaggerPetstoreOpenApi3_0(
    access_token="YOUR_ACCESS_TOKEN",
    timeout=10000
)

result = sdk.pet.get_pet_by_id(pet_id=9)

with open("output-file.ext", "w") as f:
    f.write(result)
```

## update_pet_with_form

- HTTP Method: `POST`
- Endpoint: `/pet/{petId}`

**Parameters**

| Name   | Type | Required | Description                            |
| :----- | :--- | :------- | :------------------------------------- |
| pet_id | int  | ✅       | ID of pet that needs to be updated     |
| name   | str  | ❌       | Name of pet that needs to be updated   |
| status | str  | ❌       | Status of pet that needs to be updated |

**Example Usage Code Snippet**

```python
from swagger_petstore_open_api_3_0 import SwaggerPetstoreOpenApi3_0

sdk = SwaggerPetstoreOpenApi3_0(
    access_token="YOUR_ACCESS_TOKEN",
    timeout=10000
)

result = sdk.pet.update_pet_with_form(
    pet_id=6,
    name="name",
    status="status"
)

print(result)
```

## delete_pet

- HTTP Method: `DELETE`
- Endpoint: `/pet/{petId}`

**Parameters**

| Name    | Type | Required | Description      |
| :------ | :--- | :------- | :--------------- |
| pet_id  | int  | ✅       | Pet id to delete |
| api_key | str  | ❌       |                  |

**Example Usage Code Snippet**

```python
from swagger_petstore_open_api_3_0 import SwaggerPetstoreOpenApi3_0

sdk = SwaggerPetstoreOpenApi3_0(
    access_token="YOUR_ACCESS_TOKEN",
    timeout=10000
)

result = sdk.pet.delete_pet(
    pet_id=1,
    api_key="api_key"
)

print(result)
```

## upload_file

- HTTP Method: `POST`
- Endpoint: `/pet/{petId}/uploadImage`

**Parameters**

| Name                | Type  | Required | Description         |
| :------------------ | :---- | :------- | :------------------ |
| request_body        | bytes | ❌       | The request body.   |
| pet_id              | int   | ✅       | ID of pet to update |
| additional_metadata | str   | ❌       | Additional Metadata |

**Return Type**

`ApiResponse`

**Example Usage Code Snippet**

```python
from swagger_petstore_open_api_3_0 import SwaggerPetstoreOpenApi3_0

sdk = SwaggerPetstoreOpenApi3_0(
    access_token="YOUR_ACCESS_TOKEN",
    timeout=10000
)

with open("file.ext", "rb") as f:
    request_body = f.read()

result = sdk.pet.upload_file(
    request_body=request_body,
    pet_id=0,
    additional_metadata="additionalMetadata"
)

print(result)
```

<!-- This file was generated by liblab | https://liblab.com/ -->
