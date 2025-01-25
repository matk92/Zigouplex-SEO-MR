import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Star, Zap, Heart, ShieldCheck } from 'lucide-react'
import ProductSchema from '@/components/ProductSchema'
import { ProductComments } from '../components/ProductComments'

export default function ProductPerform() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>Zigouplex Perform+ - Améliorez votre concentration et résistance mentale</title>
        <meta name="description" content="Découvrez Zigouplex Perform+, un produit innovant conçu pour améliorer la concentration et la résistance mentale lors des efforts intenses." />
      </Helmet>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <img 
            src="/img/zigouplex-perform+.webp" 
            alt="Zigouplex Perform+" 
            className="w-full h-auto rounded-lg shadow-lg"
            width={600}
            height={600}
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4">Zigouplex Perform+</h1>
          <p className="text-xl mb-4 text-muted-foreground">Améliorez votre concentration et résistance mentale lors des efforts intenses</p>
          
          <div className="flex items-center mb-4">
            <div className="flex mr-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">(4.8/5 basé sur 120 avis)</span>
          </div>

          <p className="text-3xl font-bold mb-6">34,99 €</p>

          <div className="space-y-4 mb-6">
            <Badge variant="outline" className="text-sm py-1 px-3">Concentration optimisée</Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">Résistance mentale accrue</Badge>
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
                  <p>Zigouplex Perform+ est un produit innovant conçu pour améliorer votre concentration et votre résistance mentale lors des efforts intenses. Formulé pour les sportifs, étudiants ou professionnels ayant besoin de maintenir une haute performance mentale et physique, il vous aide à rester focalisé et performant dans les situations les plus exigeantes.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="ingredients">
              <Card>
                <CardContent className="pt-6">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Ginseng (augmente la concentration et réduit la fatigue mentale)</li>
                    <li>Rhodiola Rosea (adaptogène pour la résistance mentale et physique)</li>
                    <li>Caféine naturelle (améliore l'attention et la vigilance)</li>
                    <li>L-Théanine (favorise la concentration sans nervosité)</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="usage">
              <Card>
                <CardContent className="pt-6">
                  <p>Consommez une dose de Zigouplex Perform+ (1 capsule) avant vos sessions de travail ou d'entraînement pour améliorer votre concentration et votre résistance mentale. Ne pas dépasser la dose recommandée. Consultez un professionnel de santé avant utilisation si vous êtes enceinte, allaitante ou sous traitement médical.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Pourquoi choisir Zigouplex Perform+ ?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Star className="h-8 w-8 text-primary" />, title: "Concentration maximale", description: "Restez focus et performant même sous pression" },
            { icon: <Heart className="h-8 w-8 text-primary" />, title: "Résistance mentale", description: "Augmentez votre endurance mentale dans les efforts intenses" },
            { icon: <ShieldCheck className="h-8 w-8 text-primary" />, title: "Formule naturelle", description: "Ingrédients puissants et naturels, sans produits chimiques" },
            { icon: <Zap className="h-8 w-8 text-primary" />, title: "Énergie stable", description: "Évitez les coups de fatigue et restez productif" },
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
            content: "Zigouplex Perform+ a fait une grande différence dans ma capacité à me concentrer pendant mes révisions et mes entraînements. Je suis beaucoup plus productive !",
            date: "15 décembre 2024"
          },
          {
            id: 2,
            author: "Thomas M.",
            rating: 4,
            content: "Très bon produit, j'ai remarqué une nette amélioration de ma concentration lors de mes longues sessions de travail. Je le recommande vivement !",
            date: "3 décembre 2024"
          },
          {
            id: 3,
            author: "Emma R.",
            rating: 5,
            content: "Zigouplex Perform+ m'aide à tenir bon lors de mes sessions d'entraînement intenses. Une réelle différence dans ma résistance mentale !",
            date: "22 décembre 2024"
          }
        ]} />
      </div>

      <ProductSchema
        name="Zigouplex Perform+"
        description="Produit innovant conçu pour améliorer la concentration et la résistance mentale lors des efforts intenses."
        image="https://www.zigouplex.store/img/zigouplex-perform.webp"
        price={34.99}
        currency="EUR"
      />
    </div>
  )
}
