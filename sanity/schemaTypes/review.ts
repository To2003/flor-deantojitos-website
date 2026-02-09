import { defineField, defineType } from 'sanity'
import { MessageSquareQuote } from 'lucide-react'

export const review = defineType({
  name: 'review',
  title: 'Opiniones (Testimonios)',
  type: 'document',
  icon: MessageSquareQuote as any,
  fields: [
    defineField({
      name: 'author',
      title: 'Nombre del Cliente',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Comentario',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Fecha',
      type: 'date',
      options: { dateFormat: 'DD-MM-YYYY' }
    }),
    defineField({
      name: 'rating',
      title: 'Estrellas (1-5)',
      type: 'number',
      initialValue: 5,
      validation: (rule) => rule.required().min(1).max(5),
    }),
  ],
})