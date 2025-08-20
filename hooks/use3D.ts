import { useEffect, useRef } from 'react'
import * as THREE from 'three'
/
 * Custom hook to handle 3D interactions for GlamCS cosmetics website.
 * 
 * @returns {Object} A set of handlers for 3D interactions.
 */
export function use3D() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const scene = useRef<THREE.Scene | null>(null)
  const camera = useRef<THREE.PerspectiveCamera | null>(null)
  const renderer = useRef<THREE.WebGLRenderer | null>(null)
  const objects = useRef<THREE.Mesh[]>([])
  /
   * Initializes the 3D scene for GlamCS.
   */
  const initScene = () => {
    scene.current = new THREE.Scene()
    camera.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    renderer.current = new THREE.WebGLRenderer({ antialias: true })
    if (containerRef.current) {
      renderer.current.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
      containerRef.current.appendChild(renderer.current.domElement)
    }

    // Set background color for GlamCS brand
    scene.current.background = new THREE.Color(0xffffff); // White background

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.current.add(ambientLight)
    const pointLight = new THREE.PointLight(0xffa500, 1, 100); // Orange light
    pointLight.position.set(10, 10, 10)
    scene.current.add(pointLight)
    // Create some 3D models here (e.g., cosmetics products)
    // This is where you would load models and add them to the scene
    // Example: createCube()
    // Set camera position
    camera.current.position.z = 5
    animate()
  }
  /
   * Animates the 3D scene.
   */
  const animate = () => {
    requestAnimationFrame(animate)
    if (renderer.current && scene.current && camera.current) {
      // Rotate all objects for aesthetic effect
      objects.current.forEach((object) => {
        object.rotation.y += 0.01
      })
      renderer.current.render(scene.current, camera.current)
    }
  }
  /
   * Handles  resize events to maintain aspect ratio.
   */
  const handleResize = () => {
    if (renderer.current && camera.current) {
      camera.current.aspect = window.innerWidth / window.innerHeight
      camera.current.updateProjectionMatrix()
      renderer.current.setSize(window.innerWidth, window.innerHeight)
    }
  }
  useEffect(() => {
    initScene()
    window.addEventListener('resize', handleResize)
    return () => {
      if (renderer.current) {
        renderer.current.dispose()
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return { containerRef }
}