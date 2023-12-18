import { responseDb } from '../../tests/mockedValues'
import insertMovies from '../insertMovies'
import queryDb from '../queryDb'

jest.mock('../queryDb', () => jest.fn())

const responseString = JSON.stringify(responseDb)

describe('getMovies', () => {
  it('calls queryDb', async () => {
    await insertMovies('test', '1', responseString)

    expect(queryDb).toHaveBeenCalled()
  })
})
