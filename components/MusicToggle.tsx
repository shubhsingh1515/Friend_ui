'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => {
          // Autoplay might be blocked, just update UI
        })
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying])

  const toggleMusic = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        loop
        crossOrigin="anonymous"
      />

      <motion.button
        onClick={toggleMusic}
        className="fixed bottom-4 md:bottom-8 right-4 md:right-8 z-30 w-14 h-14 md:w-16 md:h-16 rounded-full bg-red-600 text-white shadow-xl flex items-center justify-center hover:bg-red-700 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Tap to play music"
      >
        <motion.div
          initial={false}
          animate={{
            rotate: isPlaying ? 0 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="text-xl md:text-2xl"
        >
          {isPlaying ? (
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              🎵
            </motion.span>
          ) : (
            <span>🎶</span>
          )}
        </motion.div>
      </motion.button>

      {isPlaying && (
        <motion.div
          className="fixed bottom-20 md:bottom-24 right-4 md:right-8 z-30 bg-white text-gray-800 px-3 md:px-4 py-2 rounded-full shadow-lg font-poppins text-xs md:text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
        >
          🎵 Playing
        </motion.div>
      )}
    </>
  )
}
