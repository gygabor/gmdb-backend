import express from 'express'
import router from './router'
import postgreSQL from './services/postgreSQL'

const app = express()

app.use(router)

postgreSQL.connectToDb()

export default app
