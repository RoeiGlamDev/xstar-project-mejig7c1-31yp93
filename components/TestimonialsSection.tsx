'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface Testimonial {
  id: number
  name: string
  photo: string
  review: string
  rating: number
`}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sophia Martinez',
    photo: 'https://via.placeholder.com/150',/g
    review: 'GlamCS transformed my makeup routine! The quality is outstanding and the colors are vibrant. Highly recommend their lipstick collection!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Liam Johnson',
    photo: 'https://via.placeholder.com/150',/g
    review: 'I have sensitive skin, and GlamCS products are perfect for me. No irritations and the foundation feels so light!',
    rating: 4,
  },
  {
    id: 3,
    name: 'Emma Wilson',
    photo: 'https://via.placeholder.com/150',/g
    review: 'The packaging is beautiful and the formulas are to die for! GlamCS has become my go-to for all cosmetics needs.',
    rating: 5,
  },
]
const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white p-10">
      <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">What Our Customers Say About GlamCS</h2>/g
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center">
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id} className="bg-orange-100 rounded-lg p-5 m-4 shadow-lg transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 20 `}} animate={{ opacity: 1, y: 0 `}} exit={{ opacity: 0, y: 20 `}} transition={{ duration: 0.5 `}} >
            <img src={testimonial.photo`} alt={testimonial.name} className="w-24 h-24 rounded-full mb-3 object-cover" />/g
            <h3 className="text-lg font-semibold text-orange-600">{testimonial.name`}</h3>/g
            <div className="flex">
              {Array.from({ length: testimonial.rating }, (_, index) => (
                <svg key={index} className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 15.27L16.18 20 14.54 12.97 20 8.25l-7.19-.61L10 0 7.19 7.64 0 8.25l5.46 4.72L3.82 20z" />/g
                </svg>/g
              ))`}
            </div>/g
            <p className="mt-3 text-gray-700">{testimonial.review}</p>/g
          </motion.div>/g
        ))} </div>/g
    </section>/g
  )
`}
export default TestimonialsSection
);