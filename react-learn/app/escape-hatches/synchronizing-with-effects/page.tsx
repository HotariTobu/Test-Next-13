import ChatRoom0 from "./chat-room0"
import ChatRoom1 from "./chat-room1"
import PlayerApp0 from "./player-app0"
import PlayerApp1 from "./player-app1"
import PlayerApp2 from "./player-app2"
import PlayerApp3 from "./player-app3"
import PlaygroundApp from "./playground-app"

export default function App() {
  return (
    <>
      <PlayerApp0 />
      <PlayerApp1 />
      <PlayerApp2 />
      <PlayerApp3 />

      <ChatRoom0 />
      <ChatRoom1 />

      <PlaygroundApp />
    </>
  )
}
