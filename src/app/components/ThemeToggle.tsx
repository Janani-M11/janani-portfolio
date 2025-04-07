'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('theme') === 'dark'
    setIsDark(isDarkMode)
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [])

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark'
    setIsDark(!isDark)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', !isDark)
  }

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded bg-purple-500 text-white dark:bg-purple-700"
    >
      Switch to {isDark ? 'Light' : 'Dark'} Mode
    </button>
  )
}
