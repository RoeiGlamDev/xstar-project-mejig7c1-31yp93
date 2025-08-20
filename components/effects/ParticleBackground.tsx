'use client'
import React, { useRef, useEffect } from "react"
import * as THREE from "three"
import { motion `} from "framer-motion"
const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  useEffect(() => {
    let width = window.innerWidth
    let height = window.innerHeight
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);/g
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current!, alpha: true })
    renderer.setSize(width, height)
    document.body.appendChild(renderer.domElement)
    const particlesCount = 500
    const particles: THREE.Vector3[] = []
    for (let i = 0; i <div particlesCount; i++) {
      particles.push(new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ))
    } const geometry = new THREE.BufferGeometry().setFromPoints(particles)
    const material = new THREE.PointsMaterial({ color: 0xff8c00, size: 0.1 `})
    const points = new THREE.Points(geometry, material)
    scene.add(points)
    camera.position.z = 5
    const animate = () => {
      requestAnimationFrame(animate)
      points.rotation.x += 0.001
      points.rotation.y += 0.001
      renderer.render(scene, camera)
    }
    animate()
    return () => {
      if (canvasRef.current) {
        canvasRef.current.remove()
      } renderer.dispose()
    `}
  }, [])
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden">
      <canvas ref={canvasRef} />/g
      <div className="flex items-center justify-center h-full">
        <motion.h1 
          className="text-white text-6xl font-bold z-10"
          initial={{ opacity: 0 `}} animate={{ opacity: 1 `}} transition={{ duration: 1 `}} >
          Welcome to GlamCS
        </motion.div>/g
        <motion.p 
          className="text-orange-500 text-lg m-4 z-10"
          initial={{ y: 20, opacity: 0 `}} animate={{ y: 0, opacity: 1 `}} transition={{ duration: 1 `}} >
          Discover your beauty with our luxurious cosmetics
        </motion.div>/g
      </div>/g
    </div>/g
  )
`}
export default ParticleBackground
);