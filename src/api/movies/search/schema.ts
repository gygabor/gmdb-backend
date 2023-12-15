import { z } from 'zod'

const schema = z.object({
  query: z.object({
    query: z.string({
      required_error: 'Movie title is required',
    }),
    page: z.string().optional(),
  }),
})

export default schema
