import type { AppRouteHandler } from "@/lib/types";

import db from "@/db";
import { venues } from "@/db/schemas";

import type { ListRoute } from "./venues.routes";

export const list: AppRouteHandler<ListRoute> = async (c) => {
  const { throttle } = c.req.valid("query");
  const venuesList = await db.select().from(venues);
  await new Promise((resolve) => setTimeout(resolve, throttle));
  return c.json(venuesList);
};
