"use client"

import { useEffect, useRef } from "react"

export function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  let animationFrameId: number

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*"
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = new Array(columns).fill(1)

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "#0F0"
      ctx.font = `${fontSize}px monospace`

      drops.forEach((y, i) => {
        const text = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(text, i * fontSize, y * fontSize)

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      })

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()
    window.addEventListener("resize", resizeCanvas)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 h-full w-full opacity-50" style={{ zIndex: -1 }} />
}