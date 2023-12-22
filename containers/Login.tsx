'use client'

import { useRef, useState } from 'react'
import { Button, Input } from '@nextui-org/react'

import { Card } from '../components/Card'
import { ILogin } from '../types/login.types'
import { useHandleSubmit } from '../hooks/useHandleSubmit'
import { validateData } from '../lib/validateData'
import { loginSchema } from '../models/login.models'
import { Request } from '../services/api'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export default function LoginContainer() {
  const router = useRouter()

  const formRef = useRef<HTMLFormElement>(null)
  const [isValid, setIsValid] = useState({
    username: true,
    password: true
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useHandleSubmit(formRef, async (userData: ILogin) => {
    const { result } = validateData({ data: userData, model: loginSchema })
    if (!result.success) {
      setIsValid({
        username: result.error.issues.find((issue) => issue.path[0] === 'username') ? false : true,
        password: result.error.issues.find((issue) => issue.path[0] === 'password') ? false : true
      })
      return
    }
    setIsSubmitting(true)
    setIsValid({
      username: true,
      password: true
    })
    try {
      const fetch = new Request()
      await fetch.login(userData)
      return router.push('/dashboard')
    } catch (error) {
      toast.error('¡¡Opss!!', {
        description: 'Ha ocurrido un error al solicitar el servicio.'
      })
      setIsSubmitting(false)
    }
  })

  return (
    <section className='px-8 md:px-0'>
      <Card
        backgroundColor='white'
        className='flex flex-col justify-center gap-10'
        isRounded
      >
        <h2 className='text-large font-semibold'>Digita tus credenciales para continuar</h2>
        <form
          ref={formRef}
          className='grid grid-rows-3 gap-6'
        >
          <Input
            label='Usuario'
            name='username'
            required
            isInvalid={!isValid.username}
            errorMessage={!isValid.username && 'El usuario no está vacío o no tiene como mínimo 3 letras'}
            variant='bordered'
          />
          <Input
            label='Contraseña'
            name='password'
            required
            isInvalid={!isValid.password}
            errorMessage={!isValid.password && 'La contraseña debe ser de 8 carácteres, 1 mayúscula, 1 minúscula y 1 número'}
            variant='bordered'
          />
          <Button
            type='submit'
            color='primary'
            className='w-fit mx-auto'
            isLoading={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </Button>
        </form>
      </Card>
    </section>
  )
}
