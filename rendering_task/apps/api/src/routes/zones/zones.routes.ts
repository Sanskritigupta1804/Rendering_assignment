import { createRoute, z } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { jsonContent, jsonContentRequired } from "stoker/openapi/helpers";
import { createErrorSchema, IdParamsSchema } from "stoker/openapi/schemas";
import { createMessageObjectSchema } from "stoker/openapi/schemas";

const tags = ["Zones"];

// Schema for the register request body
const zoneRegisterSchema = z.object({
  quantity: z.coerce
    .number()
    .int()
    .min(1, "Minimum 1 ticket per transaction")
    .max(10, "Maximum 10 tickets per transaction"),
});

// Schema for the success response
const zoneRegisterSuccessSchema = createMessageObjectSchema(
  "Registration successful"
);

export const register = createRoute({
  path: "/zones/{id}/register",
  method: "post",
  tags,
  request: {
    params: IdParamsSchema,
    body: jsonContentRequired(zoneRegisterSchema, "Zone registration details"),
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      zoneRegisterSuccessSchema,
      "Zone registration successful"
    ),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(
      createMessageObjectSchema("Zone not found"),
      "Zone not found"
    ),
    [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
      createErrorSchema(zoneRegisterSchema).or(
        createErrorSchema(IdParamsSchema)
      ),
      "Validation error"
    ),
    [HttpStatusCodes.BAD_REQUEST]: jsonContent(
      createMessageObjectSchema("Insufficient tickets available"),
      "Insufficient tickets available"
    ),
    [HttpStatusCodes.INTERNAL_SERVER_ERROR]: jsonContent(
      createMessageObjectSchema("Internal server error"),
      "Internal server error"
    ),
  },
});

export type RegisterRoute = typeof register;
