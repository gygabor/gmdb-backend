import express from 'express'
import cors from 'cors'
import router from '@src/router'
import db from '@src/services/db'
import errorHandler from '@src/services/errorHandler'

db.connectToDb()

const app = express()

app.use(cors())
app.use(router)
app.use(errorHandler)

export default app
