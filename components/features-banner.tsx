"use client"

import { Truck, Clock, Award, Heart } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Ingredientes Premium",
    description: "Solo usamos ingredientes de primera calidad",
  },
  {
    icon: Clock,
    title: "Preparado en el Dia",
    description: "Todo se prepara fresco para tu pedido",
  },
  {
    icon: Truck,
    title: "Entregas y Retiros",
    description: "Coordinamos la entrega que mas te convenga",
  },
  {
    icon: Heart,
    title: "Hecho con Amor",
    description: "Cada detalle importa en nuestras creaciones",
  },
]

export function FeaturesBanner() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-12 md:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="flex flex-col items-center text-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <f.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-sm font-semibold text-foreground">{f.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
