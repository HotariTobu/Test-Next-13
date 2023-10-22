'use client'

import { useEffect, useRef, useState } from "react";

function VideoPlayer(props: {
  isPlaying: boolean
  src: string
}) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Too frequent calling!
    if (props.isPlaying) {
      console.log('Calling video.play()')
      ref.current?.play()
    }
    else {
      console.log('Calling video.pause()')
      ref.current?.pause()
    }
  })

  return <video ref={ref} src={props.src} loop playsInline />
}

export default function PlayerApp() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [text, setText] = useState('')

  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      ></VideoPlayer>
    </div>
  )
}
