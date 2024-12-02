import { Helmet } from 'react-helmet-async'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import { CheckCircle, Zap, Brain, Heart } from 'lucide-react'
import { TestimonialCarousel } from '../components/TestimonialCarousel'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>Zigouplex - Complément alimentaire naturel et énergisant</title>
        <meta name="description" content="Découvrez Zigouplex, le complément alimentaire sous forme de boisson qui booste votre énergie naturellement. Ingrédients 100% naturels et efficacité prouvée." />
      </Helmet>

      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-primary">Bienvenue chez Zigouplex</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Découvrez notre gamme de compléments alimentaires révolutionnaires sous forme de boissons énergisantes, conçus pour booster votre énergie naturellement et améliorer votre bien-être au quotidien.
        </p>
        <Button asChild size="lg" className="text-lg px-8 py-6">
          <a href="/products">Découvrir nos produits</a>
        </Button>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Pourquoi choisir Zigouplex ?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <CheckCircle className="h-8 w-8 text-primary" />, title: "100% Naturel", description: "Ingrédients soigneusement sélectionnés et certifiés biologiques" },
            { icon: <Zap className="h-8 w-8 text-primary" />, title: "Boost d'énergie", description: "Augmentez votre vitalité sans effets secondaires indésirables" },
            { icon: <Brain className="h-8 w-8 text-primary" />, title: "Concentration améliorée", description: "Restez concentré et productif tout au long de la journée" },
            { icon: <Heart className="h-8 w-8 text-primary" />, title: "Soutien immunitaire", description: "Renforcez vos défenses naturelles pour une meilleure santé" },
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
      </section>

      {/* Products Preview Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Nos produits phares</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Zigouplex Energy", description: "Boost d'énergie instantané", image: "/img/zigouplex-energy.webp" },
            { name: "Zigouplex Focus", description: "Concentration optimale", image: "/img/zigouplex-focus.webp" },
            { name: "Zigouplex Relax", description: "Détente et récupération", image: "/img/zigouplex-relax.webp" },
          ].map((product, index) => (
            <Card key={index}>
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <a href={`/products/${product.name.toLowerCase().split(' ')[1]}`}>En savoir plus</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Ce que disent nos clients</h2>
        <TestimonialCarousel />
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Prêt à booster votre énergie naturellement ?</h2>
        <p className="mb-8">Rejoignez la communauté Zigouplex et transformez votre quotidien.</p>
        <Button asChild size="lg" className="text-lg px-8 py-6">
          <a href="/products">Commencer maintenant</a>
        </Button>
      </section>

      <LocalBusinessSchema
        name="Zigouplex"
        description="Zigouplex produit des compléments alimentaires naturels sous forme de boissons énergisantes."
        address="123 Rue de l'Innovation, 75001 Paris, France"
        telephone="+33 1 23 45 67 89"
        url="https://www.zigouplex.store"
      />
    </div>
  )
}

