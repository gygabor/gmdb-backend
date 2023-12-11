import { fetchMovies, getMovies, insertMovies, updateCount } from './services'
import { SearchResponse } from './types'

interface Props {
  query?: string
  page?: string
}

const moviesController = async ({
  query = '',
  page = '1',
}: Props): Promise<SearchResponse | string> => {
  const moviesInDb = await getMovies(query, page)

  if (moviesInDb) {
    await updateCount(moviesInDb.id)
    return moviesInDb.response
  } else {
    const result = await fetchMovies(query, page)

    await insertMovies(query, page, JSON.stringify(result))
    return result
  }
}

export default moviesController
