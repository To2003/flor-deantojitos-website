"use client"

import { Camera, Share2, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  { name: "Camila R.", text: "La torta de chocolate es INCREIBLE. Mis invitados quedaron impresionados.", rating: 5 },
  { name: "Lucas M.", text: "Los alfajores de maicena me transportaron a mi infancia. Son perfectos.", rating: 5 },
  { name: "Valentina G.", text: "Pedi cupcakes para el cumple de mi hija y fueron un exito total.", rating: 5 },
]

export function InstagramShare() {
  return (
    <section id="compartir" className="mx-auto max-w-7xl px-6 py-24">
      <div className="overflow-hidden rounded-3xl bg-foreground text-background">
        <div className="grid items-center md:grid-cols-2">
          <div className="p-10 md:p-16">
            <div className="flex items-center gap-2">
              <Camera className="h-5 w-5 text-accent" />
              <span className="text-xs font-medium uppercase tracking-widest text-accent">
                Comparti tu momento
              </span>
            </div>
            <h2 className="mt-4 font-serif text-3xl font-bold md:text-4xl text-balance">
              Subi tu pedido a Instagram y etiquetanos
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-background/70">
              Nos encanta ver como disfrutan nuestras creaciones. Etiquetanos en tu historia
              de Instagram con <span className="font-semibold text-accent">@flor.deantojitos</span> y
              recibí un descuento especial en tu proximo pedido.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/flor.deantojitos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
              >
                <Share2 className="h-4 w-4" />
                Ir a Instagram
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <span className="rounded-full border border-background/20 px-4 py-1.5 text-xs text-background/60">
                #FlorDeAntojitos
              </span>
              <span className="rounded-full border border-background/20 px-4 py-1.5 text-xs text-background/60">
                #DulzuraArtesanal
              </span>
              <span className="rounded-full border border-background/20 px-4 py-1.5 text-xs text-background/60">
                #PasteleriaBA
              </span>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="grid grid-cols-2 gap-3 p-6">
              <div className="space-y-3">
                <div className="overflow-hidden rounded-2xl">
                  <Image src="/images/torta-chocolate.jpg" alt="Torta de chocolate" width={300} height={300} className="aspect-square object-cover" />
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <Image src="/images/alfajores-maicena.jpg" alt="Alfajores" width={300} height={300} className="aspect-square object-cover" />
                </div>
              </div>
              <div className="mt-8 space-y-3">
                <div className="overflow-hidden rounded-2xl">
                  <Image src="/images/cupcakes-vainilla.jpg" alt="Cupcakes" width={300} height={300} className="aspect-square object-cover" />
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <Image src="/images/cheesecake-frutas.jpg" alt="Cheesecake" width={300} height={300} className="aspect-square object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <span className="text-xs font-medium uppercase tracking-widest text-primary">
          Lo que dicen nuestros clientes
        </span>
        <h3 className="mt-2 font-serif text-3xl font-bold text-foreground">
          Opiniones reales
        </h3>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
          >
            <div className="flex gap-1">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={`star-${t.name}-${i}`} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {`"${t.text}"`}
            </p>
            <p className="mt-4 text-sm font-semibold text-foreground">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
