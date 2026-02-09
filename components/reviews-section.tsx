import { client } from "@/sanity/lib/client" // O donde tengas tu cliente
import { Star, Quote } from "lucide-react"

// Función para traer datos
async function getReviews() {
  // Traemos las opiniones ordenadas por las más nuevas primero
  return await client.fetch(`*[_type == "review"] | order(_createdAt desc) {
    _id,
    author,
    text,
    rating
  }`)
}

export async function ReviewsSection() {
  const reviews = await getReviews()

  // Si no hay opiniones cargadas, no mostramos nada para no romper el diseño
  if (reviews.length === 0) return null

  return (
    <section className="py-20 bg-[#FDF6F6]"> {/* Fondo rosita muy suave */}
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="font-serif text-3xl font-black text-foreground md:text-5xl mb-12">
          Lo que dicen <span className="text-primary italic">nuestros clientes</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review: any) => (
            <div key={review._id} className="relative flex flex-col items-start rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md text-left border border-primary/10">
              <Quote className="mb-4 h-8 w-8 text-primary/20 fill-primary/20" />
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"
                    }`}
                  />
                ))}
              </div>

              <p className="flex-1 text-foreground/80 italic leading-relaxed">
                "{review.text}"
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-purple-400 flex items-center justify-center text-white font-bold text-sm">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-foreground">{review.author}</p>
                  <p className="text-xs text-primary font-medium">Cliente Verificado</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}