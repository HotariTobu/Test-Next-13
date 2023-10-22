'use client'

import { useState, useReducer } from 'react';

interface Task {
  id: number
  text: string
  done: boolean
}

interface Action {
  type: 'added' | 'changed' | 'deleted'
  id?: number
  text?: string
  task?: Task
}

function taskReducer(state: Task[], action: Action): Task[] {
  switch (action.type) {
    case 'added': {
      return [
        ...state,
        {
          id: action.id ?? 0,
          text: action.text ?? '',
          done: false,
        }
      ]
    }

    case 'changed': {
      return state.map(t => {
        if (t.id === action.task?.id) {
          return action.task ?? t
        }
        else {
          return t
        }
      })
    }

    case 'deleted': {
      return state.filter(t => t.id !== action.id)
    }

    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}

export default function Tasks() {
  // const [tasks, setTasks] = useState(initialTasks);
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  // Use dispatch
  function handleAddTask(text: string) {
    dispatch({
      // Action object
      type: 'added',
      id: nextId++,
      text,
    })
  }

  function handleChangeTask(task: Task) {
    dispatch({
      type: 'changed',
      task,
    })
  }

  function handleDeleteTask(taskId: number) {
    dispatch({
      type: 'deleted',
      id: taskId,
    })
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

let nextId = 3;
const initialTasks: Task[] = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];

function AddTask(props: {
  onAddTask: (text: string) => void
}) {
  const [text, setText] = useState('')

  return (
    <div>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => props.onAddTask(text)}>
        Add
      </button>
    </div>
  )
}

function TaskItem(props: {
  task: Task
  onChangeTask: (task: Task) => void
  onDeleteTask: () => void
}) {
  const [editing, setEditing] = useState(false)

  return (
    <div>
      <input
        type='checkbox'
        checked={props.task.done}
        onChange={e => props.onChangeTask({
          ...props.task,
          done: e.target.checked,
        })}
      />

      {editing ? (
        <input
          value={props.task.text}
          onChange={e => props.onChangeTask({
            ...props.task,
            text: e.target.value,
          })}
        />
      ) : (
        props.task.text
      )}

      <button onClick={() => setEditing(!editing)}>
        {editing ? 'Save' : 'Edit'}
      </button>
      <button onClick={() => props.onDeleteTask()}>
        Delete
      </button>
    </div>
  )
}

function TaskList(props: {
  tasks: Task[]
  onChangeTask: (task: Task) => void
  onDeleteTask: (taskId: number) => void
}) {
  return (
    <div>
      {props.tasks.map(task => (
        <TaskItem
          task={task}
          onChangeTask={props.onChangeTask}
          onDeleteTask={() => props.onDeleteTask(task.id)}
        />
      ))}
    </div>
  )
}
