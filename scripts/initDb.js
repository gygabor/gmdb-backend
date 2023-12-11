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
  CREATE TABLE IF NOT EXISTS movie_searches (
    id SERIAL PRIMARY KEY,
    query VARCHAR(255) NOT NULL,
    page INT NOT NULL,
    results JSONB,
    request_count INT DEFAULT 0,
    time TIMESTAMP NOT NULL
  );
`

const initDb = async () => {
  const client = new Client(config)

  try {
    await client.connect()
    await client.query(createDatabaseQuery)
    console.log('Database created successfully')
  } catch (error) {
    console.error('Error creating database:', error)
  } finally {
    client.end()
  }
}

const initTable = async () => {
  const client = new Client({ ...config, database: 'gmdb' })

  try {
    await client.connect()
    await client.query(createTableQuery)
    console.log('Table created successfully')
  } catch (error) {
    console.error('Error creating table:', error)
  } finally {
    client.end()
  }
}

initDb().then(() => initTable())
