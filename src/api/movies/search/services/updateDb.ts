import db from '@src/services/db'

const updateDb = async (
  query: string,
  values: (string | Date)[],
): Promise<void> => {
  try {
    await db.client.query(query, values)
  } catch (error) {
    console.error(error)
  }
}

export default updateDb
