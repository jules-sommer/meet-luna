CREATE TABLE IF NOT EXISTS "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp NOT NULL,
	"edited_at" timestamp,
	"title" varchar NOT NULL,
	"author_id" integer NOT NULL,
	"content" text NOT NULL,
	"tags" json DEFAULT '["Jules Sommer"]'::json NOT NULL
);
