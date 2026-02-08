import React from "react"
import type { Metadata, Viewport } from 'next'
import { Nunito, Quicksand } from 'next/font/google' // Fuentes nuevas

import './globals.css'

// Fuente para Títulos (Gordita y redonda)
const fontAccent = Nunito({ 
  subsets: ['latin'], 
  weight: ['700', '900'],
  variable: '--font-accent' 
})

// Fuente para Texto corrido (Legible y amigable)
const fontMain = Quicksand({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600'],
  variable: '--font-main' 
})

export const metadata: Metadata = {
  title: 'Flor de Antojitos | Pastelería Creativa',
  description: 'Tortas personalizadas, lunchbox cakes y mesas dulces con diseño único. Pedidos por WhatsApp.',
  icons: {
    icon: '/icon.png', 
    apple: '/icon.png', 
  },
}

export const viewport: Viewport = {
  themeColor: '#ec4899', // Color de la barra del navegador (Rosa)
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${fontMain.variable} ${fontAccent.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  )
}