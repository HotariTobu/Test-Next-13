export function createConnection() {
  // A real implement would actually connect the server
  return {
    connect() {
      console.log('✅ Connecting...')
    },
    disconnect() {
      console.log('❌ Disconnecting...')
    }
  }
}
