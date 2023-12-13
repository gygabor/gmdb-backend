import axios from '@src/services/axios'
import { AxiosError } from 'axios'
import { SearchResponse } from '../types'

const fetchMovies = async (
  query: string,
  page: string,
): Promise<SearchResponse> => {
  const client = axios.client

  try {
    const url = new URLSearchParams({
      query,
      page,
      language: 'en-US',
      include_adult: 'false',
    })

    const response = await client.get(`/search/movie?${url.toString()}`)

    return response.data
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw new Error(error.message)
    } else {
      throw new Error('Unknown error')
    }
  }
}

export default fetchMovies
