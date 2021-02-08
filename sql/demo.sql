-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS demo_id_seq;

-- Table Definition
CREATE TABLE "public"."demo" (
    "id" int4 NOT NULL DEFAULT nextval('demo_id_seq'::regclass),
    "title" varchar(255) NOT NULL,
    "description" text NOT NULL,
    "createdAt" timestamp NOT NULL,
    PRIMARY KEY ("id")
);

