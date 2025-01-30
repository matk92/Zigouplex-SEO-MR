import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CommentSection } from '../components/CommentSection';
import { SocialShareButtons } from '../components/SocialShareButtons';
import { Sparkles, Droplet, Heart, ShoppingCart } from 'lucide-react';

export default function BlogZigouplexHydrate() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Helmet>
        <title>Zigouplex Hydrate : Restez Performant avec une Hydratation Optimale</title>
        <meta name="description" content="Découvrez Zigouplex Hydrate, une solution d’hydratation enrichie en électrolytes naturels pour optimiser vos performances et votre récupération." />
      </Helmet>

      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold mb-4">Zigouplex Hydrate : Restez Performant avec une Hydratation Optimale</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <img 
            src="/img/vente-zigouplex-hydrate.webp" 
            alt="Zigouplex Hydrate" 
            className="w-full h-auto mb-6 rounded-lg shadow-md"
          />
          <p>
            L’hydratation est un élément essentiel de la performance sportive et du bien-être au quotidien. Pour vous accompagner dans vos entraînements et vos journées actives, Zigouplex lance <strong>Zigouplex Hydrate</strong>, une solution d’hydratation enrichie en électrolytes naturels.
          </p>

          <Separator className="my-8" />

          <section>
            <h2 className="flex items-center text-2xl font-semibold mb-4">
              <Droplet className="mr-2 text-primary" />
              Pourquoi l’hydratation est-elle essentielle ?
            </h2>
            <ul className="list-disc pl-6 mt-4">
              <li> Une baisse des performances</li>
              <li> Une fatigue accrue</li>
              <li> Des crampes musculaires</li>
              <li> Une récupération plus lente</li>
            </ul>
            <br />
            <p>
              Avec Zigouplex Hydrate, vous faites le plein d’électrolytes essentiels pour une hydratation rapide et efficace, tout en maintenant un équilibre optimal de votre organisme.
            </p>
          </section>

          <Separator className="my-8" />

          <section>
            <h2 className="flex items-center text-2xl font-semibold mb-4">
              <Sparkles className="mr-2 text-primary" />
              Zigouplex Hydrate : Une Formule Unique et Naturelle
            </h2>
            <ul className="list-disc pl-6 mt-4">
              <li> Eau de coco en poudre – Une source naturelle de potassium pour recharger vos réserves minérales.</li>
              <li> Sodium et magnésium – Indispensables pour maintenir l’équilibre hydrique et prévenir les crampes.</li>
              <li> Extraits de citron et baies d’açaï – Un boost d’antioxydants et une touche de fraîcheur naturelle.</li>
              <li> Bicarbonate de sodium – Pour une absorption rapide et une digestion facilitée.</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section>
            <h2 className="flex items-center text-2xl font-semibold mb-4">
              <Heart className="mr-2 text-primary" />
              Les Bienfaits de Zigouplex Hydrate
            </h2>
            <ul className="list-disc pl-6 mt-4">
              <li> Réhydrate rapidement après un effort intense</li>
              <li> Prévient les crampes et la fatigue musculaire</li>
              <li> Optimise les performances sportives et l’endurance</li>
              <li> 100% naturel, sans colorants ni sucres ajoutés</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section>
            <h2 className="text-2xl font-semibold mb-4">Nos clients en parlent</h2>
            <blockquote className="border-l-4 border-primary pl-4 italic mb-4">
              “Je sens une vraie différence en endurance depuis que j’utilise Zigouplex Hydrate. Plus d’énergie et zéro coup de mou en plein entraînement !” - Lucas, coureur de marathon
            </blockquote>
            <blockquote className="border-l-4 border-primary pl-4 italic mb-4">
              “Idéal après mes séances de vélo, je me sens beaucoup mieux hydraté sans lourdeur ni goût chimique.” - Sophie, cycliste amateur
            </blockquote>
            <blockquote className="border-l-4 border-primary pl-4 italic">
              “Super produit ! J’ai moins de crampes et je récupère plus vite après mes sessions de HIIT.” - Nicolas, passionné de fitness
            </blockquote>
          </section>

          <Separator className="my-8" />

          <section>
            <h2 className="flex items-center text-2xl font-semibold mb-4">
              <ShoppingCart className="mr-2 text-primary" />
              Zigouplex Hydrate est Disponible !
            </h2>
            <p>
              Dès aujourd’hui, retrouvez Zigouplex Hydrate dans l’onglet Produits de notre boutique. Offrez à votre corps une hydratation optimale et performante.
            </p>
            <p>
               <a href="https://www.zigouplex.store" className="text-primary">Commandez dès maintenant sur www.zigouplex.store !</a>
            </p>
          </section>

          <div className="mt-8">
            <SocialShareButtons />
          </div>

          <div className="mt-12">
            <CommentSection />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
