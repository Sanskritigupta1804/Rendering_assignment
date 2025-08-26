import { pgTable, serial, text, timestamp, varchar, integer } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { toZodV4SchemaTyped } from "@/lib/zod-utils";

// Venues table - for better venue management
export const venues = pgTable("venues", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  address: text("address"),
  city: varchar("city", { length: 255 }).notNull(),
  country: varchar("country", { length: 255 }).notNull(),
  capacity: integer("capacity"),
  description: text("description"),
  image: text("image"),
  createdAt: timestamp("createdAt", { withTimezone: false }).defaultNow(),
});

// Zod schemas
export const venueSelectSchema = toZodV4SchemaTyped(createSelectSchema(venues));

export const venueInsertSchema = toZodV4SchemaTyped(
  createInsertSchema(venues).omit({ id: true })
); 