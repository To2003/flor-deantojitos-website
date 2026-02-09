"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { CustomCakeForm } from "./custom-cake-form"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center bg-background overflow-hidden pt-20 md:pt-0">
      {/* Fondo decorativo (burbujas/manchas) */}
      <div className="absolute top-20 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-accent/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:items-center">
        
        {/* Columna Izquierda: Texto */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-bold text-primary mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            ¡Agenda abierta para pedidos!
          </div>

          <h1 className="font-serif text-5xl font-black leading-[1.1] text-foreground md:text-7xl">
            Decilo con una <span className="text-primary underline decoration-wavy decoration-4 underline-offset-4">torta.</span>
          </h1>

          <p className="mt-6 text-lg font-medium text-foreground/70 md:text-xl leading-relaxed">
            Lunchbox cakes, diseños aesthetic y mesas dulces que son puro amor. 
            Personalizamos cada detalle para vos. 💖
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            
            {/* Botón 1: El Formulario (La Estrella ⭐) */}
            {/* Este componente ya trae su propio botón con estilo "Primary" */}
            <CustomCakeForm />

            {/* Botón 2: Ver Menú (Secundario / Outline) */}
            <a
              href="#productos"
              className="flex items-center gap-2 rounded-full border-2 border-primary/20 bg-transparent px-8 py-4 text-base font-bold text-primary transition-colors hover:bg-primary/5"
            >
              Ver el Menú <ArrowRight className="h-5 w-5" />
            </a>

          </div>
        </div>

        {/* Columna Derecha: Collage de Fotos (Estilo Instagram) */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-full">
            {/* Foto Principal (Grande) */}
            <div className="relative aspect-square w-full rotate-3 overflow-hidden rounded-[2rem] border-4 border-white shadow-2xl transition-transform hover:rotate-0">
              <Image
                src="/images/torta-personalizada-5.jpg" // Asegurate de tener esta foto
                alt="Lunchbox cake"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Foto Flotante (Pequeña) */}
            <div className="absolute -bottom-6 -left-6 hidden md:block aspect-square w-40 -rotate-6 overflow-hidden rounded-[1.5rem] border-4 border-white shadow-xl animate-bounce duration-[3000ms]">
              <Image
                 src="/images/torta-personalizada-4.jpg" // Asegurate de tener esta foto
                 alt="Cupcakes"
                 fill
                 className="object-cover"
              />
            </div>
            
            {/* Sticker Decorativo */}
            <div className="absolute -top-4 -right-4 flex h-24 w-24 items-center justify-center rounded-full bg-yellow-300 font-black text-yellow-900 shadow-lg rotate-12">
              <p className="text-center text-xs leading-tight">
                100%<br/>CASERO
              </p>
            </div>
        </div>
      </div>
    </section>
  )
}