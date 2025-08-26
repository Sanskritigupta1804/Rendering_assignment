# Concerts API

A fully documented type-safe REST API for managing concerts built with Hono, OpenAPI, and PostgreSQL.

This API provides complete CRUD operations for concert management including venue information, artist details, and ticket availability scheduling.

- [Concerts API](#concerts-api)
  - [Included](#included)
  - [Setup](#setup)
  - [Code Tour](#code-tour)
  - [Endpoints](#endpoints)
  - [Database Schema](#database-schema)
  - [References](#references)

## Included

- Structured logging with [pino](https://getpino.io/) / [hono-pino](https://www.npmjs.com/package/hono-pino)
- Documented / type-safe routes with [@hono/zod-openapi](https://github.com/honojs/middleware/tree/main/packages/zod-openapi)
- Interactive API documentation with [scalar](https://scalar.com/#api-docs) / [@scalar/hono-api-reference](https://github.com/scalar/scalar/tree/main/packages/hono-api-reference)
- Convenience methods / helpers to reduce boilerplate with [stoker](https://www.npmjs.com/package/stoker)
- Type-safe schemas and environment variables with [zod](https://zod.dev/)
- PostgreSQL database with [drizzle](https://orm.drizzle.team/docs/overview) and [drizzle-zod](https://orm.drizzle.team/docs/zod)
- Testing with [vitest](https://vitest.dev/)
- Sensible editor, formatting and linting settings with [@antfu/eslint-config](https://github.com/antfu/eslint-config)

## Setup

This API is part of the turbo-concert monorepo. Make sure you're in the root of the monorepo before starting.

Install dependencies from monorepo root:

```sh
pnpm install
```

Set up your PostgreSQL database and create a `.env` file in `apps/api/` with your database connection:

```sh
cd apps/api
cp .env.example .env
```

Generate and push database schema:

```sh
pnpm db:generate
pnpm db:migrate
```

Seed the database with sample concert data:

```sh
pnpm db:seed
```

Run the development server:

```sh
pnpm dev
```

Run tests:

```sh
pnpm test
```

Lint:

```sh
pnpm lint
```

Open Drizzle Studio to view/manage your database:

```sh
pnpm db:studio
```

## Code Tour

Base hono app exported from [app.ts](./src/app.ts). Local development uses [@hono/node-server](https://hono.dev/docs/getting-started/nodejs) defined in [index.ts](./src/index.ts).

Typesafe environment variables defined in [env.ts](./src/env.ts) - add any required environment variables here. The application will not start if any required environment variables are missing.

The concerts routes demonstrate the full OpenAPI implementation:

- Router setup in [concerts.index.ts](./src/routes/concerts/concerts.index.ts)
- Route definitions in [concerts.routes.ts](./src/routes/concerts/concerts.routes.ts)
- Request handlers in [concerts.handlers.ts](./src/routes/concerts/concerts.handlers.ts)

Database schema defined in [schema.ts](./src/db/schema.ts) with Drizzle PostgreSQL setup.

All app routes are grouped together and exported as `AppType` in [app.ts](./src/app.ts) for use in [RPC / hono/client](https://hono.dev/docs/guides/rpc).

## Endpoints

| Path               | Method | Description                    |
| ------------------ | ------ | ------------------------------ |
| GET /doc           | GET    | OpenAPI Specification          |
| GET /reference     | GET    | Scalar API Documentation       |
| GET /concerts      | GET    | List all concerts with pagination |
| POST /concerts     | POST   | Create a new concert           |
| GET /concerts/{id} | GET    | Get concert by ID              |
| PATCH /concerts/{id} | PATCH | Update concert by ID          |
| DELETE /concerts/{id} | DELETE | Delete concert by ID         |

### Query Parameters

Most endpoints support a `throttle` parameter for testing purposes. The list endpoint additionally supports:
- `page` - Page number for pagination (default: 1)
- `limit` - Number of results per page (default: 10)

## Database Schema

The concerts table includes:
- `id` - Auto-generated primary key
- `title` - Concert title/name
- `description` - Concert description
- `date` - Concert date and time
- `venue` - Venue name
- `city` - City where concert is held
- `country` - Country where concert is held  
- `concertBy` - Artist/performer name
- `ticketsOpen` - When ticket sales open

## References

- [What is Open API?](https://swagger.io/docs/specification/v3_0/about/)
- [Hono](https://hono.dev/)
  - [Zod OpenAPI Example](https://hono.dev/examples/zod-openapi)
  - [Testing](https://hono.dev/docs/guides/testing)
  - [Testing Helper](https://hono.dev/docs/helpers/testing)
- [@hono/zod-openapi](https://github.com/honojs/middleware/tree/main/packages/zod-openapi)
- [Drizzle ORM](https://orm.drizzle.team/)
- [PostgreSQL](https://www.postgresql.org/)
- [Scalar Documentation](https://github.com/scalar/scalar/tree/main/?tab=readme-ov-file#documentation)
  - [Themes / Layout](https://github.com/scalar/scalar/blob/main/documentation/themes.md)
  - [Configuration](https://github.com/scalar/scalar/blob/main/documentation/configuration.md)
