'use client'

import { motion } from 'framer-motion'
import { useState, useRef } from 'react'

export default function FinalSurprise() {
  const [showConfetti, setShowConfetti] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const noButtonRef = useRef<HTMLButtonElement>(null)

  const handleYes = () => {
    setShowConfetti(true)
    setShowSuccess(true)

    // Create heart rain animation
    for (let i = 0; i < 100; i++) {
      const heart = document.createElement('div')
      heart.innerHTML = '❤️'
      heart.style.position = 'fixed'
      heart.style.left = Math.random() * window.innerWidth + 'px'
      heart.style.top = '-30px'
      heart.style.fontSize = Math.random() * 20 + 15 + 'px'
      heart.style.pointerEvents = 'none'
      heart.style.zIndex = '999'
      document.body.appendChild(heart)

      const startX = parseFloat(heart.style.left)
      const endX = startX + (Math.random() - 0.5) * 200
      const endY = window.innerHeight + 30

      let progress = 0
      const animate = () => {
        progress += 0.01
        if (progress > 1) {
          heart.remove()
          return
        }
        heart.style.left = startX + (endX - startX) * progress + 'px'
        heart.style.top = -30 + (endY + 30) * progress + 'px'
        heart.style.opacity = String(1 - progress)
        requestAnimationFrame(animate)
      }
      animate()
    }
  }

  const handleMouseEnterNo = () => {
    if (!noButtonRef.current || !containerRef.current) return

    const containerRect = containerRef.current.getBoundingClientRect()
    const newX = Math.random() * (containerRect.width - 150) - containerRect.width / 2 + 75
    const newY = Math.random() * (containerRect.height - 60) - containerRect.height / 2 + 30

    setNoButtonPos({ x: newX, y: newY })
  }

  return (
    <section id="final" className="min-h-screen flex items-center justify-center py-12 px-4 md:py-16">
      {!showSuccess ? (
        <div className="max-w-2xl w-full">
          <motion.h2
            className="text-4xl md:text-5xl font-dancing text-center text-red-600 mb-6 md:mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Will you be my Valentine? 💍❤️
          </motion.h2>

          <motion.p
            className="text-center font-poppins text-lg text-gray-700 mb-8 md:mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I promise to love you, support you, and make you smile every single day.
          </motion.p>

          <div className="relative h-48 flex items-center justify-center" ref={containerRef}>
            {showConfetti && (
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 50 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: ['#ff1744', '#ffc0cb', '#ff69b4'][i % 3],
                    }}
                    initial={{ x: 0, y: 0, opacity: 1 }}
                    animate={{
                      x: (Math.random() - 0.5) * 400,
                      y: (Math.random() - 0.5) * 400,
                      opacity: 0,
                    }}
                    transition={{ duration: 3, ease: 'easeOut' }}
                  />
                ))}
              </div>
            )}

            <div className="flex gap-4 md:gap-8 flex-wrap justify-center">
              <motion.button
                onClick={handleYes}
                className="px-6 md:px-8 py-3 md:py-4 bg-red-600 hover:bg-red-700 text-white font-poppins font-bold rounded-full text-lg transition-all shadow-lg"
                whileHover={{ scale: 1.1, boxShadow: '0 15px 35px rgba(220, 38, 38, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                YES 😍
              </motion.button>

              <motion.button
                ref={noButtonRef}
                onMouseEnter={handleMouseEnterNo}
                onTouchStart={handleMouseEnterNo}
                animate={noButtonPos}
                transition={{ type: 'spring', stiffness: 150, damping: 15 }}
                className="px-6 md:px-8 py-3 md:py-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-poppins font-bold rounded-full text-lg transition-all shadow-lg cursor-pointer"
              >
                NO 🙃
              </motion.button>
            </div>
          </div>

          <motion.div
            className="text-center mt-12 md:mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="font-poppins text-gray-500 italic text-sm md:text-base">
              (The "NO" button just dodges... you already have my heart! 💕)
            </p>
          </motion.div>
        </div>
      ) : (
        <motion.div
          className="max-w-2xl w-full text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-dancing text-red-600 mb-8"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            YAYYYYY! 🎉❤️
          </motion.h2>

          <p className="text-3xl md:text-4xl font-dancing text-red-600 mb-12">
            I LOVE YOU SO MUCH 🥰❤️✨
          </p>

          {/* Gift card */}
          <motion.div
            className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 md:p-12 border-4 border-red-300 shadow-xl"
            initial={{ scale: 0.8, rotate: -5 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-5xl mb-6">🎁</p>
            <h3 className="text-2xl md:text-3xl font-dancing text-red-600 mb-4">
              Your Special Gift
            </h3>
            <p className="text-xl md:text-2xl font-dancing text-red-600">
              Unlimited Love Forever ♾️❤️
            </p>
            <p className="text-lg text-gray-700 font-poppins mt-6">
              Valid for all eternity and beyond 💕
            </p>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
