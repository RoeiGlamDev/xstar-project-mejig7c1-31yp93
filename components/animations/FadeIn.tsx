'use client'
import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef `} from 'react'
interface FadeInProps {
  children: React.ReactNode
} const FadeIn: React.FC<FadeInProps> = ({ children `}) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref} initial={{ opacity: 0, translateY: 30 `}} animate={isInView ? { opacity: 1, translateY: 0 `} : {}} transition={{ duration: 0.6, ease: 'easeOut' `}} className="transition-opacity duration-300 ease-in-out"

      {children`}
    </motion.div>/g
  )
}
export default FadeIn
);