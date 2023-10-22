'use client'

import { ForwardedRef, forwardRef, useRef } from "react";

// Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
// function Input(props: any) {
//   return <input {...props} />
// }
const Input = forwardRef((props, ref: ForwardedRef<HTMLInputElement>) => {
  return <input {...props} ref={ref} />
})

export default function Form() {
  const inputRef = useRef<HTMLInputElement>(null)

  function handleClick() {
    inputRef.current?.focus()
  }

  return (
    <div style={{ color: 'gray' }}>
      <Input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </div>
  )
}
