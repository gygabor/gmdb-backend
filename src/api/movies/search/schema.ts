import { z } from 'zod'

export const schema = z.object({
  query: z.object({
    query: z.string({
      required_error: 'Movie title is required',
    }),
    page: z.string().optional(),
  }),
})

export const responseSchema = z.object({
  page: z.number(),
  source: z.string(),
  results: z.array(
    z.object({
      id: z.number(),
      title: z.string(),
      poster_path: z.string().nullable(),
      overview: z.string(),
      release_date: z.string(),
      vote_average: z.number(),
      vote_count: z.number(),
      backdrop_path: z.string().nullable(),
      genre_ids: z.array(z.number()),
      original_language: z.string(),
      original_title: z.string(),
      popularity: z.number(),
      video: z.boolean(),
      adult: z.boolean(),
    }),
  ),
  total_pages: z.number(),
  total_results: z.number(),
})
