import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProductRelax() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Zigouplex Relax - Détente et récupération naturelle</title>
        <meta name="description" content="Découvrez Zigouplex Relax, notre complément alimentaire naturel conçu pour favoriser la détente et améliorer votre récupération." />
      </Helmet>
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Zigouplex Relax</CardTitle>
          <CardDescription>Détente et récupération naturelle</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6">
          <div>
            <img 
              src="/img/zigouplex-relax.webp?height=400&width=400" 
              alt="Zigouplex Relax" 
              className="w-full h-auto rounded-lg shadow-lg"
              width={400}
              height={400}
            />
          </div>
          <div className="space-y-4">
            <p className="text-lg">Zigouplex Relax est conçu pour vous aider à vous détendre et à améliorer votre récupération, favorisant un sommeil réparateur et une meilleure gestion du stress.</p>
            <h3 className="text-xl font-semibold">Ingrédients :</h3>
            <ul className="list-disc list-inside">
              <li>Magnésium</li>
              <li>L-Théanine</li>
              <li>Camomille</li>
              <li>Ashwagandha</li>
            </ul>
            <p className="font-semibold">Prix : 27,99 €</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end space-x-2">
          <Button variant="outline">En savoir plus</Button>
          <Button>Ajouter au panier</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

