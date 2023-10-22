import { useEffect, useState, useSyncExternalStore } from "react";

function subscribe(onStateChange: () => void) {
  window.addEventListener('online', onStateChange);
  window.addEventListener('offline', onStateChange);
  return () => {
    window.removeEventListener('online', onStateChange);
    window.removeEventListener('offline', onStateChange);
  };
}

function useOnlineStatus() {
  // ✅ Good: Subscribing to an external store with a built-in Hook
  return useSyncExternalStore(
    subscribe, // React won't resubscribe for as long as you pass the same function
    () => navigator.onLine, // How to get the value on the client
    () => true // How to get the value on the server
  );
}

export default function ChatIndicator() {
  const isOnline = useOnlineStatus();

  return (
    <div>
      ONLINE {isOnline ? '✅' : '❌'}
    </div>
  )
}
