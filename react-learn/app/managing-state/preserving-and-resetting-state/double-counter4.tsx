'use client'

import { useState } from 'react';

export default function DoubleCounter4() {
  const [useDiv, setUseDiv] = useState(true)

  return (
    <div>
      {useDiv ? (
        <div>
          <Counter />
        </div>
      ) : (
        <section>
          <Counter />
        </section>
      )}
      <label>
        <input
          type="checkbox"
          checked={useDiv}
          onChange={e => setUseDiv(e.target.checked)}
        />
        DIV
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
