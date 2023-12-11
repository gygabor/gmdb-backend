import db from '@src/services/db'
import { QueryResult } from 'pg'

const queryDb = async (
  query: string,
  values: (string | Date)[],
): Promise<QueryResult> => {
  const client = db.client

  try {
    return await client.query(query, values)
  } catch (error) {
    console.error(error)
    throw new Error('Unknown error')
  }
}

export default queryDb
