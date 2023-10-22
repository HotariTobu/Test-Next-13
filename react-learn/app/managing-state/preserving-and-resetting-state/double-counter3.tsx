'use client'

import { useState } from 'react';

export default function DoubleCounter3() {
  const [taleBreak, setTaleBreak] = useState(true)

  return (
    <div>
      {taleBreak ? (
        <p>See you later</p>
        ) : (
          <Counter />
      )}
      <label>
        <input
          type="checkbox"
          checked={taleBreak}
          onChange={e => setTaleBreak(e.target.checked)}
        />
        Take a break
      </label>
    </div>
  );
}

function Counter() {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
}
