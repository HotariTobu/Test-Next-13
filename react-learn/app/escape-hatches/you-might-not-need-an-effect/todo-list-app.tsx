import { useMemo, useState } from "react"

const todos = [
  'ABC',
  'ERF',
  'JIK',
  'JIKDHU',
  'VBNJU',
  'WOKJMNBSG',
]

const filter = (todo: string) => {
  return todo.length < 4
}

function TodoList(props: {
  todos: string[]
  filter: (todo: string) => boolean
}) {
  const [newTodo, setNewTodo] = useState('')

  const visibleTodos = useMemo(() => {
    // ✅ DOes not re-run `getFilteredTodos()` unless todos or filter change
    return getFilteredTodos(props.todos, props.filter)
  }, [props.todos, props.filter])

  return (
    <div>
      <div>
        <input value={newTodo} onChange={e => setNewTodo(e.target.value)} />
        <button onClick={() => console.log(newTodo)}>Add</button>
      </div>
      {visibleTodos.map(todo => (
        <div key={todo}>{todo}</div>
      ))}
    </div>
  )
}

export default function TodoListApp() {
  return (
    <TodoList
      todos={todos}
      filter={filter}
    />
  )
}

function getFilteredTodos(todos: string[], filter: (todo: string) => boolean) {
  return todos.filter(filter)
}
