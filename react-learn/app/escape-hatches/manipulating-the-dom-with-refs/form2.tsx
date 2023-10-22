'use client'

import { ForwardedRef, forwardRef, useImperativeHandle, useRef } from "react";

// Restrict properties of ref.
interface PublicInput {
  focus: () => void
}
const Input = forwardRef((props, ref) => {
  const realInputRef = useRef<HTMLInputElement>(null)

  useImperativeHandle(ref, () => ({
    focus() {
      realInputRef.current?.focus()
    },
  }))

  return <input {...props} ref={realInputRef} />
})

export default function Form() {
  const inputRef = useRef<HTMLInputElement>(null)

  function handleClick() {
    inputRef.current?.focus()
    // inputRef.current?.blur()
  }

  return (
    <div style={{ color: 'gray' }}>
      <Input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </div>
  )
}
