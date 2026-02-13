"use client"

import { useState } from "react" // Importamos useState
import Image from "next/image"
import { Minus, Plus, Trash2, MessageCircle, ShoppingBag, Heart, Calendar } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER

function buildWhatsAppMessage(
  items: { product: { name: string; price: number }; quantity: number }[],
  total: number,
  date: string // Recibimos la fecha aquí
) {
  // Formatear fecha
  const formattedDate = date ? date.split("-").reverse().join("/") : "A coordinar"

  let msg = `Hola Flor! 🌸 Quiero pedirte lo siguiente del catálogo:\n`
  msg += `📅 *Para el día:* ${formattedDate}\n\n`
  
  for (const item of items) {
    msg += `🧁 *${item.product.name}* x${item.quantity}\n   ($${(item.product.price * item.quantity).toLocaleString("es-AR")})\n`
  }
  msg += `\n💰 *Total estimado: $${total.toLocaleString("es-AR")}*`
  msg += "\n\n¿Cómo seguimos para el pago? Gracias! ✨"
  return encodeURIComponent(msg)
}

export function CartSidebar() {
  const { items, updateQuantity, removeItem, clearCart, totalPrice, isOpen, setIsOpen } = useCart()
  
  // Estado para la fecha
  const [date, setDate] = useState("") 

  const handleCheckout = () => {
    if (items.length === 0) return
    if (!date) {
        alert("Por favor selecciona una fecha para el pedido 🙏")
        return
    }
    const msg = buildWhatsAppMessage(items, totalPrice, date)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank")
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="flex flex-col bg-background sm:max-w-md w-full" side="right">
        <SheetHeader className="border-b border-secondary/50 pb-4">
          <SheetTitle className="flex items-center gap-2 font-serif text-2xl font-bold text-primary">
            <Heart className="h-6 w-6 fill-primary" />
            Tu Pedido
          </SheetTitle>
          <SheetDescription className="text-foreground/60 font-medium">
            ¡Qué rico todo lo que elegiste! 😍
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center p-8">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-secondary/30 animate-pulse">
              <ShoppingBag className="h-10 w-10 text-primary/60" />
            </div>
            <h3 className="text-lg font-bold text-foreground">Tu carrito está vacío</h3>
            <p className="text-sm text-foreground/60">
              ¡No te quedes con las ganas! Agrega algo dulce para alegrar el día.
            </p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-6 px-1 scrollbar-hide">
              <div className="flex flex-col gap-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-4 rounded-2xl border border-secondary/50 bg-white p-3 shadow-sm transition-shadow hover:shadow-md">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-secondary/30">
                      <Image src={item.product.image || "/placeholder.svg"} alt={item.product.name} fill className="object-cover" sizes="80px" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between py-1">
                      <div>
                        <h4 className="text-sm font-bold text-foreground leading-tight">{item.product.name}</h4>
                        <p className="mt-1 text-xs font-semibold text-primary">${item.product.price.toLocaleString("es-AR")} c/u</p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2 bg-secondary/20 rounded-full p-1">
                          <button type="button" onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-foreground shadow-sm hover:scale-110 transition-transform"> <Minus className="h-3 w-3" /> </button>
                          <span className="w-6 text-center text-sm font-bold text-foreground">{item.quantity}</span>
                          <button type="button" onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white shadow-sm hover:scale-110 transition-transform"> <Plus className="h-3 w-3" /> </button>
                        </div>
                        <button type="button" onClick={() => removeItem(item.product.id)} className="p-1.5 text-muted-foreground/60 hover:text-destructive hover:bg-destructive/10 rounded-full transition-colors"> <Trash2 className="h-4 w-4" /> </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-secondary/50 pt-4 bg-background space-y-4">
              
              {/* SELECTOR DE FECHA */}
              <div className="space-y-2 px-1">
                <Label className="text-sm font-bold flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    Fecha de entrega/retiro
                </Label>
                <Input 
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="border-primary/20 focus-visible:ring-primary"
                />
              </div>

              <div className="flex items-center justify-between px-2 pt-2">
                <span className="text-base font-medium text-foreground/70">Total estimado</span>
                <span className="text-2xl font-black text-primary">${totalPrice.toLocaleString("es-AR")}</span>
              </div>

              <button
                type="button"
                onClick={handleCheckout}
                disabled={!date} // Se deshabilita si no hay fecha
                className={`group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl px-6 py-4 text-base font-bold text-white shadow-md transition-all 
                    ${!date ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#25D366] hover:scale-[1.02] hover:shadow-lg hover:bg-[#128C7E]'}
                `}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  {!date ? "Seleccioná fecha" : "Pedir por WhatsApp"}
                </span>
              </button>

              <button type="button" onClick={clearCart} className="w-full text-xs font-medium text-foreground/40 hover:text-destructive transition-colors underline decoration-dotted pb-2"> Vaciar carrito </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}