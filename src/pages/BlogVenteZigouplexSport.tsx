import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { NewsletterForm } from '../components/NewsletterForm'
import { CommentSection } from '../components/CommentSection'
import { RelatedArticles } from '../components/RelatedArticles'
import { SocialShareButtons } from '../components/SocialShareButtons'
import { ArticleMeta } from '../components/ArticleMeta'
import { TableOfContents } from '../components/TableOfContents'
import { Dumbbell, Droplet, Bolt, Brain, Leaf } from 'lucide-react'
import { useEffect, useRef } from 'react'

const tocItems = [
  { id: "Introduction", title: "Ils sont enfin là ! Zigouplex Sport Series" },
  { id: "NouvelleEre", title: "Ou les trouver" },
  { id: "Produits", title: "Les produits annoncés dans cette gamme" },
  { id: "Ethique", title: "Une approche éthique et durable" },
  { id: "Lancement", title: "Pourquoi choisir Zigouplex ?" },
  { id: "Communauté", title: "Rejoignez la communauté Zigouplex" },
];

const relatedArticles = [
  {
    title: "Les bienfaits des compléments alimentaires naturels",
    slug: "bienfaits-complements-alimentaires-naturels"
  },
  {
    title: "Comment booster son énergie naturellement",
    slug: "booster-energie-naturellement"
  },
  {
    title: "Zigouplex vs les boissons énergisantes traditionnelles",
    slug: "zigouplex-vs-boissons-energisantes-traditionnelles"
  }
];

export default function ArriverZigouplexSport() {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const image = entry.target as HTMLImageElement;
            image.src = image.dataset.src || '';
            observer.unobserve(image);
          }
        });
      },
      { rootMargin: '100px' }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Helmet>
        <title>Les nouveaux produits Zigouplex pour le sport sont enfin disponibles ! - Zigouplex Blog</title>
        <meta name="description" content="Découvrez la nouvelle gamme Zigouplex Sport Series, conçue pour les athlètes et amateurs de sport. Préparez-vous à repousser vos limites avec des produits 100 % naturels." />
      </Helmet>
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold mb-4">Les nouveaux produits Zigouplex pour le sport sont enfin disponibles !</CardTitle>
          <ArticleMeta readTime={7} author="Équipe Zigouplex" />
        </CardHeader>
        <CardContent className="prose max-w-none">
          <div className="relative w-full h-[400px] mb-6 overflow-hidden">
            <img 
              ref={imageRef}
              data-src="/img/vente-zigouplex-sport.webp" 
              alt="Zigouplex Sport vente" 
              className="w-full h-full object-cover rounded-lg shadow-md"
              loading="lazy"
              srcSet="/img/vente-zigouplex-sport.webp 400w, /img/vente-zigouplex-sport-medium.webp 800w, /img/vente-zigouplex-sport.webp 1200w"
              sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, 1200px"
            />
          </div>
          
          <div className="bg-muted p-4 rounded-lg mb-6">
            <TableOfContents items={tocItems} />
          </div>
          
          <p className="text-lg leading-relaxed">
          Nous sommes ravis de vous annoncer que notre nouvelle gamme de produits dédiée aux sportifs est désormais disponible dans l’onglet Produits de notre boutique en ligne !
          </p>
          
          <Separator className="my-8" />
          
          <section>
            <h2 id="Introduction" className="flex items-center text-2xl font-semibold mb-4">
              <Dumbbell className="mr-2 text-primary" />
              Ils sont enfin là ! Zigouplex Sport Series
            </h2>
            <p>
              Baptisée Zigouplex Sport Series, cette gamme s’adresse à tous ceux qui souhaitent maximiser leur potentiel tout en respectant leur corps. Fidèle à ses valeurs, Zigouplex utilise uniquement des ingrédients naturels, sans additifs ni produits chimiques, pour offrir des solutions efficaces et saines aux sportifs de tous niveaux.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 id="NouvelleEre" className="flex items-center text-2xl font-semibold mb-4">
              <Bolt className="mr-2 text-primary" />
              Ou les trouver ?
            </h2>
            <p>
              Les nouveaux produits Zigouplex pour le sport sont enfin disponibles !
            </p>
            <p>
              Nous sommes ravis de vous annoncer que notre nouvelle gamme de produits dédiée aux sportifs est désormais disponible dans l’onglet Produits de notre boutique en ligne !
            </p>
            <p>
              Une gamme conçue pour accompagner vos performances
            </p>
            <p>
              Chez Zigouplex, nous savons à quel point votre bien-être et vos performances sont essentiels. C’est pourquoi nous avons créé une gamme spécialement pensée pour répondre aux besoins des sportifs, amateurs comme professionnels.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 id="Produits" className="flex items-center text-2xl font-semibold mb-4">
              <Droplet className="mr-2 text-primary" />
              Les produits annoncés dans cette gamme
            </h2>
            <p>
              Bien que la marque garde encore quelques secrets sur les détails, voici un aperçu des produits qui composeront la gamme :
              <br/>
              <strong>Zigouplex Boost :</strong> une formule pré-entraînement naturelle pour augmenter l’énergie et l’endurance.
              <br/>
              <strong>Zigouplex Recovery :</strong> un complément post-entraînement pour optimiser la récupération musculaire et réduire les courbatures.
              <br/>
              <strong>Zigouplex Hydrate :</strong> une solution d’hydratation enrichie en électrolytes naturels, idéale pour maintenir des performances au top.
              <br/>
              <strong>Zigouplex Perform+ :</strong> un produit innovant destiné à améliorer la concentration et la résistance mentale lors des efforts intenses.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 id="Ethique" className="flex items-center text-2xl font-semibold mb-4">
              <Leaf className="mr-2 text-primary" />
              Une approche éthique et durable
            </h2>
            <p>
              Zigouplex ne se contente pas de développer des produits performants : la marque s’engage également à réduire son empreinte écologique. Les emballages de la gamme Sport Series seront conçus à partir de matériaux recyclés et recyclables, en ligne avec la politique écologique de la marque.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 id="Lancement" className="flex items-center text-2xl font-semibold mb-4">
              <Brain className="mr-2 text-primary" />
              Pourquoi choisir Zigouplex ?
            </h2>

            <p>
              Nos produits sont conçus avec des ingrédients 100 % naturels, soigneusement sélectionnés pour leur efficacité et leur respect de votre corps. Vous bénéficiez d’une qualité irréprochable, sans compromis sur vos performances ou votre santé.
            </p>
            <p>
              Préparez-vous à dépasser vos limites avec Zigouplex !
            </p>

          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 id="Communauté" className="flex items-center text-2xl font-semibold mb-4">
              <Brain className="mr-2 text-primary" />
              Rejoignez la communauté Zigouplex
            </h2>
            <p>
              Rejoignez la communauté Zigouplex et améliorez vos performances sportives avec nos solutions naturelles. N’attendez plus pour explorer notre nouvelle gamme.
            </p>
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
  )
}