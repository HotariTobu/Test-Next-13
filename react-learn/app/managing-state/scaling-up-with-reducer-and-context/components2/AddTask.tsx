import { useContext, useState } from 'react';
import { useTasksDispatch } from './TasksProvider';

export default function AddTask(props: {
  initialTaskCount: number
}) {
  const [nextId, setNextId] = useState(props.initialTaskCount)
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch()

  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        setText('');
        dispatch && dispatch({
          type: 'added',
          id: nextId,
          text,
        })
        setNextId(nextId + 1)
      }}>Add</button>
    </>
  )
}
