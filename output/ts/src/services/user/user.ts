// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { User, userRequest, userResponse } from './models/user';
import { LoginUserParams } from './request-params';

export class UserService extends BaseService {
  /**
 * This can only be done by the logged in user.

 */
  async createUser(body: User, requestConfig?: RequestConfig): Promise<HttpResponse<undefined>> {
    const request = new RequestBuilder<undefined>()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/user')
      .setRequestSchema(userRequest)
      .setResponseSchema(z.undefined())
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<undefined>(request);
  }

  /**
   * Creates list of users with given input array
   * @returns {Promise<HttpResponse<User>>} Successful operation
   */
  async createUsersWithListInput(body: User[], requestConfig?: RequestConfig): Promise<HttpResponse<string>> {
    const request = new RequestBuilder<string>()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/user/createWithList')
      .setRequestSchema(z.any())
      .setResponseSchema(z.string())
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<string>(request);
  }

  /**
   *
   * @param {string} [username] - The user name for login
   * @param {string} [password] - The password for login in clear text
   * @returns {Promise<HttpResponse<string>>} successful operation
   */
  async loginUser(params?: LoginUserParams, requestConfig?: RequestConfig): Promise<HttpResponse<string>> {
    const request = new RequestBuilder<string>()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/user/login')
      .setRequestSchema(z.any())
      .setResponseSchema(z.string())
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Text)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addQueryParam({
        key: 'username',
        value: params?.username,
      })
      .addQueryParam({
        key: 'password',
        value: params?.password,
      })
      .build();
    return this.client.call<string>(request);
  }

  /**
 * 

 */
  async logoutUser(requestConfig?: RequestConfig): Promise<HttpResponse<undefined>> {
    const request = new RequestBuilder<undefined>()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/user/logout')
      .setRequestSchema(z.any())
      .setResponseSchema(z.undefined())
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .build();
    return this.client.call<undefined>(request);
  }

  /**
   *
   * @param {string} username - The name that needs to be fetched. Use user1 for testing.
   * @returns {Promise<HttpResponse<User>>} successful operation
   */
  async getUserByName(username: string, requestConfig?: RequestConfig): Promise<HttpResponse<string>> {
    const request = new RequestBuilder<string>()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/user/{username}')
      .setRequestSchema(z.any())
      .setResponseSchema(z.string())
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'username',
        value: username,
      })
      .build();
    return this.client.call<string>(request);
  }

  /**
 * This can only be done by the logged in user.
 * @param {string} username - name that needs to be updated

 */
  async updateUser(username: string, body: User, requestConfig?: RequestConfig): Promise<HttpResponse<undefined>> {
    const request = new RequestBuilder<undefined>()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('PUT')
      .setPath('/user/{username}')
      .setRequestSchema(userRequest)
      .setResponseSchema(z.undefined())
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'username',
        value: username,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<undefined>(request);
  }

  /**
 * This can only be done by the logged in user.
 * @param {string} username - The name that needs to be deleted

 */
  async deleteUser(username: string, requestConfig?: RequestConfig): Promise<HttpResponse<undefined>> {
    const request = new RequestBuilder<undefined>()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('DELETE')
      .setPath('/user/{username}')
      .setRequestSchema(z.any())
      .setResponseSchema(z.undefined())
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'username',
        value: username,
      })
      .build();
    return this.client.call<undefined>(request);
  }
}
