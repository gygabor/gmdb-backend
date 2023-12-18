import queries from './queries'
import { ResponseApiType } from '../types'
import queryDb from './queryDb'

interface Movies {
  id: string
  response: ResponseApiType
}

const getMovies = async (
  query: string,
  page: string,
): Promise<Movies | null> => {
  const sqlQuery = queries['getMovies']

  const { rows } = await queryDb(sqlQuery, [query, page])

  return rows[0] || null
}

export default getMovies
