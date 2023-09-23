 "use client"
 import React, { useState, useEffect } from 'react';

import { urlFor} from '@/ekomerse/schemas/client'
import { AiOutlineMinus} from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import useSWR from 'swr';
import { stripeHandler } from '@/lib/checkout';

// import { generateStaticParams } from './page.server';
// import { Suspense } from 'react';
import getStripe from "@/ekomerse/schemas/getStripe";

import { client } from '@/ekomerse/schemas/client';
import Product from '../../../components/Product'
import { useStateContext } from '@/context/Stateagus';
import { use } from 'react';
// import { generateStaticParams } from '@/app/src/page';
import HomeComponent from '@/app/src/page';



// import { useUserData } from '@/app/useProduct';
import { useProducts } from '@/app/useProduct';
import { useProduct } from '@/app/useProduct';


function ProductDetails({ params }) {
  const [index, setIndex] = useState(0);
 const {decQty,innQty,qty,onAdd,setShowCart} = useStateContext()
  const { slug } = params;
  const { data: product, isLoading: isProductLoading, isError: isProductError } = useProduct(slug);
  
  // Use the useProducts hook to fetch the list of products
  const { data: products, isLoading: areProductsLoading, isError: areProductsError } = useProducts();

  if (isProductLoading || areProductsLoading) {
    return <div>Loading...</div>;
  }

  if (isProductError || areProductsError) {
    return <div>Error fetching data</div>;
  }

  // Now you can access the product and products data
  const { image, name, details, price } = product;
  
    
   
        
   const handleBuyNow = () =>{
          onAdd(product,qty)

          setShowCart(true)
   }
 
  // const [data, setData] = useState(null); // State to store the fetched data

  

      // const {name,email} = res
    
  // const produk = use(generateStaticParams({params})).props.product
  // const produks = use(generateStaticParams({params})).props.products
  
  
    
     
  return (
    <div>
       
      
    <div className="product-detail-container">
      <div>
        <div className="image-container">
          <img src={urlFor(image && image[index]).toString()} className="product-detail-image" />
        </div>
        <div className="small-images-container">
         {image?.map((item, i) => (
       <img
    key={i}
    src={urlFor(item).toString()}
    className={i === index ? 'small-image selected-image' : 'small-image'} // Add your class here
    onMouseEnter={() => setIndex(i)} 
        />
       ))}
        </div>
      </div>

      <div className="product-detail-desc">
        <h1>{name}</h1>
        <div className="reviews">
          <div>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
          <p>
            (20)
          </p>
        </div>
        <h4>Details: </h4>
        <p>{details}</p>
        <p className="price">${price}</p>
        <div className="quantity">
          <h3>Quantity:</h3>
          <p className="quantity-desc">
            <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
            <span className="num">{qty}</span>
            <span className="plus" onClick={innQty}><AiOutlinePlus /></span>
          </p>
        </div>
        <div className="buttons">
          <button type="button" className="add-to-cart" onClick={ () =>  onAdd(product,qty)} >Add to Cart</button>
          <button type="button" className="buy-now" onClick={handleBuyNow} >Buy Now</button>
        </div>
      </div>
    </div>

    <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
           {products.map((item) =>(
              <Product key={item._id} product={item} />
              ))}

          </div>
        </div>
    </div>
  </div>
  );
}


export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}







// export const generateStaticParams = async ({ params }) => {
//   const { slug } = params; 
//   const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
//   const productsQuery = '*[_type == "product"]'
//   const products = await client.fetch(productsQuery)

  
//   const product = await client.fetch(query)
//   // const products = await client.fetch(productsQuery);



//   return {
//     props: {product,products}
//   }
// }








export default ProductDetails;






















