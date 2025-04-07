'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  const menuItems = ['home', 'skills', 'education', 'projects', 'contact']

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-100 dark:bg-zinc-900 border-b border-gray-300 dark:border-gray-800 shadow z-50">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center overflow-x-auto">
        <h1 className="text-2xl font-bold text-primary-light dark:text-primary-dark tracking-widest">
          Janani M
        </h1>
        <div className="flex gap-10 items-center text-base sm:text-lg whitespace-nowrap">
          {menuItems.map((item) => (
            <a 
              key={item}
              href={`#${item}`}
              className="capitalize text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-300"
            >
              {item === 'contact' ? 'Contact Me' : item}
            </a>
          ))}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-primary-light dark:bg-primary-dark text-white hover:scale-110 transition-transform"
          >
            {darkMode ? '🌞' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  )
}
