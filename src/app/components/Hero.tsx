'use client'

import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
import { TypeAnimation } from 'react-type-animation'
import { HiDownload } from 'react-icons/hi'
import Link from 'next/link'

export default function Hero() {
  const [bubbles, setBubbles] = useState<{
    top: string
    left: string
    size: string
    delay: string
    duration: string
  }[]>([])

  useEffect(() => {
    const newBubbles = Array.from({ length: 30 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${5 + Math.random() * 15}px`,
      delay: `${Math.random() * 5}s`,
      duration: `${10 + Math.random() * 10}s`,
    }))
    setBubbles(newBubbles)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-start px-4 sm:px-6 text-center overflow-hidden bg-background-light dark:bg-background-dark pt-24"
    >
      {/* Background animation */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[300%] h-[300%] bg-gradient-to-tr from-purple-300 via-pink-300 to-yellow-300 opacity-10 animate-spinSlow blur-[150px]" />

        <div className="absolute w-full h-full">
          {bubbles.map((bubble, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-purple-300 dark:bg-purple-800 opacity-30 animate-bubble"
              style={{
                top: bubble.top,
                left: bubble.left,
                width: bubble.size,
                height: bubble.size,
                animationDelay: bubble.delay,
                animationDuration: bubble.duration,
              }}
            />
          ))}
        </div>
      </div>

      {/* Centered Text content */}
      <div className="max-w-3xl space-y-4 sm:space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
          <span className="dark:text-white text-purple-600">Hi, I'm </span>
          <span className="text-primary-light dark:text-primary-dark">JANANI M</span>
        </h1>
        <TypeAnimation
          sequence={[
            'Aspiring Full Stack Developer',
            1500,
            'Frontend React Developer',
            1500,
            'Backend Node.js Developer',
            1500,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="block text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300"
        />
        <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-400">
          Passionate about building elegant, high-performance, and user-friendly web & mobile applications. 
          Always eager to explore new technologies, collaborate with others, and create meaningful digital experiences.
        </p>

        {/* Resume Button */}
        <div className="flex justify-center pt-4">
          <Link
            href="/resume.pdf"
            className="flex items-center gap-2 px-6 py-3 bg-primary-light dark:bg-primary-dark text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform"
            target="_blank"
          >
            <HiDownload className="text-xl" /> Download Resume
          </Link>
        </div>

        {/* Social icons */}
        <div className="flex gap-6 justify-center text-2xl sm:text-3xl pt-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition-colors"
          >
            <SiLeetcode />
          </a>
          <a
            href="mailto:janani@example.com"
            className="hover:text-red-500 transition-colors"
          >
            <MdEmail />
          </a>
        </div>
      </div>
    </section>
  )
}