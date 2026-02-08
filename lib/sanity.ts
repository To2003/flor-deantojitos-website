import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-02-06',
  useCdn: true, // true hace que la web cargue rapidísimo (caché)
})

// Esto nos ayuda a convertir las referencias de imágenes de Sanity en links normales
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}