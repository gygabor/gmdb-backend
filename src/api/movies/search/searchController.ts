import { fetchMovies, queries, updateDb } from './services'
import { Response } from './types'

interface Props {
  query?: string
  page?: string
}

const moviesController = async ({
  query = '',
  page = '1',
}: Props): Promise<Response | string> => {
  const result = await fetchMovies(query, page)
  const sqlQuery = queries['save']

  await updateDb(sqlQuery, [query, page, JSON.stringify(result), new Date()])

  return result
}

export default moviesController
