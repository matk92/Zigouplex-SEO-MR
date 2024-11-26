import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProductFocus() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Zigouplex Focus - Améliorez votre concentration</title>
        <meta name="description" content="Découvrez Zigouplex Focus, notre complément alimentaire naturel conçu pour améliorer votre concentration et votre clarté mentale." />
      </Helmet>
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Zigouplex Focus</CardTitle>
          <CardDescription>Améliorez votre concentration</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6">
          <div>
            <img 
              src="/img/zigouplex-focus.webp?height=400&width=400" 
              alt="Zigouplex Focus" 
              className="w-full h-auto rounded-lg shadow-lg"
              width={400}
              height={400}
            />
          </div>
          <div className="space-y-4">
            <p className="text-lg">Zigouplex Focus est spécialement formulé pour améliorer votre concentration et votre clarté mentale, vous aidant à rester productif toute la journée.</p>
            <h3 className="text-xl font-semibold">Ingrédients :</h3>
            <ul className="list-disc list-inside">
              <li>Bacopa Monnieri</li>
              <li>L-Théanine</li>
              <li>Ginkgo Biloba</li>
              <li>Phosphatidylsérine</li>
            </ul>
            <p className="font-semibold">Prix : 34,99 €</p>
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

