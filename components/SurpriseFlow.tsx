"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SurpriseFlow({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(1);

  if (step === 1) {
    return (
      <motion.div
        className="fixed inset-0 bg-gradient-to-br from-pink-50 via-white to-red-50 flex flex-col items-center justify-center z-50 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="text-center max-w-md w-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* ✅ Girlfriend Image */}
          <motion.div
            className="mx-auto mb-6 w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden shadow-xl border-4 border-white"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            <Image
              src="/pho1.jpg"
              alt="My Love"
              width={200}
              height={200}
              className="w-full h-full object-cover"
              priority
            />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-dancing font-bold text-red-600 mb-4"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            Hey love ❤️
          </motion.h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-10 font-poppins">
            I made something special for you…
          </p>

          <motion.button
            onClick={() => setStep(2)}
            className="px-8 py-4 bg-red-600 text-white rounded-full text-xl font-poppins font-semibold hover:bg-red-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Tap to Begin ✨
          </motion.button>
        </motion.div>

        {/* Floating hearts background */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            initial={{
              x: Math.random() * 300 - 150,
              y: -100,
              opacity: 0,
            }}
            animate={{
              y: 600,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: i * 0.3,
              repeat: Infinity,
            }}
            style={{
              left: `${20 + i * 15}%`,
            }}
          >
            ❤️
          </motion.div>
        ))}
      </motion.div>
    );
  }

  if (step === 2) {
    return (
      <motion.div
        className="fixed inset-0 bg-gradient-to-br from-pink-50 via-white to-red-50 flex flex-col items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-dancing font-bold text-red-600 mb-12">
            Loading your surprise…
          </h2>

          <div className="w-64 md:w-80 h-2 bg-pink-200 rounded-full overflow-hidden mb-8">
            <motion.div
              className="h-full bg-gradient-to-r from-red-500 to-red-600"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2 }}
            />
          </div>

          <div className="flex justify-center gap-4 text-3xl">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              >
                ❤️
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          onAnimationComplete={() => {
            setTimeout(() => onComplete(), 500);
          }}
        />
      </motion.div>
    );
  }
}
