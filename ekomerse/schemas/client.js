import { createClient, groq } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { useQuery } from 'react-query';

export  const client = createClient({
  projectId: 'xs71viuy',
  dataset: 'agus-ecomerce',
  apiVersion: '2021-10-21',
  useCdn: true,
  token:process.env.NEXT_PUBLIC_SANITY_TOKEN 
 
});

// Create an image URL builder
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

// export async function getProject() {
//   const bannerQuery = '*[_type == "banner"]';
//   const getBanner = await client.fetch(bannerQuery, { cache: "no-store" });

//   const produkQuery = '*[_type == "product"]';
//   const getProduk = await client.fetch(produkQuery, { cache: "no-store" });

//   return {
//     props: { getBanner, getProduk },
//   };
// }


async function ambilBanner(){
  const bannerQuery = '*[_type == "banner"]';
  const getBanner = await client.fetch(bannerQuery, { cache: "no-store" });
  if (!getBanner) {
    throw new Error('Product not found');
  }

  return getBanner;
}

export function gunakanBanner(){
         return useQuery('getBanner',ambilBanner)
}


async function ambilProduk(){
  const produkQuery = '*[_type == "product"]';
  const getProduk = await client.fetch(produkQuery, { cache: "no-store" });
  if (!getProduk) {
    throw new Error('Product not found');
  }

  return getProduk;
}

export function gunakanProduk(){
     return useQuery('getProduk',ambilProduk)
}


