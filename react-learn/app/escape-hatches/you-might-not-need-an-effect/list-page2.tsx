import { useEffect, useState } from "react"

function List(props: {
  items: string[]
}) {
  const [isReversed, setIsReversed] = useState(false)
  const [selectionId, setSelectionId] = useState<string | null>(null)

  // ✅ Best: Calculate everything during rendering
  const selection = props.items.find(item => item === selectionId) ?? null

  return (
    <div>
      <label>
        <input type="checkbox" checked={isReversed} onChange={e => setIsReversed(e.target.checked)} />
        Reverse
      </label>
      <p>
        selection: {selection}
      </p>
      {props.items.map((item, i) => (
        <button key={i} onClick={() => setSelectionId(item)}>{item}</button>
      ))}
    </div>
  )
}

export default function ListPage() {
  const [state, setState] = useState(0)

  return (
    <div>
      <button onClick={() => setState(0)}>First</button>
      <button onClick={() => setState(1)}>Second</button>
      <List items={state === 0 ? ['A', 'B'] : ['C', 'D']} />
    </div>
  )
}
