import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Star, Zap, Brain, Heart, ShieldCheck } from 'lucide-react'
import ProductSchema from '@/components/ProductSchema'
import { ProductComments } from '../components/ProductComments'

export default function ProductRecovery() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>Zigouplex Recovery - Un complément post-entraînement</title>
        <meta name="description" content="Découvrez Zigouplex Recovery, notre complément alimentaire conçu pour optimiser la récupération musculaire et réduire les courbatures après vos entraînements." />
      </Helmet>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <img 
            src="/img/zigouplex-recovery.webp" 
            alt="Zigouplex Recovery" 
            className="w-full h-auto rounded-lg shadow-lg"
            width={600}
            height={600}
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4">Zigouplex Recovery</h1>
          <p className="text-xl mb-4 text-muted-foreground">Un complément post-entraînement pour optimiser la récupération musculaire et réduire les courbatures</p>
          
          <div className="flex items-center mb-4">
            <div className="flex mr-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">(4.7/5 basé sur 85 avis)</span>
          </div>

          <p className="text-3xl font-bold mb-6">32,99 €</p>

          <div className="space-y-4 mb-6">
            <Badge variant="outline" className="text-sm py-1 px-3">100% Naturel</Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">Sans conservateurs</Badge>
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
                  <p>Zigouplex Recovery est spécialement formulé pour favoriser une récupération musculaire optimale après vos séances d’entraînement. En réduisant les courbatures et en soutenant la régénération musculaire, ce complément vous aide à revenir plus fort pour vos prochaines performances.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="ingredients">
              <Card>
                <CardContent className="pt-6">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Protéines végétales hydrolysées (pour soutenir la réparation musculaire)</li>
                    <li>Curcuma bio (pour ses propriétés anti-inflammatoires)</li>
                    <li>Electrolytes naturels (pour restaurer l’hydratation)</li>
                    <li>Acides aminés essentiels (pour réduire la fatigue musculaire)</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="usage">
              <Card>
                <CardContent className="pt-6">
                  <p>Consommez une dose (15g) de Zigouplex Recovery mélangée à de l’eau ou un smoothie dans les 30 minutes suivant votre entraînement. Respectez la dose recommandée et consultez un professionnel de santé si nécessaire.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Pourquoi choisir Zigouplex Recovery ?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Zap className="h-8 w-8 text-primary" />, title: "Récupération optimale", description: "Accélérez la réparation musculaire après l’effort" },
            { icon: <Brain className="h-8 w-8 text-primary" />, title: "Réduit les courbatures", description: "Retrouvez une sensation de confort rapidement" },
            { icon: <Heart className="h-8 w-8 text-primary" />, title: "Hydratation restaurée", description: "Reconstituez vos électrolytes naturellement" },
            { icon: <ShieldCheck className="h-8 w-8 text-primary" />, title: "Ingrédients de qualité", description: "Formule naturelle testée et approuvée" },
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
            author: "Julie R.",
            rating: 5,
            content: "Depuis que j’utilise Zigouplex Recovery, mes courbatures ont considérablement diminué. Je peux m’entraîner plus régulièrement et avec plus d’efficacité !",
            date: "12 janvier 2025"
          },
          {
            id: 2,
            author: "Pierre D.",
            rating: 4,
            content: "Un complément idéal après mes séances de musculation. Je me sens moins fatigué et mes muscles récupèrent plus vite.",
            date: "15 janvier 2025"
          },
          {
            id: 3,
            author: "Clara M.",
            rating: 5,
            content: "Je recommande Zigouplex Recovery à tous les sportifs. Sa formule naturelle est un vrai plus pour une récupération optimale.",
            date: "20 janvier 2025"
          }
        ]} />
      </div>

      <ProductSchema
        name="Zigouplex Recovery"
        description="Complément alimentaire conçu pour optimiser la récupération musculaire et réduire les courbatures après vos entraînements."
        image="https://www.zigouplex.store/img/zigouplex-recovery.webp"
        price={32.99}
        currency="EUR"
      />
    </div>
  )
}
