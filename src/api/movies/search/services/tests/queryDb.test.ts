import queryDb from '../queryDb'
import db from '@src/services/db'

jest.mock('@src/services/db')

describe('queryDb', () => {
  it('calls db.client.query', async () => {
    await queryDb('test', ['test'])

    expect(db.client.query).toHaveBeenCalledWith('test', ['test'])
  })
})
