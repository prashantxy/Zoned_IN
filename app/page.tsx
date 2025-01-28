"use client"

import { motion } from "framer-motion"
import Navigation from "@/app/components/navigation"
import SocialSidebar from "@/app/components/social-sidebar"
import HeroContent from "@/app/components/hero-content"

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-transparent" />

      <Navigation />
      <SocialSidebar />

      <div className="container mx-auto px-4 pt-32">
        <HeroContent />
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-8 right-8 px-6 py-3 text-sm tracking-widest opacity-70 hover:opacity-100 transition-opacity"
      >
        RESUME
      </motion.button>
    </main>
  )
}

