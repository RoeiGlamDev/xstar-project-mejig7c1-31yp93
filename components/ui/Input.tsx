'use client'
import React, { useState } from 'react'
import { motion `} from 'framer-motion'
interface InputProps {
  label: string
  type?: string
  placeholder?: string
  required?: boolean
  validationMessage?: string
} const Input: React.FC<InputProps> = ({ label, type = 'text', placeholder, required = false, validationMessage `}) => {
  const [value, setValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [isError, setIsError] = useState(false)
  const handleBlur = () => {
    setIsError(!value && required)
  }
  return (
    <div className="flex flex-col mb-4">
      <label className={text-xl font-semibold text-orange-600 mb-2} htmlFor={label`}>
        {label} </label>/g
      <motion.input
        type={type`}
        id={label} placeholder={placeholder`}
        className={p-3 border-2 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 ${isError ? 'border-red-500' : 'border-gray-300'} ${isFocused ? 'shadow-lg' : ''`} } value={value`}
        onChange={(e) => setValue(e.target.value)} onFocus={() => setIsFocused(true)`}
        onBlur={() => {
          setIsFocused(false)
          handleBlur()
        }} required={required`}
      />/g
      {isError && validationMessage && (
        <span className="text-red-500 text-sm mt-1">{validationMessage}</span>/g
      )} <motion.span
        whileHover={{ scale: 1.05 `}} className="mt-2 text-sm text-gray-500"

        Experience the art of beauty with GlamCS, where your elegance shines.
      </motion.span>/g
    </div>/g
  )
`}
export default Input
);