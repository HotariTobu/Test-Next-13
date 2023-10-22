import React from "react"

interface Item {
  name: string
  isPacked: boolean
}

function Item({ name, isPacked }: Item) {
  let itemContent: string | React.ReactElement = name
  if (isPacked) {
    itemContent += ' ☑️'

    itemContent = (
      <del>
        {name}
        ☑️
      </del>
    )
  }

  return (
    <li className="item">{itemContent}</li>
  )

  return (
    <li className="item">{name} {isPacked && '☑️'}</li>
  )

  return (
    <li className="item">
      {isPacked ? (
        <del>
          {name}
          ☑️
        </del>
      ) : (
        name
      )}
    </li>
  )

  return (
    <li className="item">{name} {isPacked ? '☑️' : ''}</li>
  )

  if (isPacked) {
    // return (
    //   <li className="item">{name} ☑️</li>
    // )

    // Render none
    return null
  }

  return (
    <li className="item">{name}</li>
  )
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item
          name="Space suit"
          isPacked={true}
        />
        <Item
          name="Helmet with a golden leaf"
          isPacked={true}
        />
        <Item
          name="Photo of Tam"
          isPacked={false}
        />
      </ul>
    </section>
  )
}
