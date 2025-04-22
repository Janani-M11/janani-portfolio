'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { SiLeetcode } from 'react-icons/si'

// Add a 'thumbnail' field pointing to your certificate image
const certificateList = [
  {
    title: 'JAVA Completion certificate - IIT Bombay',
    file: '/Certificate_for_the_Completion_of_java.pdf',
    thumbnail: '/thumbnails/iitjava.png',
  },
  {
    title: 'DataStructures and Algorithms using Java',
    file: '/DataStructures_and_Algorithms_using_Java.pdf',
    thumbnail: '/thumbnails/daajava.png',
  },
  {
    title: 'Database Management System Part-1',
    file: '/Database_Management_System_Part-1.pdf',
    thumbnail: '/thumbnails/db1.png',
  },
  {
    title: 'Database Management System Part-2',
    file: '/Database_Management_System_Part-2.pdf',
    thumbnail: '/thumbnails/db2.png',
  },
  {
    title: 'Agile Scrum in Practice',
    file: '/Agile_Scrum_in_Practice.pdf',
    thumbnail: '/thumbnails/agile.png',
  },
  {
    title: 'Introduction to Machine Learning',
    file: '/INTROTOML.pdf',
    thumbnail: '/thumbnails/ml.png',
  },
]

const educationList = [
  {
    degree: 'Master of Computer Application',
    institution: 'PSG COLLEGE OF TECHNOLOGY',
    duration: '2024 - 2026',
    cgpa: 'CGPA: 8.69',
  },
  {
    degree: 'Bachelor of Computer Science',
    institution: 'The Gandhigram Rural Institute',
    duration: '2021 - 2024',
    cgpa: 'CGPA: 9.28',
  },
  {
    degree: 'Higher Secondary School',
    institution: 'Achyuta Academy Matriculation Higher Secondary School',
    duration: '2020 - 2021',
    cgpa: 'Percentage: 94.4%',
  },
]

export default function Education() {
  const [showAll, setShowAll] = useState(false)
  const displayCertificates = showAll ? certificateList : certificateList.slice(0, 3)

  return (
    <>
      {/* Education Section */}
      <motion.section
        id="education"
        className="max-w-6xl mx-auto px-4 sm:px-8 pt-24 pb-20
          bg-gradient-to-br from-[#34d399] via-[#3b82f6] to-[#10b981]
          dark:bg-black"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white dark:text-purple-500 text-center mb-20">
          Education
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-cyan-600 dark:bg-purple-600"></div>

          <div className="flex flex-col gap-20">
            {educationList.map((edu, idx) => {
              const isLeft = idx % 2 === 0
              return (
                <motion.div
                  key={idx}
                  className={`relative w-full flex flex-col lg:flex-row ${isLeft ? 'lg:justify-start' : 'lg:justify-end'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-cyan-600 dark:bg-purple-500 z-10" />

                  <div
                    className={`group border-2 border-cyan-600 dark:border-purple-500
                    bg-zinc-100 dark:bg-zinc-900 p-8 sm:p-10 rounded-3xl w-full lg:w-[48%]
                    transition duration-300 shadow-md
                    hover:ring-4 hover:ring-cyan-400 dark:hover:ring-purple-400
                    hover:shadow-xl hover:scale-[1.03]`}
                  >
                    <h3 className="text-2xl font-bold mb-2 text-cyan-700 dark:text-purple-400 group-hover:text-cyan-600 dark:group-hover:text-purple-300 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-medium text-cyan-800 dark:text-purple-300">
                      {edu.institution}
                    </p>
                    <p className="mt-3 text-sm text-cyan-700 dark:text-purple-400">{edu.duration}</p>
                    <p className="mt-1 text-sm font-semibold text-cyan-800 dark:text-purple-300">{edu.cgpa}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        id="achievements"
        className="px-6 py-20 mt-24
          bg-gradient-to-br from-[#34d399] via-[#3b82f6] to-[#10b981]
          dark:bg-black text-center rounded-3xl transition-colors"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white dark:text-purple-500 text-center mb-20">
          Achievements
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="bg-white/50 dark:bg-zinc-800/50 backdrop-blur-lg rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 border border-transparent hover:border-cyan-400 dark:hover:border-purple-400">
            <div className="text-cyan-600 dark:text-purple-400 text-3xl mb-2">🎓</div>
            <div className="text-4xl font-bold text-gray-900 dark:text-white">8.69</div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">CGPA (on a 10 scale)</p>
          </div>

          <div className="bg-white/50 dark:bg-zinc-800/50 backdrop-blur-lg rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 border border-transparent hover:border-cyan-400 dark:hover:border-purple-400">
            <div className="text-orange-500 dark:text-orange-400 text-3xl mb-2">
              <SiLeetcode className="inline-block" size={32} />
            </div>
            <div className="text-4xl font-bold text-gray-900 dark:text-white">65+</div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">LeetCode Problems Solved</p>
          </div>

          <div className="bg-white/50 dark:bg-zinc-800/50 backdrop-blur-lg rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 border border-transparent hover:border-cyan-400 dark:hover:border-purple-400">
            <div className="text-yellow-500 text-3xl mb-2">📜</div>
            <div className="text-4xl font-bold text-gray-900 dark:text-white">5+</div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Certificates
            </p>
          </div>
        </div>
      </motion.section>

      {/* Certificates Section */}
      <motion.section
        id="certificates"
        className="px-6 py-20 mt-24
          bg-gradient-to-br from-[#34d399] via-[#3b82f6] to-[#10b981]
          dark:bg-black text-center rounded-3xl transition-colors"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:
text-5xl font-extrabold text-white dark:text-purple-500 mb-20">
          Certificates
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {displayCertificates.map(cert => (
            <a
              key={cert.file}
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md p-4 sm:p-6 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-transparent hover:border-cyan-400 dark:hover:border-purple-400 group"
            >
              {/* Thumbnail */}
              <div className="w-full h-40 relative mb-4 overflow-hidden rounded-xl">
                <Image
                  src={cert.thumbnail}
                  alt={`${cert.title} thumbnail`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Title & View Prompt */}
              <div className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-cyan-500 dark:group-hover:text-purple-300 transition-colors">
                {cert.title}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Click to view
              </p>
            </a>
          ))}
        </div>

        {/* Toggle Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAll(prev => !prev)}
            className="px-6 py-2 bg-cyan-600 dark:bg-purple-500 text-white rounded-full hover:bg-cyan-500 dark:hover:bg-purple-400 transition"
          >
            {showAll ? 'View Less' : 'View More'}
          </button>
        </div>
      </motion.section>
    </>
  )
}