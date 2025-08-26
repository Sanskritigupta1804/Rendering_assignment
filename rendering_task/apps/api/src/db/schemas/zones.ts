import { pgTable, serial, text, timestamp, varchar, integer, decimal, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { toZodV4SchemaTyped } from "@/lib/zod-utils";
import { concerts } from "./concerts";

// Zones table - for Zone Selection (CSR)
export const zones = pgTable("zones", {
  id: serial("id").primaryKey(),
  concertId: integer("concertId").notNull().references(() => concerts.id),
  name: varchar("name", { length: 100 }).notNull(), // VIP, General, Balcony, etc.
  description: text("description"),
  capacity: integer("capacity").notNull(),
  availableTickets: integer("availableTickets").notNull(), // tracks remaining tickets
  soldTickets: integer("soldTickets").notNull().default(0), // tracks sold tickets
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  color: varchar("color", { length: 7 }).default("#3B82F6"), // hex color for zone visualization
  isActive: boolean("isActive").default(true),
  createdAt: timestamp("createdAt", { withTimezone: false }).defaultNow(),
  updatedAt: timestamp("updatedAt", { withTimezone: false }).defaultNow(),
});

// Zod schemas
export const zoneSelectSchema = toZodV4SchemaTyped(createSelectSchema(zones));

export const zoneInsertSchema = toZodV4SchemaTyped(
  createInsertSchema(zones).omit({ id: true })
); 