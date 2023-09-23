import React from 'react'
import Link from 'next/link'
import { urlFor } from '@/ekomerse/schemas/client'
import heroBanner from './HeroBanner'
// import product from '@/ekomerse/schemas/product'

function FooterBanner({footerBanner:{product,buttonText,desc,midText,discount,largeText1,largeText2,saleTime,smallText,image}}) {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
           <div className='left'>
               <p>{discount}</p>
               <h3>{largeText1}</h3>
               <h3>{largeText2}</h3>
               <p>{saleTime}</p>
           </div>
           <div className='right'>
               <p>{smallText}</p>
               <h3>{midText}</h3>
               <p>{desc}</p>
               <Link href={`product/${product}`}>
                <button>{buttonText}</button>
               </Link>
           </div>
           <img src={urlFor(image).toString()} className='footer-banner-image' />
      </div>
    </div>
  )
}

export default FooterBanner