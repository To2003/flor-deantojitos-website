import { CartProvider } from "@/lib/cart-context"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FeaturesBanner } from "@/components/features-banner"
import { ProductCatalog } from "@/components/product-catalog"
import { InstagramShare } from "@/components/instagram-share"
import { PickupPoints } from "@/components/pickup-points"
import { SiteFooter } from "@/components/site-footer"
import { CartSidebar } from "@/components/cart-sidebar"
import { client, urlFor } from "@/lib/sanity" 


async function getSanityProducts() {
  const query = `*[_type == "product"] | order(_createdAt desc) {
    _id,
    name,
    price,
    description,
    // La flecha -> significa "sigue el enlace y trae el dato 'name'"
    "category": category->name, 
    image,
    badge
  }`

  return await client.fetch(query, {}, { next: { revalidate: 10 } })
}


export default async function Page() {
  const rawProducts = await getSanityProducts()

  const products = rawProducts.map((p: any) => ({
    id: p._id, // Mapeamos _id a id
    name: p.name,
    price: p.price,
    description: p.description,
    category: p.category,
    image: p.image ? urlFor(p.image).width(500).url() : '/placeholder.svg',
    badge: null 
  }))

  return (
    <CartProvider>
      <Navbar />
      <main>
        <Hero />
        <FeaturesBanner />
        <ProductCatalog products={products} />
        <InstagramShare />
        <PickupPoints />
      </main>
      <SiteFooter />
      <CartSidebar />
    </CartProvider>
  )
}