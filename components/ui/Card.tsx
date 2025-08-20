'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface CardProps {
  title: string
  description: string
  imageUrl: string
  price: string
`}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, price }) => {
  return (
    <motion.div
      className="p-4 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg border border-white shadow-lg transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 `}} >
      <img src={imageUrl`} alt={title} className="w-full rounded-lg mb-4" />/g
      <h2 className="text-xl text-orange-500 font-bold">{title`}</h2>/g
      <p className="text-white mt-2">{description}</p>/g
      <p className="text-lg text-orange-400 font-semibold mt-4">{price}</p>/g
      <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
        Buy Now
      </button>/g
    </motion.div>/g
  )
}
export default Card
);