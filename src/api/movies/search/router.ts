import express from 'express'
import search from './search'
import { requestValidator } from '@src/services/zod'
import { requestSchema } from './schemas'

const router = express.Router()

router.get('/search', requestValidator(requestSchema), search)

export default router
