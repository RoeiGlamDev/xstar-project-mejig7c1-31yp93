'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface ModalProps {
  isOpen: boolean
  onClose: () => void
`}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={fixed inset-0 z-50 bg-orange-500 bg-opacity-50 flex items-center justify-center ${isOpen ? 'block' : 'hidden'}} onClick={onClose`}

      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full backdrop-blur-lg transform transition-all ease-in-out"
        initial={{ scale: 0 }} animate={{ scale: 1 `}} exit={{ scale: 0 `}} onClick={(e) => e.stopPropagation()`}

        <h2 className="text-3xl font-bold text-orange-600 mb-4">GlamCS - Elevate Your Beauty</h2>/g
        <p className="text-gray-800 mb-6">
          Discover our luxurious range of cosmetics designed to enhance your natural beauty. 
          At GlamCS, we believe that every application should feel like a pampering experience.
        </p>/g
        <button
          onClick={onClose} className="bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition duration-300 focus:outline-none"

          Close
        </button>/g
      </motion.div>/g
    </div>/g
  )
`}
export default Modal
);