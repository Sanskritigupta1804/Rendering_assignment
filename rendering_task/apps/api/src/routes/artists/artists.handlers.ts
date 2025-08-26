import type { AppRouteHandler } from "@/lib/types";
import * as HttpStatusCodes from "stoker/http-status-codes";
import * as HttpStatusPhrases from "stoker/http-status-phrases";

import db from "@/db";
import { artists } from "@/db/schemas";
import { eq } from "drizzle-orm";

import type { ListRoute, GetOneRoute } from "./artists.routes";

export const list: AppRouteHandler<ListRoute> = async (c) => {
  const { throttle } = c.req.valid("query");
  const artistsList = await db.select().from(artists);
  await new Promise((resolve) => setTimeout(resolve, throttle));
  return c.json(artistsList);
};

export const getOne: AppRouteHandler<GetOneRoute> = async (c) => {
  const { id } = c.req.valid("param");
  const { throttle } = c.req.valid("query");
  const artist = await db.query.artists.findFirst({
    where: eq(artists.id, id),
    with: {
      concerts: true,
    },
  });

  await new Promise((resolve) => setTimeout(resolve, throttle));

  if (!artist) {
    return c.json(
      { message: HttpStatusPhrases.NOT_FOUND },
      HttpStatusCodes.NOT_FOUND
    );
  }

  return c.json(artist, HttpStatusCodes.OK);
};
