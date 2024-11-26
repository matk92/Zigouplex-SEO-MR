import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ShoppingCart } from 'lucide-react'

export interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

export function Cart() {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setItems(JSON.parse(savedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items))
  }, [items])

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const removeFromCart = (id: number) => {
    setItems(items.filter(item => item.id !== id))
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Panier
          {items.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {items.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Votre panier</SheetTitle>
          <SheetDescription>
            {items.length === 0 ? "Votre panier est vide" : `${items.length} article(s) dans votre panier`}
          </SheetDescription>
        </SheetHeader>
        {items.length > 0 && (
          <div className="mt-8 space-y-4">
            {items.map(item => (
              <div key={item.id} className="flex justify-between items-center">
                <span>{item.name} (x{item.quantity})</span>
                <span>{(item.price * item.quantity).toFixed(2)} €</span>
                <Button variant="destructive" size="sm" onClick={() => removeFromCart(item.id)}>
                  Supprimer
                </Button>
              </div>
            ))}
            <div className="pt-4 border-t">
              <strong>Total: {getTotalPrice().toFixed(2)} €</strong>
            </div>
            <Button className="w-full">Commander</Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}

