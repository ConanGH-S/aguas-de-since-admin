'use client'

import { Card } from '@/components/components/Card'
import { useUserStore } from '@/components/store/user.store'
import { Button, Link } from '@nextui-org/react'

interface MenuCardProps {
  title: string
  description: string
  linkTo: string
  backgroundColor: string
  textColor: string
}

export const MenuDashboard = () => {
  const { username } = useUserStore()

  const cardsInfo: MenuCardProps[] = [
    {
      title: 'Facturas',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam sequi officia maiores corporis iste vel eos minus laboriosam culpa quas, suscipit quos quibusdam, beatae itaque delectus dolor eaque molestiae a!',
      linkTo: '/dashboard/bills',
      backgroundColor: 'white',
      textColor: 'black'
    },
    {
      title: 'Usuarios',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam sequi officia maiores corporis iste vel eos minus laboriosam culpa quas, suscipit quos quibusdam, beatae itaque delectus dolor eaque molestiae a!',
      linkTo: '/dashboard/users',
      backgroundColor: '#004FB6',
      textColor: 'white'
    }
  ]

  return (
    <main className='p-8 h-full flex flex-col gap-16'>
      <h1 className='text-4xl text-center'>Bienvenido, {username}</h1>
      <section className='flex-1 flex flex-col md:flex-row gap-8'>
        {cardsInfo.map(({ backgroundColor, description, linkTo, textColor, title }, index) => (
          <Card
            key={index}
            backgroundColor={backgroundColor}
            isRounded
            roundedType='rounded-3xl'
            textColor={textColor}
            className='text-center grid grid-rows-[auto_1fr_auto] items-center gap-4'
          >
            <h2 className='text-xl'>{title}</h2>
            <p>{description}</p>
            <Button
              as={Link}
              href={linkTo}
              color='primary'
              className='max-w-fit justify-self-center'
            >
              Consultar
            </Button>
          </Card>
        ))}
      </section>
    </main>
  )
}
