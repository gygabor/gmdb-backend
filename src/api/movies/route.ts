import type { Request, Response } from 'express'
import moviesController from './moviesController'

const route = async (req: Request, res: Response): Promise<void> => {
  const movies = await moviesController(req.query)
  res.send(movies)
}

export default route
