import type { ApiResponse } from "@/lib/client";

export type ArtistDetail = ApiResponse<"/api/artists/{id}">;

/**
 * Minimal artist bio
 */
export function ArtistBio({ artist }: { artist: ArtistDetail }) {
  return (
    <section className="space-y-2">
      <h1 className="text-2xl font-bold">{artist.name}</h1>
      {artist.bio && (
        <p className="text-sm text-muted-foreground line-clamp-4">{artist.bio}</p>
      )}
    </section>
  );
} 