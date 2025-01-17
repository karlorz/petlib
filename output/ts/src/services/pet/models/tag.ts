// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const tag = z.lazy(() => {
  return z.object({
    id: z.number().optional(),
    name: z.string().optional(),
  });
});

/**
 *
 * @typedef  {Tag} tag
 * @property {number}
 * @property {string}
 */
export type Tag = z.infer<typeof tag>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const tagResponse = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      name: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const tagRequest = z.lazy(() => {
  return z.object({ id: z.number().nullish(), name: z.string().nullish() }).transform((data) => ({
    id: data['id'],
    name: data['name'],
  }));
});
