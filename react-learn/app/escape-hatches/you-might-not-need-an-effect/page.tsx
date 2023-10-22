'use client'

import ChatIndicator0 from "./chat-indicator0"
import ChatIndicator1 from "./chat-indicator1"
import ListPage0 from "./list-page0"
import ListPage1 from "./list-page1"
import ListPage2 from "./list-page2"
import ProfilePage0 from "./profile-page0"
import ProfilePage1 from "./profile-page1"
import TodoListApp from "./todo-list-app"

export default function App() {
  return (
    <>
      <TodoListApp />

      <ProfilePage0 />
      <ProfilePage1 />

      <ListPage0 />
      <ListPage1 />
      <ListPage2 />

      <ChatIndicator0 />
      <ChatIndicator1 />
    </>
  )
}
