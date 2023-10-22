'use client'

import { useState, useRef } from 'react';

export default function TodoList() {
  const listRef = useRef<HTMLUListElement>(null);
  const [text, setText] = useState('');
  const [todos, setTodos] = useState(
    initialTodos
  );

  function handleAdd() {
    const newTodo = { id: nextId++, text: text };
    setText('');
    setTodos([ ...todos, newTodo]);

    const element = listRef.current?.lastChild
    if (!(element instanceof HTMLLIElement)) {
      return
    }

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    });
  }

  return (
    <div>
      <button onClick={handleAdd}>
        Add
      </button>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <ul ref={listRef}>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

interface Task {
  id: number
  text: string
}

let nextId = 0;
let initialTodos: Task[] = [];
for (let i = 0; i < 20; i++) {
  initialTodos.push({
    id: nextId++,
    text: 'Todo #' + (i + 1)
  });
}
