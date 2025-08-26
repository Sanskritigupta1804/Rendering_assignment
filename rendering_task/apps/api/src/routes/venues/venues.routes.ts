import { createRoute, z } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { jsonContent } from "stoker/openapi/helpers";

import { venueSelectSchema } from "@/db/schemas";

const tags = ["Venues"];

export const list = createRoute({
  path: "/venues",
  method: "get",
  tags,
  request: {
    query: z.object({
      throttle: z.coerce.number().min(0).default(0),
    }),
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.array(venueSelectSchema),
      "The list of venues"
    ),
  },
});

export type ListRoute = typeof list;