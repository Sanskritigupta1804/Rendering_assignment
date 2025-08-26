import {
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
  integer,
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { toZodV4SchemaTyped } from "@/lib/zod-utils";
import { artists } from "./artists";
import { venues } from "./venues";
import z from "zod";

// Updated concerts table with relations
export const concerts = pgTable("concerts", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  image: text("image"),
  date: timestamp("date", { withTimezone: false }).notNull(),
  venueId: integer("venueId").references(() => venues.id),
  artistId: integer("artistId").references(() => artists.id),
  ticketsOpen: timestamp("ticketsOpen", { withTimezone: false }).defaultNow(),
  ticketsClose: timestamp("ticketsClose", { withTimezone: false }),
  status: varchar("status", { length: 50 }).default("upcoming"), // upcoming, ongoing, completed, cancelled
  createdAt: timestamp("createdAt", { withTimezone: false }).defaultNow(),
  updatedAt: timestamp("updatedAt", { withTimezone: false }).defaultNow(),
});

// Zod schemas
export const concertSelectSchema = toZodV4SchemaTyped(
  createSelectSchema(concerts)
);

export const concertInsertSchema = toZodV4SchemaTyped(
  createInsertSchema(concerts).omit({ id: true }).extend({
    date: z.coerce.date(),
    ticketsOpen: z.coerce.date().optional(),
    ticketsClose: z.coerce.date().optional(),
  })
);

export const patchConcertsSchema = toZodV4SchemaTyped(
  createInsertSchema(concerts).omit({ id: true }).partial().extend({
    date: z.coerce.date().optional(),
    ticketsOpen: z.coerce.date().optional(),
    ticketsClose: z.coerce.date().optional(),
  })
);
