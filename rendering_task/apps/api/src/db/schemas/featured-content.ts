import { pgTable, serial, text, timestamp, varchar, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { toZodV4SchemaTyped } from "@/lib/zod-utils";
import { concerts } from "./concerts";
import { artists } from "./artists";

// Featured content table - for Homepage (PPR) random sections
export const featuredContent = pgTable("featuredContent", {
  id: serial("id").primaryKey(),
  type: varchar("type", { length: 50 }).notNull(), // "hero", "spotlight", "promotion"
  title: varchar("title", { length: 255 }).notNull(),
  subtitle: text("subtitle"),
  description: text("description"),
  image: text("image"),
  ctaText: varchar("ctaText", { length: 100 }),
  ctaUrl: text("ctaUrl"),
  concertId: integer("concertId").references(() => concerts.id),
  artistId: integer("artistId").references(() => artists.id),
  isActive: boolean("isActive").default(true),
  priority: integer("priority").default(0), // for ordering
  startDate: timestamp("startDate", { withTimezone: false }),
  endDate: timestamp("endDate", { withTimezone: false }),
  createdAt: timestamp("createdAt", { withTimezone: false }).defaultNow(),
});

// Zod schemas
export const featuredContentSelectSchema = toZodV4SchemaTyped(
  createSelectSchema(featuredContent)
);

export const featuredContentInsertSchema = toZodV4SchemaTyped(
  createInsertSchema(featuredContent).omit({ id: true })
); 