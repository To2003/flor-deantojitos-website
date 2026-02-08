export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  badge?: string
}

export const products: Product[] = [
  {
    id: "torta-chocolate",
    name: "Torta de Chocolate",
    description: "Torta de chocolate con ganache y cobertura de cacao. Ideal para celebraciones.",
    price: 8500,
    image: "/images/torta-chocolate.jpg",
    category: "Tortas",
    badge: "Popular",
  },
  {
    id: "torta-red-velvet",
    name: "Torta Red Velvet",
    description: "Clasica red velvet con frosting de queso crema y capas esponjosas.",
    price: 9200,
    image: "/images/torta-red-velvet.jpg",
    category: "Tortas",
    badge: "Nuevo",
  },
  {
    id: "cupcakes-vainilla",
    name: "Cupcakes de Vainilla x6",
    description: "Media docena de cupcakes de vainilla con buttercream artesanal.",
    price: 4800,
    image: "/images/cupcakes-vainilla.jpg",
    category: "Cupcakes",
  },
  {
    id: "cookies-chips",
    name: "Cookies con Chips x12",
    description: "Una docena de cookies crujientes con chips de chocolate belga.",
    price: 3600,
    image: "/images/cookies-chips.jpg",
    category: "Galletas",
    badge: "Best Seller",
  },
  {
    id: "cheesecake-frutas",
    name: "Cheesecake de Frutas",
    description: "Cheesecake estilo New York con topping de frutos rojos frescos.",
    price: 7800,
    image: "/images/cheesecake-frutas.jpg",
    category: "Tortas",
  },
  {
    id: "alfajores-maicena",
    name: "Alfajores de Maicena x12",
    description: "Docena de alfajores de maicena rellenos de dulce de leche y coco.",
    price: 4200,
    image: "/images/alfajores-maicena.jpg",
    category: "Galletas",
    badge: "Clasico",
  },
  {
    id: "brownies",
    name: "Brownies x6",
    description: "Media docena de brownies fudgy de chocolate intenso.",
    price: 3200,
    image: "/images/brownies.jpg",
    category: "Galletas",
  },
]

export const categories = ["Todos", "Tortas", "Cupcakes", "Galletas"]
