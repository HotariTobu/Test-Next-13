'use client'

import { ReactNode, useRef } from 'react';

const cats = [
  { id: 0, name: 'Tom', url: 'https://placekitten.com/g/200/200' },
  { id: 1, name: 'Maru', url: 'https://placekitten.com/g/300/200' },
  { id: 2, name: 'Jellylorum', url: 'https://placekitten.com/g/250/200' },
]

export default function Carousel() {
  const imgMapRef = useRef(new Map<number, HTMLImageElement>());

  function scrollTo(id: number) {
    const img = imgMapRef.current.get(id)
    img?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  return (
    <>
      <nav>
        {cats.map(cat => (
          <button key={cat.id} onClick={() => scrollTo(cat.id)}>{cat.name}</button>
        ))}
      </nav>
      <div style={{
        overflow: 'hidden',
        width: 500,
      }}>
        <ul style={{
          display: 'flex',
          width: 1000,
        }}>
          {cats.map(cat => (
            <li key={cat.id}>
              <img
                src={cat.url}
                alt={cat.name}

                // Use ref callback
                ref={e => {
                  if (e) {
                    imgMapRef.current.set(cat.id, e)
                  }
                  else {
                    imgMapRef.current.delete(cat.id)
                  }
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
