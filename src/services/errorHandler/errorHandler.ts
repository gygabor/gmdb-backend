import { AxiosError } from 'axios'
import type {
  Request,
  Response,
  ErrorRequestHandler,
  NextFunction,
} from 'express'

const errorHandler: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { message, stack } = err

  if (err instanceof AxiosError) {
    res.status(502).json({ message, stack })
  } else {
    res.status(500).json({ message, stack })
  }
  next()
}

export default errorHandler
