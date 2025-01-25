import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Star, Zap, Heart, ShieldCheck } from 'lucide-react'
import ProductSchema from '@/components/ProductSchema'
import { ProductComments } from '../components/ProductComments'

export default function ProductHydrate() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>Zigouplex Hydrate - Solution d’hydratation enrichie en électrolytes naturels</title>
        <meta name="description" content="Découvrez Zigouplex Hydrate, notre solution d’hydratation enrichie en électrolytes naturels, idéale pour maintenir vos performances physiques et mentales au top." />
      </Helmet>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <img 
            src="/img/zigouplex-hydrate.webp" 
            alt="Zigouplex Hydrate" 
            className="w-full h-auto rounded-lg shadow-lg"
            width={600}
            height={600}
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4">Zigouplex Hydrate</h1>
          <p className="text-xl mb-4 text-muted-foreground">Une solution d’hydratation enrichie en électrolytes naturels</p>
          
          <div className="flex items-center mb-4">
            <div className="flex mr-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">(4.8/5 basé sur 120 avis)</span>
          </div>

          <p className="text-3xl font-bold mb-6">24,99 €</p>

          <div className="space-y-4 mb-6">
            <Badge variant="outline" className="text-sm py-1 px-3">Électrolytes Naturels</Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">Hydratation Optimale</Badge>
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
                  <p>Zigouplex Hydrate est la solution d’hydratation idéale, enrichie en électrolytes naturels pour vous aider à maintenir des performances optimales tout au long de la journée. Parfait pour les sportifs ou ceux ayant un mode de vie actif, il soutient votre hydratation et votre bien-être général.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="ingredients">
              <Card>
                <CardContent className="pt-6">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Électrolytes naturels (sodium, potassium, calcium)</li>
                    <li>Extrait de noix de coco (source naturelle d’hydratation)</li>
                    <li>Vitamine C (antioxydant pour la protection cellulaire)</li>
                    <li>Magnesium (soutient la fonction musculaire)</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="usage">
              <Card>
                <CardContent className="pt-6">
                  <p>Mixez une dose (15g) de Zigouplex Hydrate dans un grand verre d'eau. Idéal avant, pendant ou après l'exercice physique, ou tout au long de la journée pour un apport en électrolytes.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Pourquoi choisir Zigouplex Hydrate ?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Zap className="h-8 w-8 text-primary" />, title: "Hydratation avancée", description: "Restaurez votre équilibre en électrolytes naturellement" },
            { icon: <Heart className="h-8 w-8 text-primary" />, title: "Soutient les performances", description: "Maintenez votre énergie physique et mentale" },
            { icon: <ShieldCheck className="h-8 w-8 text-primary" />, title: "Ingrédients naturels", description: "Formule pure et efficace, sans additifs chimiques" },
            { icon: <Zap className="h-8 w-8 text-primary" />, title: "Récupération rapide", description: "Accélérez la récupération après l'effort" },
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

      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Avis de nos clients</h2>
        <ProductComments comments={[
          {
            id: 1,
            author: "Sophie L.",
            rating: 5,
            content: "Zigouplex Hydrate m'a permis de rester bien hydratée tout au long de mes entraînements. Mon énergie reste stable sans crampe ni fatigue excessive.",
            date: "15 décembre 2024"
          },
          {
            id: 2,
            author: "Thomas M.",
            rating: 4,
            content: "J'aime beaucoup ce produit, il me permet de maintenir mes performances sportives sans avoir à m'inquiéter de ma déshydratation.",
            date: "3 décembre 2024"
          },
          {
            id: 3,
            author: "Emma R.",
            rating: 5,
            content: "Excellente alternative pour les sportifs ! L'hydratation est rapide et efficace. Très pratique à utiliser après mes sessions de sport.",
            date: "22 décembre 2024"
          }
        ]} />
      </div>

      <ProductSchema
        name="Zigouplex Hydrate"
        description="Solution d’hydratation enrichie en électrolytes naturels, idéale pour maintenir vos performances au top."
        image="https://www.zigouplex.store/img/zigouplex-hydrate.webp"
        price={24.99}
        currency="EUR"
      />
    </div>
  )
}
