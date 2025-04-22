'use client'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
import { TypeAnimation } from 'react-type-animation'
import { HiDownload } from 'react-icons/hi'
import Link from 'next/link'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-center overflow-hidden pt-12 sm:pt-16 bg-transparent dark:bg-transparent"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Light theme gradient to match footer */}
        <div className="fixed inset-0 -z-50 bg-gradient-to-r from-[#34d399] to-[#3b82f6] dark:hidden" />
        {/* Dark theme black transparent */}
        <div className="fixed inset-0 -z-50 hidden dark:block bg-black/80" />
      </div>

      {/* Centered Content */}
      <div className="max-w-3xl space-y-4 sm:space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white dark:text-white">
          <span className="text-gradient light:text-gradient dark:text-white">Hi, I&apos;m </span>
          <span className="text-cyan-400 dark:text-purple-600">JANANI M</span>
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
          className="block text-lg sm:text-xl md:text-2xl text-white dark:text-white"
        />
        <p className="text-base sm:text-lg md:text-xl text-white dark:text-gray-200">
          Passionate about building elegant, high-performance, and user-friendly web & mobile applications.
          Always eager to explore new technologies, collaborate with others, and create meaningful digital experiences.
        </p>

     {/* Resume Button */}
     <div className="flex justify-center pt-4">
        <a
          href="/JANANI_RESUME_.pdf"  // Path to your resume in the public directory
          download="JANANI_RESUME" // Forces the download with the name "My_Resume"
          className="flex items-center gap-2 px-6 py-3 
            bg-cyan-300 text-white 
            dark:bg-primary-dark dark:text-white
            font-semibold rounded-lg shadow-md 
            hover:scale-105 transition-transform"
        >
          <HiDownload className="text-xl" /> Download Resume
        </a>
      </div>


        {/* Social Icons */}
        <div className="flex gap-6 justify-center text-2xl sm:text-3xl pt-6">
          <a
            href="https://github.com/Janani-M11"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-black dark:hover:text-white transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/janani-m-677786278/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/u/JananiMurugan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-500 transition-colors"
          >
            <SiLeetcode />
          </a>
          <a
            href="mailto:jananim118@gmail.com"
            className="text-white hover:text-red-500 transition-colors"
          >
            <MdEmail />
          </a>
        </div>
      </div>
    </section>
  );
}

