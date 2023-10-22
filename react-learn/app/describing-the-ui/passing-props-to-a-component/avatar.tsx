import '../globals.css'
import getImageUrl from '../utils'

interface Person {
  name: string
  imageId: string
}

interface Avatar {
  person: Person
  size?: number
}

export default function Avatar({ person, size = 100 }: Avatar) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person.imageId)}
      alt={person.name}
      width={size}
      height={size}
    />
  )
}
