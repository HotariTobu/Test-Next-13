'use client'

import { useRef, useState } from "react"

// NotFoundError: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.

export default function Counter() {
  const [show, setShow] = useState(true)
  const ref = useRef<HTMLParagraphElement>(null)

  return (
    <div>
      <button onClick={() => {
        setShow(!show)
      }}>
        Toggle with setState
      </button>

      <button onClick={() => {
        ref.current?.remove()
      }}>
        Remove from the DOM
      </button>

      {show && <p ref={ref}>Hello_World!</p>}
    </div>
  )
}
