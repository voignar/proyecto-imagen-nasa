import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ 
  subsets: ['latin'], 
  weight: ['400', '900', '700'] 
})

export const metadata: Metadata = {
  title: 'Imagenes de la NASA',
  description: 'Imagenes diarias de la NASA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  )
}
