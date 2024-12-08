# PetService

A list of all methods in the `PetService` service. Click on the method name to view detailed information about that method.

| Methods                                 | Description                                                                                   |
| :-------------------------------------- | :-------------------------------------------------------------------------------------------- |
| [addPet](#addpet)                       | Add a new pet to the store                                                                    |
| [updatePet](#updatepet)                 | Update an existing pet by Id                                                                  |
| [findPetsByStatus](#findpetsbystatus)   | Multiple status values can be provided with comma separated strings                           |
| [findPetsByTags](#findpetsbytags)       | Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing. |
| [getPetById](#getpetbyid)               | Returns a single pet                                                                          |
| [updatePetWithForm](#updatepetwithform) |                                                                                               |
| [deletePet](#deletepet)                 |                                                                                               |
| [uploadFile](#uploadfile)               |                                                                                               |

## addPet

Add a new pet to the store

- HTTP Method: `POST`
- Endpoint: `/pet`

**Parameters**

| Name | Type                    | Required | Description       |
| :--- | :---------------------- | :------- | :---------------- |
| body | [Pet](../models/Pet.md) | ✅       | The request body. |

**Return Type**

`Pet`

**Example Usage Code Snippet**

```typescript
import { Category, Pet, SwaggerPetstoreOpenApi3_0, Tag } from 'swaggerpetstore';

(async () => {
  const swaggerPetstoreOpenApi3_0 = new SwaggerPetstoreOpenApi3_0({
    token: 'YOUR_TOKEN',
  });

  const category: Category = {
    id: 1,
    name: 'Dogs',
  };

  const tag: Tag = {
    id: 10,
    name: 'name',
  };

  const petStatus = 'available';

  const pet: Pet = {
    id: 10,
    name: 'doggie',
    category: category,
    photoUrls: ['photoUrls'],
    tags: [tag],
    status: petStatus,
  };

  const { data } = await swaggerPetstoreOpenApi3_0.pet.addPet(pet);

  console.log(data);
})();
```

## updatePet

Update an existing pet by Id

- HTTP Method: `PUT`
- Endpoint: `/pet`

**Parameters**

| Name | Type                    | Required | Description       |
| :--- | :---------------------- | :------- | :---------------- |
| body | [Pet](../models/Pet.md) | ✅       | The request body. |

**Return Type**

`Pet`

**Example Usage Code Snippet**

```typescript
import { Category, Pet, SwaggerPetstoreOpenApi3_0, Tag } from 'swaggerpetstore';

(async () => {
  const swaggerPetstoreOpenApi3_0 = new SwaggerPetstoreOpenApi3_0({
    token: 'YOUR_TOKEN',
  });

  const category: Category = {
    id: 1,
    name: 'Dogs',
  };

  const tag: Tag = {
    id: 10,
    name: 'name',
  };

  const petStatus = 'available';

  const pet: Pet = {
    id: 10,
    name: 'doggie',
    category: category,
    photoUrls: ['photoUrls'],
    tags: [tag],
    status: petStatus,
  };

  const { data } = await swaggerPetstoreOpenApi3_0.pet.updatePet(pet);

  console.log(data);
})();
```

## findPetsByStatus

Multiple status values can be provided with comma separated strings

- HTTP Method: `GET`
- Endpoint: `/pet/findByStatus`

**Parameters**

| Name   | Type                                                          | Required | Description                                         |
| :----- | :------------------------------------------------------------ | :------- | :-------------------------------------------------- |
| status | [FindPetsByStatusStatus](../models/FindPetsByStatusStatus.md) | ❌       | Status values that need to be considered for filter |

**Return Type**

`Pet[]`

**Example Usage Code Snippet**

```typescript
import { SwaggerPetstoreOpenApi3_0 } from 'swaggerpetstore';

(async () => {
  const swaggerPetstoreOpenApi3_0 = new SwaggerPetstoreOpenApi3_0({
    token: 'YOUR_TOKEN',
  });

  const findPetsByStatusStatus = 'available';

  const { data } = await swaggerPetstoreOpenApi3_0.pet.findPetsByStatus({
    status: findPetsByStatusStatus,
  });

  console.log(data);
})();
```

## findPetsByTags

Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.

- HTTP Method: `GET`
- Endpoint: `/pet/findByTags`

**Parameters**

| Name | Type     | Required | Description       |
| :--- | :------- | :------- | :---------------- |
| tags | string[] | ❌       | Tags to filter by |

**Return Type**

`Pet[]`

**Example Usage Code Snippet**

```typescript
import { SwaggerPetstoreOpenApi3_0 } from 'swaggerpetstore';

(async () => {
  const swaggerPetstoreOpenApi3_0 = new SwaggerPetstoreOpenApi3_0({
    token: 'YOUR_TOKEN',
  });

  const { data } = await swaggerPetstoreOpenApi3_0.pet.findPetsByTags({
    tags: ['tags'],
  });

  console.log(data);
})();
```

## getPetById

Returns a single pet

- HTTP Method: `GET`
- Endpoint: `/pet/{petId}`

**Parameters**

| Name  | Type   | Required | Description         |
| :---- | :----- | :------- | :------------------ |
| petId | number | ✅       | ID of pet to return |

**Return Type**

`Pet`

**Example Usage Code Snippet**

```typescript
import { SwaggerPetstoreOpenApi3_0 } from 'swaggerpetstore';

(async () => {
  const swaggerPetstoreOpenApi3_0 = new SwaggerPetstoreOpenApi3_0({
    token: 'YOUR_TOKEN',
  });

  const { data } = await swaggerPetstoreOpenApi3_0.pet.getPetById(9);

  console.log(data);
})();
```

## updatePetWithForm

- HTTP Method: `POST`
- Endpoint: `/pet/{petId}`

**Parameters**

| Name   | Type   | Required | Description                            |
| :----- | :----- | :------- | :------------------------------------- |
| petId  | number | ✅       | ID of pet that needs to be updated     |
| name   | string | ❌       | Name of pet that needs to be updated   |
| status | string | ❌       | Status of pet that needs to be updated |

**Example Usage Code Snippet**

```typescript
import { SwaggerPetstoreOpenApi3_0 } from 'swaggerpetstore';

(async () => {
  const swaggerPetstoreOpenApi3_0 = new SwaggerPetstoreOpenApi3_0({
    token: 'YOUR_TOKEN',
  });

  const { data } = await swaggerPetstoreOpenApi3_0.pet.updatePetWithForm(6, {
    name: 'name',
    status: 'status',
  });

  console.log(data);
})();
```

## deletePet

- HTTP Method: `DELETE`
- Endpoint: `/pet/{petId}`

**Parameters**

| Name   | Type   | Required | Description      |
| :----- | :----- | :------- | :--------------- |
| petId  | number | ✅       | Pet id to delete |
| apiKey | string | ❌       |                  |

**Example Usage Code Snippet**

```typescript
import { SwaggerPetstoreOpenApi3_0 } from 'swaggerpetstore';

(async () => {
  const swaggerPetstoreOpenApi3_0 = new SwaggerPetstoreOpenApi3_0({
    token: 'YOUR_TOKEN',
  });

  const { data } = await swaggerPetstoreOpenApi3_0.pet.deletePet(1, {
    apiKey: 'api_key',
  });

  console.log(data);
})();
```

## uploadFile

- HTTP Method: `POST`
- Endpoint: `/pet/{petId}/uploadImage`

**Parameters**

| Name               | Type        | Required | Description         |
| :----------------- | :---------- | :------- | :------------------ |
| body               | ArrayBuffer | ❌       | The request body.   |
| petId              | number      | ✅       | ID of pet to update |
| additionalMetadata | string      | ❌       | Additional Metadata |

**Return Type**

`ApiResponse`

**Example Usage Code Snippet**

```typescript
import { SwaggerPetstoreOpenApi3_0 } from 'swaggerpetstore';

(async () => {
  const swaggerPetstoreOpenApi3_0 = new SwaggerPetstoreOpenApi3_0({
    token: 'YOUR_TOKEN',
  });

  const { data } = await swaggerPetstoreOpenApi3_0.pet.uploadFile(123, {
    additionalMetadata: 'additionalMetadata',
  });

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
