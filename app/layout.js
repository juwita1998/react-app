'use client'

import { Klient } from '@/client/client'
import React from 'react'
import { Toaster } from 'react-hot-toast'
import './globals.css'

import { Layouts } from '@/components'










 function RootLayout({ children }) {
  return (
   
  <html lang="en">
    <head>
        <title>Title</title>
        <meta name='description' content='Description' />
      </head>
      <body>
      
      <Klient>
     <Layouts>
      <Toaster/>
      {  children}
     
      </Layouts>
      </Klient>
     
      </body>
      </html>
    
    
      

     
      
   
  )
}


export default RootLayout
