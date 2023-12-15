import { AnyZodObject } from 'zod'
import type { Request, Response, NextFunction } from 'express'

const reqValidator =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      })
      next()
    } catch (err: unknown) {
      next(err)
    }
  }

export default reqValidator
