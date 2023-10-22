'use client'

import { useRef } from "react";

export default function RefCounter() {
  const ref = useRef(0)

  function handleClick() {
    ref.current++
    alert(`You clicked ${ref.current} times!`)
  }

  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  )
}
