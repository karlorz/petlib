// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const apiResponse = z.lazy(() => {
  return z.object({
    code: z.number().optional(),
    type: z.string().optional(),
    message: z.string().optional(),
  });
});

/**
 *
 * @typedef  {ApiResponse} apiResponse
 * @property {number}
 * @property {string}
 * @property {string}
 */
export type ApiResponse = z.infer<typeof apiResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const apiResponseResponse = z.lazy(() => {
  return z
    .object({
      code: z.number().optional(),
      type: z.string().optional(),
      message: z.string().optional(),
    })
    .transform((data) => ({
      code: data['code'],
      type: data['type'],
      message: data['message'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const apiResponseRequest = z.lazy(() => {
  return z
    .object({ code: z.number().nullish(), type: z.string().nullish(), message: z.string().nullish() })
    .transform((data) => ({
      code: data['code'],
      type: data['type'],
      message: data['message'],
    }));
});
