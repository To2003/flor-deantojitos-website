"use client"

import { ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Tortas", href: "#productos" }, // Cambié "Productos" por "Tortas"
  { label: "Nosotros", href: "#compartir" },
  { label: "Retiro", href: "#retiro" },
  { label: "Contacto", href: "#contacto" },
]

export function Navbar() {
  const { totalItems, setIsOpen } = useCart()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Marca con fuente Accent (Nunito) */}
        <a href="#inicio" className="font-serif text-2xl font-black tracking-tight text-primary hover:text-primary/80 transition-colors">
          Flor de Antojitos 🌸
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-bold text-foreground/70 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="relative flex items-center justify-center rounded-full bg-primary p-2.5 text-white transition-transform hover:scale-110 shadow-md hover:shadow-lg"
            aria-label="Abrir carrito"
          >
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-accent-foreground ring-2 ring-background">
                {totalItems}
              </span>
            )}
          </button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary hover:bg-secondary/50"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden shadow-lg">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-base font-bold text-foreground/80 hover:text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}