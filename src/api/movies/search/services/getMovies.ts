import queries from './queries'
import { SearchResponse } from '../types'
import queryDb from './queryDb'

interface Search {
  id: string
  response: SearchResponse
}

const getMovies = async (
  query: string,
  page: string,
): Promise<Search | null> => {
  const sqlQuery = queries['getMovies']

  try {
    const { rows } = await queryDb(sqlQuery, [query, page])

    return rows[0] || null
  } catch (error) {
    console.error(error)
    throw new Error('Unknown error')
  }
}

export default getMovies
