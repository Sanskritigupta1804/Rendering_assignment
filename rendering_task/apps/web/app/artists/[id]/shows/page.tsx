
import { Suspense } from "react";
import { ArtistBio } from "../../../../components/artists/ArtistBio";
import { SocialLinks } from "../../../../components/artists/SocialLinks";
import ArtistShowsList from "../../../../components/artists/ArtistShowsList";
import { ArtistConcertsSkeleton } from "../../../../components/artists/ArtistConcertsSkeleton";
import { client } from "@/lib/client";

/*
Assignment (Problem): This page was originally PPR-like with Suspense using Server Components.
- It has been intentionally broken. Your task is to convert it back to Server Components.
What to do:
1) Keep this file as a Server Component (no 'use client'). Fetch the artist (GET /api/artists/{id}) on the server and render static bits.
2) Convert `ArtistShowsList` back to a Server Component that fetches on the server and returns <ConcertList />.
3) Use <Suspense> in this page (or its child) for streaming, not client-side loading state.
4) Avoid hydration issues by not using client-only APIs in server files.
*/

/*
 *
 * Solution
 * What I did was I create a fetchArtist Function which is async that will call out next js api /api/artists/:id and will return info about the api
 * What suspense is doing it will it will show loading till the data is loaded
 */

interface PageProps {
  params: Promise<{ id: string }>;
}

export const experimental_ppr = true

async function fetchArtist(id: string) {
  const { data, error } = await client.GET("/api/artists/{id}", {
    params: { path: { id: Number(id) } },
  });
  if (error || !data) return null;
  return data;
}

export default async function ArtistShowsPage({ params }: PageProps) {
  const { id } = await params;
  const artist = await fetchArtist(id);

  return (
    <div className="space-y-6">
      {artist && <ArtistBio artist={artist} />}
      {artist && <SocialLinks artist={artist} />}
      <Suspense fallback={<ArtistConcertsSkeleton />}>
        <ArtistShowsList id={Number(id)} />
      </Suspense>
    </div>
  );
}