# SwaggerPetstoreOpenApi3_0 Python SDK 1.0.0<a id="swaggerpetstoreopenapi3_0-python-sdk-100"></a>

Welcome to the SwaggerPetstoreOpenApi3_0 SDK documentation. This guide will help you get started with integrating and using the SwaggerPetstoreOpenApi3_0 SDK in your project.

## Versions<a id="versions"></a>

- API version: `1.0.19`
- SDK version: `1.0.0`

## About the API<a id="about-the-api"></a>

This is a sample Pet Store Server based on the OpenAPI 3.0 specification. You can find out more about Swagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we've switched to the design first approach! You can now help us improve the API whether it's by making changes to the definition itself or to the code. That way, with time, we can improve the API in general, and expose some of the new features in OAS3. Some useful links: - [The Pet Store repository](https://github.com/swagger-api/swagger-petstore) - [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)

## Table of Contents<a id="table-of-contents"></a>

- [Setup & Configuration](#setup--configuration)
  - [Supported Language Versions](#supported-language-versions)
  - [Installation](#installation)
- [Authentication](#authentication)
  - [Access Token Authentication](#access-token-authentication)
- [Setting a Custom Timeout](#setting-a-custom-timeout)
- [Sample Usage](#sample-usage)
- [Services](#services)
- [Models](#models)

## Setup & Configuration<a id="setup--configuration"></a>

### Supported Language Versions<a id="supported-language-versions"></a>

This SDK is compatible with the following versions: `Python >= 3.7`

### Installation<a id="installation"></a>

To get started with the SDK, we recommend installing using `pip`:

```bash
pip install swagger_petstore_open_api_3_0
```

## Authentication<a id="authentication"></a>

### Access Token Authentication<a id="access-token-authentication"></a>

The SwaggerPetstoreOpenApi3_0 API uses an Access Token for authentication.

This token must be provided to authenticate your requests to the API.

#### Setting the Access Token<a id="setting-the-access-token"></a>

When you initialize the SDK, you can set the access token as follows:

```py
SwaggerPetstoreOpenApi3_0(
    access_token="YOUR_ACCESS_TOKEN",
    timeout=10000
)
```

If you need to set or update the access token after initializing the SDK, you can use:

```py
sdk.set_access_token("YOUR_ACCESS_TOKEN")
```

## Setting a Custom Timeout<a id="setting-a-custom-timeout"></a>

You can set a custom timeout for the SDK's HTTP requests as follows:

```py
from swagger_petstore_open_api_3_0 import SwaggerPetstoreOpenApi3_0

sdk = SwaggerPetstoreOpenApi3_0(timeout=10000)
```

# Sample Usage<a id="sample-usage"></a>

Below is a comprehensive example demonstrating how to authenticate and call a simple endpoint:

```py
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

## Services<a id="services"></a>

The SDK provides various services to interact with the API.

<details> 
<summary>Below is a list of all available services:</summary>

| Name  |
| :---- |
| pet   |
| store |
| user  |

</details>

## Models<a id="models"></a>

The SDK includes several models that represent the data structures used in API requests and responses. These models help in organizing and managing the data efficiently.

<details> 
<summary>Below is a list of all available models:</summary>

| Name                   | Description |
| :--------------------- | :---------- |
| Pet                    |             |
| FindPetsByStatusStatus |             |
| ApiResponse            |             |
| Order                  |             |
| User                   |             |
| Category               |             |
| Tag                    |             |

</details>

<!-- This file was generated by liblab | https://liblab.com/ -->
