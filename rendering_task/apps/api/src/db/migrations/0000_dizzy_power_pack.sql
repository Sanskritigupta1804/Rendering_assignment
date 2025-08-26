CREATE TABLE "artists" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"bio" text,
	"image" text,
	"genre" varchar(100),
	"website" varchar(255),
	"socialLinks" jsonb,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "concerts" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" text,
	"image" text,
	"date" timestamp NOT NULL,
	"venueId" integer,
	"artistId" integer,
	"ticketsOpen" timestamp DEFAULT now(),
	"ticketsClose" timestamp,
	"status" varchar(50) DEFAULT 'upcoming',
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "featuredContent" (
	"id" serial PRIMARY KEY NOT NULL,
	"type" varchar(50) NOT NULL,
	"title" varchar(255) NOT NULL,
	"subtitle" text,
	"description" text,
	"image" text,
	"ctaText" varchar(100),
	"ctaUrl" text,
	"concertId" integer,
	"artistId" integer,
	"isActive" boolean DEFAULT true,
	"priority" integer DEFAULT 0,
	"startDate" timestamp,
	"endDate" timestamp,
	"createdAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "venues" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"address" text,
	"city" varchar(255) NOT NULL,
	"country" varchar(255) NOT NULL,
	"capacity" integer,
	"description" text,
	"image" text,
	"createdAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "zones" (
	"id" serial PRIMARY KEY NOT NULL,
	"concertId" integer NOT NULL,
	"name" varchar(100) NOT NULL,
	"description" text,
	"capacity" integer NOT NULL,
	"availableTickets" integer NOT NULL,
	"soldTickets" integer DEFAULT 0 NOT NULL,
	"price" numeric(10, 2) NOT NULL,
	"color" varchar(7) DEFAULT '#3B82F6',
	"isActive" boolean DEFAULT true,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "concerts" ADD CONSTRAINT "concerts_venueId_venues_id_fk" FOREIGN KEY ("venueId") REFERENCES "public"."venues"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "concerts" ADD CONSTRAINT "concerts_artistId_artists_id_fk" FOREIGN KEY ("artistId") REFERENCES "public"."artists"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "featuredContent" ADD CONSTRAINT "featuredContent_concertId_concerts_id_fk" FOREIGN KEY ("concertId") REFERENCES "public"."concerts"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "featuredContent" ADD CONSTRAINT "featuredContent_artistId_artists_id_fk" FOREIGN KEY ("artistId") REFERENCES "public"."artists"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "zones" ADD CONSTRAINT "zones_concertId_concerts_id_fk" FOREIGN KEY ("concertId") REFERENCES "public"."concerts"("id") ON DELETE no action ON UPDATE no action;