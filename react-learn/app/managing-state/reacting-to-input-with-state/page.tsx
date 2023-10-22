'use client'

import { FormEvent, useState } from "react"

type Status = 'empty' | 'typing' | 'submitting' | 'success' | 'error'

interface FormProps {
  status?: Status
}

function Form0({ status = 'empty' }: FormProps) {
  if (status === 'success') {
    return <h1>That's right!</h1>
  }

  return (
    <div>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form>
        <textarea />
        <br />
        <button>
          Submit
        </button>
      </form>
    </div>
  )
}

function Form1({ status = 'empty' }: FormProps) {
  if (status === 'success') {
    return <h1>That's right!</h1>
  }

  return (
    <div>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form>
        <textarea disabled={status === 'submitting'} />
        <br />
        <button disabled={status === 'empty' || status === 'submitting'}>
          Submit
        </button>
        {status === 'error' &&
          <p className="error">
            Good guess but a wrong answer. Try again!
          </p>
        }
      </form>
    </div>
  )
}


function submitForm(answer: string) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() === 'lima') {
        resolve()
      }
      else {
        reject(new Error('Good guess but a wrong answer. Try again!'))
      }
    }, 1500);
  })
}

function Form2() {
  const [answer, setAnswer] = useState('')
  const [error, setError] = useState<string | null>(null)

  // const [isEmpty, setIsEmpty] = useState(true)
  // const [isTyping, setIsTyping] = useState(false)
  // const [isSubmitting, setIsSubmitting] = useState(false)
  // const [isSuccess, setIsSuccess] = useState(false)
  // const [isError, setIsError] = useState(false)
  const [status, setStatus] = useState<'typing' | 'submitting' | 'success'>('typing')

  if (status === 'success') {
    return <h1>That's right!</h1>
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    setStatus('submitting')

    try {
      await submitForm(answer)
      setStatus('success')
    }
    catch (err) {
      const message = (err as object).toString()
      setError(message)
      setStatus('typing')
    }
  }

  return (
    <div>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={e => setAnswer(e.target.value)}
          disabled={status === 'submitting'} />
        <br />
        <button disabled={answer.length === 0 || status === 'submitting'}>
          Submit
        </button>
        {error !== null &&
          <p className="error">
            Good guess but a wrong answer. Try again!
          </p>
        }
      </form>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Form0 status="empty" />
      <Form0 status="success" />

      <Form1 status="empty" />
      <Form1 status="submitting" />
      <Form1 status="success" />
      <Form1 status="error" />

      <Form2 />
    </>
  )
}
