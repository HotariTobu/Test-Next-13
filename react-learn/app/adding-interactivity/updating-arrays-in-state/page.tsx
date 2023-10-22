'use client'

import { useState } from "react";
import { DraftFunction, useImmer } from "use-immer";

interface Artist {
  id: number
  name: string
}

let nextId = 0

function List0() {
  const [name, setName] = useState('')
  const [artists, setArtists] = useState<Artist[]>([])

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button
        onClick={() => {
          artists.push({
            id: nextId++,
            name
          })
        }}
      >
        Add
      </button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  )
}

function List1() {
  const [name, setName] = useState('')
  const [artists, setArtists] = useState<Artist[]>([])

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button
        onClick={() => {
          setArtists([
            ...artists,
            {
              id: nextId++,
              name
            }
          ])
        }}
      >
        Add
      </button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  )
}

function List2() {
  const [name, setName] = useState('')
  const [artists, setArtists] = useState<Artist[]>([])

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button
        onClick={() => {
          setArtists([
            ...artists,
            {
              id: nextId++,
              name
            }
          ])
        }}
      >
        Add
      </button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button onClick={() => {
              setArtists(
                artists.filter(a =>
                  a.id !== artist.id
                )
              )
            }}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}


function ShapeEditor() {
  const [shapes, setShapes] = useState([
    { id: 0, type: 'circle', x: 50, y: 50 },
    { id: 1, type: 'square', x: 150, y: 50 },
    { id: 2, type: 'circle', x: 250, y: 50 },
  ])

  function handleClick() {
    const nextShapes = shapes.map(shape => {
      if (shape.type === 'square') {
        return shape
      }
      else {
        return {
          ...shape,
          y: shape.y + 10,
        }
      }
    })

    setShapes(nextShapes)
  }

  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <button onClick={handleClick}>
        Move circles down!
      </button>
      {shapes.map(shape => (
        <div
          key={shape.id}
          style={{
            backgroundColor: 'purple',
            position: 'absolute',
            left: shape.x,
            top: shape.y,
            borderRadius: shape.type === 'circle' ? '50%' : '',
            width: 20,
            height: 20,
          }}
        ></div>
      ))}
    </div>
  )
}


