import Head from "next/head";
import Link from "next/link";

import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'

import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you'll be building a site link this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      {/* Pre-rendering and Data Fetching */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{ title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date}></Date>
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

// Only run on the server-side
export async function getStaticProps() {
  // You can fetch data at build time
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

// export async function getServerSideProps(context) {
//   // You can fetch data at request time
//   return {
//     props: {
//       // props for your component
//     }
//   }
// }
