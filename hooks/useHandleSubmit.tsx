import { FormEvent, RefObject, useEffect } from 'react'

export const useHandleSubmit = (ref: RefObject<any>, callback: CallableFunction) => {
  useEffect(() => {
    const form = ref.current
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const formData = new FormData(form)
      const userData = Object.fromEntries(formData)
      callback(userData)
    }

    form.addEventListener('submit', handleSubmit)

    return () => {
      form.removeEventListener('submit', handleSubmit)
    }
  }, [ref, callback])
}
