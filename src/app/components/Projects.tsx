'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function Projects() {
  return (
    <motion.section
      id="projects"
      className="max-w-6xl mx-auto px-4 sm:px-8 pt-20 pb-20"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-purple-800 dark:text-purple-500 text-center mb-16">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-10 justify-center">
        {[{
          title: 'EcoCharge - EV Charging App',
          desc: 'A Flutter-based app to locate, book, and review EV charging stations.',
          github: '#',
          demo: '#',
          image: '/projects/ecocharge.png'
        }, {
          title: 'BonVoyage - Hotel Reservation System',
          desc: 'A full-stack hotel booking platform using Java and MySQL.',
          github: '#',
          demo: '#',
          image: '/projects/bonvoyage.png'
        }, {
          title: 'SkillSync - Developer Portfolio Builder',
          desc: 'A React-based customizable portfolio generator with Tailwind and Framer Motion.',
          github: '#',
          demo: '#',
          image: '/projects/skillsync.png'
        }].map((proj, idx) => (
          <motion.div
            key={idx}
            className="w-full max-w-md mx-auto bg-gradient-to-br from-purple-100 to-purple-200 dark:from-zinc-800 dark:to-zinc-700 border border-purple-400 dark:border-purple-600 p-6 rounded-3xl shadow-lg hover:shadow-purple-400/50 dark:hover:shadow-purple-500/40 transform hover:scale-[1.03] transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 relative">
              <Image
                src={proj.image}
                alt={proj.title}
                width={500}
                height={280}
                className="rounded-xl object-cover w-full h-56 shadow-md"
              />
              <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                COMPLETED
              </span>
            </div>
            <h3 className="text-2xl font-extrabold text-purple-900 dark:text-purple-300 mb-3">
              {proj.title}
            </h3>
            <p className="text-purple-800 dark:text-purple-200 mb-6 text-sm">
              {proj.desc}
            </p>
            <div className="flex gap-4">
              <a
                href={proj.github}
                className="flex-1 text-center bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-xl font-medium shadow"
              >
                GitHub
              </a>
              <a
                href={proj.demo}
                className="flex-1 text-center bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-xl font-medium shadow"
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
