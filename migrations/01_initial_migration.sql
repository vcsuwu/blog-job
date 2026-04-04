
BEGIN;
CREATE TABLE IF NOT EXISTS  users (
  id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name text,
  password text
);
CREATE TABLE IF NOT EXISTS posts (
  id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title text,
  description text
);
COMMIT;
