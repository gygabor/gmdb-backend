import { fetchMovies, getMovies, insertMovies, updateCount } from './services'
import { ResponseType } from './types'

interface Props {
  query?: string
  page?: string
}

const searchController = async ({
  query = '',
  page = '1',
}: Props): Promise<ResponseType> => {
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
        JSON.stringify({ ...result, source: 'cache' }),
      )
    }

    return { ...result, source: 'tmdb' }
  }
}

export default searchController
