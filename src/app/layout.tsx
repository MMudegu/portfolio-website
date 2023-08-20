import type { Metadata } from 'next'
import globalStyle from './global.module.css'
import Header from './_headerComponent/header'

export const metadata: Metadata = {
  title: 'Marvin Mudegu',
  description: 'This is a portfolio website',
  viewport:'width = device-width, initial-scale = 1.0'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={globalStyle.bodyContainer}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
