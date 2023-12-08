import type { Request, Response } from 'express'

const movies = (req: Request, res: Response) => {
  res.send('Movies')
}

export default movies
