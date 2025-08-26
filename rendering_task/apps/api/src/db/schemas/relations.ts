import { z } from "zod";
import { artistSelectSchema } from "./artists";
import { concertSelectSchema } from "./concerts";
import { venueSelectSchema } from "./venues";
import { zoneSelectSchema } from "./zones";

// Artist with concerts relation
export const artistWithRelationsSchema = z.intersection(
  artistSelectSchema,
  z.object({
    concerts: z.array(concertSelectSchema),
  })
);

// Concert with relations
export const concertWithRelationsSchema = z.intersection(
  concertSelectSchema,
  z.object({
    artist: artistSelectSchema.nullable(),
    venue: venueSelectSchema.nullable(),
    zones: z.array(zoneSelectSchema),
  })
);
