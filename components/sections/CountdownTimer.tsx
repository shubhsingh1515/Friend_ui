'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date(new Date().getFullYear(), 1, 14) // Feb 14
      if (targetDate < new Date()) {
        targetDate.setFullYear(targetDate.getFullYear() + 1)
      }

      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const interval = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(interval)
  }, [])

  const TimeUnit = ({ label, value }: { label: string; value: number }) => (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        key={value}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        className="bg-red-600 text-white rounded-xl p-4 md:p-6 font-poppins font-bold text-3xl md:text-4xl min-w-20 md:min-w-28 text-center"
      >
        {value.toString().padStart(2, '0')}
      </motion.div>
      <p className="mt-2 md:mt-4 font-poppins font-semibold text-gray-700 text-xs md:text-sm">{label}</p>
    </motion.div>
  )

  return (
    <section id="countdown" className="py-12 px-4 md:py-16">
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          className="text-3xl md:text-4xl font-dancing text-center text-red-600 mb-8 md:mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Counting Down to Valentine's ❤️
        </motion.h2>

        <div className="flex justify-center items-center gap-2 md:gap-4 flex-wrap">
          <TimeUnit label="Days" value={timeLeft.days} />
          <span className="text-2xl md:text-4xl font-dancing text-red-600">:</span>
          <TimeUnit label="Hours" value={timeLeft.hours} />
          <span className="text-2xl md:text-4xl font-dancing text-red-600">:</span>
          <TimeUnit label="Minutes" value={timeLeft.minutes} />
          <span className="text-2xl md:text-4xl font-dancing text-red-600">:</span>
          <TimeUnit label="Seconds" value={timeLeft.seconds} />
        </div>

        <motion.p
          className="text-center font-poppins text-sm md:text-base text-gray-700 mt-8 md:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Every moment with you is a gift 💝
        </motion.p>
      </div>
    </section>
  )
}
