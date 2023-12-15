import type { NextFunction, Request, Response } from 'express'
import searchController from './searchController'

const search = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  console.log(req)
  try {
    const movies = await searchController(req.query)
    res.send(movies)
  } catch (err) {
    next(err)
  }
}

export default search
