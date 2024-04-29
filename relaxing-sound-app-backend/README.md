## Description

This project is the backend that loads the music list from a database and manages likes and plays in real time. It requires running migrations and seeders to populate the database with test data.
## Env
It needs an .env file which structure is similar to:
DB_HOST=your_host
DB_PORT=3306
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_DATABASE=your_database

## Installation

```bash
$ npm install

```
Command for migration: npx ts-node -r dotenv/config ./node_modules/typeorm/cli.js migration:run -d src/data-source.ts
Command for song seeder: npx ts-node src/seed-songs.ts
## Running the app

```bash
# development
$ npm run start
