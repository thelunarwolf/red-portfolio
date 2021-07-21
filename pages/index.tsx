import Head from 'next/head'
import { HomeLayout } from '../components'

export default function Home() {
  return (
    <>
      <Head>
        <title>Viri Ja, UI/UX designer</title>
        <meta name="description" content="I am Virija, UI/UX designer, Illustrator & digital artist." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ height: '100%' }}>
        <HomeLayout />
      </main>
    </>
  )
}
