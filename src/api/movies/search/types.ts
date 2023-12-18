import { z } from 'zod'
import { responseSchema } from './schemas'

export type ResponseType = z.infer<typeof responseSchema>
