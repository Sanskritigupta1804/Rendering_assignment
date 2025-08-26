// "use client";


import { client } from "@/lib/client";
import type { ApiResponse } from "@/lib/client";
import { ConcertList } from "@/components/artists/ConcertList";

export default async function ArtistShowsList({ id }: { id: number }) {
  type Artist = ApiResponse<"/api/artists/{id}">;
  const { data, error } = await client.GET("/api/artists/{id}", {
    params: { path: { id }, query: { throttle: Number(process.env.NEXT_PUBLIC_TIME_THROTTLE ?? 0) } },
  });
  if (error || !data) {
    throw new Error("Failed to load shows");
  }
  return <ConcertList artist={data as Artist} />;
}