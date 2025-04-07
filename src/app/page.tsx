'use client'

import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import { Projects } from './components/Projects'
import Contact from './components/Contact'
// import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-white overflow-x-hidden">
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />

    </main>
  )
}
