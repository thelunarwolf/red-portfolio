import Head from 'next/head'
import { useState } from 'react';
import { Dialog, PortfolioGrid, ProjectDetails } from '../../components';

export default function Portfolio() {
  const [dialogState, setDialogState] = useState({
    isOpen: false
  });
  return (
    <>
      <Head>
        <title>Viri Ja, UI/UX designer</title>
        <meta name="description" content="I am Virija, UI/UX designer, Illustrator & digital artist." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ height: '100%' }}>
        <PortfolioGrid onViewDetails={() => setDialogState({ ...dialogState, isOpen: true })}></PortfolioGrid>
        {/* <p onClick={() => setDialogState({ ...dialogState, isOpen: true })}>Portfolio</p> */}
      </main>
      <Dialog isOpen={dialogState.isOpen} >
        <ProjectDetails onClose={() => setDialogState({ ...dialogState, isOpen: false })} />
      </Dialog>
    </>
  )
}
