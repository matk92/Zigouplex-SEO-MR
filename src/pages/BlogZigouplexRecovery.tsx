import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CommentSection } from '../components/CommentSection';
import { RelatedArticles } from '../components/RelatedArticles';
import { SocialShareButtons } from '../components/SocialShareButtons';
import { Sparkles, Leaf, Heart, ShoppingCart } from 'lucide-react';

export default function BlogZigouplexRecovery() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Helmet>
        <title>Zigouplex Recovery : Votre allié pour une récupération musculaire optimale</title>
        <meta name="description" content="Découvrez Zigouplex Recovery, notre complément post-entraînement naturel conçu pour optimiser votre récupération musculaire et réduire les courbatures." />
      </Helmet>

      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold mb-4">Zigouplex Recovery : Votre allié pour une récupération musculaire optimale</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <img 
            src="/img/vente-zigouplex-recovery.webp" 
            alt="Zigouplex Recovery" 
            className="w-full h-auto mb-6 rounded-lg shadow-md"
          />
          <p>
            Après un entraînement intense, votre corps a besoin d’un coup de pouce pour récupérer efficacement et réduire les courbatures. Avec notre tout nouveau produit, Zigouplex Recovery, nous vous proposons une solution naturelle et innovante pour optimiser votre récupération musculaire.
          </p>

          <Separator className="my-8" />

          <section>
            <h2 className="flex items-center text-2xl font-semibold mb-4">
              <Sparkles className="mr-2 text-primary" />
              Qu’est-ce que Zigouplex Recovery ?
            </h2>
            <p>
              Zigouplex Recovery est un complément post-entraînement conçu pour aider votre corps à se régénérer après un effort physique. Formulé avec des ingrédients naturels, il est spécialement pensé pour les sportifs soucieux de maximiser leurs performances tout en prenant soin de leur bien-être.
            </p>
            <p>
              Avec Zigouplex Recovery, vous bénéficiez de :
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>Une récupération accélérée après l’effort.</li>
              <li>Une réduction significative des courbatures et des douleurs musculaires.</li>
              <li>Un soutien à la régénération musculaire grâce à une formule riche en nutriments essentiels.</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section>
            <h2 className="flex items-center text-2xl font-semibold mb-4">
              <Leaf className="mr-2 text-primary" />
              Les ingrédients clés de Zigouplex Recovery
            </h2>
            <p>
              Chez Zigouplex, nous croyons en la puissance de la nature. C’est pourquoi Zigouplex Recovery est élaboré avec des ingrédients soigneusement sélectionnés :
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>Acides aminés essentiels (BCAA) : Favorisent la réparation musculaire et préviennent la dégradation des muscles.</li>
              <li>Curcuma et gingembre : Puissants anti-inflammatoires naturels qui réduisent les douleurs musculaires.</li>
              <li>Magnésium : Essentiel pour prévenir les crampes et réduire la fatigue.</li>
              <li>Protéines végétales : Soutiennent la reconstruction musculaire après l’entraînement.</li>
              <li>Extraits de cerises acidulées : Riches en antioxydants pour limiter les dommages causés par les radicaux libres.</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section>
            <h2 className="flex items-center text-2xl font-semibold mb-4">
              <Heart className="mr-2 text-primary" />
              Pourquoi adopter Zigouplex Recovery ?
            </h2>
            <ul className="list-disc pl-6 mt-4">
              <li>Une solution naturelle et efficace : Contrairement aux produits classiques, Zigouplex Recovery repose sur des actifs naturels qui respectent votre corps tout en optimisant vos performances.</li>
              <li>Moins de courbatures, plus de confort : Grâce à sa formule anti-inflammatoire, les douleurs musculaires post-entraînement appartiennent au passé.</li>
              <li>Un complément adapté à tous : Que vous soyez sportif occasionnel ou professionnel, Zigouplex Recovery s’intègre parfaitement à votre routine.</li>
              <li>Vegan et sans additifs : Conçu pour s’adapter à tous les modes de vie.</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section>
            <h2 className="flex items-center text-2xl font-semibold mb-4">
              <ShoppingCart className="mr-2 text-primary" />
              Comment utiliser Zigouplex Recovery ?
            </h2>
            <p>
              Pour des résultats optimaux :
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>Mélangez une dose (15 g) de Zigouplex Recovery dans un verre d’eau ou un smoothie dans les 30 minutes suivant votre entraînement.</li>
              <li>Dégustez et laissez agir ses bienfaits naturellement.</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section>
            <h2 className="flex items-center text-2xl font-semibold mb-4">
              <Heart className="mr-2 text-primary" />
              Les avis de nos premiers utilisateurs
            </h2>
            <blockquote className="border-l-4 border-primary pl-4 italic mb-4">
              “Avec Zigouplex Recovery, j’ai constaté une vraie différence après mes séances de CrossFit. Moins de courbatures et une énergie retrouvée plus rapidement. Je recommande !” - Julien, passionné de fitness
            </blockquote>
            <blockquote className="border-l-4 border-primary pl-4 italic mb-4">
              “J’adore ce produit ! En tant que marathonienne, je cherchais un complément naturel pour récupérer plus vite. Zigouplex Recovery est exactement ce qu’il me fallait.” - Clara, sportive de haut niveau
            </blockquote>
            <blockquote className="border-l-4 border-primary pl-4 italic">
              “Le goût est agréable et surtout, il fonctionne ! Je suis beaucoup plus à l’aise le lendemain de mes séances de musculation.” - Paul, utilisateur régulier
            </blockquote>
          </section>

          <Separator className="my-8" />

          <section>
            <h2 className="flex items-center text-2xl font-semibold mb-4">Disponible dès maintenant</h2>
            <p>
              Zigouplex Recovery est désormais disponible dans l’onglet Produits de notre boutique en ligne. Profitez de notre offre de lancement et découvrez les bienfaits d’un produit pensé pour vous accompagner dans vos objectifs sportifs.
            </p>
            <p>
              Ne laissez plus les courbatures freiner votre progression. Essayez Zigouplex Recovery dès aujourd’hui et offrez à votre corps le soin qu’il mérite après chaque effort.
            </p>
            <p>
              Rendez-vous sur <a href="https://www.zigouplex.store" className="text-primary">www.zigouplex.store</a> pour en savoir plus et passer commande.
            </p>
          </section>

          <div className="mt-8">
            <SocialShareButtons />
          </div>

          <div className="mt-12">
            <CommentSection />
          </div>

          <div className="mt-12">
            <RelatedArticles articles={[
              { title: "Les bienfaits des compléments alimentaires naturels", slug: "bienfaits-complements-alimentaires-naturels" },
              { title: "Comment booster son énergie naturellement", slug: "booster-energie-naturellement" },
              { title: "Zigouplex vs les boissons énergisantes traditionnelles", slug: "zigouplex-vs-boissons-energisantes-traditionnelles" },
            ]} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}