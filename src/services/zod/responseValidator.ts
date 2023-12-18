import ResponseError from '@src/errors/ResponseError'
import { AnyZodObject, ZodError } from 'zod'

const responseValidator = <T>(response: T, schema: AnyZodObject) => {
  try {
    schema.parse(response)
  } catch (err: unknown) {
    if (err instanceof ZodError) {
      throw new ResponseError(err)
    } else {
      throw err
    }
  }
}

export default responseValidator
