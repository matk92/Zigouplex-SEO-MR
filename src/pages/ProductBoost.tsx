import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Star, Zap, Brain, Heart, ShieldCheck } from 'lucide-react'
import ProductSchema from '@/components/ProductSchema'
import { ProductComments } from '../components/ProductComments'

export default function ProductBoost() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>Zigouplex Boost - Une formule pré-entraînement naturelle</title>
        <meta name="description" content="Découvrez Zigouplex Boost, notre complément alimentaire naturel conçu pour augmenter l’énergie et l’endurance avant vos entraînements." />
      </Helmet>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <img 
            src="/img/zigouplex-boost.webp" 
            alt="Zigouplex Boost" 
            className="w-full h-auto rounded-lg shadow-lg"
            width={600}
            height={600}
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4">Zigouplex Boost</h1>
          <p className="text-xl mb-4 text-muted-foreground">Une formule pré-entraînement naturelle pour augmenter l’énergie et l’endurance</p>
          
          <div className="flex items-center mb-4">
            <div className="flex mr-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">(4.9/5 basé sur 95 avis)</span>
          </div>

          <p className="text-3xl font-bold mb-6">34,99 €</p>

          <div className="space-y-4 mb-6">
            <Badge variant="outline" className="text-sm py-1 px-3">100% Naturel</Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">Sans additifs</Badge>
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
                  <p>Zigouplex Boost est spécialement conçu pour vous accompagner avant vos séances d’entraînement. Cette formule unique, 100% naturelle, vous aide à augmenter votre énergie et votre endurance, afin de repousser vos limites et améliorer vos performances.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="ingredients">
              <Card>
                <CardContent className="pt-6">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Extrait de betterave (pour l’endurance)</li>
                    <li>Thé vert biologique (source naturelle d’énergie)</li>
                    <li>Acides aminés essentiels (pour soutenir la récupération musculaire)</li>
                    <li>Electrolytes naturels (pour l’hydratation)</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="usage">
              <Card>
                <CardContent className="pt-6">
                  <p>Consommez une dose (10ml) de Zigouplex Boost diluée dans de l’eau ou un jus 30 minutes avant votre entraînement. Respectez la dose recommandée. Consultez un professionnel de santé avant utilisation si nécessaire.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Pourquoi choisir Zigouplex Boost ?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Zap className="h-8 w-8 text-primary" />, title: "Boost d'énergie naturel", description: "Augmentez votre vitalité avant chaque séance" },
            { icon: <Brain className="h-8 w-8 text-primary" />, title: "Améliore la concentration", description: "Restez focalisé durant vos entraînements" },
            { icon: <Heart className="h-8 w-8 text-primary" />, title: "Soutient l'endurance", description: "Maximisez vos performances sportives" },
            { icon: <ShieldCheck className="h-8 w-8 text-primary" />, title: "Qualité garantie", description: "Ingrédients premium testés et approuvés" },
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
            author: "Lucas P.",
            rating: 5,
            content: "Zigouplex Boost m’a aidé à améliorer mes performances à la salle de sport. Je ressens une vraie différence !",
            date: "10 janvier 2025"
          },
          {
            id: 2,
            author: "Marie C.",
            rating: 4,
            content: "J’apprécie le côté naturel du produit et son efficacité. C’est devenu un indispensable pour mes entraînements !",
            date: "18 janvier 2025"
          },
          {
            id: 3,
            author: "Nicolas T.",
            rating: 5,
            content: "Excellente formule pour me donner l’énergie nécessaire à mes sessions de running. Je recommande !",
            date: "22 janvier 2025"
          }
        ]} />
      </div>

      <ProductSchema
        name="Zigouplex Boost"
        description="Complément alimentaire naturel conçu pour augmenter l’énergie et l’endurance avant vos entraînements."
        image="https://www.zigouplex.store/img/zigouplex-boost.webp"
        price={34.99}
        currency="EUR"
      />
    </div>
  )
}
