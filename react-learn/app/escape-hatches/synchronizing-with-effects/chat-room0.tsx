'use client'

import { useEffect } from "react";
import { createConnection } from "./chat";

export default function ChatRoom() {
  // Mounted twice in development to notify us that forgetting clean-up

  useEffect(() => {
    const connection = createConnection()
    connection.connect()

    // Called only when mounting
  }, [])

  return <h1>Welcome to the chat!</h1>
}
