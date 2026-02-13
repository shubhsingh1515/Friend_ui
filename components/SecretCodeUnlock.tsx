'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface SecretCodeUnlockProps {
  onUnlock: () => void
}

export default function SecretCodeUnlock({ onUnlock }: SecretCodeUnlockProps) {
  const [code, setCode] = useState('')
  const [isError, setIsError] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const LOVE_CODE = 'LOVE88'

  const handleUnlock = () => {
    if (code.toUpperCase() === LOVE_CODE) {
      setIsSuccess(true)
      // Confetti burst
      for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div')
        confetti.className = 'fixed pointer-events-none'
        confetti.innerHTML = '❤️'
        confetti.style.left = Math.random() * window.innerWidth + 'px'
        confetti.style.top = '-20px'
        confetti.style.fontSize = Math.random() * 20 + 10 + 'px'
        document.body.appendChild(confetti)

        const startX = parseFloat(confetti.style.left)
        const startY = 0
        const endX = startX + (Math.random() - 0.5) * 200
        const endY = window.innerHeight + 20

        let progress = 0
        const animate = () => {
          progress += 0.02
          if (progress > 1) {
            confetti.remove()
            return
          }
          confetti.style.left = startX + (endX - startX) * progress + 'px'
          confetti.style.top = startY + (endY - startY) * progress + 'px'
          confetti.style.opacity = String(1 - progress)
          requestAnimationFrame(animate)
        }
        animate()
      }

      setTimeout(() => {
        setCode('')
        onUnlock()
      }, 1500)
    } else {
      setIsError(true)
      setTimeout(() => setIsError(false), 2000)
      setCode('')
    }
  }

  if (isSuccess) {
    return (
      <motion.section
        className="py-16 px-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring' }}
        >
          <p className="text-2xl md:text-3xl font-dancing text-red-600 mb-6">
            You caught our code! 🔓✨
          </p>
          <p className="text-xl text-gray-700 font-poppins">
            You know me so well… 🥰❤️
          </p>
        </motion.div>
      </motion.section>
    )
  }

  return (
    <section className="py-12 px-4 md:py-16">
      <motion.div
        className="max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-dancing text-red-600 text-center mb-8">
          Enter the Love Code 🔐❤️
        </h2>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
            onKeyPress={(e) => e.key === 'Enter' && handleUnlock()}
            placeholder="What's our code?"
            className={`w-full px-4 py-3 border-2 rounded-lg text-center text-lg font-poppins mb-6 transition-colors ${
              isError ? 'border-red-500 bg-red-50' : 'border-pink-300 focus:border-red-500'
            }`}
          />

          {isError && (
            <motion.p
              className="text-red-600 text-center mb-4 font-poppins"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Hmm… that's not our code 😌💖 Try again!
            </motion.p>
          )}

          <motion.button
            onClick={handleUnlock}
            className="w-full px-6 py-3 bg-red-600 text-white rounded-lg font-poppins font-semibold hover:bg-red-700 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Unlock 🔓
          </motion.button>

          {/* <p className="text-xs text-gray-500 text-center mt-4 font-poppins">
            Hint: LOVE2026
          </p> */}
        </div>
      </motion.div>
    </section>
  )
}
