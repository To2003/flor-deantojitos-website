"use client"

import { MapPin, Clock, Phone } from "lucide-react"

const points = [
  {
    name: "Punto Palermo",
    address: "Av. Santa Fe 3200, CABA",
    hours: "Lun a Sab 10:00 - 20:00",
    phone: "+54 11 0000 0001",
  },
  {
    name: "Punto Belgrano",
    address: "Av. Cabildo 1500, CABA",
    hours: "Lun a Vie 9:00 - 19:00",
    phone: "+54 11 0000 0002",
  },
  {
    name: "Punto Recoleta",
    address: "Av. Callao 800, CABA",
    hours: "Mar a Dom 10:00 - 21:00",
    phone: "+54 11 0000 0003",
  },
]

export function PickupPoints() {
  return (
    <section id="retiro" className="bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            Puntos de retiro
          </span>
          <h2 className="mt-2 font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            Donde retirás tu pedido
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground leading-relaxed">
            Coordina el retiro en alguno de nuestros puntos o consultanos por envio a domicilio.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {points.map((point) => (
            <div
              key={point.name}
              className="rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">
                {point.name}
              </h3>
              <div className="mt-4 flex flex-col gap-3">
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{point.address}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{point.hours}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{point.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
