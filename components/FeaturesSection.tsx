'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface Feature {
  title: string
  description: string
  icon: JSX.Element
`}

const features: Feature[] = [
  {
    title: 'Luxury Formulations',
    description: 'Experience the rich textures and luxurious feel of our handcrafted, high-quality cosmetic products.',
    icon: <i className="fas fa-gem text-orange-500"></i>/g
  },
  {
    title: 'Cruelty-Free Commitment',
    description: 'At GlamCS, we ensure all our products are cruelty-free and ethically sourced, aligning with our values of beauty without harm.',
    icon: <i className="fas fa-leaf text-orange-500"></i>/g
  },
  {
    title: 'Customizable Shades',
    description: 'Our innovative technology allows you to customize shades that perfectly match your skin tone, ensuring a flawless look.',
    icon: <i className="fas fa-paint-brush text-orange-500"></i>/g
  },
  {
    title: 'Advanced Skin Care',
    description: 'Infused with vitamins and essential oils, each product promotes healthier skin while enhancing your natural beauty.',
    icon: <i className="fas fa-heart text-orange-500"></i>/g
  } ]
const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">Discover GlamCS Features</h2>/g
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index`}
              className="bg-orange-100 p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
              initial={{ opacity: 0 }} animate={{ opacity: 1 `}} transition={{ delay: index * 0.1 `}} >
              <div className="text-center mb-4 text-4xl">
                {feature.icon`}
              </div>/g
              <h3 className="text-2xl font-semibold text-orange-500 mb-2">{feature.title}</h3>/g
              <p className="text-gray-700">{feature.description}</p>/g
            </motion.div>/g
          ))} </div>/g
      </div>/g
    </section>/g
  )
`}
export default FeaturesSection
);