import { useQuery } from 'react-query';
import { client } from '@/ekomerse/schemas/client'; // Import your Sanity client here

async function fetchProduct(slug) {
    const query = `*[_type == "product" && slug.current == '${slug.toLowerCase()}'][0]`;
    const product = await client.fetch(query);
  
    if (!product) {
      throw new Error('Product not found');
    }
  
    return product;
  }
  
  export function useProduct(slug) {
    // Use React Query to fetch the product data
    return useQuery(['product', slug], () => fetchProduct(slug));
  }
  





async function fetchProducts() {
    const productsQuery = '*[_type == "product"]';
    const products = await client.fetch(productsQuery);
  
    if (!products) {
      throw new Error('Products not found');
    }
  
    return products;
  }

  export function useProducts() {
    // Use React Query to fetch the list of products
    return useQuery('products', fetchProducts);
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






// import { useQuery } from "react-query";
// export function useUserData() {
//     return useQuery('userData', async () => {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     });
//   }