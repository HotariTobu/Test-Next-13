'use client'

import { useRef, useState } from "react"

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(0)
  const [now, setNow] = useState(0)

  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  function handleClick() {
    if (intervalRef.current === null) {
      setStartTime(Date.now())
      setNow(Date.now())

      intervalRef.current = setInterval(() => {
        setNow(Date.now())
      }, 10)
    }
    else {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  const secondsPassed = (now - startTime) / 1000

  // Do not access current while rendering.
  // const stopped = intervalRef.current === null

  return (
    <div>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      {/* <button onClick={handleClick}>{stopped ? 'Start' : 'Stop'}</button> */}
      <button onClick={handleClick}>Start / Stop</button>
    </div>
  )
}
