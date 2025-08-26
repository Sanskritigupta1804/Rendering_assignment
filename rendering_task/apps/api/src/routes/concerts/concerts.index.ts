import { createRouter } from "@/lib/create-app";

import * as handlers from "./concerts.handlers";
import * as routes from "./concerts.routes";

const router = createRouter()
  .basePath("/api")
  .openapi(routes.list, handlers.list)
  .openapi(routes.create, handlers.create)
  .openapi(routes.getOne, handlers.getOne)
  .openapi(routes.patch, handlers.patch)
  .openapi(routes.remove, handlers.remove);

export default router;
