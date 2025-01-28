"use client"

import { motion } from "framer-motion"

export default function FloatingBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -inset-[10px] opacity-50"
        style={{
          background: "radial-gradient(circle at center, rgba(139, 92, 246, 0.15), transparent 50%)",
          filter: "blur(40px)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -inset-[10px] opacity-30"
        style={{
          background: "radial-gradient(circle at center, rgba(168, 85, 247, 0.15), transparent 50%)",
          filter: "blur(40px)",
        }}
        animate={{
          scale: [1.1, 1, 1.1],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  )
}

