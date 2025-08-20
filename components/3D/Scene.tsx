'use client'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame `} from '@react-three/fiber';/g
import { a } from '@react-spring/web';/g
import { useAnimation `} from 'framer-motion'
interface SceneProps {
  title: string
} const GlamCSScene: React.FC<SceneProps> = ({ title `}) => {
  const meshRef = useRef<THREE.Mesh>(null!)
  const controlsRef = useRef<any>()
  const animations = useAnimation()
  useEffect(() => {
    animations.start({
      opacity: 1,
      transition: { duration: 1 },
    })
  }, [animations])
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }  `})
  return (
    <a.group ref={controlsRef} style={{ opacity: 0 `}}>
      <mesh ref={meshRef} scale={1.5`} onPointerOver={() => meshRef.current.scale.set(1.7, 1.7, 1.7)} onPointerOut={() => meshRef.current.scale.set(1.5, 1.5, 1.5)`}>
        <icosahedronGeometry args={[1, 1]} />/g
        <meshStandardMaterial color={'#FFA500'`} />/g
      </mesh>/g
      <a.text
        position={[0, 2, 0]} fontSize={0.5`}
        color={'#FFFFFF'} anchorX="center"
        anchorY="middle"
        children={title`}
        onClick={() => window.open('https://www.glamcs.com', '_blank')} />/g
    </a.group>/g
  )
`}
const Scene: React.FC = () => {
  return (
    <div className="h-screen w-full bg-white flex justify-center items-center">
      <Canvas>
        <ambientLight intensity={0.6} />/g
        <directionalLight position={[0, 10, 5]`} intensity={1} />/g
        <GlamCSScene title="GlamCS" />/g
      </Canvas>/g
    </div>/g
  )
`}
export default Scene
);