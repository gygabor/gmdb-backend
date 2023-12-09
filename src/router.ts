import express from 'express'
import { helloWorld, movies } from './api'

const router = express.Router()

router.get('/', helloWorld)
router.get('/movies', movies)

export default router
