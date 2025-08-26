import {
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
  jsonb,
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { toZodV4SchemaTyped } from "@/lib/zod-utils";

// Artists table - for Artist Profiles (SSG)
export const artists = pgTable("artists", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  bio: text("bio"),
  image: text("image"),
  genre: varchar("genre", { length: 100 }),
  website: varchar("website", { length: 255 }),
  socialLinks: jsonb("socialLinks"), // JSON object for multiple social links
  createdAt: timestamp("createdAt", { withTimezone: false }).defaultNow(),
  updatedAt: timestamp("updatedAt", { withTimezone: false }).defaultNow(),
});

// Zod schemas
export const artistSelectSchema = toZodV4SchemaTyped(
  createSelectSchema(artists)
);

export const artistInsertSchema = toZodV4SchemaTyped(
  createInsertSchema(artists).omit({ id: true })
);
