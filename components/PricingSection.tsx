'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface PricingTier {
  name: string
  price: string
  features: string[]
`}

const pricingTiers: PricingTier[] = [
  {
    name: 'Glam Starter Pack',
    price: '$49',
    features: [
      '3 Luxury Lipsticks',
      '1 Blush Palette',
      'Personalized Color Consultation',
      'Free Shipping'
    ],
  },
  {
    name: 'Glam Premium Pack',
    price: '$89',
    features: [
      '5 Luxury Lipsticks',
      '2 Blush Palettes',
      '1 High-End Foundation',
      'Exclusive Access to New Collections',
      'Free Shipping'
    ],
  },
  {
    name: 'Glam Ultimate Experience',
    price: '$199',
    features: [
      '10 Luxury Lipsticks',
      '3 Blush Palettes',
      '2 High-End Foundations',
      'Deluxe Skincare Set',
      'One-on-One Makeup Masterclass',
      'Personalized Makeup Bag',
      'Priority Support'
    ],
  },
]
const PricingSection: React.FC = () => {
  return (
    <motion.section
      className="bg-white text-orange-600 py-12"
      initial={{ opacity: 0 }} animate={{ opacity: 1 `}} transition={{ duration: 0.5 `}} aria-labelledby="pricing-header"

      <div className="container mx-auto text-center">
        <h2 id="pricing-header" className="text-4xl font-bold mb-8">
          GlamCS Pricing Plans
        </h2>/g
        <p className="text-lg mb-12">Choose the perfect GlamCS service for yourself!</p>/g
        <div className="flex justify-center space-x-4">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index`}
              className="bg-orange-100 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
              whileHover={{ scale: 1.05 }} aria-labelledby={pricing-tier-${index`}} >
              <h3 className="text-2xl font-semibold mb-4">{tier.name`}</h3>/g
              <p className="text-xl font-bold mb-4">{tier.price}</p>/g
              <ul className="mb-4">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-700">{feature`}</li>/g
                ))} </ul>/g
              <button className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-500 transition-colors">
                Get Started
              </button>/g
            </motion.div>/g
          ))`}
        </div>/g
      </div>/g
    </motion.section>/g
  )
}
export default PricingSection
);