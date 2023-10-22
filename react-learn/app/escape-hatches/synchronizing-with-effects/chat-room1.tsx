'use client'

import { useEffect } from "react";
import { createConnection } from "./chat";

export default function ChatRoom() {
  useEffect(() => {
    const connection = createConnection()
    connection.connect()

    return () => {
      // Called when un-mounting
      connection.disconnect()
    }
  }, [])

  return <h1>Welcome to the chat!</h1>
}
