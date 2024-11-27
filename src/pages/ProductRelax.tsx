import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Star, Moon, Heart, Leaf, ShieldCheck } from 'lucide-react'
import ProductSchema from '@/components/ProductSchema'

export default function ProductRelax() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>Zigouplex Relax - Détente et récupération naturelle</title>
        <meta name="description" content="Découvrez Zigouplex Relax, notre complément alimentaire naturel conçu pour favoriser la détente et améliorer votre récupération." />
      </Helmet>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <img 
            src="/images/zigouplex-relax.jpg" 
            alt="Zigouplex Relax" 
            className="w-full h-auto rounded-lg shadow-lg"
            width={600}
            height={600}
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4">Zigouplex Relax</h1>
          <p className="text-xl mb-4 text-muted-foreground">Détente et récupération naturelle</p>
          
          <div className="flex items-center mb-4">
            <div className="flex mr-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">(4.9/5 basé sur 110 avis)</span>
          </div>

          <p className="text-3xl font-bold mb-6">27,99 €</p>

          <div className="space-y-4 mb-6">
            <Badge variant="outline" className="text-sm py-1 px-3">100% Naturel</Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">Non somnolent</Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">Vegan</Badge>
          </div>

          <Button size="lg" className="w-full mb-4">Ajouter au panier</Button>
          
          <p className="text-sm text-muted-foreground mb-6">
            Livraison gratuite pour toute commande supérieure à 50€. Retours gratuits sous 30 jours.
          </p>

          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="ingredients">Ingrédients</TabsTrigger>
              <TabsTrigger value="usage">Utilisation</TabsTrigger>
            </TabsList>
            <TabsContent value="description">
              <Card>
                <CardContent className="pt-6">
                  <p>Zigouplex Relax est conçu pour vous aider à vous détendre et à améliorer votre récupération. Notre formule unique combine des ingrédients naturels reconnus pour leurs propriétés apaisantes, favorisant un sommeil réparateur et une meilleure gestion du stress au quotidien.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="ingredients">
              <Card>
                <CardContent className="pt-6">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Magnésium (favorise la relaxation musculaire et nerveuse)</li>
                    <li>L-Théanine (procure un effet calmant sans somnolence)</li>
                    <li>Camomille (propriétés apaisantes et relaxantes)</li>
                    <li>Ashwagandha (aide à réduire le stress et l'anxiété)</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="usage">
              <Card>
                <CardContent className="pt-6">
                  <p>Prenez une dose (10ml) de Zigouplex Relax diluée dans un verre d'eau ou de tisane, de préférence en fin de journée ou avant le coucher. Pour une utilisation en journée, vous pouvez prendre une demi-dose pour un effet relaxant sans somnolence. Ne pas dépasser la dose journalière recommandée. Consultez un professionnel de santé avant utilisation si vous êtes enceinte, allaitante ou sous traitement médical.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Pourquoi choisir Zigouplex Relax ?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Moon className="h-8 w-8 text-primary" />, title: "Favorise le sommeil", description: "Améliore la qualité du sommeil naturellement" },
            { icon: <Heart className="h-8 w-8 text-primary" />, title: "Réduit le stress", description: "Aide à gérer le stress et l'anxiété" },
            { icon: <Leaf className="h-8 w-8 text-primary" />, title: "100% naturel", description: "Formule à base de plantes et minéraux" },
            { icon: <ShieldCheck className="h-8 w-8 text-primary" />, title: "Qualité garantie", description: "Ingrédients premium et tests rigoureux" },
          ].map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {feature.icon}
                  <span className="ml-2">{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <ProductSchema
        name="Zigouplex Relax"
        description="Complément alimentaire naturel conçu pour favoriser la détente et améliorer votre récupération."
        image="https://www.zigouplex.store/images/zigouplex-relax.jpg"
        price={27.99}
        currency="EUR"
      />
    </div>
  )
}

