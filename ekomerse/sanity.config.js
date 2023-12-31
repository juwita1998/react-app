import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'ekomerse',

  projectId: 'xs71viuy',
  dataset: 'agus-ecomerce',

  plugins: [deskTool(),visionTool()],

  schema: {
    types: schemaTypes,
  },
 
})
