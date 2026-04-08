BEGIN;
CREATE TABLE IF NOT EXISTS  users (
  id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name text NOT NULL UNIQUE,
  password text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS posts (
  id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title text NOT NULL CHECK(character_length(title) > 4),
  description text NOT NULL CHECK(character_length(description) > 200),
  created_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP
);
COMMIT;
