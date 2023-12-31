import Link from 'next/link'
import React from 'react'
import { urlFor } from '@/ekomerse/schemas/client'


function heroBanner({heroBanner}) {
  return (
    <div className='hero-banner-container'>
      <div>
         <p className='beats-solo'>{heroBanner.smallText}</p>
         <h3>{heroBanner.midText}</h3>
         <h1>{heroBanner.largeText1}</h1>
         
         <img src={urlFor(heroBanner.image).toString()}    alt="Banner Image" className='hero-banner-image'></img>
         <div>
          <Link href={`/product/${heroBanner.product}`}>
             <button type='button'>{heroBanner.buttonText}</button>
          </Link>
            <div className='desc'>
             <h5>Description</h5>
             <p>{heroBanner.desc}</p>
            </div>
         </div>
      </div>
    </div>
  )
}

export default heroBanner