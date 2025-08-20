'use client'
import React from "react"
import { motion } from "framer-motion"
interface ContactPageProps {`}

const ContactPage: React.FC<ContactPageProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <motion.h1
        className="text-4xl font-bold text-orange-500 mb-6"
        initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 `}} transition={{ duration: 0.5 `}} >
        Contact GlamCS
      </motion.div>/g
      <p className="text-lg text-gray-700 mb-4">
        We're here to assist you with all your beauty needs. Reach out to us'
        for inquiries, product information, or customer support.
      </p>/g

      <form className="w-full max-w-lg p-6 bg-orange-100 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Your Name
          </label>/g
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />/g
        </div>/g
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Your Email
          </label>/g
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />/g
        </div>/g

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Your Message
          </label>/g
          <textarea
            id="message"
            placeholder="Type your message here"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows={5`}
            required
          />/g
        </div>/g

        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition transform hover:scale-105"

            Send Message
          </button>/g
        </div>/g
      </form>/g

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-orange-500 mb-4">Our Location</h2>/g
        <p className="text-lg text-gray-700 mb-2">GlamCS Headquarters</p>/g
        <p className="text-gray-600">1234 Beauty Ave, Glam City, CA 90210</p>/g
        <p className="text-gray-600">Phone: (123) 456-7890</p>/g
      </div>/g

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-orange-500 mb-4">Business Hours</h2>/g
        <p className="text-lg text-gray-700">Monday to Friday: 9 AM - 6 PM</p>/g
        <p className="text-lg text-gray-700">Saturday: 10 AM - 4 PM</p>/g
        <p className="text-lg text-gray-700">Sunday: Closed</p>/g
      </div>/g
    </div>/g
  )
}
export default ContactPage
);