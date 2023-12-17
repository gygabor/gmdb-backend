import { ZodError } from 'zod'

interface ZodErrorMessage {
  [key: string]: string[] | undefined
}

class RequestError extends Error {
  private zodErrorMessage: ZodErrorMessage
  constructor(err: ZodError) {
    super(err.message)
    this.zodErrorMessage = err.flatten().fieldErrors
    this.name = 'RequestError'
    this.stack = err.stack
  }

  public getMessage(): ZodErrorMessage {
    return this.zodErrorMessage
  }
}

export default RequestError
