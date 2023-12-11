import express from 'express'
import router from '@src/router'
import db from '@src/services/db'

const app = express()

app.use(router)

db.connectToDb()

export default app
