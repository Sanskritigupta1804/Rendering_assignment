import type { ApiResponse } from "@/lib/client";

export type ArtistDetail = ApiResponse<"/api/artists/{id}">;

export function ConcertList({ artist }: { artist: ArtistDetail }) {
  const concerts = artist.concerts ?? [];
  if (!concerts.length) return null;
  return (
    <ul className="space-y-2 text-sm">
      {concerts.map((c) => (
        <li key={c.id} className="flex justify-between">
          <a className="underline" href={`/concerts/${c.id}`}>{c.title}</a>
          <span className="text-muted-foreground">
            {new Date(c.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </li>
      ))}
    </ul>
  );
} 