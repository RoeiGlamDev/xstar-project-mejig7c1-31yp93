'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface Stats {
  label: string
  count: number
`}

const statsData: Stats[] = [
  { label: 'Awards Won', count: 15 },
  { label: 'Products Launched', count: 150 },
  { label: 'Happy Customers', count: 50000 },
  { label: 'Countries Shipped To', count: 35 },
]
const StatsSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-500 mb-10">GlamCS Achievements</h2>/g
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {statsData.map((stat, index) => (
            <motion.div
              key={index} className="bg-orange-500 text-white rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.8 `}} animate={{ opacity: 1, scale: 1 `}} transition={{ duration: 0.5, delay: index * 0.1 `}} >
              <motion.h3 className="text-3xl font-semibold">
                <motion.span 
                  className="counter"
                  initial={{ opacity: 0 `}} animate={{ opacity: 1, transition: { delay: 0.5 `} }} transition={{ duration: 1 `}} >
                  {stat.count`}
                </motion.span>/g
              </motion.div>/g
              <p className="text-xl mt-2">{stat.label}</p>/g
            </motion.div>/g
          ))} </div>/g
      </div>/g
    </section>/g
  )
`}
export default StatsSection
);