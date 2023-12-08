import express from 'express'
import { helloWorld } from './api'

const app = express()

app.get('/', helloWorld)

export default app
