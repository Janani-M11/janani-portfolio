'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function Projects() {
  const projects = [
    {
      title: 'EcoCharge - EV Charging App',
      desc: 'Developed a Flutter-based EV charging app featuring real-time GPS tracking, Google Maps integration, and voice assistant for hands-free navigation and slot booking. Integrated smart geofencing alerts, background location services, and Firebase for real-time notifications and data sync. Built dedicated Admin and EV Station Owner modules with role-based access to manage stations, monitor bookings, and handle user activity.',
      github: 'https://github.com/shyamsundars12/eco-charge',
      demo: '#',
      image: '/ev.png',
      status: 'COMPLETED'
    },
    {
      title: 'BonVoyage - Hotel Reservation System',
      desc: 'The BonVoyage Hotel Booking and Management System is a full-fledged web application built with React for the frontend and PostgreSQL for the backend, offering a seamless experience for hotel reservations and management. It includes features such as room browsing, booking, user authentication, and administrative controls for managing hotel data and user activity. Designed for scalability and efficiency, the platform provides a modern, intuitive interface tailored for both customers and hotel administrators.',
      github: '#',
      demo: '#',
      image: '/hotel.jpg',
      status: 'ONGOING' 
    },
    {
      title: 'ServiceSync - HOME SERVICE BOOKING APPLICATION ',
      desc: 'ServiceSync is a home service booking platform built using the MERN stack, designed to simplify the scheduling of doorstep services such as plumbing and electrical repairs. It features seamless user authentication, intuitive service browsing, and a secure checkout system. The platform includes a dedicated employee portal for viewing upcoming tasks and an admin panel for managing service providers, all wrapped in a user-friendly interface that streamlines the entire service booking process.',
      github: 'https://github.com/shyamsundars12/servicesync-frontend',
      demo: 'https://servicesync-frontend.vercel.app/',
      image: '/s.avif',
      status: 'COMPLETED'
    }
  ]

  return (
    <motion.section
      id="projects"
      className="max-w-7xl mx-auto px-4 sm:px-8 pt-20 pb-20 bg-gradient-to-br from-[#34d399] via-[#3b82f6] to-[#10b981] dark:bg-transparent"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl sm:text-5xl font-extrabold text-white dark:text-purple-400 text-center mb-16">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col justify-between bg-gradient-to-br from-[#34d399] to-[#3b82f6] dark:from-zinc-800 dark:to-zinc-700 border border-cyan-300 dark:border-purple-600 p-5 rounded-3xl shadow-lg hover:shadow-cyan-400/40 dark:hover:shadow-purple-500/30 transform hover:scale-[1.02] transition duration-300"
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
              <span className={`absolute top-2 right-2 text-white text-xs font-semibold px-3 py-1 rounded-full shadow ${
                proj.status === 'COMPLETED' ? 'bg-green-500' : 'bg-yellow-500'
              }`}>
                {proj.status}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white dark:text-purple-300 mb-2">
              {proj.title}
            </h3>

            <p className="text-sm text-white dark:text-purple-200 mb-4 flex-grow">
              {proj.desc}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={proj.github}
                className="w-full text-center bg-cyan-600 hover:bg-cyan-700 dark:bg-purple-600 dark:hover:bg-purple-700 text-white py-2 rounded-xl font-medium shadow"
              >
                GitHub
              </a>
              <a
                href={proj.demo}
                className="w-full text-center bg-cyan-500 hover:bg-cyan-600 dark:bg-purple-500 dark:hover:bg-purple-600 text-white py-2 rounded-xl font-medium shadow"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View More Button */}
      <div className="mt-16 text-center">
        <a
          href="#"
          className="inline-block bg-white text-cyan-700 dark:bg-purple-700 dark:text-white px-6 py-3 text-lg font-semibold rounded-full shadow-md hover:shadow-lg transition duration-300"
        >
          View More Projects
        </a>
      </div>
    </motion.section>
  )
}
