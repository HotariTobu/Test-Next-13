'use client'

import { useState } from 'react'

function Header({ title }) {
  return (<h1>{title ? title : 'Default Title'}</h1>)
}

export default function HomePage() {
  const [likes, setLikes] = useState(0)

  function handleClick() {
    console.log("increment like count")

    setLikes(likes + 1)
  }

  return (
    <div>
      <Header title="React 💙"></Header>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  )
}
