'use client'

import { useRef, useState } from "react";

function VideoPlayer(props: {
  isPlaying: boolean
  src: string
}) {
  const ref = useRef<HTMLVideoElement>(null)

  if (props.isPlaying) {
    ref.current?.play()
  }
  else {
    ref.current?.pause()
  }

  return <video ref={ref} src={props.src} loop playsInline />
}

export default function PlayerApp() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div>
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
