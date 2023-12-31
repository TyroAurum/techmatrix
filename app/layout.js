import { Inter, Orbitron } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const orbitron = Orbitron({
  subsets:['latin']
})

export const metadata = {
  title: 'TechMatrix - 2k24',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={orbitron.className}>{children}<Analytics /></body>
    </html>
  )
}
