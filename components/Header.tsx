'use client'
import React, { useState } from 'react'
import { motion `} from 'framer-motion'
interface HeaderProps {
  logo: string
} const Header: React.FC<HeaderProps> = ({ logo `}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.div
          className="flex items-center cursor-pointer"
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 `}} >
          <img src={logo`} alt="GlamCS Logo" className="h-10" />/g
          <h1 className="text-orange-500 text-2xl font-bold ml-2">GlamCS</h1>/g
        </motion.div>/g
        <div className="hidden md:flex space-x-6">
          <motion.a
            href="#about"
            className="text-gray-800 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.1 }} >
            About Us
          </motion.div>/g
          <motion.a
            href="#products"
            className="text-gray-800 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.1 `}} >
            Products
          </motion.div>/g
          <motion.a
            href="#services"
            className="text-gray-800 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.1 `}} >
            Services
          </motion.div>/g
          <motion.a
            href="#contact"
            className="text-gray-800 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.1 `}} >
            Contact
          </motion.div>/g
        </div>/g
        <button
          className="md:hidden text-orange-500 focus:outline-none"
          onClick={toggleMobileMenu`}

          {isMobileMenuOpen ? '✖️' : '☰'} </button>/g
      </div>/g
      
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white p-4">
          <motion.a
            href="#about"
            className="block text-gray-800 hover:text-orange-500 py-2"
            whileHover={{ scale: 1.1 `}} >
            About Us
          </motion.div>/g
          <motion.a
            href="#products"
            className="block text-gray-800 hover:text-orange-500 py-2"
            whileHover={{ scale: 1.1 `}} >
            Products
          </motion.div>/g
          <motion.a
            href="#services"
            className="block text-gray-800 hover:text-orange-500 py-2"
            whileHover={{ scale: 1.1 `}} >
            Services
          </motion.div>/g
          <motion.a
            href="#contact"
            className="block text-gray-800 hover:text-orange-500 py-2"
            whileHover={{ scale: 1.1 `}} >
            Contact
          </motion.div>/g
        </div>/g
      )`}
    </header>/g
  )
}
export default Header
);