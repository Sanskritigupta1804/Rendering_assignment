import { Suspense } from "react";
import ArtistShowsList from "@/components/artists/ArtistShowsList";
import { ArtistConcertsSkeleton } from "./ArtistConcertsSkeleton";

interface ArtistShowsProps {
  id: number;
}

/**
 * ArtistShows component that handles the dynamic shows data
 * This component is wrapped in Suspense for PPR streaming
 * The static content (ArtistBio, SocialLinks) will be prerendered
 * while this dynamic content streams in
 */
export function ArtistShows({ id }: ArtistShowsProps) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold">Upcoming Shows</h2>
        <p className="text-sm text-muted-foreground">
          Latest concert information and ticket availability
        </p>
      </div>
      
      <Suspense fallback={<ArtistConcertsSkeleton />}>
        <ArtistShowsList id={id} />
      </Suspense>
    </section>
  );
} 