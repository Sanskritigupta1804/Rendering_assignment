import { createRoute, z } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { jsonContent, jsonContentRequired } from "stoker/openapi/helpers";
import { createErrorSchema, IdParamsSchema } from "stoker/openapi/schemas";

import {
  concertInsertSchema,
  patchConcertsSchema,
  concertSelectSchema,
  concertWithRelationsSchema,
} from "@/db/schemas";
import { notFoundSchema } from "@/lib/constants";

const tags = ["Concerts"];

export const list = createRoute({
  path: "/concerts",
  method: "get",
  tags,
  request: {
    query: z.object({
      page: z.coerce.number().default(1),
      limit: z.coerce.number().default(10),
      throttle: z.coerce.number().min(0).default(0),
    }),
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.array(concertWithRelationsSchema),
      "The list of concerts with full relations (artist, venue, zones)"
    ),
  },
});

export const create = createRoute({
  path: "/concerts",
  method: "post",
  request: {
    query: z.object({
      throttle: z.coerce.number().min(0).default(0),
    }),
    body: jsonContentRequired(concertInsertSchema, "The concert to create"),
  },
  tags,
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      concertSelectSchema,
      "The created concert"
    ),
    [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
      createErrorSchema(concertInsertSchema),
      "The validation error(s)"
    ),
  },
});

export const getOne = createRoute({
  path: "/concerts/{id}",
  method: "get",
  request: {
    params: IdParamsSchema,
    query: z.object({
      throttle: z.coerce.number().min(0).default(0),
    }),
  },
  tags,
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      concertWithRelationsSchema,
      "The requested concert with full relations (artist, venue, zones)"
    ),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(
      notFoundSchema,
      "Concert not found"
    ),
    [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
      createErrorSchema(IdParamsSchema),
      "Invalid id error"
    ),
  },
});

export const patch = createRoute({
  path: "/concerts/{id}",
  method: "patch",
  request: {
    params: IdParamsSchema,
    query: z.object({
      throttle: z.coerce.number().min(0).default(0),
    }),
    body: jsonContentRequired(patchConcertsSchema, "The concert updates"),
  },
  tags,
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      concertSelectSchema,
      "The updated concert"
    ),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(
      notFoundSchema,
      "Concert not found"
    ),
    [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
      createErrorSchema(patchConcertsSchema).or(
        createErrorSchema(IdParamsSchema)
      ),
      "The validation error(s)"
    ),
  },
});

export const remove = createRoute({
  path: "/concerts/{id}",
  method: "delete",
  request: {
    params: IdParamsSchema,
    query: z.object({
      throttle: z.coerce.number().min(0).default(0),
    }),
  },
  tags,
  responses: {
    [HttpStatusCodes.NO_CONTENT]: {
      description: "Concert deleted",
    },
    [HttpStatusCodes.NOT_FOUND]: jsonContent(
      notFoundSchema,
      "Concert not found"
    ),
    [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
      createErrorSchema(IdParamsSchema),
      "Invalid id error"
    ),
  },
});

export type ListRoute = typeof list;
export type CreateRoute = typeof create;
export type GetOneRoute = typeof getOne;
export type PatchRoute = typeof patch;
export type RemoveRoute = typeof remove;
