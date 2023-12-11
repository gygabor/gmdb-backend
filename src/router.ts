import express from 'express'
import { helloWorld, movies } from '@src/api'

const router = express.Router()

router.get('/', helloWorld)
router.use('/movies', movies)

export default router
