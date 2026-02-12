'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      id="footer"
      className="bg-gradient-to-t from-pink-50 to-white py-12 md:py-16 px-4 border-t border-pink-200"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-dancing text-red-600 mb-3 md:mb-4">
            Forever & Always
          </h3>
          <p className="font-poppins text-base md:text-lg text-gray-700 mb-4 md:mb-6">
            Thank you for being the love of my life. Here's to building infinite memories together.
          </p>

          <motion.div
            className="text-4xl md:text-5xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💕
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 my-8 md:my-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <p className="text-3xl md:text-4xl mb-2">💑</p>
            <p className="font-poppins font-semibold text-gray-800">Us</p>
            <p className="font-poppins text-xs md:text-sm text-gray-600">Growing together</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl mb-2">🌟</p>
            <p className="font-poppins font-semibold text-gray-800">Love</p>
            <p className="font-poppins text-xs md:text-sm text-gray-600">Infinite & eternal</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl mb-2">∞</p>
            <p className="font-poppins font-semibold text-gray-800">Forever</p>
            <p className="font-poppins text-xs md:text-sm text-gray-600">Always & beyond</p>
          </div>
        </motion.div>

        <motion.div
          className="text-center pt-6 md:pt-8 border-t border-pink-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="font-poppins text-gray-700 text-sm md:text-base">
            Made with ❤️ by <span className="font-dancing text-red-600 font-semibold animate-pulse text-2xl">Shubham Singh</span>
          </p>
          <p className="font-poppins text-xs md:text-sm text-gray-600 mt-2">
            Happy Valentine's Day {currentYear}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
