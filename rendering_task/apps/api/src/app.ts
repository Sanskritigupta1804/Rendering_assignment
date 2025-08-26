import configureOpenAPI from "@/lib/configure-open-api";
import createApp from "@/lib/create-app";
import index from "@/routes/index.route";
import concerts from "@/routes/concerts/concerts.index";
import venues from "@/routes/venues/venues.index";
import artists from "@/routes/artists/artists.index";
import zones from "@/routes/zones/zones.index";
import { cors } from "hono/cors";

const app = createApp();

configureOpenAPI(app);

app.use("*", cors());

const routes = [
  index,
  concerts,
  venues,
  artists,
  zones,
] as const;

routes.forEach((route) => {
  app.route("/", route);
});

export type AppType = typeof app;

export default app;
