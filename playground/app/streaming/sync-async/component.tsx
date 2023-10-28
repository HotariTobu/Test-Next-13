import { use } from "react"
import { fetchContent } from "../actions"

export default async () => {
  const content = use(fetchContent())
  return <p>{content}</p>
}
