// 1. Definimos qué es una "Categoría"
const category = {
  name: 'category',
  title: 'Categorías',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre de la Categoría',
      type: 'string',
    }
  ]
}

// 2. Definimos el "Producto" (actualizado)
const product = {
  name: 'product',
  title: 'Productos',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre del Producto',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'name' }
    },
    {
      name: 'price',
      title: 'Precio',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Foto',
      type: 'image',
      options: { hotspot: true },
    },
    // --- AQUÍ ESTÁ EL CAMBIO ---
    {
      name: 'category',
      title: 'Categoría',
      type: 'reference', // Ya no es 'string', ahora es una referencia
      to: [{ type: 'category' }] // Apunta al documento de arriba
    },
    // ---------------------------
    {
       name: 'badge',
       title: 'Etiqueta (Opcional)',
       type: 'string',
       description: 'Ej: Nuevo, Sin TACC, Oferta'
    }
  ],
}

// Exportamos los dos tipos
export const schemaTypes = [product, category]