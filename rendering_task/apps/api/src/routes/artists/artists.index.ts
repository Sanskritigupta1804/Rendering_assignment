import { createRouter } from "@/lib/create-app";

import * as handlers from "./artists.handlers";
import * as routes from "./artists.routes";

const router = createRouter()
  .basePath("/api")
  .openapi(routes.list, handlers.list)
  .openapi(routes.getOne, handlers.getOne);

export default router;
