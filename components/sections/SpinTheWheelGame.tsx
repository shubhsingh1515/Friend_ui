'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const wheelOptions = [
  '💋 Virtual Kiss',
  '🤗 Big Hug',
  '❤️ I Love You',
  '🍕 Date Night',
  '🌍 Adventures',
  '💝 Special Gift',
]

export default function SpinTheWheelGame() {
  const [isSpinning, setIsSpinning] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [result, setResult] = useState<string | null>(null)

  const handleSpin = () => {
    if (isSpinning) return

    setIsSpinning(true)
    setResult(null)

    // Random rotation between 5-8 full spins plus random final position
    const spins = Math.random() * 3 + 5
    const finalAngle = Math.random() * 360
    const totalRotation = spins * 360 + finalAngle

    setRotation(totalRotation)

    // Determine which option was selected
    const normalizedAngle = finalAngle % 360
    const optionIndex = Math.floor((normalizedAngle / 360) * wheelOptions.length)
    const selectedOption = wheelOptions[optionIndex]

    setTimeout(() => {
      setResult(selectedOption)
      setIsSpinning(false)
    }, 3000)
  }

  const resetSpin = () => {
    setRotation(0)
    setResult(null)
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
          Spin the Love Wheel 🎡
        </h2>

        {/* Wheel container */}
        <div className="flex flex-col items-center gap-8">
          {/* Wheel */}
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Pointer */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-20 text-3xl">
              🎯
            </div>

            {/* Spinning wheel */}
            <motion.div
              className="w-full h-full rounded-full shadow-2xl overflow-hidden"
              animate={{ rotate: rotation }}
              transition={{
                duration: 3,
                ease: 'easeOut',
              }}
            >
              {wheelOptions.map((option, index) => {
                const angle = (360 / wheelOptions.length) * index
                return (
                  <div
                    key={index}
                    className={`absolute w-full h-full flex items-center justify-center ${
                      index % 2 === 0 ? 'bg-red-600' : 'bg-pink-500'
                    }`}
                    style={{
                      clipPath: `polygon(50% 50%, 50% 0%, ${
                        50 + 50 * Math.cos((angle * Math.PI) / 180)
                      }% ${50 - 50 * Math.sin((angle * Math.PI) / 180)}%)`,
                    }}
                  >
                    <motion.div
                      className="text-white font-dancing text-lg font-bold text-center absolute"
                      style={{
                        transform: `rotate(${
                          angle + 360 / wheelOptions.length / 2
                        }deg) translateY(-70px)`,
                      }}
                    >
                      {option.split(' ')[0]}
                    </motion.div>
                  </div>
                )
              })}

              {/* Center circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center text-3xl">
                  ❤️
                </div>
              </div>
            </motion.div>
          </div>

          {/* Spin button */}
          <motion.button
            onClick={handleSpin}
            disabled={isSpinning}
            className="px-8 py-4 bg-red-600 text-white rounded-full text-xl font-poppins font-semibold hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            whileHover={!isSpinning ? { scale: 1.05 } : {}}
            whileTap={!isSpinning ? { scale: 0.95 } : {}}
          >
            {isSpinning ? 'Spinning... 🎡' : 'Spin the Wheel 🎡'}
          </motion.button>

          {/* Result popup */}
          {result && (
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-xl text-center border-4 border-pink-200"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <p className="text-3xl md:text-4xl font-dancing text-red-600 mb-6">
                You got...
              </p>
              <p className="text-5xl md:text-6xl font-bold mb-6">{result}</p>
              <motion.button
                onClick={resetSpin}
                className="px-6 py-2 bg-pink-100 text-red-600 rounded-full font-poppins font-semibold hover:bg-pink-200 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Spin Again 🎡
              </motion.button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  )
}
