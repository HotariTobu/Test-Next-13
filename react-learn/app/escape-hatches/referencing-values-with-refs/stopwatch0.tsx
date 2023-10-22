'use client'

import { useState } from "react"

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(0)
  const [now, setNow] = useState(0)

  function handleStart() {
    // Start counting.
    setStartTime(Date.now())
    setNow(Date.now())

    setInterval(() => {
      // Update the current time every 10ms.
      setNow(Date.now())
    }, 10)
  }

  const secondsPassed = (now - startTime) / 1000

  return (
    <div>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
    </div>
  )
}