function CounterList() {
  const [counters, setCounters] = useState([0, 0, 0,])

  function handleIncrementClick(index: number) {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        return c + 1
      }
      else {
        return c
      }
    })

    setCounters(nextCounters)
  }

  return (
    <div>
      <ul>
        {counters.map((counter, i) => (
          <li
            key={i}
          >
            {counter}
            <button onClick={() => handleIncrementClick(i)}>
              +1
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}


function List3() {
  const [name, setName] = useState('')
  const [index, setIndex] = useState(0)
  const [artists, setArtists] = useState<Artist[]>([])

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button
        onClick={() => {
          setName('')
          setArtists([
            ...artists.slice(0, index),
            {
              id: nextId++,
              name
            },
            ...artists.slice(index),
          ])
        }}
      >
        Insert
      </button>
      at
      <input
        type="number"
        value={index}
        onChange={e => setIndex(e.target.value ? parseInt(e.target.value) : 0)}
      />
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button onClick={() => {
              setArtists(
                artists.filter(a =>
                  a.id !== artist.id
                )
              )
            }}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

function List4() {
  const [name, setName] = useState('')
  const [index, setIndex] = useState(0)
  const [artists, setArtists] = useState<Artist[]>([])

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button
        onClick={() => {
          setName('')
          setArtists([
            ...artists.slice(0, index),
            {
              id: nextId++,
              name
            },
            ...artists.slice(index),
          ])
        }}
      >
        Insert
      </button>
      at
      <input
        type="number"
        value={index}
        onChange={e => setIndex(e.target.value ? parseInt(e.target.value) : 0)}
      />
      <br />
      <button onClick={() => {
        const nextArtists = [...artists]
        nextArtists.reverse()
        setArtists(nextArtists)
      }}>Reverse</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button onClick={() => {
              setArtists(
                artists.filter(a =>
                  a.id !== artist.id
                )
              )
            }}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}


interface BucketArtist extends Artist {
  seen: boolean
}

function BucketList0() {
  const [name, setName] = useState('')
  const [index, setIndex] = useState(0)
  const [myArtists, setMyArtists] = useState<BucketArtist[]>([])
  const [yourArtists, setYourArtists] = useState<BucketArtist[]>([])

  function List({ artists, setArtists }: { artists: BucketArtist[], setArtists: (nextArtists: BucketArtist[]) => void }) {
    return (
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            <input
              type="checkbox"
              checked={artist.seen}
              onChange={() => {
                const nextArtists = [...artists]
                const selectedArtist = nextArtists.find(a => a.id === artist.id)
                if (selectedArtist) {
                  selectedArtist.seen = !selectedArtist.seen
                }
                setArtists(nextArtists)
              }}
            />
            {artist.name}{' '}
            <button onClick={() => {
              setArtists(
                artists.filter(a =>
                  a.id !== artist.id
                )
              )
            }}>Delete</button>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button
        onClick={() => {
          setName('')
          const newArtist = {
              id: nextId++,
              name,
              seen: false,
            }
          setMyArtists([
            ...myArtists.slice(0, index),
            newArtist,
            ...myArtists.slice(index),
          ])
          setYourArtists([
            ...yourArtists.slice(0, index),
            newArtist,
            ...yourArtists.slice(index),
          ])
        }}
      >
        Insert
      </button>
      at
      <input
        type="number"
        value={index}
        onChange={e => setIndex(e.target.value ? parseInt(e.target.value) : 0)}
      />
      <br />
      <h2>My list</h2>
      <List artists={myArtists} setArtists={setMyArtists}/>
      <h2>Your list</h2>
      <List artists={yourArtists} setArtists={setYourArtists}/>
    </>
  )
}

function BucketList1() {
  const [name, setName] = useState('')
  const [index, setIndex] = useState(0)
  const [myArtists, setMyArtists] = useState<BucketArtist[]>([])
  const [yourArtists, setYourArtists] = useState<BucketArtist[]>([])

  function List({ artists, setArtists }: { artists: BucketArtist[], setArtists: (nextArtists: BucketArtist[]) => void }) {
    return (
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            <input
              type="checkbox"
              checked={artist.seen}
              onChange={() => {
                setArtists(artists.map(a =>
                  a.id === artist.id ? { ...a, seen: !a.seen } : a
                ))
              }}
            />
            {artist.name}{' '}
            <button onClick={() => {
              setArtists(
                artists.filter(a =>
                  a.id !== artist.id
                )
              )
            }}>Delete</button>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button
        onClick={() => {
          setName('')
          const newArtist = {
              id: nextId++,
              name,
              seen: false,
            }
          setMyArtists([
            ...myArtists.slice(0, index),
            newArtist,
            ...myArtists.slice(index),
          ])
          setYourArtists([
            ...yourArtists.slice(0, index),
            newArtist,
            ...yourArtists.slice(index),
          ])
        }}
      >
        Insert
      </button>
      at
      <input
        type="number"
        value={index}
        onChange={e => setIndex(e.target.value ? parseInt(e.target.value) : 0)}
      />
      <br />
      <h2>My list</h2>
      <List artists={myArtists} setArtists={setMyArtists}/>
      <h2>Your list</h2>
      <List artists={yourArtists} setArtists={setYourArtists}/>
    </>
  )
}

function BucketList2() {
  const [name, updateName] = useImmer('')
  const [index, updateIndex] = useImmer(0)
  const [myArtists, updateMyArtists] = useImmer<BucketArtist[]>([])
  const [yourArtists, updateYourArtists] = useImmer<BucketArtist[]>([])

  function List({ artists, updateArtists }: { artists: BucketArtist[], updateArtists: (nextArtists: DraftFunction<BucketArtist[]>) => void }) {
    return (
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            <input
              type="checkbox"
              checked={artist.seen}
              onChange={() => {
                updateArtists(draft => {
                  const selectedArtist = draft.find(a => a.id === artist.id)
                  if (selectedArtist) {
                    selectedArtist.seen = !selectedArtist.seen
                  }
                })
              }}
            />
            {artist.name}{' '}
            <button onClick={() => {
              const index = artists.indexOf(artist)
              if (index < 0) {
                return
              }

              updateArtists(draft => {
                draft.splice(index, 1)
              })
            }}>Delete</button>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => updateName(e.target.value)}
      />
      <button
        onClick={() => {
          updateName('')
          const newArtist = {
              id: nextId++,
              name,
              seen: false,
            }
          updateMyArtists(draft => {
            draft.splice(index, 0, newArtist)
          })
          updateYourArtists(draft => {
            draft.splice(index, 0, newArtist)
          })
        }}
      >
        Insert
      </button>
      at
      <input
        type="number"
        value={index}
        onChange={e => updateIndex(e.target.value ? parseInt(e.target.value) : 0)}
      />
      <br />
      <h2>My list</h2>
      <List artists={myArtists} updateArtists={updateMyArtists}/>
      <h2>Your list</h2>
      <List artists={yourArtists} updateArtists={updateYourArtists}/>
    </>
  )
}

export default function App() {
  return (
    <>
      <List0 />
      <List1 />
      <List2 />

      <ShapeEditor />
      <CounterList />

      <List3 />
      <List4 />

      <BucketList0 />
      <BucketList1 />
      <BucketList2 />
    </>
  )
}
