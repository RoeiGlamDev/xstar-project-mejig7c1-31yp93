'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface HeroSectionProps {`}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-r from-orange-400 to-white p-8">
      <motion.div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: 'url("path_to_your_background_image.jpg")' }} initial={{ scale: 1.1 `}} animate={{ scale: 1 `}} transition={{ duration: 0.8 `}} />/g
      <div className="relative z-10 text-center">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold text-orange-600 transition-transform transform hover:scale-105"
          initial={{ opacity: 0, y: -50 `}} animate={{ opacity: 1, y: 0 `}} transition={{ duration: 0.6 `}} >
          Welcome to GlamCS
        </motion.div>/g
        <motion.p 
          className="mt-4 text-lg md:text-xl text-gray-700"
          initial={{ opacity: 0, y: 20 `}} animate={{ opacity: 1, y: 0 `}} transition={{ duration: 0.6, delay: 0.2 `}} >
          Discover high-quality cosmetics crafted with elegance, designed for the modern beauty enthusiast.
        </motion.div>/g
        <motion.div 
          className="mt-6 space-x-4"
          initial={{ opacity: 0, y: 20 `}} animate={{ opacity: 1, y: 0 `}} transition={{ duration: 0.6, delay: 0.4 `}} >
          <a 
            href="/shop" /g
            className="inline-block bg-orange-500 text-white font-semibold py-2 px-4 rounded hover:bg-orange-600 transition duration-200 transform hover:scale-105"

            Shop Now
          </a>/g
          <a 
            href="/about" /g
            className="inline-block bg-white text-orange-500 font-semibold py-2 px-4 border border-orange-500 rounded hover:bg-orange-500 hover:text-white transition duration-200 transform hover:scale-105"

            Learn More
          </a>/g
        </motion.div>/g
        <div className="mt-8 flex justify-center space-x-4">
          <span className="text-gray-800 font-semibold">Trusted by beauty experts</span>/g
          <span className="text-gray-800 font-semibold">100% cruelty-free products</span>/g
        </div>/g
      </div>/g
    </section>/g
  )
`}
export default HeroSection
);