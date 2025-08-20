'use client'
import React from 'react'
import { motion } from 'framer-motion'
interface ButtonProps {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  onClick?: () => void
`}

const buttonVariants = {
  primary: 'bg-orange-500 text-white hover:bg-orange-600',
  secondary: 'bg-white text-orange-500 border border-orange-500 hover:bg-orange-100',
}
const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick }) => {
  return (
    <motion.button
      onClick={onClick} className={rounded-lg px-6 py-3 transition-all duration-300 ease-in-out shadow-lg transform ${buttonVariants[variant]`}} whileHover={{ scale: 1.05 `}} whileTap={{ scale: 0.95 `}} aria-label={GlamCS ${variant`} button} >
      {children`}
    </motion.div>/g
  )
}
export default Button
);