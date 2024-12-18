import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Star, Zap, Brain, Heart, ShieldCheck } from 'lucide-react'
import ProductSchema from '@/components/ProductSchema'
import { ProductComments } from '../components/ProductComments'

export default function ProductEnergy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>Zigouplex Energy - Boostez votre énergie naturellement</title>
        <meta name="description" content="Découvrez Zigouplex Energy, notre complément alimentaire naturel conçu pour booster votre énergie et votre vitalité au quotidien." />
      </Helmet>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <img 
            src="/img/zigouplex-energy.webp" 
            alt="Zigouplex Energy" 
            className="w-full h-auto rounded-lg shadow-lg"
            width={600}
            height={600}
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4">Zigouplex Energy</h1>
          <p className="text-xl mb-4 text-muted-foreground">Boostez votre énergie naturellement</p>
          
          <div className="flex items-center mb-4">
            <div className="flex mr-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">(4.8/5 basé sur 120 avis)</span>
          </div>

          <p className="text-3xl font-bold mb-6">29,99 €</p>

          <div className="space-y-4 mb-6">
            <Badge variant="outline" className="text-sm py-1 px-3">100% Naturel</Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">Sans caféine ajoutée</Badge>
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
                  <p>Zigouplex Energy est notre complément alimentaire phare, conçu pour vous donner un coup de boost naturel tout au long de la journée. Formulé à partir d'ingrédients 100% naturels, il vous aide à maintenir un niveau d'énergie optimal sans les effets secondaires des boissons énergisantes traditionnelles.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="ingredients">
              <Card>
                <CardContent className="pt-6">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Guarana biologique (source naturelle de caféine)</li>
                    <li>Ginseng (adaptogène pour l'énergie et la concentration)</li>
                    <li>Vitamine B12 (soutient le métabolisme énergétique)</li>
                    <li>Coenzyme Q10 (antioxydant pour la production d'énergie cellulaire)</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="usage">
              <Card>
                <CardContent className="pt-6">
                  <p>Prenez une dose (10ml) de Zigouplex Energy diluée dans un verre d'eau ou de jus, de préférence le matin ou en début d'après-midi. Ne pas dépasser la dose journalière recommandée. Consultez un professionnel de santé avant utilisation si vous êtes enceinte, allaitante ou sous traitement médical.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Pourquoi choisir Zigouplex Energy ?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Zap className="h-8 w-8 text-primary" />, title: "Boost d'énergie naturel", description: "Augmentez votre vitalité sans crash énergétique" },
            { icon: <Brain className="h-8 w-8 text-primary" />, title: "Améliore la concentration", description: "Restez focalisé sur vos tâches importantes" },
            { icon: <Heart className="h-8 w-8 text-primary" />, title: "Soutient le bien-être", description: "Formule équilibrée pour votre santé globale" },
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
      author: "Sophie L.",
      rating: 5,
      content: "Zigouplex Energy a complètement transformé mes matinées ! Je me sens tellement plus énergique et productive sans les effets secondaires des boissons énergisantes classiques.",
      date: "15 décembre 2024"
    },
    {
      id: 2,
      author: "Thomas M.",
      rating: 4,
      content: "J'apprécie vraiment le boost naturel que me donne Zigouplex Energy. C'est devenu mon compagnon indispensable pour mes longues journées de travail.",
      date: "3 décembre 2024"
    },
    {
      id: 3,
      author: "Emma R.",
      rating: 5,
      content: "En tant que sportive, je cherchais une alternative saine aux boissons énergisantes traditionnelles. Zigouplex Energy répond parfaitement à mes besoins !",
      date: "22 décembre 2024"
    }
  ]} />
</div>

      <ProductSchema
        name="Zigouplex Energy"
        description="Complément alimentaire naturel conçu pour booster votre énergie et votre vitalité au quotidien."
        image="https://www.zigouplex.store/img/zigouplex-energy.webp"
        price={29.99}
        currency="EUR"
      />
    </div>
  )
}

