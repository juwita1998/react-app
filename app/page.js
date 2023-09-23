  "use client"
import { gunakanBanner } from '@/ekomerse/schemas/client';
import { gunakanProduk } from '@/ekomerse/schemas/client';
import React from 'react';
//projects gagal anjing

 import { getProject } from '@/ekomerse/schemas/client';
import { Product, FooterBanner, HeroBanner } from '../components';
import {client} from '../ekomerse/schemas/client'
import { use } from 'react';





export default  function Home(){
      const { data: getBanner, isLoading: areProductsLoading, isError: areProductsError } = gunakanBanner()
      const { data: getProduk, isLoading: isProductLoading, isError: isProductError } =  gunakanProduk()
  // const produk = use(getProject()).props.getProduk
  // const banner = use(getProject()).props.getBanner
  if (isProductLoading || areProductsLoading) {
    return <div>Loading...</div>;
  }

  if (isProductError || areProductsError) {
    return <div>Error fetching data</div>;
  }
           
   
 return( 
    <div>
       
    <HeroBanner  heroBanner={getBanner.length && getBanner[0]}   />
   
    
     
    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>

    <div className="products-container">
              {getProduk?.map((product)=> <Product key={product.id} product={product}/>)}
    </div>
       
    <FooterBanner footerBanner={getBanner && getBanner[0]}  />
  </div>
 )



};
    



 