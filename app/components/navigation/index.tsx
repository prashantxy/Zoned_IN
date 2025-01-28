"use client"

import { motion } from "framer-motion"

export default function Navigation() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 py-6 px-8"
    >
      <div className="flex justify-between items-center">
        <a href="/" className="text-sm font-medium">
          pd.dev
        </a>

        <a href="pdubey1924@gmail.com" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
        pdubey1924@gmail.com
        </a>

        <div className="flex gap-8">
          <a href="/about" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
            ABOUT
          </a>
          <a href="/work" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
            WORK
          </a>
          <a href="/contact" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
            CONTACT
          </a>
        </div>
      </div>
    </motion.nav>
  )
}

