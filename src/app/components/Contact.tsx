'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, MapPin, Phone } from 'lucide-react'

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    emailjs
      .send(
        'service_9ozefrg',       // replace this
        'template_bp7y509',      // replace this
        formData,
        'ND6wMdWuo400MRb_7'        // replace this
      )
      .then(
        () => {
          setSubmitted(true)
          setFormData({ name: '', email: '', message: '' })

          setTimeout(() => {
            setSubmitted(false)
          }, 5000)
        },
        (error) => {
          console.error('EmailJS error:', error)
          alert('Oops! Something went wrong. Please try again later.')
        }
      )
  }

  return (
    <section id="contact" className="w-full bg-gradient-to-br from-cyan-500 via-blue-500 to-blue-600 dark:from-[#0e0e0e] dark:via-[#121212] dark:to-black text-white dark:text-white py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white dark:text-purple-500">Contact Me</h2>
          <p className="text-white dark:text-gray-400 mt-3 text-lg max-w-xl mx-auto">
            Have a project in mind or just want to say hello? Let’s build something great together!
          </p>
          <div className="mt-4 w-24 h-1 mx-auto bg-white rounded-full" />
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-16 items-start justify-between">
          <div className="space-y-8 w-full lg:w-1/2">
            <div className="flex items-start gap-4">
              <MapPin className="text-white dark:text-purple-400 w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-white">Location</h3>
                <p className="text-white dark:text-gray-400">Coimbatore, Tamil Nadu, India</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-white dark:text-purple-400 w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-white">Email</h3>
                <p className="text-white dark:text-gray-400">jananim118@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-white dark:text-purple-400 w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-white">Phone</h3>
                <p className="text-white dark:text-gray-400">+91 8608339083</p>
              </div>
            </div>
          </div>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="w-full lg:w-1/2 bg-white dark:bg-[#181818] p-10 rounded-2xl shadow-lg space-y-6 border border-gray-300 dark:border-purple-700/30"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-lg bg-gray-100 dark:bg-[#2c2c2c] text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-lg bg-gray-100 dark:bg-[#2c2c2c] text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
              <textarea
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="w-full p-4 rounded-lg bg-gray-100 dark:bg-[#2c2c2c] text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full bg-cyan-500 text-white font-bold py-3 rounded-lg transition duration-300 hover:bg-cyan-600 dark:bg-purple-600 dark:hover:bg-purple-700"
              >
                Send Message
              </button>
            </form>
          ) : (
            <div className="w-full lg:w-1/2 text-center p-10 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 rounded-2xl shadow-lg border border-green-300 dark:border-green-700">
              ✅ Thank you! Your message has been sent successfully.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
