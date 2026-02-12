'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const memories = [
  { id: 1, caption: 'Our First Meeting 💫', emoji: '👫' },
  { id: 2, caption: 'Sunset Walks Together 🌅', emoji: '🌅' },
  { id: 3, caption: 'Late Night Talks ✨', emoji: '🌙' },
  { id: 4, caption: 'Coffee & You ☕', emoji: '☕' },
  { id: 5, caption: 'Adventures Await 🗺️', emoji: '🗺️' },
  { id: 6, caption: 'Forever Starts Now 💍', emoji: '💍' },
]

export default function MemoryCarousel() {
  const [currentIdx, setCurrentIdx] = useState(0)

  const goToPrevious = () => {
    setCurrentIdx((prev) => (prev === 0 ? memories.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIdx((prev) => (prev === memories.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-12 px-4 md:py-16">
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-dancing text-red-600 text-center mb-12">
          Our Beautiful Memories 📸
        </h2>

        {/* Carousel */}
        <div className="relative">
          {/* Slides */}
          <div className="h-80 md:h-96 flex items-center justify-center">
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full"
            >
              {/* Polaroid card */}
              <div className="mx-auto max-w-xs bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform">
                {/* Image placeholder with emoji */}
                <div className="h-56 bg-gradient-to-br from-pink-100 to-red-100 flex items-center justify-center">
                  <span className="text-8xl">{memories[currentIdx].emoji}</span>
                </div>

                {/* Caption */}
                <div className="p-4 text-center">
                  <p className="text-lg font-dancing text-red-600">
                    {memories[currentIdx].caption}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation buttons */}
          <motion.button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 bg-red-600 text-white rounded-full p-3 hover:bg-red-700 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 bg-red-600 text-white rounded-full p-3 hover:bg-red-700 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {memories.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => setCurrentIdx(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentIdx ? 'bg-red-600 w-8' : 'bg-pink-300 w-2'
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>

        {/* Counter */}
        <p className="text-center text-gray-600 font-poppins mt-6">
          {currentIdx + 1} / {memories.length}
        </p>
      </motion.div>
    </section>
  )
}
