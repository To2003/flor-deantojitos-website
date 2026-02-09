"use client"

import { MapPin, Clock, MessageCircle } from "lucide-react"

// Usamos la variable de entorno para el número (o undefined si no está, para seguridad)
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER

export function PickupPoints() {
  return (
    <section id="retiro" className="bg-card border-y border-border">
      <div className="mx-auto max-w-4xl px-6 py-24">
        
        {/* Encabezado */}
        <div className="text-center mb-12">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            Punto de Encuentro
          </span>
          <h2 className="mt-2 font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            ¿Dónde retirás tu pedido?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground leading-relaxed">
            Trabajamos a puertas cerradas en Zona Norte. 
            La dirección exacta te la enviamos al confirmar tu compra.
          </p>
        </div>

        {/* Tarjeta Única de Retiro */}
        <div className="relative overflow-hidden rounded-3xl border border-border bg-background p-8 shadow-lg md:p-12 text-center">
            
            {/* Decoración de fondo */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-32 w-32 rounded-full bg-primary/10 blur-3xl"></div>
            
            <div className="flex flex-col items-center gap-6 relative z-10">
                
                {/* Ícono Grande */}
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary shadow-sm">
                    <MapPin className="h-10 w-10" />
                </div>
                
                {/* Ubicación General */}
                <div className="space-y-2">
                    <h3 className="font-serif text-3xl font-bold text-foreground">
                        Victoria, San Fernando
                    </h3>
                    <p className="text-lg font-medium text-primary">
                        Zona Norte
                    </p>
                </div>

                {/* Línea divisora */}
                <div className="h-px w-24 bg-border my-2"></div>

                {/* Detalles */}
                <div className="flex flex-col gap-4 text-muted-foreground">
                    <div className="flex items-center justify-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <span className="text-base">Horarios a coordinar con Flor</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                         <span className="text-sm bg-secondary/30 px-3 py-1 rounded-full">
                            🚗 Envíos a coordinar 
                         </span>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  )
}