import { eq } from "drizzle-orm";
import * as HttpStatusCodes from "stoker/http-status-codes";

import type { AppRouteHandler } from "@/lib/types";

import db from "@/db";
import { zones } from "@/db/schemas";

import type { RegisterRoute } from "./zones.routes";

export const register: AppRouteHandler<RegisterRoute> = async (c) => {
  const { id } = c.req.valid("param");
  const { quantity } = c.req.valid("json");

  // Get the zone to check availability
  const [zone] = await db
    .select()
    .from(zones)
    .where(eq(zones.id, id))
    .limit(1);

  if (!zone) {
    return c.json(
      {
        message: "Zone not found",
      },
      HttpStatusCodes.NOT_FOUND
    );
  }

  // Check if zone is active
  if (!zone.isActive) {
    return c.json(
      {
        message: "Zone is not available for registration",
      },
      HttpStatusCodes.BAD_REQUEST
    );
  }

  // Check if enough tickets are available
  if (zone.availableTickets < quantity) {
    return c.json(
      {
        message: "Insufficient tickets available",
      },
      HttpStatusCodes.BAD_REQUEST
    );
  }

  // Update the zone with new ticket counts
  const [updatedZone] = await db
    .update(zones)
    .set({
      availableTickets: zone.availableTickets - quantity,
      soldTickets: zone.soldTickets + quantity,
      updatedAt: new Date(),
    })
    .where(eq(zones.id, id))
    .returning();

  if (!updatedZone) {
    return c.json(
      {
        message: "Failed to update zone",
      },
      HttpStatusCodes.INTERNAL_SERVER_ERROR
    );
  }

  return c.json(
    {
      message: "Registration successful",
    },
    HttpStatusCodes.OK
  );
}; 