"use client"

import { useState } from "react"
import { MessageCircle, Cake } from "lucide-react"
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"

// --- DATOS DEL FORMULARIO ---

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5491100000000"

const SIZES = [
  { id: "16cm", label: "16cm (10/12 porciones)" },
  { id: "18cm", label: "18cm (15/18 porciones)" },
  { id: "20cm", label: "20cm (20/25 porciones)" },
  { id: "22cm", label: "22cm (30 porciones)" },
]

const SPONGES = [
  "Vainilla",
  "Chocolate",
  "Vainilla con chips",
  "Marmolado",
]

const FILLINGS = [
  "Dulce de leche (clásico)",
  "Dulce de leche con merengue",
  "Dulce de leche con frutos secos",
  "Ganache de Choco Negro",
  "Ganache de Choco Blanco",
  "Crema Bariloche",
  "Chocotorta",
  "Crema con Frutas (Estación)",
  "Crema con Cookies",
  "Crema de Café",
]

const COVERAGES = [
  "Buttercream",
  "Pasta Ballina (Fondant)",
  "Ganache",
]

const EXTRAS = [
  "Glitter Comestible",
  "Moños",
  "Figuras / Muñecos",
  "Perlas",
  "Flores Naturales",
]

export function CustomCakeForm() {
  const [size, setSize] = useState("")
  const [sponge, setSponge] = useState("")
  const [fillings, setFillings] = useState<string[]>([])
  const [coverage, setCoverage] = useState("")
  const [extras, setExtras] = useState<string[]>([])
  const [notes, setNotes] = useState("")
  const [open, setOpen] = useState(false) // Para cerrar el modal al enviar

  const handleCheckboxChange = (item: string, currentList: string[], setList: Function) => {
    if (currentList.includes(item)) {
      setList(currentList.filter((i) => i !== item))
    } else {
      setList([...currentList, item])
    }
  }

  const handleSendWhatsapp = () => {
    const text = `Hola Flor! 🌸 Quiero pedir presupuesto por una torta personalizada:

🎂 *Tamaño:* ${size || "A definir"}
🍰 *Bizcochuelo:* ${sponge || "A definir"}
🍫 *Rellenos:* ${fillings.length > 0 ? fillings.join(", ") : "Sin especificar"}
✨ *Cubierta:* ${coverage || "A definir"}
🎀 *Extras:* ${extras.length > 0 ? extras.join(", ") : "Ninguno"}

📝 *Notas:* ${notes || "-"}

¿Me podrás pasar precio? Gracias!`

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-8 py-6 shadow-lg animate-pulse hover:animate-none transform transition hover:scale-105">
          <Cake className="mr-2 h-5 w-5" />
          ¡Armá tu Torta Soñada! 🎨
        </Button>
      </DialogTrigger>
      
      {/* CAMBIO CLAVE: md:max-w-[700px] para que sea más ancha y max-h-[85vh] */}
      <DialogContent className="sm:max-w-[500px] md:max-w-[700px] bg-white w-[95vw] max-h-[85vh] flex flex-col p-0 gap-0 overflow-hidden rounded-2xl">
        
        {/* Cabecera Fija */}
        <DialogHeader className="p-6 pb-4 border-b bg-secondary/10">
          <DialogTitle className="text-2xl font-black text-primary font-serif flex items-center gap-2">
            <span className="bg-primary/10 p-2 rounded-full">🍰</span> Diseña tu Torta
          </DialogTitle>
          <DialogDescription className="text-foreground/60">
            Completa los pasos y envianos tu idea por WhatsApp.
          </DialogDescription>
        </DialogHeader>

        {/* Cuerpo con Scroll Nativo (overflow-y-auto) */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
            
            {/* SECCIÓN 1: BASES (2 columnas en PC) */}
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                    <Label className="text-base font-bold text-primary flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white">1</span>
                        Tamaño
                    </Label>
                    <RadioGroup onValueChange={setSize} className="space-y-2">
                        {SIZES.map((s) => (
                        <div key={s.id} className={`flex items-center space-x-3 border p-3 rounded-xl transition-all ${size === s.label ? 'border-primary bg-primary/5' : 'hover:bg-gray-50'}`}>
                            <RadioGroupItem value={s.label} id={s.id} />
                            <Label htmlFor={s.id} className="cursor-pointer font-medium text-gray-700 w-full">{s.label}</Label>
                        </div>
                        ))}
                    </RadioGroup>
                </div>

                <div className="space-y-3">
                    <Label className="text-base font-bold text-primary flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white">2</span>
                        Bizcochuelo
                    </Label>
                    <RadioGroup onValueChange={setSponge} className="space-y-2">
                        {SPONGES.map((s) => (
                        <div key={s} className={`flex items-center space-x-3 border p-3 rounded-xl transition-all ${sponge === s ? 'border-primary bg-primary/5' : 'hover:bg-gray-50'}`}>
                            <RadioGroupItem value={s} id={s} />
                            <Label htmlFor={s} className="cursor-pointer font-medium text-gray-700 w-full">{s}</Label>
                        </div>
                        ))}
                    </RadioGroup>
                </div>
            </div>

            {/* SECCIÓN 2: RELLENOS Y COBERTURA */}
            <div className="space-y-4">
              <Label className="text-base font-bold text-primary flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white">3</span>
                Rellenos (Elegí 1 o 2)
              </Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FILLINGS.map((item) => (
                  <div key={item} className={`flex items-center space-x-3 border p-3 rounded-xl transition-all ${fillings.includes(item) ? 'border-primary bg-primary/5' : 'hover:bg-gray-50'}`}>
                    <Checkbox 
                      id={item} 
                      checked={fillings.includes(item)}
                      onCheckedChange={() => handleCheckboxChange(item, fillings, setFillings)}
                      className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    />
                    <Label htmlFor={item} className="cursor-pointer font-medium text-gray-700 w-full">{item}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                    <Label className="text-base font-bold text-primary flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white">4</span>
                        Cobertura
                    </Label>
                    <RadioGroup onValueChange={setCoverage} className="space-y-2">
                        {COVERAGES.map((c) => (
                        <div key={c} className={`flex items-center space-x-3 border p-3 rounded-xl transition-all ${coverage === c ? 'border-primary bg-primary/5' : 'hover:bg-gray-50'}`}>
                            <RadioGroupItem value={c} id={c} />
                            <Label htmlFor={c} className="cursor-pointer font-medium text-gray-700 w-full">{c}</Label>
                        </div>
                        ))}
                    </RadioGroup>
                </div>

                <div className="space-y-3">
                    <Label className="text-base font-bold text-primary flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white">5</span>
                        Extras
                    </Label>
                    <div className="space-y-2">
                        {EXTRAS.map((item) => (
                        <div key={item} className="flex items-center space-x-3">
                            <Checkbox 
                            id={item} 
                            checked={extras.includes(item)}
                            onCheckedChange={() => handleCheckboxChange(item, extras, setExtras)}
                            className="data-[state=checked]:bg-primary"
                            />
                            <Label htmlFor={item} className="cursor-pointer text-gray-700">{item}</Label>
                        </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* SECCIÓN 3: NOTAS */}
            <div className="space-y-3">
              <Label htmlFor="notes" className="text-base font-bold text-primary flex items-center gap-2">
                 <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white">6</span>
                 Detalles / Temática
              </Label>
              <Textarea 
                id="notes" 
                className="resize-none border-2 focus-visible:ring-primary min-h-[100px]"
                placeholder="Ej: Es para un cumple de 15, temática Harry Potter. Colores dorados..." 
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

        </div>
        
        {/* Footer Fijo */}
        <div className="p-6 border-t bg-gray-50 mt-auto">
          <Button onClick={handleSendWhatsapp} className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-lg h-14 rounded-xl shadow-md transition-transform hover:scale-[1.01]">
            <MessageCircle className="mr-2 h-6 w-6" />
            Pedir Presupuesto por WhatsApp
          </Button>
        </div>

      </DialogContent>
    </Dialog>
  )
}