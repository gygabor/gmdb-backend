import express from 'express'
import search from './search'
import { reqValidator } from '@src/services/zod'
import { requestSchema } from './schemas'

const router = express.Router()

router.get('/search', reqValidator(requestSchema), search)

export default router
