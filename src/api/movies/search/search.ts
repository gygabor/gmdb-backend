import type { NextFunction, Request, Response } from 'express'
import searchController from './searchController'
import { resValidator } from '@src/services/zod'
import { responseSchema } from './schemas'

const search = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const movies = await searchController(req.query)
    resValidator(movies, responseSchema)
    res.send(movies)
  } catch (err) {
    next(err)
  }
}

export default search
