import { Suspense } from "react"
import Component from "./component"

export default () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Component />
    </Suspense>
  )
}
