'use client'

import React from "react"

function Button0() {
  return (
    <button>
      I don't do anything
    </button>
  )
}

function Button1() {
  function handleClick() {
    alert('You clicked me!')
  }

  return (
    // Need client-side rendering?
    <button onClick={handleClick}>
      Click me!
    </button>
  )
}

interface Button2Props {
  message: string,
  children: React.ReactNode,
}

function Button2({ message, children }: Button2Props) {
  return (
    <button onClick={() => {
      alert(message)
    }}>
      {children}
    </button>
  )
}

interface Button3Props {
  onClick: () => void,
  children: React.ReactNode,
}
function Button3({ onClick, children }: Button3Props) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}

interface Button4Props {
  onSmash: () => void,
  children: React.ReactNode,
}
function Button4({ onSmash, children }: Button4Props) {
  return (
    <button onClick={onSmash}>
      {children}
    </button>
  )
}

interface Toolbar1Props {
  onPlayMovie: () => void
  onUploadImage: () => void
}
function Toolbar1({ onPlayMovie, onUploadImage }: Toolbar1Props) {
  return (
    <div>
      <button onClick={onPlayMovie}>Play Movie</button>
      <button onClick={onUploadImage}>Upload Image</button>
    </div>
  )
}

function Toolbar2() {
  return (
    <div
      onClick={() => alert('Click toolbar!')}
      onClickCapture={() => alert('Click toolbar! Capture!')}
    >
      <button onClick={() => alert('Click button1!')}>Button 1</button>
      <button onClick={e => {
        e.stopPropagation()
        alert('Click button2!')
      }}>Button 2</button>
    </div>
  )
}

interface SignupProps {
  onSubmit: (e: React.FormEvent) => void
}
function Signup({ onSubmit }: SignupProps) {
  return (
    <form onSubmit={onSubmit}>
      <input />
      <button type="submit">Send</button>
    </form>
  )
}

export default function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Button0 />
      <Button1 />

      <Button2 message="Play">Play</Button2>
      <Button2 message="Stop">Stop</Button2>

      <Button3 onClick={() => alert('UP')}>UP</Button3>
      <Button3 onClick={() => alert('DOWN')}>DOWN</Button3>

      <Button4 onSmash={() => alert('Hip')}>Hip</Button4>
      <Button4 onSmash={() => alert('Hop')}>Hop</Button4>

      <Toolbar1
        onPlayMovie={() => alert('mooooooviiiiieieee')}
        onUploadImage={() => alert('imaaaaaaageeeeeeee')}
      />

      <Toolbar2 />

      <Signup onSubmit={() => alert('Submitting!')} />
      <Signup onSubmit={e => {
        e.preventDefault()
        alert('Submitting!')
      }} />
    </div>
  )
}
