import { axiosClient } from '@src/services/'
import { AxiosError } from 'axios'
import { Movie } from '../types'

const fetchMovies = async (
  query: string,
  page: string,
): Promise<Movie[] | string> => {
  try {
    const url = new URLSearchParams({
      query,
      page,
      language: 'en-US',
      include_adult: 'false',
    })

    const response = await axiosClient.get(`/search/movie?${url.toString()}`)

    return response.data
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error(error)
      return error.message
    } else {
      throw new Error('Unknown error')
    }
  }
}

export default fetchMovies
