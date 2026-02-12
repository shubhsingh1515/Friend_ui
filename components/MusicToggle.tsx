"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (!isPlaying) {
        // important for mobile
        audio.volume = 0.6;
        await audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } catch (err) {
      console.log("Audio play blocked:", err);
      setIsPlaying(false);
      alert("Tap again to allow music 🎵 (browser blocked autoplay)");
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
        loop
        preload="auto"
      />

      <motion.button
        onClick={toggleMusic}
        className="fixed bottom-4 md:bottom-8 right-4 md:right-8 z-30 w-14 h-14 md:w-16 md:h-16 rounded-full bg-red-600 text-white shadow-xl flex items-center justify-center hover:bg-red-700 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Tap to play music"
      >
        <span className="text-xl md:text-2xl">
          {isPlaying ? "🎵" : "🎶"}
        </span>
      </motion.button>

      {isPlaying && (
        <motion.div
          className="fixed bottom-20 md:bottom-24 right-4 md:right-8 z-30 bg-white text-gray-800 px-3 md:px-4 py-2 rounded-full shadow-lg text-xs md:text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
        >
          🎵 Playing
        </motion.div>
      )}
    </>
  );
}
