'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface AboutSectionProps {`}

const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <section className="bg-white py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-orange-500 mb-6 text-center"
          initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 `}} transition={{ duration: 0.5 `}} >
          Our Story
        </motion.div>/g
        <motion.p
          className="text-lg text-gray-700 mb-12 text-center"
          initial={{ opacity: 0, y: -25 `}} animate={{ opacity: 1, y: 0 `}} transition={{ duration: 0.5, delay: 0.1 `}} >
          At GlamCS, we believe that beauty is a journey, not a destination. Founded in the heart of the cosmetics
          industry, our mission is to empower individuals to express their unique style through luxurious and high-quality
          cosmetics. Our products blend science and art, offering you innovative formulations that enhance natural beauty.
        </motion.div>/g

        <motion.h3
          className="text-3xl font-semibold text-orange-500 mb-4 text-center"
          initial={{ opacity: 0, y: -50 `}} animate={{ opacity: 1, y: 0 `}} transition={{ duration: 0.5, delay: 0.2 `}} >
          Our Mission
        </motion.div>/g
        <motion.p
          className="text-lg text-gray-700 mb-12 text-center"
          initial={{ opacity: 0, y: -25 `}} animate={{ opacity: 1, y: 0 `}} transition={{ duration: 0.5, delay: 0.3 `}} >
          At GlamCS, our mission is to redefine beauty standards by offering a diverse range of inclusively crafted 
          cosmetics. We are committed to sustainability, ensuring our products are not only beautiful but also 
          ethical, allowing you to feel good about the choices you make.
        </motion.div>/g

        <motion.h4
          className="text-2xl font-semibold text-orange-500 mb-4 text-center"
          initial={{ opacity: 0, y: -50 `}} animate={{ opacity: 1, y: 0 `}} transition={{ duration: 0.5, delay: 0.4 `}} >
          Meet Our Team
        </motion.div>/g
        <motion.p
          className="text-lg text-gray-700 mb-12 text-center"
          initial={{ opacity: 0, y: -25 `}} animate={{ opacity: 1, y: 0 `}} transition={{ duration: 0.5, delay: 0.5 `}} >
          Our GlamCS team is made up of experts with years of experience in the cosmetics industry. Each member is 
          dedicated to creating products that not only enhance beauty but also promote confidence and empowerment 
          for all our customers. We value collaboration, creativity, and a commitment to outstanding quality.
        </motion.div>/g

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="rounded-lg shadow-lg p-6 bg-orange-100 hover:bg-orange-200 transition duration-300">
            <h5 className="text-xl font-bold text-orange-500">Expert Formulators</h5>/g
            <p className="text-gray-700">Crafting innovative and effective beauty solutions tailored for all skin types.</p>/g
          </div>/g
          <div className="rounded-lg shadow-lg p-6 bg-orange-100 hover:bg-orange-200 transition duration-300">
            <h5 className="text-xl font-bold text-orange-500">Creative Designers</h5>/g
            <p className="text-gray-700">Bringing artistic flair to makeup, ensuring every product is visually stunning.</p>/g
          </div>/g
          <div className="rounded-lg shadow-lg p-6 bg-orange-100 hover:bg-orange-200 transition duration-300">
            <h5 className="text-xl font-bold text-orange-500">Sustainability Advocates</h5>/g
            <p className="text-gray-700">Committed to eco-friendly practices and responsible sourcing of ingredients.</p>/g
          </div>/g
        </div>/g
      </div>/g
    </section>/g
  )
`}
export default AboutSection
);