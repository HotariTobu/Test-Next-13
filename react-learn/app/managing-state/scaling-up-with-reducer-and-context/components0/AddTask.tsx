import { useState } from 'react';

export default function AddTask(props: {
  onAddTask: (text: string) => void,
}) {
  const [text, setText] = useState('');
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        setText('');
        props.onAddTask(text);
      }}>Add</button>
    </>
  )
}
