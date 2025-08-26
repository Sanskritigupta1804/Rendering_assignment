/* Static Generation */

import { client } from "@/lib/client";
import { getEnv } from "@/lib/env";
import { Button } from "../../../packages/ui/src/components/button";

export default async function Page() {
  const env = getEnv();

  const { data } = await client.GET("/api/concerts", {
    params: {
      query: {
        throttle: env.throttle,
      },
    },
  });

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Concerts</h1>
        <p className="text-sm text-gray-600">Throttle: {env.throttle}ms</p>
        {data?.map((concert) => (
          <div
            className="flex flex-col gap-2 border-2 border-gray-300 p-4 rounded-md"
            key={concert.id}
          >
            <h2>{concert.title}</h2>
            <p>{concert.description}</p>
            <p>{concert.date}</p>
          </div>
        ))}
        <Button size="sm">Button</Button>
      </div>
    </div>
  );
}
