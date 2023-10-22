import getImageUrl from "../utils"
import { people } from "./data"

export default function List() {
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  )

  const listItems = people.map(person => (
    <li key={person.id}>
      <img
        src={getImageUrl(person.imageId)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.name + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  ))

  return <ul>{listItems}</ul>
}
