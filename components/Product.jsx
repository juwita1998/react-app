import React from 'react'
import Link from 'next/link'
import { urlFor } from '@/ekomerse/schemas/client'

function Products({product:{image,name,slug,price}}) {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
         <div className='product-card'>
           <img src={urlFor(image && image[0]).toString()}
             width={200}
             height={200}
             className='product-image'
           />
           <p className='product-name'>{name}</p>
           <p className='product-name'>${price}</p>
         </div>
      </Link>
    </div>
  )
}

export default Products