import { fetchMovies, getMovies, insertMovies, updateCount } from './services'
import { SearchResponse } from './types'

interface Props {
  query?: string
  page?: string
}

const moviesController = async ({
  query = '',
  page = '1',
}: Props): Promise<SearchResponse> => {
  const moviesInDb = await getMovies(query, page)

  if (moviesInDb) {
    await updateCount(moviesInDb.id)
    return moviesInDb.response
  } else {
    const result = await fetchMovies(query, page)
    if (result.results.length !== 0) {
      await insertMovies(
        query,
        page,
        JSON.stringify({ ...result, source: 'Cache' }),
      )
    }

    return { ...result, source: 'TMDB' }
  }
}

export default moviesController
