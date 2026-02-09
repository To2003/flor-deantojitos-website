"use client"

import { Truck, Clock, Award, CalendarClock } from "lucide-react"

const features = [
  {
    icon: CalendarClock, // ÍCONO NUEVO E IMPORTANTE
    title: "Planificalo con tiempo",
    description: "Tomamos pedidos con 72 a 96hs de anticipación.",
  },
  {
    icon: Award,
    title: "Ingredientes Premium",
    description: "Solo usamos materia prima de primeras marcas.",
  },
  {
    icon: Truck,
    title: "Entregas y Retiros",
    description: "Coordinamos el punto de retiro o envío.",
  },
  {
    icon: Clock,
    title: "Fresco del día",
    description: "Todo se prepara especialmente para tu pedido.",
  },
]

export function FeaturesBanner() {
  return (
    <section className="border-y border-border bg-card/50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="flex flex-col items-center text-center gap-4">
            {/* Círculo más grande (h-16) e ícono más grande (h-8) */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 shadow-sm transition-transform hover:scale-110">
              <f.icon className="h-8 w-8 text-primary" />
            </div>
            
            {/* Texto más grande: text-lg para título */}
            <h3 className="text-lg font-bold text-foreground">{f.title}</h3>
            
            {/* Texto más legible: text-sm para descripción */}
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[250px]">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}