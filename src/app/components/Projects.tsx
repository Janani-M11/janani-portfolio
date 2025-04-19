'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function Projects() {
  const projects = [
    {
      title: 'EcoCharge - EV Charging App',
      desc: 'A Flutter-based app to locate, book, and review EV charging stations.',
      github: '#',
      demo: '#',
      image: '/projects/ecocharge.png'
    },
    {
      title: 'BonVoyage - Hotel Reservation System',
      desc: 'A full-stack hotel booking platform using Java and MySQL.',
      github: '#',
      demo: '#',
      image: '/projects/bonvoyage.png'
    },
    {
      title: 'SkillSync - Developer Portfolio Builder',
      desc: 'A React-based customizable portfolio generator with Tailwind and Framer Motion.',
      github: '#',
      demo: '#',
      image: '/projects/skillsync.png'
    }
  ]

  return (
    <motion.section
      id="projects"
      className="max-w-7xl mx-auto px-4 sm:px-8 pt-20 pb-20"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl sm:text-5xl font-extrabold text-purple-800 dark:text-purple-400 text-center mb-16">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col justify-between bg-gradient-to-br from-purple-100 to-purple-200 dark:from-zinc-800 dark:to-zinc-700 border border-purple-300 dark:border-purple-600 p-5 rounded-3xl shadow-lg hover:shadow-purple-400/40 dark:hover:shadow-purple-500/30 transform hover:scale-[1.02] transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative mb-4">
              <Image
                src={proj.image}
                alt={proj.title}
                width={500}
                height={280}
                className="rounded-xl object-cover w-full h-56 sm:h-48 lg:h-40 shadow-md"
              />
              <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                COMPLETED
              </span>
            </div>

            <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-2">
              {proj.title}
            </h3>

            <p className="text-sm text-purple-800 dark:text-purple-200 mb-4 flex-grow">
              {proj.desc}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={proj.github}
                className="w-full text-center bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-xl font-medium shadow"
              >
                GitHub
              </a>
              <a
                href={proj.demo}
                className="w-full text-center bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-xl font-medium shadow"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
