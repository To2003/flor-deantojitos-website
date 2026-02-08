"use client"

import { useState } from "react"
import { MessageCircle, Cake, AlertCircle } from "lucide-react"
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

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER

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
  const [open, setOpen] = useState(false) 

  // Validar si el formulario está completo
  const isFormValid = size !== "" && sponge !== "" && fillings.length > 0 && coverage !== ""

  // Lógica para limitar rellenos a 2
  const handleFillingChange = (item: string) => {
    if (fillings.includes(item)) {
      // Si ya está, lo sacamos
      setFillings(fillings.filter((i) => i !== item))
    } else {
      // Si no está, verificamos que no haya 2 ya seleccionados
      if (fillings.length < 2) {
        setFillings([...fillings, item])
      }
    }
  }

  // Lógica genérica para extras (sin limite)
  const handleExtrasChange = (item: string) => {
    if (extras.includes(item)) {
      setExtras(extras.filter((i) => i !== item))
    } else {
      setExtras([...extras, item])
    }
  }

  const handleSendWhatsapp = () => {
    // Usamos encodeURIComponent para asegurar que los emojis viajen bien
    const text = `Hola Flor! 🌸 Quiero pedir presupuesto por una torta personalizada:

🎂 *Tamaño:* ${size}
🍰 *Bizcochuelo:* ${sponge}
🍫 *Rellenos:* ${fillings.join(", ")}
✨ *Cubierta:* ${coverage}
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
      
      <DialogContent className="sm:max-w-[500px] md:max-w-[700px] bg-white w-[95vw] max-h-[85vh] flex flex-col p-0 gap-0 overflow-hidden rounded-2xl">
        
        <DialogHeader className="p-6 pb-4 border-b bg-secondary/10">
          <DialogTitle className="text-2xl font-black text-primary font-serif flex items-center gap-2">
            <span className="bg-primary/10 p-2 rounded-full">🍰</span> Diseña tu Torta
          </DialogTitle>
          <DialogDescription className="text-foreground/60">
            Completa los pasos obligatorios (*) para pedir presupuesto.
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto p-6 space-y-8">
            
            {/* 1. TAMAÑO */}
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                    <Label className="text-base font-bold text-primary flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white">1</span>
                        Tamaño *
                    </Label>
                    <RadioGroup value={size} onValueChange={setSize} className="space-y-2">
                        {SIZES.map((s) => (
                        <div 
                            key={s.id} 
                            onClick={() => setSize(s.label)} // Click en todo el div
                            className={`cursor-pointer flex items-center space-x-3 border p-3 rounded-xl transition-all ${size === s.label ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'hover:bg-gray-50 border-gray-200'}`}
                        >
                            <RadioGroupItem value={s.label} id={s.id} />
                            <Label htmlFor={s.id} className="cursor-pointer font-medium text-gray-700 w-full">{s.label}</Label>
                        </div>
                        ))}
                    </RadioGroup>
                </div>

                {/* 2. BIZCOCHUELO */}
                <div className="space-y-3">
                    <Label className="text-base font-bold text-primary flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white">2</span>
                        Bizcochuelo *
                    </Label>
                    <RadioGroup value={sponge} onValueChange={setSponge} className="space-y-2">
                        {SPONGES.map((s) => (
                        <div 
                            key={s} 
                            onClick={() => setSponge(s)} // Click en todo el div
                            className={`cursor-pointer flex items-center space-x-3 border p-3 rounded-xl transition-all ${sponge === s ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'hover:bg-gray-50 border-gray-200'}`}
                        >
                            <RadioGroupItem value={s} id={s} />
                            <Label htmlFor={s} className="cursor-pointer font-medium text-gray-700 w-full">{s}</Label>
                        </div>
                        ))}
                    </RadioGroup>
                </div>
            </div>

            {/* 3. RELLENOS */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-base font-bold text-primary flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white">3</span>
                    Rellenos (Máx 2) *
                </Label>
                <span className="text-xs font-medium text-muted-foreground bg-secondary/20 px-2 py-1 rounded-full">
                    {fillings.length}/2 seleccionados
                </span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FILLINGS.map((item) => {
                  const isSelected = fillings.includes(item);
                  const isDisabled = !isSelected && fillings.length >= 2; // Deshabilitar si ya hay 2 y este no es uno de ellos

                  return (
                  <div 
                    key={item} 
                    onClick={() => !isDisabled && handleFillingChange(item)} // Solo click si no esta deshabilitado
                    className={`cursor-pointer flex items-center space-x-3 border p-3 rounded-xl transition-all 
                        ${isSelected ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'hover:bg-gray-50 border-gray-200'}
                        ${isDisabled ? 'opacity-50 cursor-not-allowed bg-gray-50' : ''}
                    `}
                  >
                    <Checkbox 
                      id={item} 
                      checked={isSelected}
                      disabled={isDisabled}
                      onCheckedChange={() => handleFillingChange(item)}
                      className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    />
                    <Label htmlFor={item} className={`font-medium text-gray-700 w-full ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}>{item}</Label>
                  </div>
                )})}
              </div>
            </div>

            {/* 4. COBERTURA Y EXTRAS */}
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                    <Label className="text-base font-bold text-primary flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white">4</span>
                        Cobertura *
                    </Label>
                    <RadioGroup value={coverage} onValueChange={setCoverage} className="space-y-2">
                        {COVERAGES.map((c) => (
                        <div 
                            key={c} 
                            onClick={() => setCoverage(c)}
                            className={`cursor-pointer flex items-center space-x-3 border p-3 rounded-xl transition-all ${coverage === c ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'hover:bg-gray-50 border-gray-200'}`}
                        >
                            <RadioGroupItem value={c} id={c} />
                            <Label htmlFor={c} className="cursor-pointer font-medium text-gray-700 w-full">{c}</Label>
                        </div>
                        ))}
                    </RadioGroup>
                </div>

                <div className="space-y-3">
                    <Label className="text-base font-bold text-primary flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white">5</span>
                        Extras (Opcional)
                    </Label>
                    <div className="space-y-2">
                        {EXTRAS.map((item) => {
                           const isSelected = extras.includes(item);
                           return (
                            <div 
                                key={item} 
                                onClick={() => handleExtrasChange(item)}
                                className={`cursor-pointer flex items-center space-x-3 border p-2 rounded-lg transition-all ${isSelected ? 'border-primary bg-primary/5' : 'hover:bg-gray-50 border-transparent'}`}
                            >
                                <Checkbox 
                                id={item} 
                                checked={isSelected}
                                onCheckedChange={() => handleExtrasChange(item)}
                                className="data-[state=checked]:bg-primary"
                                />
                                <Label htmlFor={item} className="cursor-pointer text-gray-700 w-full">{item}</Label>
                            </div>
                        )})}
                    </div>
                </div>
            </div>

            {/* NOTAS */}
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
        
        {/* Footer Fijo con validación */}
        <div className="p-6 border-t bg-gray-50 mt-auto">
          <Button 
            onClick={handleSendWhatsapp} 
            disabled={!isFormValid} // Se deshabilita si no está válido
            className={`w-full font-bold text-lg h-14 rounded-xl shadow-md transition-all
                ${isFormValid 
                    ? 'bg-[#25D366] hover:bg-[#128C7E] text-white hover:scale-[1.01]' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }
            `}
          >
            {isFormValid ? (
                <>
                 <MessageCircle className="mr-2 h-6 w-6" />
                 Pedir Presupuesto por WhatsApp
                </>
            ) : (
                <>
                 <AlertCircle className="mr-2 h-5 w-5" />
                 Completa los pasos para continuar
                </>
            )}
          </Button>
        </div>

      </DialogContent>
    </Dialog>
  )
}