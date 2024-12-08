// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, RequestConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { Order, orderRequest, orderResponse } from './models/order';

export class StoreService extends BaseService {
  /**
   * Returns a map of status codes to quantities
   * @returns {Promise<HttpResponse<any>>} successful operation
   */
  async getInventory(requestConfig?: RequestConfig): Promise<HttpResponse<any>> {
    const request = new RequestBuilder<any>()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/store/inventory')
      .setRequestSchema(z.any())
      .setResponseSchema(z.any())
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .build();
    return this.client.call<any>(request);
  }

  /**
   * Place a new order in the store
   * @returns {Promise<HttpResponse<Order>>} successful operation
   */
  async placeOrder(body: Order, requestConfig?: RequestConfig): Promise<HttpResponse<Order>> {
    const request = new RequestBuilder<Order>()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('POST')
      .setPath('/store/order')
      .setRequestSchema(orderRequest)
      .setResponseSchema(orderResponse)
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.call<Order>(request);
  }

  /**
   * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
   * @param {number} orderId - ID of order that needs to be fetched
   * @returns {Promise<HttpResponse<Order>>} successful operation
   */
  async getOrderById(orderId: number, requestConfig?: RequestConfig): Promise<HttpResponse<string>> {
    const request = new RequestBuilder<string>()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('GET')
      .setPath('/store/order/{orderId}')
      .setRequestSchema(z.any())
      .setResponseSchema(z.string())
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'orderId',
        value: orderId,
      })
      .build();
    return this.client.call<string>(request);
  }

  /**
 * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
 * @param {number} orderId - ID of the order that needs to be deleted

 */
  async deleteOrder(orderId: number, requestConfig?: RequestConfig): Promise<HttpResponse<undefined>> {
    const request = new RequestBuilder<undefined>()
      .setBaseUrl(this.config)
      .setConfig(this.config)
      .setMethod('DELETE')
      .setPath('/store/order/{orderId}')
      .setRequestSchema(z.any())
      .setResponseSchema(z.undefined())
      .setRequestContentType(ContentType.Json)
      .setResponseContentType(ContentType.Json)
      .setRetryAttempts(this.config, requestConfig)
      .setRetryDelayMs(this.config, requestConfig)
      .setResponseValidation(this.config, requestConfig)
      .addPathParam({
        key: 'orderId',
        value: orderId,
      })
      .build();
    return this.client.call<undefined>(request);
  }
}
