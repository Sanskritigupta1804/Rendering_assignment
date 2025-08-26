import type { ApiResponse } from "@/lib/client";

/**
 * Displays basic concert header info.
 */
export type ConcertDetail = ApiResponse<"/api/concerts/{id}">;

export function ConcertHeader({ concert }: { concert: ConcertDetail }) {
  return (
    <header className="space-y-1">
      <h1 className="text-2xl font-bold">{concert.title}</h1>
      <p className="text-sm text-muted-foreground">
        {new Date(concert.date as unknown as string).toLocaleString()}
      </p>
      {concert.artist && (
        <p className="text-sm">By {concert.artist.name}</p>
      )}
    </header>
  );
} 