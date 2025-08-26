import { createRoute, z } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { jsonContent } from "stoker/openapi/helpers";
import { artistSelectSchema, artistWithRelationsSchema } from "@/db/schemas";
import { createErrorSchema, IdParamsSchema } from "stoker/openapi/schemas";
import { notFoundSchema } from "@/lib/constants";

const tags = ["Artists"];

export const list = createRoute({
  path: "/artists",
  method: "get",
  tags,
  request: {
    query: z.object({
      throttle: z.coerce.number().min(0).default(0),
    }),
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.array(artistSelectSchema),
      "The list of artists"
    ),
  },
});

export const getOne = createRoute({
  path: "/artists/{id}",
  method: "get",
  request: {
    params: IdParamsSchema,
    query: z.object({
      throttle: z.coerce.number().min(0).default(0),
      foo: z.string().optional(),
    }),
  },
  tags,
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      artistWithRelationsSchema,
      "The requested artist"
    ),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(
      notFoundSchema,
      "Artist not found"
    ),
    [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
      createErrorSchema(IdParamsSchema),
      "Invalid id error"
    ),
  },
});

export type ListRoute = typeof list;
export type GetOneRoute = typeof getOne;
