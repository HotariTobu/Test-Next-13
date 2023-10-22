'use client'

import { useState } from "react"

function Counter1() {
  const [number, setNumber] = useState(0)

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        // Use "updater function"
        setNumber(n => n + 1)
        setNumber(n => n + 1)
        setNumber(n => n + 1)
      }}>+3</button>
    </>
  )
}

function Counter2() {
  const [number, setNumber] = useState(0)

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 5)
        setNumber(n => n + 1)
      }}>+?</button>
    </>
  )
}

function Counter3() {
  const [number, setNumber] = useState(0)

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(n => n + 1)
        setNumber(number + 5)
      }}>+?</button>
    </>
  )
}

export default function App() {
  return (
    <>
      <Counter1 />
      <Counter2 />
      <Counter3 />
    </>
  )
}
