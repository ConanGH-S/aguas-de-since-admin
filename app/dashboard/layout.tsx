'use client'

import { NavbarComponent } from '@/components/components/Navbar'
import { ReactNode, useState } from 'react'
import { Suspense } from 'react'
import Loading from './loading'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useUserStore } from '@/components/store/user.store'

export default function Layout({ children }: { children: ReactNode | ReactNode[] }) {
  const router = useRouter()
  const { updateUsername } = useUserStore()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    checkCookie().then((data) => {
      const { payload } = data?.data
      console.log('payload')
      updateUsername(payload.username)
      setIsLoading(false)
    })
  }, [])

  const checkCookie = async () => {
    try {
      const response = await axios.get('/api/auth/user')
      return response
    } catch (error) {
      router.push('/', { scroll: false })
    }
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <NavbarComponent />
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </>
  )
}
