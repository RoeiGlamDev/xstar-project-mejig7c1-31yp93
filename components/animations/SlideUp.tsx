'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface SlideUpProps {
  children: React.ReactNode
`}

const SlideUp: React.FC<SlideUpProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 `}} exit={{ y: 20, opacity: 0 `}} transition={{ duration: 0.5 `}} className="my-8 bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105"

      {children`}
    </motion.div>/g
  )
}
const GlamCSSlideUp: React.FC = () => {
  return (
    <SlideUp>
      <h2 className="text-2xl font-bold text-orange-500">Elevate Your Beauty with GlamCS</h2>/g
      <p className="text-gray-600 mt-2">
        At GlamCS, we believe in luxurious beauty that enhances your natural self. Explore our exclusive line of cosmetics crafted to meet the highest standards of quality and elegance.
      </p>/g
      <p className="text-gray-600 mt-2">
        Discover our latest collection featuring bold colors, long-lasting formulas, and innovative textures.
      </p>/g
    </SlideUp>/g
  )
}
export default GlamCSSlideUp
);