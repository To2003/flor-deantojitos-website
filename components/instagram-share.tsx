"use client"

import { Camera, Share2 } from "lucide-react"
import Image from "next/image"

export function InstagramShare() {
  return (
    <section id="compartir" className="mx-auto max-w-7xl px-6 py-24">
      <div className="overflow-hidden rounded-3xl bg-foreground text-background shadow-2xl">
        <div className="grid items-center md:grid-cols-2">
          
          {/* Columna Izquierda: Texto y Botón */}
          <div className="p-10 md:p-16 relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-accent/20 p-2 rounded-full">
                <Camera className="h-5 w-5 text-accent" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                Compartí tu momento
              </span>
            </div>
            
            <h2 className="font-serif text-3xl font-bold md:text-4xl text-balance leading-tight">
              Subí tu pedido a Instagram y etiquetanos 📸
            </h2>
            
            <p className="mt-4 text-base leading-relaxed text-background/80">
              Nos encanta ver cómo disfrutan nuestras creaciones. Etiquetanos en tu historia
              con <span className="font-bold text-accent">@flor.deantojitos</span> y
              recibí un descuento especial en tu próximo pedido.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://www.instagram.com/flor.deantojitos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-bold text-accent-foreground transition-all hover:scale-105 hover:bg-white hover:text-primary"
              >
                <Share2 className="h-4 w-4" />
                Ir a Instagram
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-2 opacity-60">
              {["#FlorDeAntojitos", "#DulzuraArtesanal", "#PasteleriaBA"].map((tag) => (
                 <span key={tag} className="text-xs border border-white/20 px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
          </div>

          {/* Columna Derecha: Collage de Fotos (Estáticas o las que tengas) */}
          <div className="relative hidden md:block h-full min-h-[400px]">
            {/* Fondo decorativo */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-black/20 to-transparent z-10"></div>
            
            <div className="grid grid-cols-2 gap-4 p-8 transform rotate-6 scale-110 opacity-80 hover:opacity-100 transition-opacity">
              <div className="space-y-4 -mt-12">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <Image src="/images/torta-personalizada-2.jpg" alt="Torta" width={300} height={300} className="aspect-square object-cover" />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <Image src="/images/torta-personalizada-3.jpg" alt="Alfajores" width={300} height={300} className="aspect-square object-cover" />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <Image src="/images/torta-personalizada-1.jpg" alt="Cupcakes" width={300} height={300} className="aspect-square object-cover" />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <Image src="/images/torta-personalizada-6.jpg" alt="Cheesecake" width={300} height={300} className="aspect-square object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}