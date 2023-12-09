import type { Request, Response } from 'express'
import moviesController from './moviesController'

const movies = async (req: Request, res: Response) => {
  await moviesController()
  res.send('Movies!')
}

export default movies
