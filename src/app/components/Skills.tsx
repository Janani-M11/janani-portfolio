'use client'

import React, { JSX } from 'react' // ✅ Required for JSX.Element typing in TypeScript
import { motion } from 'framer-motion'
import {
  FaReact,
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
} from 'react-icons/fa'
import {
  SiFlutter,
  SiMongodb,
  SiSpringboot,
  SiMysql,
  SiIntellijidea,
  SiExpress,
  SiAndroidstudio,
} from 'react-icons/si'


export default function Skills() {
  const programmingLanguages = [
    { name: 'Java', icon: <FaJava className="text-red-600 text-3xl" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-3xl" /> },
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-700 text-3xl" /> },
    { name: 'Flutter', icon: <SiFlutter className="text-sky-500 text-3xl" /> },
    { name: 'Spring Boot', icon: <SiSpringboot className="text-green-800 text-3xl" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-3xl" /> },
    { name: 'React', icon: <FaReact className="text-blue-500 text-3xl" /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-500 text-3xl" /> },
  ]

  const toolsAndTechnologies = [
    { name: 'Android Studio', icon: <SiAndroidstudio className="text-green-600 text-3xl" /> },
    { name: 'IntelliJ IDEA', icon: <SiIntellijidea className="text-purple-700 text-3xl" /> },
  ]

  const databases = [
    { name: 'MongoDB', icon: <SiMongodb className="text-green-700 text-3xl" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-600 text-3xl" /> },
  ]

  const renderSkills = (title: string, skills: { name: string; icon: JSX.Element }[]) => {
    if (!skills || skills.length === 0) return null

    return (
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-[#3D0C63] dark:text-purple-300 mb-6">{title}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name || idx}
              className="flex flex-col items-center bg-purple-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 rounded-xl font-semibold shadow-md hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.05, duration: 0.4 }}
            >
              {skill.icon}
              <span className="mt-2">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto px-4 sm:px-8 pt-20 pb-28 text-center"
    >
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-purple-700 dark:text-[#5A189A] mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Technical Skills
      </motion.h2>

      {renderSkills('Programming Languages', programmingLanguages)}
      {renderSkills('Tools & Technologies', toolsAndTechnologies)}
      {renderSkills('Databases', databases)}
    </motion.section>
  )
}
