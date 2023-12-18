import { TMDB_MOVIE_SEARCH_URL } from '@src/constants/links'

const client = {
  get: jest.fn((url) => {
    if (url.includes(TMDB_MOVIE_SEARCH_URL)) {
      return Promise.resolve({
        data: { page: 1, results: [], total_pages: 1, total_results: 0 },
      })
    }
  }),
}

export default {
  client,
}
