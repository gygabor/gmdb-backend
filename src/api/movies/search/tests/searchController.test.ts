import {
  fetchMovies as fetchMoviesService,
  getMovies as getMoviesService,
  insertMovies,
  updateCount,
} from '../services'
import searchController from '../searchController'

const fetchMovies = fetchMoviesService as jest.MockedFunction<
  typeof fetchMoviesService
>
const getMovies = getMoviesService as jest.MockedFunction<
  typeof getMoviesService
>

jest.mock('../services', () => {
  return {
    fetchMovies: jest.fn(),
    getMovies: jest.fn().mockReturnValue(null),
    insertMovies: jest.fn(),
    updateCount: jest.fn(),
  }
})

const mockedMovie = {
  id: 1,
  title: 'test',
  poster_path: '/path',
  overview: 'overview',
  release_date: '2021-01-01',
  vote_average: 3.5,
  vote_count: 100,
  backdrop_path: '/path/backdrop',
  genre_ids: [1, 2, 3],
  original_language: 'en',
  original_title: 'test',
  popularity: 100,
  video: false,
  adult: false,
}

const resultTmdb = {
  page: 1,
  results: [mockedMovie],
  total_pages: 1,
  total_results: 1,
}

const noResultTmdb = {
  page: 1,
  results: [],
  total_pages: 1,
  total_results: 1,
}

const mockedQuery = { query: 'test', page: '1' }

describe('searchController', () => {
  beforeAll(() => {
    fetchMovies.mockResolvedValue(noResultTmdb)
  })

  it('calls getMovies', async () => {
    await searchController(mockedQuery)

    expect(getMovies).toHaveBeenCalledWith('test', '1')
  })

  describe(`movies aren't cached in the db`, () => {
    afterEach(() => {
      jest.clearAllMocks()
    })

    it(`calls fetchMovies. Movies don't exist in Tmdb`, async () => {
      fetchMovies.mockResolvedValue(noResultTmdb)

      await expect(searchController(mockedQuery)).resolves.toEqual({
        ...noResultTmdb,
        source: 'tmdb',
      })

      expect(fetchMovies).toHaveBeenCalledWith('test', '1')
      expect(insertMovies).not.toHaveBeenCalled()
    })

    it(`fetches movies, saves and returns them. Movies exist in Tmdb`, async () => {
      fetchMovies.mockResolvedValue(resultTmdb)

      await expect(
        searchController({ query: 'test', page: '1' }),
      ).resolves.toEqual({
        ...resultTmdb,
        source: 'tmdb',
      })

      expect(insertMovies).toHaveBeenCalledWith(
        'test',
        '1',
        JSON.stringify({ ...resultTmdb, source: 'cache' }),
      )
    })
  })

  describe(`movies are cached in the db`, () => {
    it(`increments count and return with movies`, async () => {
      getMovies.mockResolvedValue({
        id: '1',
        response: { ...resultTmdb, source: 'cache' },
      })

      await expect(searchController(mockedQuery)).resolves.toEqual({
        ...resultTmdb,
        source: 'cache',
      })

      expect(updateCount).toHaveBeenCalledWith('')
      expect(fetchMovies).not.toHaveBeenCalled()
      expect(insertMovies).not.toHaveBeenCalled()
    })
  })
})
