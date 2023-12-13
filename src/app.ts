import express from 'express'
import cors from 'cors'
import router from '@src/router'
import db from '@src/services/db'

const app = express()

app.use(cors())
app.use(router)

db.connectToDb()

export default app
