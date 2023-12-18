import axios from '@src/services/axios'
import { responseTmdbSchema } from '../schemas'
import { z } from 'zod'
import { TMDB_MOVIE_SEARCH_URL } from '@src/constants/links'

type ResponseTmdbType = z.infer<typeof responseTmdbSchema>

const fetchMovies = async (
  query: string,
  page: string,
): Promise<ResponseTmdbType> => {
  const client = axios.client

  const url = new URLSearchParams({
    query,
    page,
    language: 'en-US',
    include_adult: 'false',
  })

  const response = await client.get(
    `${TMDB_MOVIE_SEARCH_URL}?${url.toString()}`,
  )
  return response.data
}

export default fetchMovies
