import { createRouter } from "@/lib/create-app";

import * as handlers from "./zones.handlers";
import * as routes from "./zones.routes";

const router = createRouter()
  .basePath("/api")
  .openapi(routes.register, handlers.register);

export default router; 