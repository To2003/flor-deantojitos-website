"use client"

import { Mail, Linkedin, Instagram, Github, Heart, Code2, Cookie, MessageCircle } from "lucide-react"

// Usamos el mismo número que en el resto de la web
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER 

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-foreground text-white border-t-8 border-primary">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          
          {/* Columna 1: Marca */}
          <div className="md:col-span-1 space-y-4">
            <h3 className="font-serif text-3xl font-black tracking-tight flex items-center gap-2">
              <Cookie className="h-8 w-8 text-primary" />
              Flor de<br/>Antojitos
            </h3>
            <p className="text-sm leading-relaxed text-white/80">
              Pastelería creativa para gente feliz. 
              Hacemos realidad esa torta que viste en Pinterest. 
              📍 Buenos Aires, Zona Norte.
            </p>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">Secciones</h4>
            <ul className="flex flex-col gap-3">
              {['Inicio', 'Tortas', 'Retiro', 'Contacto'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/ /g, '')}`} className="text-sm text-white/70 transition-colors hover:text-primary hover:translate-x-1 inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto (CAMBIO AQUÍ: MAIL POR WHATSAPP) */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">Hablemos</h4>
            <div className="flex flex-col gap-4">
              <a href="https://www.instagram.com/flor.deantojitos" target="_blank" className="group flex items-center gap-3 text-sm text-white/70 transition-all hover:text-white">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 group-hover:bg-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </span>
                @flor.deantojitos
              </a>
              
              {/* Enlace de WhatsApp Nuevo */}
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola!%20Tengo%20una%20consulta...`} 
                target="_blank" 
                className="group flex items-center gap-3 text-sm text-white/70 transition-all hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 group-hover:bg-[#25D366] transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </span>
                Consultas por WhatsApp
              </a>
            </div>
          </div>

          {/* Columna 4: Developer */}
          <div className="rounded-2xl bg-white/5 p-6 border border-white/10 backdrop-blur-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 flex items-center gap-2 mb-3">
              <Code2 className="h-4 w-4" />
              Web Design by
            </h4>
            <div className="space-y-3">
              <p className="font-bold text-white text-lg">Tomas Aguilar</p>
              <p className="text-xs text-white/50">Full Stack Developer</p>
              <div className="flex gap-3 pt-2">
                <a href="https://github.com/To2003" target="_blank" className="text-white/40 hover:text-primary transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/tomas-aguilar-dev" target="_blank" className="text-white/40 hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="mailto:tomasaguilar.code@gmail.com" className="text-white/40 hover:text-primary transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Barra Final */}
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-[10px] uppercase tracking-widest text-white/40">
            &copy; {currentYear} Flor de Antojitos. Hecho con mucha harina y manteca.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-white/40">
            Coded with <Heart className="h-3 w-3 fill-primary text-primary animate-pulse" /> by Tomas
          </p>
        </div>
      </div>
    </footer>
  )
}