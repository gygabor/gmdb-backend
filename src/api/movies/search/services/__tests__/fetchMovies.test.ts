import { TMDB_MOVIE_SEARCH_URL } from '@src/constants/links'
import fetchMovies from '../fetchMovies'
import axios from '@src/services/axios'
import { noResponseTmdb, responseTmdb } from '../../__tests__/mockedValues'

jest.mock('@src/services/axios')

const url = new URLSearchParams({
  query: 'test',
  page: '1',
  language: 'en-US',
  include_adult: 'false',
})

describe('fetchMovies', () => {
  it(`doesn't find movies on Tmdb`, async () => {
    await expect(fetchMovies('test', '1')).resolves.toEqual(noResponseTmdb)

    expect(axios.client.get).toHaveBeenCalledWith(
      `${TMDB_MOVIE_SEARCH_URL}?${url.toString()}`,
    )
  })

  it(`finds movies on Tmdb`, async () => {
    axios.client.get = jest.fn().mockResolvedValue({ data: responseTmdb })

    await expect(fetchMovies('test', '1')).resolves.toEqual(responseTmdb)

    expect(axios.client.get).toHaveBeenCalledWith(
      `${TMDB_MOVIE_SEARCH_URL}?${url.toString()}`,
    )
  })
})
