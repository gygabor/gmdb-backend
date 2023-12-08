import express from 'express'
import { helloWorld, movies } from './api'

const app = express()

app.get('/', helloWorld)
app.get('/movies', movies)

export default app
