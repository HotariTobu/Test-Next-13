import RefCounter from "./ref-counter"
import StateCounter from "./state-counter"
import Stopwatch0 from "./stopwatch0"
import Stopwatch1 from "./stopwatch1"
import WrongRefCounter from "./wrong-ref-counter"

export default function App() {
  return (
    <>
      <RefCounter />

      <Stopwatch0 />
      <Stopwatch1 />

      <StateCounter />
      <WrongRefCounter />
    </>
  )
}
