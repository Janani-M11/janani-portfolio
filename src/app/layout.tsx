import '../app/globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Janani M | Portfolio',
  description: 'Aspiring Full-Stack Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.className}
          bg-white text-gray-900
          dark:bg-black dark:text-white
          transition-colors duration-300
          text-lg leading-relaxed
        `}
      >
        <Navbar />
        <main className="pt-24 space-y-12 max-w-7xl mx-auto px-4 md:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
