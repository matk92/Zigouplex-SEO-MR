import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Users, Leaf, Lightbulb, CheckCircle } from 'lucide-react'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>À propos de Zigouplex - Notre histoire, mission et engagements</title>
        <meta name="description" content="Découvrez l'histoire de Zigouplex, notre mission de fournir des compléments alimentaires naturels et nos engagements envers la qualité, l'environnement et l'innovation." />
        <meta name="keywords" content="Zigouplex, compléments alimentaires naturels, bien-être, nutrition, engagement environnemental, innovation" />
      </Helmet>

      <h1 className="text-4xl font-bold mb-12 text-center text-primary">À propos de Zigouplex</h1>

      <div className="grid gap-12 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <Users className="mr-2" />
              Notre Histoire
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Lightbulb className="mr-2 mt-1 text-primary" />
                <div>
                  <h3 className="font-bold">2018 : L'idée germe</h3>
                  <p>Deux amis nutritionnistes conçoivent l'idée de Zigouplex.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Leaf className="mr-2 mt-1 text-primary" />
                <div>
                  <h3 className="font-bold">2019 : Recherche et développement</h3>
                  <p>Développement des premières formules 100% naturelles.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-1 text-primary" />
                <div>
                  <h3 className="font-bold">2020 : Lancement officiel</h3>
                  <p>Zigouplex lance sa première gamme de produits sur le marché.</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <Leaf className="mr-2" />
              Notre Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Chez Zigouplex, notre mission est d'offrir des produits d'une qualité exceptionnelle, à base d'ingrédients 100 % naturels et rigoureusement validés par la science. Nous croyons fermement que le bien-être durable repose sur des solutions saines, accessibles et respectueuses de l'environnement.
            </p>
            <p>
              Notre objectif est d'être un partenaire de confiance dans votre quête de mieux-être, en vous accompagnant à chaque étape de votre parcours vers une vie plus équilibrée et énergique.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-12">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center">
            <CheckCircle className="mr-2" />
            Nos Engagements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Ingrédients purs et biologiques</AccordionTrigger>
              <AccordionContent>
                Nous sélectionnons uniquement des matières premières de la plus haute qualité, issues de l'agriculture biologique. Chaque ingrédient est soigneusement choisi pour ses bienfaits naturels et son origine responsable.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Respect de l'environnement</AccordionTrigger>
              <AccordionContent>
                Nous adoptons des procédés de fabrication respectueux de l'environnement, réduisant notre empreinte carbone à chaque étape. Nos emballages sont également pensés pour être recyclables ou biodégradables.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Transparence absolue</AccordionTrigger>
              <AccordionContent>
                Nous vous fournissons des informations détaillées sur la composition de nos produits, leurs sources et leurs bienfaits. Pas de surprises, pas d'ingrédients cachés.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Innovation constante</AccordionTrigger>
              <AccordionContent>
                Nous investissons continuellement dans la recherche scientifique pour perfectionner nos formules et anticiper vos besoins futurs. Notre équipe travaille sans relâche pour développer des solutions novatrices qui améliorent réellement votre quotidien.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Satisfaction client</AccordionTrigger>
              <AccordionContent>
                Votre satisfaction est notre priorité. Nous écoutons attentivement vos retours et adaptons nos produits pour qu'ils répondent parfaitement à vos attentes.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Card className="mt-12">
        <CardHeader>
          <CardTitle className="text-2xl">Pourquoi choisir Zigouplex ?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Parce que nous ne faisons aucun compromis. Chaque produit Zigouplex incarne notre vision d'un monde où la santé est à la portée de tous, sans sacrifier la naturalité ou l'éthique. Nous sommes bien plus qu'une marque : nous sommes une communauté de passionnés qui croient en un avenir plus sain, plus vert et plus harmonieux.
          </p>
          <p>
            Avec Zigouplex, choisissez une qualité de vie supérieure, nourrie par des produits respectueux de votre corps et de l'environnement. Ensemble, construisons un futur où bien-être rime avec responsabilité.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

