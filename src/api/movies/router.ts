import express from 'express'
import search from './search'

const router = express.Router()

router.use('/movies', search)

export default router
