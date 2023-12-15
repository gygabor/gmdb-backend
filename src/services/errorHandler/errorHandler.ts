import { AxiosError } from 'axios'
import type {
  Request,
  Response,
  ErrorRequestHandler,
  NextFunction,
} from 'express'
import { ZodError } from 'zod'

const errorHandler: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { message, stack } = err

  if (err instanceof AxiosError) {
    res.status(502).json({ message, stack })
  } else if (err instanceof ZodError) {
    res.status(400).json({ message: err.flatten().fieldErrors, stack })
  } else {
    res.status(500).json({ message, stack })
  }
  next()
}

export default errorHandler
