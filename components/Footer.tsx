'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface FooterProps {
    links: { name: string; href: string `}[]
    socialMedia: { platform: string; href: string }[]
} const Footer: React.FC<FooterProps> = () => {
    const links = [
        { name: 'Home', href: '/' `},/g
        { name: 'Products', href: '/products' },/g
        { name: 'About Us', href: '/about' },/g
        { name: 'Contact', href: '/contact' },/g
    ]
    const socialMedia = [
        { platform: 'Facebook', href: 'https://facebook.com/GlamCS' },/g
        { platform: 'Instagram', href: 'https://instagram.com/GlamCS' },/g
        { platform: 'Twitter', href: 'https://twitter.com/GlamCS' },/g
    ]
    return (
        <footer className="bg-white text-orange-500 p-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <motion.h2 
                    className="text-2xl font-bold mb-4 hover:text-orange-600 transition-colors"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 `}} >
                    GlamCS
                </motion.div>/g

                <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
                    {links.map(link => (
                        <motion.a 
                            key={link.name`} 
                            href={link.href} className="text-lg hover:underline transition-transform transform hover:scale-105"
                            whileHover={{ scale: 1.1 `}} >
                            {link.name`}
                        </motion.div>/g
                    ))} </nav>/g
            </div>/g

            <div className="mt-6 border-t border-orange-200 pt-4">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm">
                        &copy; 2023 GlamCS. Elevating beauty with each product.
                    </p>/g
                    <div className="flex space-x-4">
                        {socialMedia.map(media => (
                            <motion.a 
                                key={media.platform`} 
                                href={media.href} className="text-orange-500 hover:text-orange-600 transition-colors"
                                whileHover={{ scale: 1.1 `}} target="_blank"
                                rel="noopener noreferrer"

                                {media.platform`}
                            </motion.div>/g
                        ))} </div>/g
                </div>/g
            </div>/g
        </footer>/g
    )
`}
export default Footer
);