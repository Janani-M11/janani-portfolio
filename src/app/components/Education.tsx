'use client'

import { motion } from 'framer-motion'
import { SiLeetcode } from 'react-icons/si'

export default function Education() {
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

  return (
    <>
      <motion.section
        id="education"
        className="max-w-6xl mx-auto px-4 sm:px-8 pt-24 pb-20"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-purple-800 dark:text-purple-500 text-center mb-20">
          Education
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-500 dark:bg-purple-700"></div>

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
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-purple-600 dark:bg-purple-400 z-10" />

                  <div
                    className={`group border-2 border-purple-500 dark:border-purple-600
                    bg-zinc-100 dark:bg-zinc-900 p-8 sm:p-10 rounded-3xl w-full lg:w-[48%] 
                    transition duration-300 shadow-md
                    hover:ring-4 hover:ring-purple-400 
                    hover:shadow-xl hover:scale-[1.03]`}
                  >
                    <h3 className="text-2xl font-bold mb-2 text-purple-800 dark:text-purple-400 group-hover:text-purple-600 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-medium text-purple-900 dark:text-purple-300">
                      {edu.institution}
                    </p>
                    <p className="mt-3 text-sm text-purple-800 dark:text-purple-400">{edu.duration}</p>
                    <p className="mt-1 text-sm font-semibold text-purple-900 dark:text-purple-300">{edu.cgpa}</p>
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
        className="px-6 py-20 mt-24 bg-pink-100 dark:bg-black text-center rounded-3xl transition-colors"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-purple-800 dark:text-purple-500 text-center mb-20">
          Achievements
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-md hover:shadow-xl transition">
            <div className="text-purple-600 dark:text-purple-400 text-3xl mb-2">🎓</div>
            <div className="text-4xl font-bold text-gray-900 dark:text-white">8.69</div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">CGPA (on a 10 scale)</p>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-md hover:shadow-xl transition">
            <div className="text-orange-500 dark:text-orange-400 text-3xl mb-2">
              <SiLeetcode className="inline-block" size={32} />
            </div>
            <div className="text-4xl font-bold text-gray-900 dark:text-white">65+</div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">LeetCode Problems Solved</p>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-md hover:shadow-xl transition">
            <div className="text-yellow-500 text-3xl mb-2">📜</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">Java & Spring</div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Certified in Core Java, Infosys Springboard
            </p>
          </div>
        </div>
      </motion.section>

      {/* Certificates Section */}
      <motion.section
        id="certificates"
        className="px-6 py-20 mt-24 bg-pink-100 dark:bg-black text-center rounded-3xl transition-colors"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-purple-800 dark:text-purple-500 text-center mb-20">
          Certificates
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <a
            href="/certificates/java.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <div className="text-yellow-400 text-3xl mb-2">📜</div>
            <div className="text-xl font-semibold text-gray-800 dark:text-gray-200">Core Java - IIT Bombay</div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Java Programming Certification</p>
          </a>

          <a
            href="/certificates/springboard.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <div className="text-yellow-400 text-3xl mb-2">📜</div>
            <div className="text-xl font-semibold text-gray-800 dark:text-gray-200">Springboard Java</div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Infosys Springboard Certification</p>
          </a>

          <a
            href="/certificates/webdev.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <div className="text-yellow-400 text-3xl mb-2">📜</div>
            <div className="text-xl font-semibold text-gray-800 dark:text-gray-200">Web Development</div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Frontend Development Basics</p>
          </a>
        </div>
      </motion.section>
    </>
  )
}
