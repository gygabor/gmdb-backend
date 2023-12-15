import queries from './queries'
import queryDb from './queryDb'

const updateCount = async (id: string): Promise<void> => {
  const sqlQuery = queries['updateCount']

  await queryDb(sqlQuery, [id])
}

export default updateCount
