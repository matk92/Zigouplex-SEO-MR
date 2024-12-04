import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Star, Brain, Zap, Leaf, ShieldCheck } from 'lucide-react'
import ProductSchema from '@/components/ProductSchema'
import { ProductComments } from '../components/ProductComments'

export default function ProductFocus() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>Zigouplex Focus - Améliorez votre concentration naturellement</title>
        <meta name="description" content="Découvrez Zigouplex Focus, notre complément alimentaire naturel conçu pour améliorer votre concentration et votre clarté mentale." />
      </Helmet>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <img 
            src="/img/zigouplex-focus.webp" 
            alt="Zigouplex Focus" 
            className="w-full h-auto rounded-lg shadow-lg"
            width={600}
            height={600}
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4">Zigouplex Focus</h1>
          <p className="text-xl mb-4 text-muted-foreground">Améliorez votre concentration naturellement</p>
          
          <div className="flex items-center mb-4">
            <div className="flex mr-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">(4.7/5 basé sur 95 avis)</span>
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
                  <p>Zigouplex Focus est spécialement formulé pour améliorer votre concentration et votre clarté mentale. Notre formule unique combine des ingrédients naturels reconnus pour leurs bienfaits cognitifs, vous aidant à rester productif et concentré tout au long de la journée.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="ingredients">
              <Card>
                <CardContent className="pt-6">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Bacopa Monnieri (améliore la mémoire et les fonctions cognitives)</li>
                    <li>L-Théanine (favorise la relaxation sans somnolence)</li>
                    <li>Ginkgo Biloba (améliore la circulation cérébrale)</li>
                    <li>Phosphatidylsérine (soutient les fonctions cognitives)</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="usage">
              <Card>
                <CardContent className="pt-6">
                  <p>Prenez deux gélules de Zigouplex Focus par jour, de préférence le matin avec un repas. Pour de meilleurs résultats, utilisez régulièrement pendant au moins 4 semaines. Ne pas dépasser la dose journalière recommandée. Consultez un professionnel de santé avant utilisation si vous êtes enceinte, allaitante ou sous traitement médical.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Pourquoi choisir Zigouplex Focus ?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Brain className="h-8 w-8 text-primary" />, title: "Améliore la concentration", description: "Restez focalisé sur vos tâches importantes" },
            { icon: <Zap className="h-8 w-8 text-primary" />, title: "Boost cognitif", description: "Stimule les fonctions cérébrales naturellement" },
            { icon: <Leaf className="h-8 w-8 text-primary" />, title: "100% naturel", description: "Formule à base de plantes et nutriments" },
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

      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Avis de nos clients</h2>
        <ProductComments comments={[
          {
            id: 1,
            author: "Marie D.",
            rating: 5,
            content: "Zigouplex Focus a considérablement amélioré ma concentration au travail. Je peux maintenant rester focalisée sur mes tâches pendant des heures sans effort !",
            date: "10 juin 2023"
          },
          {
            id: 2,
            author: "Paul G.",
            rating: 4,
            content: "En tant qu'étudiant, Zigouplex Focus m'a aidé à mieux me concentrer pendant mes révisions. Je le recommande vivement pour les longues sessions d'étude.",
            date: "28 mai 2023"
          },
          {
            id: 3,
            author: "Laura B.",
            rating: 5,
            content: "J'adore comment Zigouplex Focus m'aide à rester concentrée sans les effets secondaires du café. C'est vraiment un produit game-changer !",
            date: "15 juin 2023"
          }
        ]} />
      </div>

      <ProductSchema
        name="Zigouplex Focus"
        description="Complément alimentaire naturel conçu pour améliorer votre concentration et votre clarté mentale."
        image="https://www.zigouplex.store/img/zigouplex-focus.webp"
        price={34.99}
        currency="EUR"
      />
    </div>
  )
}

