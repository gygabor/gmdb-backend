import postgreSQLClient from './postgreSQLClient'

const connectToDb = async () => {
  try {
    await postgreSQLClient.connect()
    console.log('Connected to PostgreSQL')
  } catch (error) {
    console.error(error)
  }

  process.on('SIGINT', async () => {
    await postgreSQLClient.end()
    console.log('Disconnected from PostgreSQL')
    process.exit(0)
  })
}

export default connectToDb
