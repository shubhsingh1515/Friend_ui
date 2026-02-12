'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function EnvelopeLetterReveal() {
  const [isOpen, setIsOpen] = useState(false)

  const letterText = `My Dearest,

Since the moment you came into my life, every day has felt like a beautiful dream. You've brought color to my world, laughter to my heart, and meaning to my days.

This isn't just a Valentine's message—it's a promise. A promise to love you, to cherish you, and to be there for you, today and always.

Every moment with you is a gift I never knew I needed.

Forever yours,
Your Love ❤️`

  return (
    <section className="py-12 px-4 md:py-16">
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {!isOpen ? (
          <motion.div
            onClick={() => setIsOpen(true)}
            className="cursor-pointer"
            initial={{ y: 0 }}
            whileHover={{ y: -5 }}
          >
            {/* Envelope */}
            <motion.div
              className="mx-auto max-w-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Outer envelope */}
              <div className="bg-gradient-to-br from-pink-100 to-red-100 rounded-lg p-8 shadow-xl relative overflow-hidden">
                {/* Envelope flap */}
                <motion.div
                  className="absolute top-0 left-0 right-0 bg-gradient-to-b from-red-600 to-red-500 h-12 flex items-center justify-center rounded-t-lg"
                  whileHover={{ y: -10 }}
                >
                  <span className="text-white text-xl">💌</span>
                </motion.div>

                {/* Main envelope body */}
                <div className="mt-8 text-center">
                  <p className="text-3xl md:text-4xl font-dancing text-red-600 mb-4">
                    For You
                  </p>
                  <p className="text-gray-600 font-poppins text-sm md:text-base">
                    ✨ Tap to open ✨
                  </p>
                </div>

                {/* Decorative hearts */}
                <motion.div
                  className="absolute top-4 right-4 text-2xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ❤️
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl border-2 border-pink-200"
          >
            {/* Letter header */}
            <div className="text-center mb-8">
              <p className="text-5xl mb-4">💌</p>
              <h2 className="text-3xl md:text-4xl font-dancing text-red-600">
                My Love Letter to You
              </h2>
            </div>

            {/* Letter content with typing animation */}
            <div className="max-w-lg mx-auto mb-8">
              {letterText.split('\n').map((line, idx) => (
                <motion.p
                  key={idx}
                  className="text-gray-700 font-poppins leading-relaxed mb-4 text-sm md:text-base"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            {/* Decorative line */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-pink-200" />
              <span className="text-2xl">❤️</span>
              <div className="flex-1 h-px bg-pink-200" />
            </div>

            {/* Close button */}
            <div className="text-center">
              <motion.button
                onClick={() => setIsOpen(false)}
                className="px-6 py-2 bg-pink-100 text-red-600 rounded-full font-poppins font-semibold hover:bg-pink-200 transition-colors text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Close Letter
              </motion.button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
