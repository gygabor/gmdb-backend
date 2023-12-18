import axios from '@src/services/axios'
import { ResponseType } from '../types'

const fetchMovies = async (
  query: string,
  page: string,
): Promise<ResponseType> => {
  const client = axios.client

  const url = new URLSearchParams({
    query,
    page,
    language: 'en-US',
    include_adult: 'false',
  })

  const response = await client.get(`/search/movie?${url.toString()}`)

  return response.data
}

export default fetchMovies
