import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import env from "@/env";

import * as schema from "./schemas";

function createDb() {
  const databaseUrl = env.DATABASE_URL;

  if (!databaseUrl || databaseUrl.trim().length === 0) {
    throw new Error(
      "DATABASE_URL is not set. Please define it in your environment (e.g., .env)."
    );
  }

  try {
    const sql = neon(databaseUrl);
    return drizzle(sql, { schema });
  } catch (error) {
    throw new Error("Failed to initialize database connection", {
      cause: error as unknown,
    });
  }
}

export const db = createDb();

export default db;
