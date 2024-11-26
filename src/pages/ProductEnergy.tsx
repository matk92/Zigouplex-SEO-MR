import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProductEnergy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Zigouplex Energy - Boostez votre énergie naturellement</title>
        <meta name="description" content="Découvrez Zigouplex Energy, notre complément alimentaire naturel conçu pour booster votre énergie et votre vitalité au quotidien." />
      </Helmet>
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Zigouplex Energy</CardTitle>
          <CardDescription>Boostez votre énergie naturellement</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6">
          <div>
            <img 
              src="/img/zigouplex-energy.webp?height=400&width=400" 
              alt="Zigouplex Energy" 
              className="w-full h-auto rounded-lg shadow-lg"
              width={400}
              height={400}
            />
          </div>
          <div className="space-y-4">
            <p className="text-lg">Zigouplex Energy est notre complément alimentaire phare, conçu pour vous donner un coup de boost naturel tout au long de la journée.</p>
            <h3 className="text-xl font-semibold">Ingrédients :</h3>
            <ul className="list-disc list-inside">
              <li>Guarana biologique</li>
              <li>Ginseng</li>
              <li>Vitamine B12</li>
              <li>Coenzyme Q10</li>
            </ul>
            <p className="font-semibold">Prix : 29,99 €</p>
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

