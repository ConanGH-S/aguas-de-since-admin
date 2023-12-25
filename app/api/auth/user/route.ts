import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'

export async function GET() {
  const cookieStore = cookies()
  const token = cookieStore.get('user_session')
  if (!token) return new Response('No existe la cookie', { status: 401 })

  try {
    const decoded = jwt.verify(token.value, 'foobar')
    return new Response(JSON.stringify(decoded), { status: 200 })
  } catch (error) {
    return new Response('Cookie expirada', { status: 403 })
  }
}
