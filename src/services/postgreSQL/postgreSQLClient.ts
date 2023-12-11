import { Client } from 'pg'

const config = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : undefined,
}

const postgreSQLClient = new Client(config)

export default postgreSQLClient
