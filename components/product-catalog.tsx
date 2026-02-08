"use client"

import { useState } from "react"
import { ProductCard } from "@/components/product-card"
// Importamos solo el TIPO, ya no los datos falsos
import type { Product } from "@/lib/products"

interface ProductCatalogProps {
  products: Product[]
}

export function ProductCatalog({ products }: ProductCatalogProps) {
  const [active, setActive] = useState("Todos")

  // Generamos las categorías dinámicamente basándonos en los productos que cargaste
  const categories = ["Todos", ...Array.from(new Set(products.map((p) => p.category)))]

  const filtered =
    active === "Todos"
      ? products
      : products.filter((product) => product.category === active)

  return (
    <section id="productos" className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <span className="text-xs font-medium uppercase tracking-widest text-primary">
          Nuestro catálogo
        </span>
        <h2 className="mt-2 font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
          Elegí tu favorito
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground leading-relaxed">
          Todos nuestros productos son elaborados con ingredientes premium y preparados el mismo día de la entrega.
        </p>
      </div>

      {/* Botones de Categoría */}
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
              active === category
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grilla de Productos */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}