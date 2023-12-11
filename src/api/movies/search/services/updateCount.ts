import queries from './queries'
import queryDb from './queryDb'

const updateCount = async (id: string): Promise<void> => {
  const sqlQuery = queries['updateCount']

  try {
    await queryDb(sqlQuery, [id])
  } catch (error) {
    console.error(error)
  }
}

export default updateCount
