# gmdb-backend

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have a PostgreSQL database running locally.
- You have Tmdb account and API Key

## Installing

To install gmdb-backend, follow these steps:

```bash
git clone https://github.com/gygabor/gmdb-backend.git
cd gmdb-backend
```

#### Istall dependencies

```bash
npm install
```

#### update .env

```
TMDB_API_KEY="<Add Tmdb API Key here>"
PORT="<Add port where your app is running>"

# DB
DB_HOST="<PostgreSQL Host>"
DB_PORT="<PostgreSQL Port>"
DB_USER="<PostgreSQL User>"
DB_PASSWORD="<PostgreSQL Password>"
DB_NAME="<PostgreSQL Db name>"
```

## Populate the Database

Create `gmdb` database and `movie_searches` table with the `initDb` script

```bash
npm run initDb
```

## Start the app

```bash
npm run start
```

Start with `nodemon`:

```bash
npm run start:dev
```

It starts the server running on the port what you added to the `.env`: `http://localhost:PORT/`.

Run tests:

```bash
npm run test
```

## API Documentation

### GET /movies/search

- Query params:
  - query: string
  - page: string

#### Example

`http://localhost:3000/movies/search?query=godfathe&page=1`

Curl:

```bash
curl --location 'http://localhost:3000/movies/search?query=godfather&page=2'
```

## Todos

- Add `Movie` and `Query` tables to the Db instead of store them in a table
- Add e2e tests with `supertest`
- Create `openapi` documentation from the zod schemas with the [zod-openapi](https://github.com/samchungy/zod-openapi) package
- Create `cron` job to delete the old data from the DB
