'use client'

import { useState } from "react"

function Image() {
  return (
    <img
      src="https://i.imgur.com/ZF6s192.jpg"
      alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
    />
  )
}

function Gallery() {
  return (
    <section>
      <h1>Inspiring Sculptures</h1>
      <Image />
      <Image />
      <Image />
    </section>
  )
}

function Clock({ time }: { time: Date }) {
  return (
    <>
      <h1>{time.toTimeString()}</h1>
      <input />
    </>
  )
}

export default function App() {
  const [date, setDate] = useState(new Date())

  setInterval(() => setDate(new Date()), 500)

  return (
    <>
      <Gallery />

      <Clock time={date} />
    </>
  )
}
