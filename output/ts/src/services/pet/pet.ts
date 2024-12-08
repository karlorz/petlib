// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { Pet, petRequest, petResponse } from './models/pet';
import {
  DeletePetParams,
  FindPetsByStatusParams,
  FindPetsByTagsParams,
  UpdatePetWithFormParams,
  UploadFileParams,
} from './request-params';
import { ApiResponse, apiResponseResponse } from './models/api-response';

export class PetService extends BaseService {
  /**
   * Add a new pet to the store
   * @returns {Promise<HttpResponse<Pet>>} Successful operation
   */
  async addPet(body: Pet, requestConfig?: RequestConfig): Promise<HttpResponse<string>> {
    const request = new RequestBuilder<string>()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/pet')
      .setRequestSchema(petRequest)
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
   * Update an existing pet by Id
   * @returns {Promise<HttpResponse<Pet>>} Successful operation
   */
  async updatePet(body: Pet, requestConfig?: RequestConfig): Promise<HttpResponse<string>> {
    const request = new RequestBuilder<string>()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('PUT')
      .setPath('/pet')
      .setRequestSchema(petRequest)
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
   * Multiple status values can be provided with comma separated strings
   * @param {FindPetsByStatusStatus} [status] - Status values that need to be considered for filter
   * @returns {Promise<HttpResponse<Pet[]>>} successful operation
   */
  async findPetsByStatus(
    params?: FindPetsByStatusParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<string>> {
    const request = new RequestBuilder<string>()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/pet/findByStatus')
      .setRequestSchema(z.any())
      .setResponseSchema(z.array(z.any()))
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addQueryParam({
        key: 'status',
        value: params?.status,
      })
      .build();
    return this.client.call<string>(request);
  }

  /**
   * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   * @param {string[]} [tags] - Tags to filter by
   * @returns {Promise<HttpResponse<Pet[]>>} successful operation
   */
  async findPetsByTags(params?: FindPetsByTagsParams, requestConfig?: RequestConfig): Promise<HttpResponse<string>> {
    const request = new RequestBuilder<string>()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/pet/findByTags')
      .setRequestSchema(z.any())
      .setResponseSchema(z.array(z.any()))
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addQueryParam({
        key: 'tags',
        value: params?.tags,
      })
      .build();
    return this.client.call<string>(request);
  }

  /**
   * Returns a single pet
   * @param {number} petId - ID of pet to return
   * @returns {Promise<HttpResponse<Pet>>} successful operation
   */
  async getPetById(petId: number, requestConfig?: RequestConfig): Promise<HttpResponse<string>> {
    const request = new RequestBuilder<string>()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/pet/{petId}')
      .setRequestSchema(z.any())
      .setResponseSchema(z.string())
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'petId',
        value: petId,
      })
      .build();
    return this.client.call<string>(request);
  }

  /**
 * 
 * @param {number} petId - ID of pet that needs to be updated
 * @param {string} [name] - Name of pet that needs to be updated
 * @param {string} [status] - Status of pet that needs to be updated

 */
  async updatePetWithForm(
    petId: number,
    params?: UpdatePetWithFormParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<undefined>> {
    const request = new RequestBuilder<undefined>()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/pet/{petId}')
      .setRequestSchema(z.any())
      .setResponseSchema(z.undefined())
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'petId',
        value: petId,
      })
      .addQueryParam({
        key: 'name',
        value: params?.name,
      })
      .addQueryParam({
        key: 'status',
        value: params?.status,
      })
      .build();
    return this.client.call<undefined>(request);
  }

  /**
 * 
 * @param {number} petId - Pet id to delete
 * @param {string} [apiKey] - 

 */
  async deletePet(
    petId: number,
    params?: DeletePetParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<undefined>> {
    const request = new RequestBuilder<undefined>()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('DELETE')
      .setPath('/pet/{petId}')
      .setRequestSchema(z.any())
      .setResponseSchema(z.undefined())
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'petId',
        value: petId,
      })
      .addHeaderParam({
        key: 'api_key',
        value: params?.apiKey,
      })
      .build();
    return this.client.call<undefined>(request);
  }

  /**
   *
   * @param {number} petId - ID of pet to update
   * @param {string} [additionalMetadata] - Additional Metadata
   * @returns {Promise<HttpResponse<ApiResponse>>} successful operation
   */
  async uploadFile(
    petId: number,
    body: ArrayBuffer,
    params?: UploadFileParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<ApiResponse>> {
    const request = new RequestBuilder<ApiResponse>()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/pet/{petId}/uploadImage')
      .setRequestSchema(z.any())
      .setResponseSchema(apiResponseResponse)
      .setRequestContentType(ContentType.Binary)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'petId',
        value: petId,
      })
      .addQueryParam({
        key: 'additionalMetadata',
        value: params?.additionalMetadata,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/octet-stream' })
      .addBody(body)
      .build();
    return this.client.call<ApiResponse>(request);
  }
}
