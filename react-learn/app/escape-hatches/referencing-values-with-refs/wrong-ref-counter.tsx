'use client'

import { useRef } from "react";

export default function WrongRefCounter() {
  const countRef = useRef(0)

  function handleClick() {
    // This does'nt re-render the component!
    countRef.current++
  }

  return (
    <button onClick={handleClick}>
      You clicked {countRef.current} times
    </button>
  )
}
