'use client'

import { ChangeEvent, useState } from "react";

function MovingDot0() {
  const [position, setPosition] = useState({
    x: 0, y: 0,
  })
  return (
    <div
      onPointerMove={e => {
        position.x = e.nativeEvent.offsetX
        position.y = e.nativeEvent.offsetY
      }}
      style={{
        position: 'relative',
        width: '100vw',
        height: '400px',
      }}
    >
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'red',
          borderRadius: '50%',
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      ></div>
    </div>
  )
}

function MovingDot1() {
  const [position, setPosition] = useState({
    x: 0, y: 0,
  })
  return (
    <div
      onPointerMoveCapture={e => {
        position.x = e.nativeEvent.offsetX
        position.y = e.nativeEvent.offsetY

        // setPosition(position)
        setPosition({
          x: e.nativeEvent.offsetX,
          y: e.nativeEvent.offsetY,
        })
      }}
      style={{
        position: 'relative',
        width: '100vw',
        height: '400px',
      }}
    >
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'red',
          borderRadius: '50%',
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
          pointerEvents: 'none',
        }}
      ></div>
    </div>
  )
}

function Form0() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com',
  })

  return (
    <div>
      <label>
        First name:
        <input
          value={person.firstName}
          onChange={e => person.firstName = e.target.value}
        />
      </label>
      <label>
        Last name:
        <input
          value={person.lastName}
          onChange={e => person.lastName = e.target.value}
        />
      </label>
      <label>
        Email:
        <input
          value={person.email}
          onChange={e => person.email = e.target.value}
        />
      </label>

      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </div>
  )
}

function Form1() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com',
  })

  return (
    <div>
      <label>
        First name:
        <input
          value={person.firstName}
          onChange={e => setPerson({ ...person, firstName: e.target.value })}
        />
      </label>
      <label>
        Last name:
        <input
          value={person.lastName}
          onChange={e => setPerson({ ...person, lastName: e.target.value })}
        />
      </label>
      <label>
        Email:
        <input
          value={person.email}
          onChange={e => setPerson({ ...person, email: e.target.value })}
        />
      </label>

      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </div>
  )
}

function Form2() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com',
  })

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div>
      <label>
        First name:
        <input
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name:
        <input
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          name="email"
          value={person.email}
          onChange={handleChange}
        />
      </label>

      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </div>
  )
}

function Form3() {
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({
      ...person,
      name: e.target.value
    });
  }

  function handleTitleChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value
      }
    });
  }

  function handleCityChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value
      }
    });
  }

  function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value
      }
    });
  }

  return (
    <>
      <label>
        Name:
        <input
          value={person.name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Title:
        <input
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label>
        City:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <label>
        Image:
        <input
          value={person.artwork.image}
          onChange={handleImageChange}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img
        src={person.artwork.image}
        alt={person.artwork.title}
      />
    </>
  );
}

import { useImmer } from 'use-immer';

function Form4() {
  const [person, updatePerson] = useImmer({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    updatePerson(draft => {
      draft.name = e.target.value;
    });
  }

  function handleTitleChange(e: ChangeEvent<HTMLInputElement>) {
    updatePerson(draft => {
      draft.artwork.title = e.target.value;
    });
  }

  function handleCityChange(e: ChangeEvent<HTMLInputElement>) {
    updatePerson(draft => {
      draft.artwork.city = e.target.value;
    });
  }

  function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
    updatePerson(draft => {
      draft.artwork.image = e.target.value;
    });
  }

  return (
    <>
      <label>
        Name:
        <input
          value={person.name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Title:
        <input
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label>
        City:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <label>
        Image:
        <input
          value={person.artwork.image}
          onChange={handleImageChange}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img
        src={person.artwork.image}
        alt={person.artwork.title}
      />
    </>
  );
}

export default function App() {
  return (
    <div
      style={{
        color: 'gray',
      }}
    >
      <MovingDot0 />
      <MovingDot1 />

      <Form0 />
      <Form1 />
      <Form2 />

      <Form3 />
      <Form4 />
    </div>
  )
}
