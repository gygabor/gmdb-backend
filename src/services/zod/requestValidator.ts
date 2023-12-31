import { AnyZodObject, ZodError } from 'zod'
import type { Request, Response, NextFunction } from 'express'
import RequestError from '@src/errors/RequestError'

const requestValidator =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      })
      next()
    } catch (err: unknown) {
      if (err instanceof ZodError) {
        next(new RequestError(err))
      } else {
        next(err)
      }
    }
  }

export default requestValidator
