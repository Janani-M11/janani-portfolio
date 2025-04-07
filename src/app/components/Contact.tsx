'use client'

import { Mail, MapPin, Phone } from 'lucide-react'

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full bg-gradient-to-br from-white via-gray-100 to-white dark:from-[#0e0e0e] dark:via-[#121212] dark:to-black text-gray-900 dark:text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-purple-600 dark:text-purple-500">
            Contact Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3 text-lg max-w-xl mx-auto">
            Have a project in mind or just want to say hello? Let’s build something great together!
          </p>
          <div className="mt-4 w-24 h-1 mx-auto bg-purple-500 rounded-full" />
        </div>

        {/* Contact Content */}
        <div className="w-full flex flex-col lg:flex-row gap-16 items-start justify-between">
          {/* Contact Info */}
          <div className="space-y-8 w-full lg:w-1/2">
            <div className="flex items-start gap-4">
              <MapPin className="text-purple-600 dark:text-purple-400 w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Location</h3>
                <p className="text-gray-600 dark:text-gray-400">Coimbatore, Tamil Nadu, India</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-purple-600 dark:text-purple-400 w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">jananim.dev@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-purple-600 dark:text-purple-400 w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-gray-600 dark:text-gray-400">+91 9876543210</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://formspree.io/f/yourFormID"
            method="POST"
            className="w-full lg:w-1/2 bg-white dark:bg-[#181818] p-10 rounded-2xl shadow-lg space-y-6 border border-gray-300 dark:border-purple-700/30"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-lg bg-gray-100 dark:bg-[#2c2c2c] placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-lg bg-gray-100 dark:bg-[#2c2c2c] placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            <textarea
              name="message"
              rows={6}
              placeholder="Your Message"
              required
              className="w-full p-4 rounded-lg bg-gray-100 dark:bg-[#2c2c2c] placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
