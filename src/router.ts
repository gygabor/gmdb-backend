import express from 'express'
import { helloWorld, movies } from './api'

const router = express.Router()

router.get('/', helloWorld)
router.use('/movies', movies)

export default router
