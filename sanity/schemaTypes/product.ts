import { defineField, defineType } from 'sanity'
import { ShoppingBag } from 'lucide-react'

export const product = defineType({
  name: 'product',
  title: 'Productos',
  type: 'document',
  icon: ShoppingBag as any,
  fields: [
    defineField({
      name: 'available',
      title: '¿Está Disponible?',
      description: 'Desactiva esto para ocultar el producto sin borrarlo.',
      type: 'boolean',
      initialValue: true, 
    }),
    defineField({
      name: 'name',
      title: 'Nombre del Producto',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción Corta',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'price',
      title: 'Precio (ARS)',
      type: 'number',
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'image',
      title: 'Foto del Producto',
      type: 'image',
      options: {
        hotspot: true, // Permite recortar la imagen en el panel
      },
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'reference',
      to: [{ type: 'category' }], // Conecta con el archivo anterior
    }),
  ],
})