'use client'

import { useState } from 'react';

export default function DoubleCounter2() {
  const [useFancyStylingA, setUseFancyStylingA] = useState(true)
  const [useFancyStylingB, setUseFancyStylingB] = useState(true)

  if (useFancyStylingB) {
    return (
      <div>
        {useFancyStylingA ? (
          <Counter isFancy={true} />
        ) : (
          <Counter isFancy={false} />
        )}
        <Counter isFancy={true} />
        <label>
          <input
            type="checkbox"
            checked={useFancyStylingA}
            onChange={e => setUseFancyStylingA(e.target.checked)}
          />
          Fancy the first counter
        </label>
        <label>
          <input
            type="checkbox"
            checked={useFancyStylingB}
            onChange={e => setUseFancyStylingB(e.target.checked)}
          />
          Fancy the second counter
        </label>
      </div>
    )
  }
  else {
    return (
      <div>
        {useFancyStylingA ? (
          <Counter isFancy={true} />
        ) : (
          <Counter isFancy={false} />
        )}
        <Counter isFancy={false} />
        <label>
          <input
            type="checkbox"
            checked={useFancyStylingA}
            onChange={e => setUseFancyStylingA(e.target.checked)}
          />
          Fancy the first counter
        </label>
        <label>
          <input
            type="checkbox"
            checked={useFancyStylingB}
            onChange={e => setUseFancyStylingB(e.target.checked)}
          />
          Fancy the second counter
        </label>
      </div>
    )
  }
}

function Counter({ isFancy }: { isFancy: boolean }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }

  return (
    <div
      style={{
        backgroundColor: isFancy ? 'lightpink' : '',
      }}
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
