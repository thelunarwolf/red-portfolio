import Head from 'next/head'
import { AboutDetails } from '../../components'

export default function About() {
  return (
    <>
      <Head>
        <title>Viri Ja, UI/UX designer</title>
        <meta name="description" content="I am Virija, UI/UX designer, Illustrator & digital artist." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{height: '100%'}}>
        <AboutDetails />
      </main>
    </>
  )
}
