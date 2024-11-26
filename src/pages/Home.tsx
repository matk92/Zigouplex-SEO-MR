import { Helmet } from 'react-helmet-async'
import { Button } from "@/components/ui/button"
import LocalBusinessSchema from '@/components/LocalBusinessSchema'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Zigouplex - Complément alimentaire naturel et énergisant</title>
        <meta name="description" content="Découvrez Zigouplex, le complément alimentaire sous forme de boisson qui booste votre énergie naturellement. Ingrédients 100% naturels et efficacité prouvée." />
      </Helmet>
      <h1 className="text-4xl font-bold mb-6">Bienvenue chez Zigouplex</h1>
      <p className="text-xl mb-4">Découvrez notre complément alimentaire révolutionnaire sous forme de boisson énergisante.</p>
      <Button asChild>
        <a href="/products">Découvrir nos produits</a>
      </Button>
      <section className="mt-12">
        <h2 className="text-3xl font-semibold mb-4">
Pourquoi choisir Zigouplex ?</h2>
        <ul className="list-disc pl-6">
          <li>Ingrédients 100% naturels</li>
          <li>Boost d'énergie sans effets secondaires</li>
          <li>Amélioration de la concentration</li>
          <li>Soutien du système immunitaire</li>
        </ul>
      </section>
      <LocalBusinessSchema
        name="Zigouplex"
        description="Zigouplex produit des compléments alimentaires naturels sous forme de boissons énergisantes."
        address="123 Rue de l'Innovation, 75001 Paris, France"
        telephone="+33 1 23 45 67 89"
        url="https://www.zigouplex.com"
      />
    </div>
  )
}

