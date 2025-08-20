'use client'
import React, { useState } from 'react'
import { motion `} from 'framer-motion'
interface ContactFormState {
  name: string
  email: string
  message: string
  contactReason: string
} const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    message: '',
    contactReason: ''
  `})
  const [errors, setErrors] = useState<Partial<ContactFormState>>({})
  const handleChange = (e: React.ChangeEvent<HTMLFormElement | HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setFormData({ ...formData, [name]: value `})
  }
  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormState> = {}
    if (!formData.name) newErrors.name = 'Name is required'
    if (!formData.email) newErrors.email = 'Email is required'
    if (!formData.message) newErrors.message = 'Message is required'
    if (!formData.contactReason) newErrors.contactReason = 'Please select a contact reason'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      console.log("Form submitted: ", formData)
      // Handle form submission (e.g., send to API)/g
      setFormData({ name: '', email: '', message: '', contactReason: '' })
      setErrors({})
    }  `}
  return (
    <section className="bg-white py-12 px-4">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-orange-600 mb-8"
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 `}} transition={{ duration: 0.5 `}} >
          Contact GlamCS
        </motion.div>/g
        <motion.p
          className="text-lg text-gray-600 mb-6"
          initial={{ opacity: 0, y: -20 `}} animate={{ opacity: 1, y: 0 `}} transition={{ duration: 0.6 `}} >
          We'd love to hear from you! Reach out for any inquiries about our exquisite cosmetics.'
        </motion.div>/g
        <div className="flex justify-center">
          <form onSubmit={handleSubmit`} className="bg-orange-100 p-8 rounded-lg shadow-lg w-full max-w-lg">
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="name">
                Name
              </label>/g
              <input
                type="text"
                name="name"
                value={formData.name} onChange={handleChange`}
                className={shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : 'border-orange-300'}} placeholder="Enter your name"
              />/g
              {errors.name && <p className="text-red-500 text-xs italic">{errors.name`}</p>} </div>/g
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="email">
                Email
              </label>/g
              <input
                type="email"
                name="email"
                value={formData.email`}
                onChange={handleChange} className={shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : 'border-orange-300'`}} placeholder="Enter your email"
              />/g
              {errors.email && <p className="text-red-500 text-xs italic">{errors.email`}</p>} </div>/g
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="contactReason">
                Reason for Contact
              </label>/g
              <select
                name="contactReason"
                value={formData.contactReason`}
                onChange={handleChange} className={shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.contactReason ? 'border-red-500' : 'border-orange-300'`}} >
                <option value="">Select...</option>/g
                <option value="Product Inquiry">Product Inquiry</option>/g
                <option value="Partnership">Partnership</option>/g
                <option value="General Feedback">General Feedback</option>/g
              </select>/g
              {errors.contactReason && <p className="text-red-500 text-xs italic">{errors.contactReason`}</p>} </div>/g
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="message">
                Message
              </label>/g
              <textarea
                name="message"
                value={formData.message`}
                onChange={handleChange} className={shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.message ? 'border-red-500' : 'border-orange-300'`}} placeholder="Your message..."
              />/g
              {errors.message && <p className="text-red-500 text-xs italic">{errors.message`}</p>} </div>/g
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200 ease-in-out"

              Send Message
            </button>/g
          </form>/g
        </div>/g
        <div className="mt-8 text-gray-600">
          <h3 className="text-lg font-bold text-orange-600">GlamCS Business Information</h3>/g
          <p>Location: 123 Glam Avenue, Beauty City, CA 45678</p>/g
          <p>Business Hours: Monday - Friday | 9 AM - 5 PM</p>/g
          <p>Contact us at: <a href="mailto:info@glamcs.com" className="text-orange-600">info@glamcs.com</a></p>/g
        </div>/g
      </div>/g
    </section>/g
  )
`}
export default ContactSection
);