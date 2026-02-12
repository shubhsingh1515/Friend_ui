'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Array<{ id: number; delay: number; duration: number; left: number }>>([])

  useEffect(() => {
    const generateHearts = () => {
      const newHearts = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
        left: Math.random() * 100,
      }))
      setHearts(newHearts)
    }

    generateHearts()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          initial={{ y: '100vh', opacity: 0, x: 0 }}
          animate={{ y: '-100vh', opacity: [0, 1, 1, 0] }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            repeatDelay: 5,
            ease: 'linear',
          }}
          style={{ left: `${heart.left}%` }}
        >
          <div className="text-4xl">❤️</div>
        </motion.div>
      ))}
    </div>
  )
}
