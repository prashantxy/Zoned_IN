"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from 'react'
import * as THREE from 'three'

const ParticleField = () => {
  const mountRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!mountRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    mountRef.current.appendChild(renderer.domElement)

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particleCount = 2000
    const posArray = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: '#8B5CF6',
      transparent: true,
      opacity: 0.8
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)
    camera.position.z = 3

    // Mouse interaction
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX / window.innerWidth - 0.5
      mouseY = event.clientY / window.innerHeight - 0.5
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)
      particlesMesh.rotation.x += 0.001
      particlesMesh.rotation.y += 0.001
      
      particlesMesh.rotation.x += mouseY * 0.01
      particlesMesh.rotation.y += mouseX * 0.01

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={mountRef} className="absolute top-0 left-0 -z-10" />
}

export default function HeroContent() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      <ParticleField />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-screen">
          {/* Left Column */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="pt-20 lg:pt-0"
          >
            <motion.span 
              className="text-xl text-purple-400 inline-block"
              animate={{ y: isHovered ? -5 : 0 }}
              transition={{ duration: 0.2 }}
            >
              Hello! I'm
            </motion.span>
            <h1 className="text-4xl md:text-6xl font-bold mt-2 leading-tight text-white">
              <motion.span
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                PRASHANT
              </motion.span>
              <br />
              <motion.span
                className="inline-block"
                whileHover={{ scale: 1.05 }}
              >
                DUBEY
              </motion.span>
            </h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-6 text-gray-300"
            >
              <p className="text-lg">
                Turning complex problems into elegant solutions through code.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-right pt-20 lg:pt-0"
          >
            <span className="text-xl text-purple-400">A Creative</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-2 text-white">
              <motion.span
                className="inline-block"
                whileHover={{ scale: 1.05 }}
              >
                DEVELOPER
              </motion.span>
              <br />
              <motion.span
                className="inline-block text-purple-400"
                whileHover={{ scale: 1.05 }}
              >
                PROBLEM-SOLVER
              </motion.span>
            </h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-6"
            >
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                View My Work
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}