import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CartItem } from '@/components/Cart'
import ProductSchema from '@/components/ProductSchema'
import { Link } from 'react-router-dom'

const products = [
  { id: 1, name: "Zigouplex Energy", description: "Notre boisson énergisante phare", price: 29.99, image: "/img/zigouplex-energy.webp" },
  { id: 2, name: "Zigouplex Focus", description: "Pour une concentration optimale", price: 34.99, image: "/img/zigouplex-focus.webp" },
  { id: 3, name: "Zigouplex Relax", description: "Détente et récupération naturelle", price: 32.99, image: "/img/zigouplex-relax.webp" },
]

export default function Products() {
  const [, setCartItems] = useState<CartItem[]>([])

  const addToCart = (product: typeof products[0]) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id)
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prevItems, { ...product, quantity: 1 }]
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Produits Zigouplex - Compléments alimentaires naturels</title>
        <meta name="description" content="Découvrez notre gamme de compléments alimentaires Zigouplex : Energy, Focus et Relax. Des formules naturelles pour booster votre énergie et votre bien-être." />
      </Helmet>
      <h1 className="text-4xl font-bold mb-6 text-primary">Nos Produits</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <CardHeader className="p-0">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover" 
                loading="lazy"
              />
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
              <p className="text-lg font-bold mt-4 text-primary">{product.price.toFixed(2)} €</p>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button onClick={() => addToCart(product)} className="w-full">Ajouter au panier</Button>
              <Button asChild variant="outline" className="w-full">
                <Link to={`/products/${product.name.toLowerCase().split(' ')[1]}`}>En savoir plus</Link>
              </Button>
            </CardFooter>
            <ProductSchema
              name={product.name}
              description={product.description}
              image={`https://www.zigouplex.store${product.image}`}
              price={product.price}
              currency="EUR"
            />
          </Card>
        ))}
      </div>
    </div>
  )
}