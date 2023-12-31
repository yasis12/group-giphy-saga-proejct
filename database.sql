CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');


CREATE TABLE "favorite" (
    "id" SERIAL PRIMARY KEY,
    "gif-id" VARCHAR (100) NOT NULL,
    "gif-url" VARCHAR (250) NOT NULL,
    "category_id" INTEGER REFERENCES "category" ("id")
);