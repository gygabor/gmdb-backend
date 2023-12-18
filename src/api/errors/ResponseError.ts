import { ZodError } from 'zod'

interface ZodErrorMessage {
  [key: string]: string[] | undefined
}

class ResponseError extends Error {
  private zodErrorMessage: ZodErrorMessage
  public status: number = 500

  constructor(err: ZodError) {
    super(err.message)
    this.zodErrorMessage = err.flatten().fieldErrors
    this.name = 'ResponseError'
    this.stack = err.stack
  }

  public getMessage(): ZodErrorMessage {
    return this.zodErrorMessage
  }
}

export default ResponseError
