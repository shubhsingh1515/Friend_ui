'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface FloatingHeart {
  id: string
  x: number
  y: number
}

export default function TapHeartsGame() {
  const [score, setScore] = useState(0)
  const [hearts, setHearts] = useState<FloatingHeart[]>([])
  const [gameActive, setGameActive] = useState(false)
  const [completed, setCompleted] = useState(false)

  // Spawn hearts
  useEffect(() => {
    if (!gameActive || completed) return

    const interval = setInterval(() => {
      const newHeart: FloatingHeart = {
        id: Math.random().toString(),
        x: Math.random() * 80 + 10,
        y: Math.random() * 60 + 10,
      }
      setHearts((prev) => [...prev, newHeart])

      // Auto-remove after 3 seconds
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id))
      }, 3000)
    }, 500)

    return () => clearInterval(interval)
  }, [gameActive, completed])

  const catchHeart = (id: string) => {
    setHearts((prev) => prev.filter((h) => h.id !== id))
    const newScore = score + 1
    setScore(newScore)

    if (newScore === 10) {
      setGameActive(false)
      setCompleted(true)
      // Confetti burst
      for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div')
        confetti.innerHTML = '❤️'
        confetti.style.position = 'fixed'
        confetti.style.left = Math.random() * window.innerWidth + 'px'
        confetti.style.top = '-20px'
        confetti.style.fontSize = Math.random() * 20 + 12 + 'px'
        confetti.style.pointerEvents = 'none'
        document.body.appendChild(confetti)

        const startX = parseFloat(confetti.style.left)
        const endX = startX + (Math.random() - 0.5) * 300
        const endY = window.innerHeight + 20

        let progress = 0
        const animate = () => {
          progress += 0.02
          if (progress > 1) {
            confetti.remove()
            return
          }
          confetti.style.left = startX + (endX - startX) * progress + 'px'
          confetti.style.top = -20 + (endY + 20) * progress + 'px'
          confetti.style.opacity = String(1 - progress)
          requestAnimationFrame(animate)
        }
        animate()
      }
    }
  }

  if (completed) {
    return (
      <section className="py-12 px-4 md:py-16">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <p className="text-4xl md:text-5xl font-dancing text-red-600 mb-6">
            You caught my love! 🥰❤️
          </p>
          <p className="text-lg text-gray-700 font-poppins">
            You're amazing at catching my heart 💕
          </p>
        </motion.div>
      </section>
    )
  }

  return (
    <section className="py-12 px-4 md:py-16">
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-dancing text-red-600 text-center mb-2">
          Catch My Hearts 🎮❤️
        </h2>
        <p className="text-center text-gray-600 font-poppins mb-8">
          Tap the hearts to catch them! Get 10 to complete the game 💕
        </p>

        {/* Game container */}
        <div className="relative bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl p-8 md:p-12 h-96 md:h-screen max-h-96 md:max-h-screen overflow-hidden border-4 border-pink-200">
          {/* Score display */}
          <div className="absolute top-4 right-4 bg-white rounded-full px-6 py-3 shadow-lg z-10">
            <p className="font-dancing text-2xl text-red-600">
              {score}/10 ❤️
            </p>
          </div>

          {/* Floating hearts */}
          {hearts.map((heart) => (
            <motion.button
              key={heart.id}
              onClick={() => catchHeart(heart.id)}
              className="absolute text-5xl md:text-6xl cursor-pointer focus:outline-none"
              style={{
                left: `${heart.x}%`,
                top: `${heart.y}%`,
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              ❤️
            </motion.button>
          ))}

          {/* Start button */}
          {!gameActive && !completed && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-black/10 rounded-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.button
                onClick={() => {
                  setGameActive(true)
                  setScore(0)
                  setHearts([])
                }}
                className="px-8 py-4 bg-red-600 text-white rounded-full text-xl font-poppins font-semibold hover:bg-red-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Game 🎮
              </motion.button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  )
}
