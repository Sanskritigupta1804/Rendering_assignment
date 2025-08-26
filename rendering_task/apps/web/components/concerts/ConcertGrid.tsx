import { Card } from "@workspace/ui/components/card";
import { Button } from "@workspace/ui/components/button";
import type { ApiResponse } from "@/lib/client";
import Image from "next/image";
import Link from "next/link";

/**
 * Renders a simple grid of concerts with minimal details.
 */
export type Concert = ApiResponse<"/api/concerts">[number];

export function ConcertGrid({ concerts }: { concerts: Concert[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {concerts.map((c) => (
        <Card key={c.id} className="p-4 space-y-2">
          {c.image ? (
            <Image
              src={c.image}
              alt={c.title}
              width={100}
              height={100}
              className="w-full h-64 object-cover"
            />
          ) : (
            <div className="w-full h-40 bg-gray-200" />
          )}
          <div className="text-lg font-semibold">{c.title}</div>
          <div className="text-muted-foreground text-sm">
            {new Date(c.date as unknown as string).toLocaleDateString()}
          </div>
          {c.artist && (
            <Button asChild variant="link" className="text-sm underline w-fit">
              <Link
                href={`/artists/${c.artist.id}`}
              >
                Artist: {c.artist.name} 🔗
              </Link>
            </Button>
          )}
          {c.venue && <div className="text-sm">Venue: {c.venue.name}</div>}

          <div className="text-sm">
            {c.zones.map((z) => (
              <div key={z.id}>{z.name}</div>
            ))}
          </div>

          <div className="text-sm">
            {c.createdAt
              ? new Date(c.createdAt as unknown as string).toLocaleString()
              : "N/A"}
          </div>
          <div className="pt-2">
            <Link href={`/concerts/${c.id}`}>
              <Button size="sm">View</Button>
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
}
