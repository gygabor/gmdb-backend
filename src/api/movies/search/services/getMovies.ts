import queries from './queries'
import { ResponseType } from '../types'
import queryDb from './queryDb'

interface Search {
  id: string
  response: ResponseType
}

const getMovies = async (
  query: string,
  page: string,
): Promise<Search | null> => {
  const sqlQuery = queries['getMovies']

  const { rows } = await queryDb(sqlQuery, [query, page])

  return rows[0] || null
}

export default getMovies
