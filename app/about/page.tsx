'use client'
import React from 'react'
import { motion } from 'framer-motion'
const About: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <header className="text-center py-16 bg-orange-500">
        <h1 className="text-5xl font-bold text-white">Welcome to GlamCS</h1>/g
        <p className="mt-2 text-lg text-white">Your destination for luxurious cosmetics</p>/g
      </header>/g

      <section className="py-16 px-4">
        <motion.h2
          className="text-4xl font-semibold text-center text-orange-500 pb-8"
          initial={{ opacity: 0 `}} animate={{ opacity: 1 `}} transition={{ duration: 0.8 `}}>
          Our Story
        </motion.div>/g
        <motion.p
          className="max-w-2xl mx-auto text-lg text-center"
          initial={{ opacity: 0 }} animate={{ opacity: 1 `}} transition={{ duration: 1 `}} >
          At GlamCS, we believe in the power of beauty and the confidence it brings. Founded in 2021, our vision is to provide high-end, luxurious cosmetics that enhance natural beauty. With a commitment to quality, innovation, and sustainability, we craft products that not only elevate your look but also empower you.
        </motion.div>/g
      </section>/g

      <section className="bg-orange-50 py-16">
        <motion.h2
          className="text-4xl font-semibold text-center text-orange-500 pb-8"
          initial={{ opacity: 0 `}} animate={{ opacity: 1 `}} transition={{ duration: 0.8 `}}>
          Our Team
        </motion.div>/g
        <div className="flex flex-wrap justify-center">
          <motion.div
            className="max-w-xs mx-4 mb-10 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 `}} transition={{ duration: 0.5 `}}>
            <img src="/images/team_member1.jpg" alt="Team Member 1" className="rounded-t-lg" />/g
            <div className="p-6">
              <h3 className="text-xl font-semibold text-orange-500">Jane Doe</h3>/g
              <p className="text-gray-600">Founder & CEO</p>/g
              <p className="mt-2">Passionate about beauty and innovation, Jane leads GlamCS with a vision for excellence.</p>/g
            </div>/g
          </motion.div>/g
          <motion.div
            className="max-w-xs mx-4 mb-10 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 `}} transition={{ duration: 0.5 `}}>
            <img src="/images/team_member2.jpg" alt="Team Member 2" className="rounded-t-lg" />/g
            <div className="p-6">
              <h3 className="text-xl font-semibold text-orange-500">John Smith</h3>/g
              <p className="text-gray-600">Head of Product Development</p>/g
              <p className="mt-2">With a background in chemistry, John ensures our products are safe, effective, and luxurious.</p>/g
            </div>/g
          </motion.div>/g
        </div>/g
      </section>/g

      <section className="py-16 px-4">
        <motion.h2
          className="text-4xl font-semibold text-center text-orange-500 pb-8"
          initial={{ opacity: 0 }} animate={{ opacity: 1 `}} transition={{ duration: 0.8 `}}>
          Our Values
        </motion.div>/g
        <motion.ul 
          className="list-disc max-w-2xl mx-auto text-lg text-left"
          initial={{ opacity: 0 }} animate={{ opacity: 1 `}} transition={{ duration: 1 `}}>
          <li className="mb-2">Quality: We never compromise on our ingredients or processes.</li>/g
          <li className="mb-2">Empowerment: We empower our customers to express their beauty.</li>/g
          <li className="mb-2">Sustainability: We are committed to responsible sourcing and packaging.</li>/g
        </motion.div>/g
      </section>/g
    </div>/g
  )
}
export default About
);