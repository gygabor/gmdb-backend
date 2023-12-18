import { z } from 'zod'
import { responseApiSchema } from './schemas'

export type ResponseApiType = z.infer<typeof responseApiSchema>
