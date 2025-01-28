import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { NewsletterForm } from '../components/NewsletterForm'
import { CommentSection } from '../components/CommentSection'
import { RelatedArticles } from '../components/RelatedArticles'
import { SocialShareButtons } from '../components/SocialShareButtons'
import { TableOfContents } from '../components/TableOfContents'
import { Sparkles, Leaf, Zap, Heart, ShoppingCart } from 'lucide-react'

const tocItems = [
  { id: "zigouplex-boost", title: "Qu’est-ce que Zigouplex Boost ?" },
  { id: "choisir", title: "Pourquoi choisir Zigouplex Boost ?" },
  { id: "bienfaits", title: "Quels sont les bienfaits pour les sportifs ?" },
  { id: "utiliser", title: "Comment utiliser Zigouplex Boost ?" },
  { id: "retours", title: "Les retours des premiers utilisateurs" },
  { id: "acheter", title: "Où acheter Zigouplex Boost ?" },
];

const relatedArticles = [
  { title: "Les bienfaits des compléments alimentaires naturels", slug: "bienfaits-complements-alimentaires-naturels" },
  { title: "Comment booster son énergie naturellement", slug: "booster-energie-naturellement" },
  { title: "Zigouplex vs les boissons énergisantes traditionnelles", slug: "zigouplex-vs-boissons-energisantes-traditionnelles" },
];

export default function BlogZigouplexBoost() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Helmet>
        <title>Zigouplex Boost : Le secret d’un entraînement performant et naturel</title>
        <meta name="description" content="Découvrez Zigouplex Boost, notre complément pré-entraînement naturel conçu pour augmenter votre énergie et votre endurance avant vos séances d’entraînement." />
      </Helmet>

      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold mb-4">Zigouplex Boost : Le secret d’un entraînement performant et naturel</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <img 
            src="/img/vente-zigouplex-boost.webp" 
            alt="Zigouplex Boost" 
            className="w-full h-auto rounded-lg mb-6 shadow-md"
          />
          <div className="bg-muted p-4 rounded-lg mb-6">
            <TableOfContents items={tocItems} />
          </div>

          <section id="zigouplex-boost">
            <h2 className="flex items-center text-2xl font-semibold mb-4">
              <Sparkles className="mr-2 text-primary" />
              Qu’est-ce que Zigouplex Boost ?
            </h2>
            <p>Zigouplex Boost est un complément pré-entraînement spécialement conçu pour vous donner un coup de fouet avant vos activités physiques. Que vous soyez adepte de musculation, de course à pied ou d’un autre sport exigeant, ce produit est fait pour vous.</p>
            <p>Grâce à des ingrédients 100 % naturels, Zigouplex Boost agit comme une véritable source d’énergie pour :</p>
            <ul className="list-disc pl-6 mt-4">
              <li>Augmenter votre vitalité avant l’effort.</li>
              <li>Améliorer votre endurance pour prolonger vos performances.</li>
              <li>Stimuler votre concentration, afin de rester focalisé sur vos objectifs.</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section id="choisir">
            <h2 className="flex items-center text-2xl font-semibold mb-4">
              <Leaf className="mr-2 text-primary" />
              Pourquoi choisir Zigouplex Boost ?
            </h2>
            <p>Contrairement à de nombreux produits pré-entraînement qui contiennent des additifs ou des stimulants agressifs, Zigouplex Boost mise sur la nature et la qualité :</p>
            <ul className="list-disc pl-6 mt-4">
              <li>Sans caféine ajoutée : Pas de palpitations ni de crash énergétique.</li>
              <li>Adapté aux vegans : Une formule respectueuse de votre mode de vie.</li>
              <li>Sans produits chimiques nocifs : Parce que votre santé est notre priorité.</li>
            </ul>
            <p>Chaque ingrédient a été rigoureusement sélectionné pour ses bienfaits reconnus :</p>
            <ul className="list-disc pl-6 mt-4">
              <li>Ginseng : Un adaptogène naturel qui booste énergie et concentration.</li>
              <li>Guarana : Source naturelle de caféine pour une énergie durable.</li>
              <li>L-citrulline : Aide à améliorer le flux sanguin et l’endurance musculaire.</li>
              <li>Vitamine B12 : Essentielle pour soutenir le métabolisme énergétique.</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section id="bienfaits">
            <h2 className="flex items-center text-2xl font-semibold mb-4">
              <Zap className="mr-2 text-primary" />
              Quels sont les bienfaits pour les sportifs ?
            </h2>
            <ul className="list-disc pl-6 mt-4">
              <li>Un démarrage optimal : Zigouplex Boost prépare votre corps à l’effort intense grâce à une libération d’énergie progressive.</li>
              <li>Des performances prolongées : Idéal pour les sports d’endurance comme le marathon ou le cyclisme.</li>
              <li>Une récupération facilitée : Une meilleure oxygénation des muscles pour réduire la fatigue.</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section id="utiliser">
            <h2 className="flex items-center text-2xl font-semibold mb-4">
              <Heart className="mr-2 text-primary" />
              Comment utiliser Zigouplex Boost ?
            </h2>
            <p>Rien de plus simple :</p>
            <ul className="list-disc pl-6 mt-4">
              <li>Prenez une dose (10 ml) diluée dans un verre d’eau ou de jus, environ 30 minutes avant votre séance.</li>
              <li>Savourez et ressentez l’énergie naturelle vous envahir.</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section id="retours">
            <h2 className="flex items-center text-2xl font-semibold mb-4">
              <Heart className="mr-2 text-primary" />
              Les retours des premiers utilisateurs
            </h2>
            <blockquote className="border-l-4 border-primary pl-4 italic mb-4">
              “Depuis que j’utilise Zigouplex Boost, mes entraînements ont totalement changé. Je suis plus performant et je ressens moins de fatigue. Merci Zigouplex !” - Thomas, coureur amateur
            </blockquote>
            <blockquote className="border-l-4 border-primary pl-4 italic">
              “Enfin un produit naturel et efficace ! Je me sens boostée sans ressentir de nervosité, c’est parfait avant mes séances de yoga intense.” - Emma, coach sportive
            </blockquote>
          </section>

          <Separator className="my-8" />

          <section id="acheter">
            <h2 className="flex items-center text-2xl font-semibold mb-4">
              <ShoppingCart className="mr-2 text-primary" />
              Où acheter Zigouplex Boost ?
            </h2>
            <p>Zigouplex Boost est disponible dès maintenant dans l’onglet Produits de notre boutique en ligne. Profitez d’une offre exclusive de lancement pour découvrir ce produit révolutionnaire.</p>
          </section>

          <Separator className="my-8" />

          <div className="mt-8">
            <SocialShareButtons />
          </div>

          <div className="mt-12">
            <CommentSection />
          </div>

          <div className="mt-12">
            <RelatedArticles articles={relatedArticles} />
          </div>

          <div className="mt-12">
            <NewsletterForm />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}