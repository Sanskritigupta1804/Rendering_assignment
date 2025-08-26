import { Card } from "@workspace/ui/components/card";
import type { ApiResponse } from "@/lib/client";

export type ConcertDetail = ApiResponse<"/api/concerts/{id}">;

/**
 * Minimal list of zone prices.
 */
export function PriceList({ concert }: { concert: ConcertDetail }) {
  const zones = concert.zones ?? [];
  if (!zones.length) return null;
  return (
    <Card className="p-4">
      <div className="font-medium mb-2">Prices</div>
      <ul className="space-y-1 text-sm">
        {zones.map((z) => (
          <li key={z.id} className="flex justify-between">
            <span>{z.name}</span>
            <span>${Number(z.price).toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
} 