'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto px-4 sm:px-8 text-left pt-16 pb-24 sm:pt-20 sm:pb-28 bg-background-light dark:bg-background-dark"
    >
      <motion.div
        className="flex items-center gap-4 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <Sparkles className="h-8 w-8 text-purple-700 dark:text-[#5A189A] animate-pulse" />
        <h2 className="text-4xl sm:text-5xl font-extrabold text-purple-700 dark:text-[#5A189A]">
          About Me
        </h2>
      </motion.div>

      <motion.div
        className="relative p-6 sm:p-10 border border-purple-500/30 rounded-3xl bg-white/70 dark:bg-white/5 backdrop-blur-lg shadow-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div className="space-y-6">
          <p className="text-lg sm:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
            I am a passionate developer with a deep interest in designing and developing full-stack web applications.
            I enjoy working with modern technologies such as React, Next.js, Node.js, and Tailwind CSS. With a keen eye
            for design and a solid foundation in programming, I strive to build apps that are both functional and beautiful.
          </p>
          <p className="text-lg sm:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
            My journey in tech has been driven by curiosity, continuous learning, and a love for solving real-world problems.
            Whether it’s collaborating on open-source projects, building personal tools, or experimenting with new ideas,
            I bring creativity and dedication to every project I take on.
          </p>
        </div>
      </motion.div>
    </motion.section>
  )
}
