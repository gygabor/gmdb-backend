import type { NextFunction, Request, Response } from 'express'
import searchController from './searchController'
import { responseValidator } from '@src/services/zod'
import { responseApiSchema } from './schemas'

const search = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const movies = await searchController(req.query)
    responseValidator(movies, responseApiSchema)
    res.send(movies)
  } catch (err) {
    next(err)
  }
}

export default search
