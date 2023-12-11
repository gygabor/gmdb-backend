import express from 'express'
import router from './router'
import db from './services/db'

const app = express()

app.use(router)

db.connectToDb()

export default app
