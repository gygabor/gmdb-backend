import {
  fetchMovies as fetchMoviesService,
  getMovies as getMoviesService,
  insertMovies,
  updateCount,
} from '../services'
import searchController from '../searchController'
import {
  noResponseTmdb,
  responseApi,
  responseDb,
  responseTmdb,
} from '../mockedValues'

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

const mockedQuery = { query: 'test', page: '1' }

describe('searchController', () => {
  beforeAll(() => {
    fetchMovies.mockResolvedValue(noResponseTmdb)
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
      fetchMovies.mockResolvedValue(noResponseTmdb)

      await expect(searchController(mockedQuery)).resolves.toEqual({
        ...noResponseTmdb,
        source: 'tmdb',
      })

      expect(fetchMovies).toHaveBeenCalledWith('test', '1')
      expect(insertMovies).not.toHaveBeenCalled()
    })

    it(`fetches movies, saves and returns them. Movies exist in Tmdb`, async () => {
      fetchMovies.mockResolvedValue(responseTmdb)

      await expect(
        searchController({ query: 'test', page: '1' }),
      ).resolves.toEqual(responseApi)

      expect(insertMovies).toHaveBeenCalledWith(
        'test',
        '1',
        JSON.stringify(responseDb),
      )
    })
  })

  describe(`movies are cached in the db`, () => {
    it(`increments count and return with movies`, async () => {
      const id = '1'

      getMovies.mockResolvedValue({
        id,
        response: responseDb,
      })

      await expect(searchController(mockedQuery)).resolves.toEqual(responseDb)

      expect(updateCount).toHaveBeenCalledWith(id)
      expect(fetchMovies).not.toHaveBeenCalled()
      expect(insertMovies).not.toHaveBeenCalled()
    })
  })
})
