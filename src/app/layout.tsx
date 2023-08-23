import type { Metadata } from 'next'
import Head from 'next/head'
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
      <Head>
        <meta name="author" content="Marvin Mudegu"/>
        <meta property="og:title" content="Portfolio Website"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://MarvinMudegu.online"/>
        {/*<meta property="og:image" content="../Resources/Logo.svg"/>*/}
        <meta property="og:description" content="This is a portfolio website"/>
        <meta property="og:site_name" content="Marvin Mudegu"/>
      </Head>
      <body className={globalStyle.bodyContainer}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
