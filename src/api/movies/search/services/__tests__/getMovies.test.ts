import { responseDb } from '../../mockedValues'
import getMovies from '../getMovies'
import queries from '../queries'
import queryDb from '../queryDb'

const mockedQueryDb = queryDb as jest.MockedFunction<typeof queryDb>

jest.mock('../queryDb', () => {
  return jest.fn(() => Promise.resolve({ rows: [] }))
})

const sqlQuery = queries['getMovies']

describe('getMovies', () => {
  it('calls queryDb', async () => {
    await getMovies('test', '1')

    expect(mockedQueryDb).toHaveBeenCalledWith(sqlQuery, ['test', '1'])
  })

  it('returns null', async () => {
    await expect(getMovies('test', '1')).resolves.toEqual(null)
  })

  it('returns a result', async () => {
    const id = '1'

    mockedQueryDb.mockResolvedValue({
      rows: [{ id, response: responseDb }],
      rowCount: 0,
      command: '',
      oid: 0,
      fields: [],
    })

    await expect(getMovies('test', '1')).resolves.toEqual({
      id,
      response: responseDb,
    })
  })
})
