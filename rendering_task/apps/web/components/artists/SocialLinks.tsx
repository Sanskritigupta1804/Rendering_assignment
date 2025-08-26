import type { ApiResponse } from "@/lib/client";
import { Button } from "@workspace/ui/components/button";
import Link from "next/link";

export type ArtistDetail = ApiResponse<"/api/artists/{id}">;

export function SocialLinks({ artist }: { artist: ArtistDetail }) {
  const links = (artist.socialLinks ?? {}) as Record<string, string>;
  const entries = Object.entries(links).filter(([, v]) => Boolean(v));
  if (!entries.length) return null;
  return (
    <ul className="flex gap-3 text-sm">
      {entries.map(([k, v]) => (
        <li key={k}>
          <Button variant="link" asChild className="p-0">
            <Link href={v} target="_blank" rel="noreferrer">
              {k}
            </Link>
          </Button>
        </li>
      ))}
    </ul>
  );
}
