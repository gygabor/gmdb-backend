import updateCount from '../updateCount'
import queryDb from '../queryDb'
import queries from '../queries'

jest.mock('../queryDb', () => jest.fn())

const sqlQuery = queries['updateCount']
const id = '1'

describe('getMovies', () => {
  it('calls queryDb', async () => {
    await updateCount(id)

    expect(queryDb).toHaveBeenCalledWith(sqlQuery, [id])
  })
})
