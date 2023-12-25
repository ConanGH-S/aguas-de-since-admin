import { ZodSchema } from 'zod'

interface useValidateProps {
  model: ZodSchema<object>
  data: any
}

export const validateData = ({ model, data }: useValidateProps) => {
  const validatedData = model.safeParse(data)
  return {
    result: validatedData,
    data
  }
}
