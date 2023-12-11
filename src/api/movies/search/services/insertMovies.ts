import queries from './queries'
import queryDb from './queryDb'

const insertMovies = async (
  query: string,
  page: string,
  response: string,
): Promise<void> => {
  const sqlQuery = queries['insertMovies']

  try {
    await queryDb(sqlQuery, [query, page, response, new Date()])
  } catch (error) {
    console.error(error)
  }
}

export default insertMovies
