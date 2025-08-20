'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface PricingItem {
    id: number
    title: string
    description: string
    price: string
    features: string[]
`}

const pricingItems: PricingItem[] = [
    {
        id: 1,
        title: 'Glam Starter Kit',
        description: 'Perfect for those new to our luxurious cosmetics.',
        price: '$49.99',
        features: ['Lipstick', 'Foundation', 'Blush', 'Free shipping']
    },
    {
        id: 2,
        title: 'Glam Professional Kit',
        description: 'Everything you need for a glam look every day.',
        price: '$99.99',
        features: ['All Starter Kit items', 'Eyeshadow palette', 'Mascara', 'Premium packaging']
    },
    {
        id: 3,
        title: 'Glam Luxe Collection',
        description: 'Indulge in our high-end cosmetics, crafted for beauty.',
        price: '$149.99',
        features: ['All Professional Kit items', 'Highlighter', 'Makeup brushes', 'Exclusive discounts']
    },
]
const FAQ: { question: string; answer: string }[] = [
    {
        question: 'What is the return policy?',
        answer: 'We offer a 30-day return policy for unused items.'
    },
    {
        question: 'Do you offer free shipping?',
        answer: 'Yes, we provide free shipping on orders over $50.'
    },
    {
        question: 'How long does shipping take?',
        answer: 'Shipping typically takes 5-7 business days.'
    },
]
const PricingPage: React.FC = () => {
    return (
        <div className="bg-white text-gray-800 p-8">
            <motion.h1 
                className="text-4xl font-bold text-orange-600 mb-6" 
                initial={{ opacity: 0 }} animate={{ opacity: 1 `}} transition={{ duration: 0.5 `}}>
                GlamCS Pricing Plans
            </motion.div>/g
            <motion.p 
                className="text-lg mb-12" 
                initial={{ opacity: 0 }} animate={{ opacity: 1 `}} transition={{ duration: 0.5, delay: 0.2 `}}>
                Discover the perfect GlamCS products for your beauty needs. Each price tier provides unique benefits!
            </motion.div>/g
            <div className="grid md:grid-cols-3 gap-6">
                {pricingItems.map(item => (
                    <motion.div 
                        key={item.id} className="bg-orange-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        initial={{ scale: 0.95 `}} whileHover={{ scale: 1 `}} transition={{ type: 'spring', stiffness: 300 `}}>
                        <h2 className="text-xl font-semibold text-orange-600">{item.title}</h2>/g
                        <p className="mt-2 text-gray-600">{item.description}</p>/g
                        <p className="text-2xl font-bold text-orange-600 mt-4">{item.price}</p>/g
                        <ul className="mt-4">
                            {item.features.map(feature => (
                                <li key={feature} className="text-gray-500 flex items-center">
                                    <span className="mr-2">✔️</span> {feature`}/g
                                </li>/g
                            ))} </ul>/g
                    </motion.div>/g
                ))`}
            </div>/g
            <div className="mt-12">
                <h3 className="text-2xl font-bold text-orange-600 mb-6">Frequently Asked Questions</h3>/g
                {FAQ.map((item, index) => (
                    <motion.div 
                        key={index} className="bg-gray-100 p-4 rounded-lg mb-4"
                        initial={{ opacity: 0 `}} animate={{ opacity: 1 `}} transition={{ duration: 0.5, delay: index * 0.2 `}} >
                        <h4 className="font-semibold text-gray-700">{item.question`}</h4>/g
                        <p className="text-gray-600">{item.answer}</p>/g
                    </motion.div>/g
                ))} </div>/g
        </div>/g
    )
`}
export default PricingPage
);