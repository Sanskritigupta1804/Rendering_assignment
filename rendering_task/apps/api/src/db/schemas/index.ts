import { relations } from "drizzle-orm";

// Import all table schemas
export { artists } from "./artists";
export { venues } from "./venues";
export { concerts } from "./concerts";
export { zones } from "./zones";
export { featuredContent } from "./featured-content";

// Import all Zod schemas
export { artistSelectSchema, artistInsertSchema } from "./artists";
export { venueSelectSchema, venueInsertSchema } from "./venues";
export {
  concertSelectSchema,
  concertInsertSchema,
  patchConcertsSchema,
} from "./concerts";
export { zoneSelectSchema, zoneInsertSchema } from "./zones";
export {
  featuredContentSelectSchema,
  featuredContentInsertSchema,
} from "./featured-content";

// Import relation schemas
export {
  artistWithRelationsSchema,
  concertWithRelationsSchema,
} from "./relations";

// Import table references for relations
import { artists } from "./artists";
import { venues } from "./venues";
import { concerts } from "./concerts";
import { zones } from "./zones";
import { featuredContent } from "./featured-content";

// Set up proper relations with correct table references
export const artistsRelations = relations(artists, ({ many }) => ({
  concerts: many(concerts),
  featuredContent: many(featuredContent),
}));

export const venuesRelations = relations(venues, ({ many }) => ({
  concerts: many(concerts),
}));

export const concertsRelations = relations(concerts, ({ one, many }) => ({
  artist: one(artists, {
    fields: [concerts.artistId],
    references: [artists.id],
  }),
  venue: one(venues, {
    fields: [concerts.venueId],
    references: [venues.id],
  }),
  zones: many(zones),
  featuredContent: many(featuredContent),
}));

export const zonesRelations = relations(zones, ({ one }) => ({
  concert: one(concerts, {
    fields: [zones.concertId],
    references: [concerts.id],
  }),
}));

export const featuredContentRelations = relations(
  featuredContent,
  ({ one }) => ({
    concert: one(concerts, {
      fields: [featuredContent.concertId],
      references: [concerts.id],
    }),
    artist: one(artists, {
      fields: [featuredContent.artistId],
      references: [artists.id],
    }),
  })
);
