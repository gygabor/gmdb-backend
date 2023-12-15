import type { NextFunction, Request, Response } from 'express'
import moviesController from './searchController'

const route = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const movies = await moviesController(req.query)
    res.send(movies)
  } catch (err) {
    next(err)
  }
}

export default route
