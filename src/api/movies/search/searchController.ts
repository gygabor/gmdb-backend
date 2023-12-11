import { fetchMovies } from '../services'
import { Movie } from '../types'

interface Props {
  query?: string
  page?: string
}

const moviesController = async ({
  query = '',
  page = '1',
}: Props): Promise<Movie[] | string> => {
  return await fetchMovies(query, page)
}

export default moviesController
