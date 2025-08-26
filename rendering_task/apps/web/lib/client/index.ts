import createClient from "openapi-fetch";
import type { paths } from "./types";

// Get API URL from environment variable or fallback to localhost for development
const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

// Create the typed client
export const client = createClient<paths>({
  baseUrl: apiUrl,
});

// Export types for use in other parts of the application
export type { paths } from "./types";

// Helper type for extracting response types
export type ApiResponse<T extends keyof paths> = paths[T] extends {
  get: { responses: { 200: { content: { "application/json": infer R } } } };
}
  ? R
  : never;

// Helper type for extracting request body types
export type ApiRequestBody<
  T extends keyof paths,
  M extends keyof paths[T] = "post",
> = paths[T] extends {
  [K in M]: { requestBody: { content: { "application/json": infer R } } };
}
  ? R
  : never;

// Usage examples:

// Get all concerts
// const { data, error } = await client.GET("/api/concerts", {
//   params: {
//     query: {
//       page: 1,
//       limit: 10
//     }
//   }
// });

// Get a specific concert
// const { data, error } = await client.GET("/api/concerts/{id}", {
//   params: {
//     path: { id: "1" }
//   }
// });

// Create a new concert
// const { data, error } = await client.POST("/api/concerts", {
//   body: {
//     title: "Concert Title",
//     description: "Concert Description",
//     // ... other required fields
//   }
// });

// Update a concert
// const { data, error } = await client.PATCH("/api/concerts/{id}", {
//   params: {
//     path: { id: "1" }
//   },
//   body: {
//     title: "Updated Title"
//   }
// });

// Delete a concert
// const { data, error } = await client.DELETE("/api/concerts/{id}", {
//   params: {
//     path: { id: "1" }
//   }
// });
