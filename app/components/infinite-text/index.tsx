"use client"

import { motion } from "framer-motion"

export default function InfiniteText() {
  return (
    <div className="relative whitespace-nowrap">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 20,
          ease: "linear",
        }}
        className="inline-block"
      >
        <span className="text-[12vw] leading-none font-bold tracking-tight">
        • A CREATIVE DEVELOPER • A CREATIVE PROBLEM SOLVER
        </span>
      </motion.div>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 20,
          ease: "linear",
        }}
        className="absolute top-0 left-0 inline-block"
      >
        <span className="text-[12vw] leading-none font-bold tracking-tight">
          • A CREATIVE DEVELOPER • A CREATIVE PROBLEM SOLVER
        </span>
      </motion.div>
    </div>
  )
}

