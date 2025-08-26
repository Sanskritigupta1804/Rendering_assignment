import type { ApiResponse } from "@/lib/client";

export type ConcertDetail = ApiResponse<"/api/concerts/{id}">;

/**
 * Minimal venue info block.
 */
export function VenueInfo({ concert }: { concert: ConcertDetail }) {
  if (!concert.venue) return null;
  const v = concert.venue;
  return (
    <div className="text-sm text-muted-foreground">
      {v.name} — {v.city}, {v.country}
    </div>
  );
} 