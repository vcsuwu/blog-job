# Blog for test

Hello this is my blog website.
To create it i used nix and nodejs and posgres.
If you want to launch it, you should run `nix develop`
to run the development flake. after that you should run the migration
psql -f ./migrations/01_initial_migration.sql -d mydb

And after all of that you can use npm run start to start server :)

Tech stack:
- Nodejs
- PosgtreSQL
- HTMX
- TailwindCSS
