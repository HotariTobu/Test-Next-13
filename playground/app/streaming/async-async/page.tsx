import { Suspense } from "react"
import Component from "./component"

export default async () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Component />
    </Suspense>
  )
}
