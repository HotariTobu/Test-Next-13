'use client'

import { useState } from "react"

function Form1() {
  const [isSent, setIsSent] = useState(false)
  const [message, setMessage] = useState('Hi!')

  if (isSent) {
    return <h1>Your message is on its way</h1>
  }

  return (
    <form onSubmit={e => {
      e.preventDefault()
      setIsSent(true)
      alert(message)
    }}>
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      ></textarea>
      <button type="submit">Send</button>
    </form>
  )
}

function Counter1() {
  const [number, setNumber] = useState(0)

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 1)
        setNumber(number + 1)
        setNumber(number + 1)
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
        alert(number)
      }}>+5</button>
    </>
  )
}

function Counter3() {
  const [number, setNumber] = useState(0)

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 5)
        setTimeout(() => {
          alert(number)
        }, 3000);
      }}>+5</button>
    </>
  )
}

function Form2() {
  const [to, setTo] = useState('Alice')
  const [message, setMessage] = useState('Hi!')

  return (
    <form onSubmit={e => {
      e.preventDefault()
      setTimeout(() => {
        alert(`You said ${message} to ${to}`)
      }, 5000);
    }}>
      <label>
        Tp:{' '}
        <select
          value={to}
          onChange={e => setTo(e.target.value)}
        >
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      ></textarea>
      <button type="submit">Send</button>
    </form >
  )
}

export default function App() {
  return (
    <>
      <Form1 />
      <Counter1 />
      <Counter2 />
      <Counter3 />
      <Form2 />
    </>
  )
}
