import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import Script from 'next/script'

import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      {/* Navigate Between Pages */}
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>

      {/* Assets, Metadata, and CSS */}
      <div style={{ display: 'block' }}>
        {/* Unoptimized image */}
        <img src="/images/profile.jpg" alt="Your Name"></img>

        {/* Optimized image */}
        <Image src="/images/profile.jpg" height={144} width={144} alt="Your Name" />
      </div>

      <Head>
        <title>First Post</title>

        {/* Warning */}
        {/* <script src="https://connect.facebook.net/en_US/sdk.js"></script> */}
      </Head>

      {/* Outside Head component */}
      <Script src="https://connect.facebook.net/en_US/sdk.js" strategy="lazyOnload" onLoad={() => {
        // needed `use client`?
        console.log('script loaded correctly. window.FB has been populated')
        console.log(FB)
      }}></Script>
    </Layout>
  )
}
