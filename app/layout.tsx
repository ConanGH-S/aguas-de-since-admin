import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Admin Aguas de Sincé',
  description: 'Aplicativo de administración para la empresa Aguas de Sincé',
  authors: [
    { name: 'Stiven Blandón Urrego', url: 'https://github.com/ConanGH-S' },
    { name: 'Stiven Benjumea Morales', url: 'https://github.com/STBenji' }
  ],
  keywords: ['admin', 'aguas', 'sincé', 'since', 'administración'],
  category: 'admin',
  applicationName: 'Aguas de Sincé'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
