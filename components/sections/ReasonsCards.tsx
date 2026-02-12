'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const reasons = [
  { id: 1, emoji: '😊', reason: 'Your infectious smile brightens my darkest days' },
  { id: 2, emoji: '💪', reason: 'Your strength inspires me to be better' },
  { id: 3, emoji: '❤️', reason: 'Your kindness knows no bounds' },
  { id: 4, emoji: '🎵', reason: 'You make even mundane moments magical' },
  { id: 5, emoji: '🌟', reason: 'Your dreams inspire me daily' },
  { id: 6, emoji: '🤝', reason: 'You are my greatest support system' },
  { id: 7, emoji: '🌈', reason: 'You bring color to my world' },
  { id: 8, emoji: '💕', reason: 'Simply being yourself is enough' },
]

export default function ReasonsCards() {
  const [flipped, setFlipped] = useState<number[]>([])

  const toggleFlip = (id: number) => {
    setFlipped((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id],
    )
  }

  return (
    <section id="reasons" className="py-12 px-4 md:py-16">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          className="text-3xl md:text-4xl font-dancing text-center text-red-600 mb-6 md:mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          99 Reasons Why I Love You
        </motion.h2>

        <p className="text-center text-gray-600 font-poppins mb-8 md:mb-12 text-sm md:text-base">
          Tap each card to reveal why I adore you 💕
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {reasons.map((reason, idx) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <motion.div
                onClick={() => toggleFlip(reason.id)}
                className="h-56 md:h-64 cursor-pointer perspective"
                style={{ perspective: '1000px' }}
              >
                <motion.div
                  className="relative w-full h-full"
                  animate={{
                    rotateY: flipped.includes(reason.id) ? 180 : 0,
                  }}
                  transition={{ duration: 0.6 }}
                  style={{
                    transformStyle: 'preserve-3d',
                  } as React.CSSProperties}
                >
                  {/* Front of card */}
                  <div
                    className="absolute w-full h-full bg-pink-100 border-2 border-red-200 rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center shadow-lg"
                    style={{
                      backfaceVisibility: 'hidden',
                    } as React.CSSProperties}
                  >
                    <div className="text-5xl md:text-6xl mb-2 md:mb-4">{reason.emoji}</div>
                    <p className="font-poppins text-xs md:text-sm text-gray-600 text-center">
                      Tap to reveal
                    </p>
                  </div>

                  {/* Back of card */}
                  <div
                    className="absolute w-full h-full bg-red-600 rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center shadow-lg"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    } as React.CSSProperties}
                  >
                    <p className="font-poppins text-xs md:text-sm text-white text-center font-semibold leading-tight">
                      {reason.reason}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
