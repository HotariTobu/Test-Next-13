import Link from "next/link"
import Image from "next/image"

export default function FirstPost() {
  return (
    <>
      {/* Navigate Between Pages */}
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>

      {/* Assets, Metadata, and CSS */}
      <div style={{display: 'block'}}>
        {/* Unoptimized image */}
        <img src="/images/profile.jpg" alt="Your Name"></img>

        {/* Optimized image */}
        <Image src="/images/profile.jpg" height={144} width={144} alt="Your Name" />
      </div>
    </>
  )
}
