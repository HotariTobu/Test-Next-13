'use client'

import { useState } from 'react'

import { sculptureList } from './data'

function Gallery0() {
  let index = 0

  function handleClick() {
    index++
  }

  let sculpture = sculptureList[index]
  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>

      <h2>
        <i>{sculpture.name}</i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  )
}

function Gallery1() {
  const [index, setIndex] = useState(0)

  function handleClick() {
    setIndex((index + 1) % sculptureList.length)
  }

  let sculpture = sculptureList[index]
  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>

      <h2>
        <i>{sculpture.name}</i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  )
}

function Gallery2() {
  const [index, setIndex] = useState(0)
  const [showMore, setShowMore] = useState(false)

  function handleNextClick() {
    setIndex((index + 1) % sculptureList.length)
  }

  function handleMoreClick() {
    setShowMore(!showMore)
  }

  let sculpture = sculptureList[index]
  return (
    <div>
      <button onClick={handleNextClick}>
        Next
      </button>

      <h2>
        <i>{sculpture.name}</i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && (
        <p>
          {sculpture.description}
        </p>
      )}
    </div>
  )
}

export default function App() {
  return (
    <>
      <Gallery0 />
      <Gallery1 />

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
      }}>
        <Gallery2 />
        <Gallery2 />
      </div>
    </>
  )
}
