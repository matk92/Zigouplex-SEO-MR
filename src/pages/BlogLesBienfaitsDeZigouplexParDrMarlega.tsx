import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { NewsletterForm } from '../components/NewsletterForm'
import { CommentSection } from '../components/CommentSection'
import { RelatedArticles } from '../components/RelatedArticles'
import { SocialShareButtons } from '../components/SocialShareButtons'
import { ArticleMeta } from '../components/ArticleMeta'
import { TableOfContents } from '../components/TableOfContents'
import { Moon, Salad, Droplet, MonitorIcon as Running, Brain } from 'lucide-react'
import { useEffect, useRef } from 'react'

const tocItems = [
  { id: "Pourquoi", title: "Pourquoi Zigouplex est différent ?" },
  { id: "ingrédients", title: "Des ingrédients naturels rigoureusement sélectionnés" },
  { id: "bienfaits", title: "Les bienfaits démontrés par la science" },
  { id: "démarche", title: "Une démarche éthique et respectueuse de l’environnement" },
  { id: "conseil", title: "Mon conseil santé" },
];

const relatedArticles = [
  {
    title: "Les bienfaits des compléments alimentaires naturels",
    slug: "bienfaits-complements-alimentaires-naturels"
  },
  {
    title: "Zigouplex vs les boissons énergisantes traditionnelles",
    slug: "zigouplex-vs-boissons-energisantes-traditionnelles"
  },
  {
    title: "Zigouplex.store x zigouplex.site : Une collaboration énergisante",
    slug: "bakery-partnership"
  }
];

export default function BlogPostBoosterEnergie() {
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
        <title>Les Bienfaits de Zigouplex : Une Révolution Naturelle pour Votre Santé</title>
        <meta name="description" content="Découvrez Les Bienfaits de Zigouplex par Dr. Marlega" />
      </Helmet>
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold mb-4">Les Bienfaits de Zigouplex : Une Révolution Naturelle pour Votre Santé</CardTitle>
          <ArticleMeta readTime={7} author="Équipe Zigouplex" />
        </CardHeader>
        <CardContent className="prose max-w-none">
          <div className="relative w-full h-[400px] mb-6 overflow-hidden">
            <img 
              ref={imageRef}
              data-src="/img/Les-Bienfaits-de-Zigouplex-Par-Dr-Marlega.webp" 
              alt="Booster son énergie naturellement" 
              className="w-full h-full object-cover rounded-lg shadow-md"
              loading="lazy"
              srcSet="/img/boost-energie-small.webp 400w, /img/boost-energie-medium.webp 800w, /img/Les-Bienfaits-de-Zigouplex-Par-Dr-Marlega.webp 1200w"
              sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, 1200px"
            />
          </div>
          
          <div className="bg-muted p-4 rounded-lg mb-5">
            <TableOfContents items={tocItems} />
          </div>
          
          <p className="text-lg leading-relaxed">
          Dans un monde où le stress, les rythmes effrénés, et les choix alimentaires discutables mettent à mal notre bien-être, il est crucial de se tourner vers des solutions simples, naturelles et efficaces. C’est dans cette optique que je me penche aujourd’hui sur une boisson qui a attiré mon attention : Zigouplex.
          </p>
          
          <Separator className="my-8" />
          
          <section>
            <h2 id="Pourquoi" className="flex items-center text-2xl font-semibold mb-4">
              <Moon className="mr-2 text-primary" />
              1. Pourquoi Zigouplex est différent ?
            </h2>
            <p>
            Chez Zigouplex, tout part d’une philosophie claire : proposer des produits 100 % naturels, scientifiquement validés, et conçus pour améliorer durablement votre santé. Contrairement à de nombreux compléments ou boissons sur le marché, Zigouplex mise sur la qualité, l’éthique et l’efficacité.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 id="ingrédients" className="flex items-center text-2xl font-semibold mb-4">
              <Salad className="mr-2 text-primary" />
              2. Des ingrédients naturels rigoureusement sélectionnés
            </h2>
            <p>
            Zigouplex repose sur des ingrédients triés sur le volet. Ces composants, issus de la nature, sont sélectionnés pour leurs bienfaits reconnus :<br/>
Richesse en antioxydants :ils protègent les cellules contre le vieillissement prématuré et boostent les défenses immunitaires.<br/>
Complexes énergétiques naturels : parfaits pour combattre la fatigue sans l’effet excitant des stimulants classiques comme la caféine.<br/>
Support digestif : certains ingrédients favorisent une meilleure assimilation des nutriments et une digestion fluide, essentielle pour se sentir léger et énergique.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 id="bienfaits" className="flex items-center text-2xl font-semibold mb-4">
              <Droplet className="mr-2 text-primary" />
              3. Les bienfaits démontrés par la science
            </h2>
            <p>
            En tant que professionnel de santé, je suis sensible aux preuves scientifiques. Zigouplex ne fait pas de promesses vides : des études montrent l’impact positif de ses composants sur :<br/>
La vitalité générale : une consommation régulière améliore l’énergie et la concentration.<br/>
La gestion du stress : certains extraits naturels aident à réduire la production de cortisol, l’hormone du stress.<br/>
Le soutien métabolique : il favorise un métabolisme équilibré, aidant à maintenir un poids stable.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 id="démarche" className="flex items-center text-2xl font-semibold mb-4">
              <Running className="mr-2 text-primary" />
              4. Une démarche éthique et respectueuse de l’environnement
            </h2>
            <p>
            Zigouplex ne se contente pas de soigner votre santé : la marque prend soin de la planète. Chaque produit est conçu dans une démarche durable, avec des emballages éco-responsables et un sourcing respectueux des écosystèmes.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 id="conseil" className="flex items-center text-2xl font-semibold mb-4">
              <Brain className="mr-2 text-primary" />
              5. Mon conseil santé
            </h2>
            <p>
            Zigouplex s’intègre parfaitement dans une démarche globale de santé : une alimentation équilibrée, un peu d’activité physique et une attention au sommeil. Ajouter Zigouplex à votre quotidien, c’est choisir une solution saine, naturelle et respectueuse de votre corps.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
            <p>
              Booster son énergie naturellement est un processus holistique qui implique de prendre soin de son corps et de son esprit. En adoptant ces habitudes saines et en étant attentif à vos besoins, vous pouvez augmenter durablement votre vitalité sans dépendre de stimulants artificiels.
            </p>
            <p className="mt-4">
              CZigouplex est bien plus qu’une simple boisson : c’est un véritable allié pour une vie plus équilibrée et énergique. Essayez-le, écoutez votre corps, et sentez la différence. Comme je le dis souvent : mieux vaut prévenir que guérir, et Zigouplex est un excellent point de départ !
            </p>
          </section>

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

