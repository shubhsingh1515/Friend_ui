'use client'

import { useState } from 'react'
import FloatingHearts from '@/components/FloatingHearts'
import MusicToggle from '@/components/MusicToggle'
import SurpriseFlow from '@/components/SurpriseFlow'
import SecretCodeUnlock from '@/components/SecretCodeUnlock'
import EnvelopeLetterReveal from '@/components/sections/EnvelopeLetterReveal'
import MemoryCarousel from '@/components/sections/MemoryCarousel'
import ReasonsCards from '@/components/sections/ReasonsCards'
import TapHeartsGame from '@/components/sections/TapHeartsGame'
import SpinTheWheelGame from '@/components/sections/SpinTheWheelGame'
import CountdownTimer from '@/components/sections/CountdownTimer'
import FinalSurprise from '@/components/sections/FinalSurprise'
import Footer from '@/components/sections/Footer'

export default function Home() {
  const [showSurpriseFlow, setShowSurpriseFlow] = useState(true)
  const [unlockedCode, setUnlockedCode] = useState(false)

  return (
    <div className="relative">
      <FloatingHearts />

      {showSurpriseFlow && (
        <SurpriseFlow onComplete={() => setShowSurpriseFlow(false)} />
      )}

      {!showSurpriseFlow && (
        <main>
          {!unlockedCode ? (
            <SecretCodeUnlock onUnlock={() => setUnlockedCode(true)} />
          ) : (
            <>
              <EnvelopeLetterReveal />
              <MemoryCarousel />
              <ReasonsCards />
              <TapHeartsGame />
              <SpinTheWheelGame />
              <CountdownTimer />
              <FinalSurprise />
              <Footer />
            </>
          )}
        </main>
      )}

      <MusicToggle />
    </div>
  )
}
