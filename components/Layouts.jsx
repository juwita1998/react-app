
import React from 'react'
import { urlFor } from '@/ekomerse/schemas/client'
import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'



function Layouts({children}) {
  return (
    <div className='layout'>
          <Head>
            <title>Agus Putrawan Hardi STORE</title>
          </Head>
          <header>
           <Navbar/>
          </header>
          <main className='main-container'>
            {children}
        
          </main>
          <footer>
           <Footer/>
          </footer>
    </div>
  )
}

export default Layouts