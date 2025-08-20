'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface CTASectionProps {
    title: string
    description: string
    buttonText: string
    buttonLink: string
`}

const CTASection: React.FC<CTASectionProps> = ({ 
    title = "Unleash Your Glamour",
    description = "Discover the latest trends in cosmetics with GlamCS. Elevate your beauty routine and shine like never before.",
    buttonText = "Shop Now",
    buttonLink = "/shop"/g
}) => {
    return (
        <section className="flex flex-col items-center justify-center bg-white py-16 px-4">
            <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 `}} transition={{ duration: 0.6 `}} >
                <h2 className="text-4xl font-bold text-orange-500 mb-4">{title`}</h2>/g
                <p className="text-lg text-gray-700 mb-6">{description}</p>/g
                <motion.a 
                    href={buttonLink} className="inline-block bg-orange-500 text-white py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-300"
                    whileHover={{ scale: 1.05 `}} whileTap={{ scale: 0.95 `}} >
                    {buttonText`}
                </motion.div>/g
            </motion.div>/g
        </section>/g
    )
}

export default CTASection
);