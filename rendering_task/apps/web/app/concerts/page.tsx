import { client } from "@/lib/client";
import { ConcertGrid } from "../../components/concerts/ConcertGrid";

/*
Assignment (Problem): This page was originally ISR (server-rendered with revalidate).
- Intentionally converted to CSR so you can revert it back to ISR.
- Your task: move data fetching back to the server and restore ISR.
What to do:
1) Remove 'use client' and React Query usage from this page.
2) Fetch data on the server via GET /api/concerts and set `export const revalidate`.
3) Ensure date formatting is stable and avoid hydration warnings.
4) Keep `ConcertGrid` rendering the list.
*/

export const revalidate = 60;

export default async function UpcomingShowsPage() {
  const throttleMs = Number(process.env.NEXT_PUBLIC_TIME_THROTTLE ?? 0);
  const { data, error } = await client.GET("/api/concerts", {
    params: { query: { throttle: throttleMs } },
  });
  if (error) {
    return <main className="container mx-auto px-4 py-6">Failed to load shows</main>;
  }
  return (
    <main className="container mx-auto px-4 py-6 space-y-4">
      <h1 className="text-2xl font-bold">Upcoming Shows</h1>
      <ConcertGrid concerts={data ?? []} />
    </main>
  );
}
