"use client"

import Image from "next/image"
import { Plus, Minus } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import type { Product } from "@/lib/products"
import { Badge } from "@/components/ui/badge"

export function ProductCard({ product }: { product: Product }) {
  const { items, addItem, updateQuantity } = useCart()
  const cartItem = items.find((item) => item.product.id === product.id)
  const quantity = cartItem?.quantity ?? 0

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {product.badge && (
          <Badge className="absolute left-3 top-3 bg-primary text-primary-foreground border-none text-xs">
            {product.badge}
          </Badge>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {product.category}
        </span>
        <h3 className="mt-1 font-serif text-lg font-semibold text-foreground">
          {product.name}
        </h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-foreground">
            ${product.price.toLocaleString("es-AR")}
          </span>

          {quantity === 0 ? (
            <button
              type="button"
              onClick={() => addItem(product)}
              className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
            >
              <Plus className="h-4 w-4" />
              Agregar
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => updateQuantity(product.id, quantity - 1)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary"
                aria-label="Quitar uno"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-6 text-center text-sm font-bold text-foreground">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => addItem(product)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
                aria-label="Agregar uno"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
