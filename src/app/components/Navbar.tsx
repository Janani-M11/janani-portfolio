'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const menuItems = ['home', 'skills', 'education', 'projects', 'contact']

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        transition-colors duration-500 backdrop-blur-md
        border-b
        ${darkMode
          ? 'bg-zinc-900/80 border-zinc-700'
          : 'bg-gradient-to-r from-[#fbe8ff] to-[#e9d5ff] border-purple-200 shadow-md'}
      `}
    >
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary-light dark:text-primary-dark tracking-widest">
          Janani M
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center text-base sm:text-lg">
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

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-primary-light dark:bg-primary-dark text-white hover:scale-110 transition-transform"
          >
            {darkMode ? '🌞' : '🌙'}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="w-6 h-6 text-gray-700 dark:text-white" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div
          className={`
            md:hidden px-6 pb-4 flex flex-col gap-4
            transition-colors duration-300
            ${darkMode ? 'bg-zinc-900/90' : 'bg-[#f3e8ff]/80'}
          `}
        >
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              className="capitalize text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-300"
            >
              {item === 'contact' ? 'Contact Me' : item}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
