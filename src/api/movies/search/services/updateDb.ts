import postgreSQLClient from '@src/services/postgreSQL/postgreSQLClient'

const updateDb = async (
  query: string,
  values: (string | Date)[],
): Promise<void> => {
  try {
    await postgreSQLClient.query(query, values)
  } catch (error) {
    console.error(error)
  }
}

export default updateDb
