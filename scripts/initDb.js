/* eslint-disable @typescript-eslint/no-var-requires */
const { Client } = require('pg')
require('dotenv').config()

const config = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
}

const createDatabaseQuery = 'CREATE DATABASE gmdb;'

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS movies (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    overview TEXT,
    release_date DATE,
    vote_average FLOAT,
    vote_count INT,
    poster_path VARCHAR(255),
    backdrop_path VARCHAR(255),
    genre_ids INT[],
    original_language VARCHAR(255),
    original_title VARCHAR(255),
    popularity FLOAT,
    video BOOLEAN,
    adult BOOLEAN,
    page INT
  );
`

const client = new Client(config)

const initDb = async () => {
  try {
    await client.connect()
    await client.query(createDatabaseQuery)
    await client.query(createTableQuery)
    console.log('Database created successfully')
  } catch (error) {
    console.error('Error creating database:', error)
  } finally {
    client.end()
  }
}

initDb()
