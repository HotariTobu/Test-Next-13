'use client'

import { useState } from 'react';

export default function TextCounter() {
  const [counter, setCounter] = useState(0);

  // Always declare component functions at the top level, and don’t nest their definitions.
  function MyTextField() {
    const [text, setText] = useState('');

    return (
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
    );
  }

  return (
    <>
      <MyTextField />
      <button onClick={() => {
        setCounter(counter + 1)
      }}>Clicked {counter} times</button>
    </>
  );
}
