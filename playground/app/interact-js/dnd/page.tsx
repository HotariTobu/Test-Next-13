'use client'

import React from 'react'
import { useInteractJS } from './hooks'

const App: React.FC = () => {
  const interact = useInteractJS()

  return (
    <div className="App">
      <a href="https://qiita.com/KuwaK/items/16f66f845a4ddef999cf" target='_blank'>元の記事</a>
      <button onClick={() => interact.enable()}>有効化</button>
      <button onClick={() => interact.disable()}>無効化</button>
      <div
        ref={interact.ref}
        style={{
          ...interact.style,
          border: '2px solid #0489B1',
          backgroundColor: '#A9D0F5'
        }}
      />
    </div>
  )
}

export default App
