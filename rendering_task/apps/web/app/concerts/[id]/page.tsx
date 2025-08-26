import { client } from "@/lib/client";
import { ConcertHeader } from "../../../components/concerts/ConcertHeader";
import { VenueInfo } from "../../../components/venues/VenueInfo";
import { PriceList } from "../../../components/concerts/PriceList";

interface PageProps {
  params: Promise<{ id: string }>;
}

/*
Assignment (Problem): This page was originally SSR and fully implemented.
- All rendering and data fetching have been intentionally removed.
Your task:
1) Keep this page as SSR.
2) Fetch GET /api/concerts/{id} on the server using the provided `client`.
3) Render the header, venue info, price list, and a checkout link.
4) Avoid hydration issues (e.g., date formatting) and keep imports server-safe.
*/

export default async function ConcertDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const { data, error } = await client.GET("/api/concerts/{id}", {
    params: { path: { id: Number(id) } },
  });
  if (error || !data) {
    return <div className="p-6">Concert not found</div>;
  }
  let url = `/concerts/${id}/checkout`
  return (
    <main className="container mx-auto px-4 py-6 space-y-6">
      <ConcertHeader concert={data} />
      <VenueInfo concert={data} />
      <PriceList concert={data} />
      <a
        href={url}
        className="inline-block mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary/80"
      >
        Proceed to Checkout
      </a>
    </main>
  );
}