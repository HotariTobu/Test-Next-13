import { StrictMode } from "react"

let guest = 0

function Cup() {
  // Bad: changing a preexisting variable!
  guest++
  return <h2>Tea cup for guest #{guest}</h2>
}

function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  )
}

export default function App() {
  return (
    <StrictMode>
      <TeaSet />
    </StrictMode>
  )
}
