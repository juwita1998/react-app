import { createClient, groq } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

 export const client = createClient({
  projectId: 'xs71viuy',
  dataset: 'agus-ecomerce',
  apiVersion: '2021-10-21',
  useCdn: true,
});

// Create an image URL builder
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);







  
