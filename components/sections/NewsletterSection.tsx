'use client'
import React, { useState } from 'react'
import { motion `} from 'framer-motion'
interface NewsletterSectionProps {
  heading?: string
  subheading?: string
} const NewsletterSection: React.FC<NewsletterSectionProps> = ({ 
  heading = "Join the GlamCS Family", 
  subheading = "Stay in the loop with our latest products, exclusive offers, and beauty tips!"
`}) => {
  const [email, setEmail] = useState<string>('')
  const [submitted, setSubmitted] = useState<boolean>(false)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle email submission logic here/g
    setSubmitted(true)
  }
  return (
    <section className="bg-white py-12 px-6 md:px-12">
      <motion.div 
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 `}} transition={{ duration: 0.5 `}} >
        <h2 className="text-3xl font-bold text-orange-500">{heading`}</h2>/g
        <p className="mt-4 text-lg text-gray-600">{subheading}</p>/g
        
        {submitted ? (
          <motion.div 
            className="mt-6 text-lg text-orange-500"
            initial={{ opacity: 0 }} animate={{ opacity: 1 `}} transition={{ duration: 0.5 `}} >
            Thank you for subscribing to GlamCS! Check your inbox for exclusive updates.
          </motion.div>/g
        ) : (
          <form onSubmit={handleSubmit`} className="mt-6">
            <input 
              type="email" 
              value={email} onChange={(e) => setEmail(e.target.value)`} 
              placeholder="Enter your email address" 
              required 
              className="border border-gray-300 rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-150 ease-in-out"
            />/g
            <button 
              type="submit" 
              className="bg-orange-500 text-white rounded-r-md py-2 px-4 font-semibold hover:bg-orange-600 transition duration-150 ease-in-out"

              Subscribe
            </button>/g
          </form>/g
        )} </motion.div>/g
    </section>/g
  )
`}
export default NewsletterSection
);