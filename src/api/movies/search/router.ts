import express from 'express'
import search from './search'
import { reqValidator } from '@src/services/zod'
import schema from './schema'

const router = express.Router()

router.get('/search', reqValidator(schema), search)

export default router
