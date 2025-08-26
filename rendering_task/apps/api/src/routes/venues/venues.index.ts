import { createRouter } from "@/lib/create-app";

import * as handlers from "./venues.handlers";
import * as routes from "./venues.routes";

const router = createRouter()
  .basePath("/api")
  .openapi(routes.list, handlers.list);

export default router;
