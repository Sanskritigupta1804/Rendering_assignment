import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { artists, venues, concerts, zones, featuredContent } from "./schemas";
import seedData from "@/db/seedData";
import env from "@/env";

const sql = neon(env.DATABASE_URL);
const db = drizzle(sql);

async function main() {
  try {
    console.log("🚀 Starting database seeding...");

    // Clear existing data (in reverse order due to foreign key constraints)
    console.log("🗑️  Clearing existing data...");
    await db.delete(featuredContent);
    await db.delete(zones);
    await db.delete(concerts);
    await db.delete(venues);
    await db.delete(artists);
    console.log("✅ All existing data cleared!");

    // Seed artists first
    console.log("🎭 Seeding artists...");
    const insertedArtists = await db.insert(artists).values(seedData.artists).returning();
    console.log(`✅ ${insertedArtists.length} artists created!`);

    // Seed venues
    console.log("🏟️  Seeding venues...");
    const insertedVenues = await db.insert(venues).values(seedData.venues).returning();
    console.log(`✅ ${insertedVenues.length} venues created!`);

    // Create concert data with actual IDs from inserted artists and venues
    const concertDataWithIds = seedData.concerts.map((concert, index) => ({
      ...concert,
      artistId: insertedArtists[index]?.id,
      venueId: insertedVenues[index]?.id,
    }));

    // Seed concerts (depends on artists and venues)
    console.log("🎵 Seeding concerts...");
    const insertedConcerts = await db.insert(concerts).values(concertDataWithIds).returning();
    console.log(`✅ ${insertedConcerts.length} concerts created!`);

    // Create zone data with actual concert IDs
    const zoneDataWithIds = seedData.zones
      .map((zone) => {
        const concertIndex = zone.concertId - 1; // Convert 1-based to 0-based
        const actualConcertId = insertedConcerts[concertIndex]?.id;
        if (!actualConcertId) return null;
        
        return {
          ...zone,
          concertId: actualConcertId,
        };
      })
      .filter((zone): zone is NonNullable<typeof zone> => zone !== null);

    // Seed zones (depends on concerts)
    console.log("🎫 Seeding zones...");
    const insertedZones = await db.insert(zones).values(zoneDataWithIds).returning();
    console.log(`✅ ${insertedZones.length} zones created!`);

    // Create featured content data with actual IDs
    const featuredContentDataWithIds = seedData.featuredContent
      .map((content) => {
        if (content.concertId) {
          const concertIndex = content.concertId - 1;
          const actualConcertId = insertedConcerts[concertIndex]?.id;
          if (!actualConcertId) return null;
          
          return {
            ...content,
            concertId: actualConcertId,
          };
        }
        if (content.artistId) {
          const artistIndex = content.artistId - 1;
          const actualArtistId = insertedArtists[artistIndex]?.id;
          if (!actualArtistId) return null;
          
          return {
            ...content,
            artistId: actualArtistId,
          };
        }
        return content;
      })
      .filter((content): content is NonNullable<typeof content> => content !== null);

    // Seed featured content (depends on concerts and artists)
    console.log("🌟 Seeding featured content...");
    const insertedFeaturedContent = await db.insert(featuredContent).values(featuredContentDataWithIds).returning();
    console.log(`✅ ${insertedFeaturedContent.length} featured content items created!`);

    // Verify the data
    console.log("\n📊 Database seeding completed successfully!");
    console.log(`   Artists: ${insertedArtists.length}`);
    console.log(`   Venues: ${insertedVenues.length}`);
    console.log(`   Concerts: ${insertedConcerts.length}`);
    console.log(`   Zones: ${insertedZones.length}`);
    console.log(`   Featured Content: ${insertedFeaturedContent.length}`);

    // Show sample data
    console.log("\n🎭 Sample Artist:", insertedArtists[0]?.name);
    console.log("🏟️  Sample Venue:", insertedVenues[0]?.name);
    console.log("🎵 Sample Concert:", insertedConcerts[0]?.title);
    console.log("🎫 Sample Zone:", insertedZones[0]?.name);

  } catch (error) {
    console.error("❌ Error during seeding:", error);
    throw error;
  }
}

main()
  .then(() => {
    console.log("🎉 Seeding completed successfully!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("💥 Seeding failed:", error);
    process.exit(1);
  });
