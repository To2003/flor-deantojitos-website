"use client"

import { useState } from "react"
import Image from "next/image"
import { MessageCircle, Cookie, AlertCircle, Calendar, Image as ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5491100000000"

const FLAVORS = [
  "Vainilla (Clásica)",
  "Chocolate",
  "Limón",
]

// 📸 FOTOS DE EJEMPLO PARA EL CARRUSEL
// Asegúrate de poner estas fotos en tu carpeta public/images/
const COOKIE_EXAMPLES = [
  "/images/cookie-1.jpeg",
  "/images/cookie-2.jpeg",
  "/images/cookie-3.jpeg",
  "/images/cookie-4.jpeg",
]

export function CustomCookieForm() {
  const [quantity, setQuantity] = useState<number | "">(6)
  const [flavor, setFlavor] = useState("Vainilla (Clásica)")
  const [theme, setTheme] = useState("")
  const [date, setDate] = useState("")
  const [open, setOpen] = useState(false) 

  // Lógica para calcular la fecha mínima (Hoy + 7 días)
  const minDateObj = new Date()
  minDateObj.setDate(minDateObj.getDate() + 7)
  const minDateString = minDateObj.toISOString().split("T")[0]

  const isFormValid = quantity !== "" && Number(quantity) >= 6 && flavor !== "" && theme !== "" && date !== ""

  const handleSendWhatsapp = () => {
    const formattedDate = date.split("-").reverse().join("/")

    const text = `Hola Flor! 🍪 Quiero pedir presupuesto por Cookies Decoradas en Glasé:

📅 *Fecha del evento:* ${formattedDate}
🔢 *Cantidad:* ${quantity} unidades
🍋 *Sabor de la masa:* ${flavor}

🎨 *Temática / Diseño:* ${theme}

*(A continuación te envío las fotos de referencia que tengo)*

¿Me podrás pasar precio? Gracias! ✨`

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#FF9B9B] hover:bg-[#FF8282] text-white font-bold rounded-full px-8 py-6 shadow-lg transform transition hover:scale-105">
          <Cookie className="mr-2 h-5 w-5" />
          Cookies Personalizadas
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[500px] md:max-w-[600px] bg-white w-[95vw] max-h-[85vh] flex flex-col p-0 gap-0 overflow-hidden rounded-2xl">
        <DialogHeader className="p-6 pb-4 border-b bg-secondary/10">
          <DialogTitle className="text-2xl font-black text-primary font-serif flex items-center gap-2">
            <span className="bg-primary/10 p-2 rounded-full text-xl">🍪</span> Cookies de Autor
          </DialogTitle>
          <DialogDescription className="text-foreground/60">
            Diseñamos cookies únicas para tu evento. (Mínimo 6 unidades).
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto p-6 space-y-8">
            
            {/* 1. FECHA */}
            <div className="space-y-3 p-4 bg-secondary/10 rounded-xl border border-secondary/20">
              <Label className="text-base font-bold text-primary flex items-center gap-2">
                 <Calendar className="h-5 w-5" />
                 ¿Para cuándo las necesitas? *
              </Label>
              <Input 
                type="date" 
                value={date}
                min={minDateString}
                onChange={(e) => setDate(e.target.value)}
                className="bg-white border-primary/20 text-lg p-4 h-12 cursor-pointer"
              />
              <p className="text-xs text-muted-foreground font-medium">Las cookies requieren al menos 1 semana (7 días) de anticipación.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* 2. CANTIDAD */}
                <div className="space-y-3">
                    <Label className="text-base font-bold text-primary flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white">1</span>
                        Cantidad *
                    </Label>
                    <Input 
                        type="number" 
                        min="6"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value === "" ? "" : Number(e.target.value))}
                        className="bg-white border-primary/20 text-lg p-4 h-12"
                    />
                    {quantity !== "" && Number(quantity) < 6 && (
                        <p className="text-xs text-red-500 font-bold">El mínimo son 6 unidades.</p>
                    )}
                </div>

                {/* 3. SABOR */}
                <div className="space-y-3">
                    <Label className="text-base font-bold text-primary flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white">2</span>
                        Sabor de la masa *
                    </Label>
                    <RadioGroup value={flavor} onValueChange={setFlavor} className="space-y-2">
                        {FLAVORS.map((f) => (
                        <div key={f} className={`relative flex items-center border p-3 rounded-xl transition-all ${flavor === f ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'hover:bg-gray-50 border-gray-200'}`}>
                            <RadioGroupItem value={f} id={f} className="mr-3" />
                            <Label htmlFor={f} className="cursor-pointer font-medium text-gray-700 w-full h-full flex items-center absolute inset-0 pl-10 z-10">{f}</Label>
                        </div>
                        ))}
                    </RadioGroup>
                </div>
            </div>

            {/* 4. CARRUSEL DE INSPIRACIÓN (NUEVO) */}
            <div className="space-y-3">
              <Label className="text-base font-bold text-primary flex items-center gap-2">
                 <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white">3</span>
                 Inspirate con nuestro trabajo
              </Label>
              {/* Contenedor del scroll horizontal */}
              <div className="flex gap-4 overflow-x-auto pb-4 pt-2 snap-x scrollbar-hide">
                {COOKIE_EXAMPLES.map((src, idx) => (
                  <div key={idx} className="relative h-32 w-32 shrink-0 snap-center overflow-hidden rounded-xl border border-primary/20 shadow-sm transition-transform hover:scale-105">
                    <Image 
                      src={src} 
                      alt={`Ejemplo cookie ${idx + 1}`} 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* 5. DISEÑO (TEXTO) */}
            <div className="space-y-3">
              <Label htmlFor="theme" className="text-base font-bold text-primary flex items-center gap-2">
                 <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white">4</span>
                 Contanos tu idea *
              </Label>
              <Textarea 
                id="theme" 
                className="resize-none border-2 focus-visible:ring-primary min-h-[100px]" 
                placeholder="Ej: Cumpleaños infantil temática Safari. Quiero 3 con forma de león, 3 de jirafa..." 
                value={theme} 
                onChange={(e) => setTheme(e.target.value)} 
              />
            </div>

            {/* AVISO FOTOS */}
            <div className="flex items-start gap-3 p-4 bg-blue-50 text-blue-800 rounded-xl border border-blue-100">
                <ImageIcon className="h-5 w-5 shrink-0 mt-0.5" />
                <p className="text-sm font-medium">
                    ¿Tenés fotos de referencia? Podrás enviárnoslas por WhatsApp justo después de confirmar este formulario.
                </p>
            </div>
        </div>
        
        {/* Footer Fijo */}
        <div className="p-6 border-t bg-gray-50 mt-auto">
          <Button onClick={handleSendWhatsapp} disabled={!isFormValid} className={`w-full font-bold text-lg h-14 rounded-xl shadow-md transition-all ${isFormValid ? 'bg-[#25D366] hover:bg-[#128C7E] text-white hover:scale-[1.01]' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}>
            {isFormValid ? (
                <> <MessageCircle className="mr-2 h-6 w-6" /> Pedir Presupuesto </>
            ) : (
                <> <AlertCircle className="mr-2 h-5 w-5" /> Completa los campos para seguir </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}