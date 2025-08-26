import { eq } from "drizzle-orm";
import * as HttpStatusCodes from "stoker/http-status-codes";
import * as HttpStatusPhrases from "stoker/http-status-phrases";

import type { AppRouteHandler } from "@/lib/types";

import db from "@/db";
import { concerts } from "@/db/schemas";
import { ZOD_ERROR_CODES, ZOD_ERROR_MESSAGES } from "@/lib/constants";

import type {
  CreateRoute,
  GetOneRoute,
  ListRoute,
  PatchRoute,
  RemoveRoute,
} from "./concerts.routes";

export const list: AppRouteHandler<ListRoute> = async (c) => {
  const { page, limit, throttle } = c.req.valid("query");

  // Get concerts with relations using Drizzle's query API
  const concertsWithRelations = await db.query.concerts.findMany({
    with: {
      artist: true,
      venue: true,
      zones: true,
    },
    limit,
    offset: (page - 1) * limit,
  });

  // Transform to ensure proper structure and handle null cases
  const transformedConcerts = concertsWithRelations.map((concert) => ({
    ...concert,
    artist: concert.artist || null,
    venue: concert.venue || null,
    zones: concert.zones || [],
  }));

  await new Promise((resolve) => setTimeout(resolve, throttle));
  return c.json(transformedConcerts);
};

export const create: AppRouteHandler<CreateRoute> = async (c) => {
  const { throttle } = c.req.valid("query");
  const concert = c.req.valid("json");
  await new Promise((resolve) => setTimeout(resolve, throttle));
  const [inserted] = await db.insert(concerts).values(concert).returning();
  return c.json(inserted, HttpStatusCodes.OK);
};

export const getOne: AppRouteHandler<GetOneRoute> = async (c) => {
  const { id } = c.req.valid("param");
  const { throttle } = c.req.valid("query");

  // Get the concert with relations using Drizzle's query API
  const [concert] = await db.query.concerts.findMany({
    where: eq(concerts.id, id),
    with: {
      artist: true,
      venue: true,
      zones: true,
    },
    limit: 1,
  });

  if (!concert) {
    return c.json(
      {
        message: HttpStatusPhrases.NOT_FOUND,
      },
      HttpStatusCodes.NOT_FOUND
    );
  }

  await new Promise((resolve) => setTimeout(resolve, throttle));

  // Transform to ensure proper structure and handle null cases
  const transformedConcert = {
    ...concert,
    artist: concert.artist || null,
    venue: concert.venue || null,
    zones: concert.zones || [],
  };

  return c.json(transformedConcert, HttpStatusCodes.OK);
};

export const patch: AppRouteHandler<PatchRoute> = async (c) => {
  const { id } = c.req.valid("param");
  const updates = c.req.valid("json");
  const { throttle } = c.req.valid("query");
  await new Promise((resolve) => setTimeout(resolve, throttle));

  if (Object.keys(updates).length === 0) {
    return c.json(
      {
        success: false,
        error: {
          issues: [
            {
              code: ZOD_ERROR_CODES.INVALID_UPDATES,
              path: [],
              message: ZOD_ERROR_MESSAGES.NO_UPDATES,
            },
          ],
          name: "ZodError",
        },
      },
      HttpStatusCodes.UNPROCESSABLE_ENTITY
    );
  }

  const [concert] = await db
    .update(concerts)
    .set(updates)
    .where(eq(concerts.id, id))
    .returning();

  if (!concert) {
    return c.json(
      {
        message: HttpStatusPhrases.NOT_FOUND,
      },
      HttpStatusCodes.NOT_FOUND
    );
  }

  return c.json(concert, HttpStatusCodes.OK);
};

export const remove: AppRouteHandler<RemoveRoute> = async (c) => {
  const { id } = c.req.valid("param");
  const { throttle } = c.req.valid("query");
  await new Promise((resolve) => setTimeout(resolve, throttle));
  const result = await db
    .delete(concerts)
    .where(eq(concerts.id, id))
    .returning();

  if (result.length === 0) {
    return c.json(
      {
        message: HttpStatusPhrases.NOT_FOUND,
      },
      HttpStatusCodes.NOT_FOUND
    );
  }

  return c.body(null, HttpStatusCodes.NO_CONTENT);
};
