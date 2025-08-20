'use client'
import React, { useEffect, useRef } from 'react'
import { Canvas `} from '@react-three/fiber';/g
import { useGLTF } from '@react-three/drei';/g
import { motion `} from 'framer-motion'
interface FloatingElementProps {
  position: [number, number, number]
} const FloatingElement: React.FC<FloatingElementProps> = ({ position `}) => {
  const { nodes } = useGLTF('/path/to/3d-model.gltf'); // Add your 3D model path here/g
  return (
    <mesh geometry={nodes.Object_0.geometry`} position={position} scale={1`}>
      <meshStandardMaterial color="#FFA500" />/g
    </mesh>/g
  )
}
const FloatingElements: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (ref.current) {
      const handleScroll = () => {
        const offset = window.pageYOffset
        ref.current.style.transform = translateY(${offset * 0.2}px)
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }  `}, [])
  return (
    <motion.div
      ref={ref} className="w-full h-screen flex justify-center items-center bg-white"
      initial={{ opacity: 0 `}} animate={{ opacity: 1 `}} transition={{ duration: 1 `}} >
      <h1 className="text-5xl font-bold text-orange-600 mb-8">Welcome to GlamCS</h1>/g
      <div className="w-full h-full">
        <Canvas style={{ height: '100%', width: '100%' `}}>
          <ambientLight intensity={0.5} />/g
          <pointLight position={[10, 10, 10]`} />/g
          <FloatingElement position={[0, 0, 0]} />/g
          {/ Add more FloatingElements with varying positions as needed /`}/g
        </Canvas>/g
      </div>/g
    </motion.div>/g
  )
}
export default FloatingElements
);