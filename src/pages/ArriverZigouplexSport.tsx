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
  { id: "Introduction", title: "Introduction" },
  { id: "NouvelleEre", title: "Une nouvelle ère pour la nutrition sportive" },
  { id: "Produits", title: "Les produits annoncés dans cette gamme" },
  { id: "Ethique", title: "Une approche éthique et durable" },
  { id: "Lancement", title: "Un lancement très attendu" },
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
        <title>Zigouplex annonce une nouvelle gamme dédiée aux sportifs - Zigouplex Blog</title>
        <meta name="description" content="Découvrez la nouvelle gamme Zigouplex Sport Series, conçue pour les athlètes et amateurs de sport. Préparez-vous à repousser vos limites avec des produits 100 % naturels." />
      </Helmet>
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold mb-4">Zigouplex annonce une nouvelle gamme dédiée aux sportifs</CardTitle>
          <ArticleMeta readTime={7} author="Équipe Zigouplex" />
        </CardHeader>
        <CardContent className="prose max-w-none">
          <div className="relative w-full h-[400px] mb-6 overflow-hidden">
            <img 
              ref={imageRef}
              data-src="/img/zigouplex-sport.webp" 
              alt="Zigouplex Sport Series" 
              className="w-full h-full object-cover rounded-lg shadow-md"
              loading="lazy"
              srcSet="/img/zigouplex-sport-small.webp 400w, /img/zigouplex-sport-medium.webp 800w, /img/zigouplex-sport.webp 1200w"
              sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, 1200px"
            />
          </div>
          
          <div className="bg-muted p-4 rounded-lg mb-6">
            <TableOfContents items={tocItems} />
          </div>
          
          <p className="text-lg leading-relaxed">
            Zigouplex, leader des compléments alimentaires 100 % naturels, s’apprête à révolutionner le monde du sport et de la performance. Après des mois de recherche et développement, la marque est fière d’annoncer l’arrivée prochaine de sa toute première gamme spécifiquement conçue pour les athlètes et amateurs de sport.
          </p>
          
          <Separator className="my-8" />
          
          <section>
            <h2 id="Introduction" className="flex items-center text-2xl font-semibold mb-4">
              <Dumbbell className="mr-2 text-primary" />
              Introduction
            </h2>
            <p>
              Baptisée Zigouplex Sport Series, cette gamme s’adresse à tous ceux qui souhaitent maximiser leur potentiel tout en respectant leur corps. Fidèle à ses valeurs, Zigouplex utilise uniquement des ingrédients naturels, sans additifs ni produits chimiques, pour offrir des solutions efficaces et saines aux sportifs de tous niveaux.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 id="NouvelleEre" className="flex items-center text-2xl font-semibold mb-4">
              <Bolt className="mr-2 text-primary" />
              Une nouvelle ère pour la nutrition sportive
            </h2>
            <p>
              Zigouplex Sport Series marque le début d'une nouvelle ère pour la nutrition sportive. En mettant l'accent sur des ingrédients naturels et des formulations scientifiquement validées, Zigouplex offre aux athlètes une alternative saine et efficace pour améliorer leurs performances.
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
              Un lancement très attendu
            </h2>
            <p>
              La gamme Zigouplex Sport Series sera disponible d’ici quelques mois sur le site officiel de la marque et chez les partenaires distributeurs. En attendant, restez connectés : des avant-premières et des offres exclusives seront bientôt dévoilées !
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 id="Communauté" className="flex items-center text-2xl font-semibold mb-4">
              <Brain className="mr-2 text-primary" />
              Rejoignez la communauté Zigouplex
            </h2>
            <p>
              Vous êtes passionné de sport ? Suivez Zigouplex sur les réseaux sociaux pour découvrir les coulisses de cette nouvelle gamme, bénéficier de conseils exclusifs et participer à des événements en lien avec son lancement.
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