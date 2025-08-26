import { ArtistBio } from "@/components/artists/ArtistBio";
import { SocialLinks } from "@/components/artists/SocialLinks";


/*
Assignment (Problem): This page was originally SSG.
- Intentionally converted to CSR so you can revert it back to SSG.
What to do:
1) Remove 'use client' and `useQuery` to fetch on the server.
2) Restore `revalidate = false` and remove `generateStaticParams` CSR changes.
3) Fetch GET /api/artists/{id} and ignore concerts in the render.
*/

export const revalidate = false;

/**
 Notes:
 revalidate is a flag which is used inorder to remove data from cache and again call the api
 to get new data if we set it to false it will not call the api
 */

interface PageProps {
  params: { id: string };
}

export default async function ArtistPage({ params }: PageProps) {
  const { id } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/artists/${id}`, { cache: 'force-cache' });
  const artist = await res.json();

  return (
    <main className="container mx-auto px-4 py-6 space-y-4">
      {!artist ? (
        <div className="p-6">Not found</div>
      ) : (
        <>
          <ArtistBio artist={artist} />
          <SocialLinks artist={artist} />
        </>
      )}
    </main>
  );
}