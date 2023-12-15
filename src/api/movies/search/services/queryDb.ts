import db from '@src/services/db'
import { QueryResult } from 'pg'

const queryDb = async (
  query: string,
  values: (string | Date)[],
): Promise<QueryResult> => {
  const client = db.client

  return await client.query(query, values)
}

export default queryDb
