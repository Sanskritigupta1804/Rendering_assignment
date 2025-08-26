"use client"

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@workspace/ui/components/button";
import { client } from "@/lib/client";
import type { ApiResponse } from "@/lib/client";

export type ConcertDetail = ApiResponse<"/api/concerts/{id}">;

/**
 * Minimal zone selector with quantity and register button.
 */
export function ZoneSelector({ concert }: { concert: ConcertDetail }) {
  const zones = concert.zones ?? [];
  const [selectedZoneId, setSelectedZoneId] = useState<number | null>(zones[0]?.id ?? null);
  const [qty, setQty] = useState(1);

  const mutation = useMutation({
    mutationFn: async () => {
      if (!selectedZoneId) return;
      const id = selectedZoneId;
      const { data, error } = await client.POST("/api/zones/{id}/register", {
        params: { path: { id } },
        body: { quantity: qty },
      });
      if (error) throw error;
      return data;
    },
  });

  if (!zones.length) return null;

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {zones.map((z) => (
          <button
            key={z.id}
            onClick={() => setSelectedZoneId(z.id)}
            className={`px-3 py-1 rounded border text-sm ${selectedZoneId === z.id ? "bg-primary text-primary-foreground" : "bg-background"}`}
          >
            {z.name} (Rs. {Number(z.price).toFixed(2)})
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <label className="text-sm">Qty</label>
        <input
          type="number"
          min={1}
          max={10}
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
          className="h-9 w-16 rounded border px-2 text-sm"
        />
        <Button size="sm" onClick={() => mutation.mutate()} disabled={!selectedZoneId || mutation.isPending}>
          {mutation.isPending ? "Processing..." : "Register"}
        </Button>
      </div>
      {mutation.isSuccess && (
        <p className="text-sm text-green-600">Registration successful</p>
      )}
      {mutation.isError && (
        <p className="text-sm text-red-600">{String((mutation.error)?.message ?? "Failed")}</p>
      )}
    </div>
  );
} 