import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { NewsletterForm } from '../components/NewsletterForm'
import { CommentSection } from '../components/CommentSection'
import { RelatedArticles } from '../components/RelatedArticles'
import { SocialShareButtons } from '../components/SocialShareButtons'
import { ArticleMeta } from '../components/ArticleMeta'
import { TableOfContents } from '../components/TableOfContents'
import { AlertTriangle, CheckCircle, BarChart2, Leaf, MessageCircle } from 'lucide-react'
import { useEffect, useRef } from 'react'

const tocItems = [
  { id: "différent", title: "Pourquoi Zigouplex est différent ?" },
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
    title: "Comment booster son énergie naturellement",
    slug: "booster-energie-naturellement"
  },
  {
    title: "Les Bienfaits de Zigouplex : Une Révolution Naturelle pour Votre Santé",
    slug: "révolution-naturelle-pour-votre-santé"
  }
];

export default function BlogPostZigouplexVsTraditional() {
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
        <title>Zigouplex vs les boissons énergisantes traditionnelles - Zigouplex Blog</title>
        <meta name="description" content="Comparez les avantages de Zigouplex par rapport aux boissons énergisantes classiques. Découvrez pourquoi les solutions naturelles sont meilleures pour votre santé et votre bien-être." />
      </Helmet>
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold mb-4">Zigouplex vs les boissons énergisantes traditionnelles</CardTitle>
          <ArticleMeta readTime={8} author="Équipe Zigouplex" />
        </CardHeader>
        <CardContent className="prose max-w-none">
          <div className="relative w-full h-[400px] mb-6 overflow-hidden">
            <img 
              ref={imageRef}
              data-src="/img/zigouplex-vs-traditional.webp" 
              alt="Zigouplex vs boissons énergisantes traditionnelles" 
              className="w-full h-full object-cover rounded-lg shadow-md"
              loading="lazy"
              srcSet="/img/zigouplex-vs-traditional-small.webp 400w, /img/zigouplex-vs-traditional-medium.webp 800w, /img/zigouplex-vs-traditional.webp 1200w"
              sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, 1200px"
            />
          </div>
          
          <div className="bg-muted p-4 rounded-lg mb-6">
            <TableOfContents items={tocItems} />
          </div>
          
          <p className="text-lg leading-relaxed">
            Dans un monde où l'énergie est une denrée précieuse, les boissons énergisantes sont devenues omniprésentes. Mais toutes les solutions ne se valent pas. Aujourd'hui, nous allons comparer Zigouplex, notre gamme de compléments alimentaires naturels, aux boissons énergisantes traditionnelles. Découvrez pourquoi le naturel l'emporte sur l'artificiel.
          </p>
          
          <Separator className="my-8" />
          
          <section>
            <h2 id="inconvenients" className="flex items-center text-2xl font-semibold mb-4">
              <AlertTriangle className="mr-2 text-primary" />
              Les inconvénients des boissons énergisantes traditionnelles
            </h2>
            <p>
              Les boissons énergisantes classiques sont souvent critiquées pour plusieurs raisons :
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>Forte teneur en sucre, contribuant à l'obésité et aux problèmes dentaires</li>
              <li>Niveaux élevés de caféine, pouvant causer de l'anxiété et des troubles du sommeil</li>
              <li>Présence d'additifs artificiels et de conservateurs</li>
              <li>Effet "crash" après le pic d'énergie initial</li>
              <li>Risques potentiels pour la santé cardiovasculaire</li>
            </ul>
          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 id="avantages" className="flex items-center text-2xl font-semibold mb-4">
              <CheckCircle className="mr-2 text-primary" />
              Les avantages de Zigouplex
            </h2>
            <p>
              En contraste, Zigouplex offre une approche plus saine et durable pour booster votre énergie :
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>Ingrédients 100% naturels et biologiques</li>
              <li>Sans sucres ajoutés ni édulcorants artificiels</li>
              <li>Libération d'énergie progressive et durable</li>
              <li>Soutien global de la santé grâce à des nutriments essentiels</li>
              <li>Pas d'effets secondaires négatifs comme l'anxiété ou les troubles du sommeil</li>
            </ul>
          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 id="comparaison" className="flex items-center text-2xl font-semibold mb-4">
              <BarChart2 className="mr-2 text-primary" />
              Comparaison détaillée
            </h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Critère</TableHead>
                  <TableHead>Boissons énergisantes traditionnelles</TableHead>
                  <TableHead>Zigouplex</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Source d'énergie</TableCell>
                  <TableCell>Caféine et sucre</TableCell>
                  <TableCell>Ingrédients naturels (ex: ginseng, guarana)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Durée de l'effet</TableCell>
                  <TableCell>Court terme, suivi d'un "crash"</TableCell>
                  <TableCell>Longue durée, énergie stable</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Effets secondaires</TableCell>
                  <TableCell>Anxiété, troubles du sommeil, palpitations</TableCell>
                  <TableCell>Minimes à inexistants</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Bénéfices pour la santé</TableCell>
                  <TableCell>Limités</TableCell>
                  <TableCell>Multiples (antioxydants, soutien immunitaire, etc.)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Naturalité</TableCell>
                  <TableCell>Contient des additifs artificiels</TableCell>
                  <TableCell>100% naturel et biologique</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 id="pourquoi-choisir" className="flex items-center text-2xl font-semibold mb-4">
              <Leaf className="mr-2 text-primary" />
              Pourquoi choisir Zigouplex ?
            </h2>
            <p>
              En optant pour Zigouplex, vous faites le choix d'une solution énergétique qui respecte votre corps et votre bien-être à long terme. Voici quelques raisons supplémentaires de préférer nos produits :
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>Formules basées sur des recherches scientifiques avancées</li>
              <li>Transparence totale sur la composition et l'origine des ingrédients</li>
              <li>Approche holistique du bien-être, au-delà du simple boost d'énergie</li>
              <li>Respect de l'environnement dans notre processus de production</li>
              <li>Adaptés à différents besoins : énergie, concentration, récupération</li>
            </ul>
          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 id="temoignages" className="flex items-center text-2xl font-semibold mb-4">
              <MessageCircle className="mr-2 text-primary" />
              Témoignages de nos clients
            </h2>
            <blockquote className="border-l-4 border-primary pl-4 italic mb-4">
              "Depuis que j'ai remplacé mes boissons énergisantes par Zigouplex, je me sens plus énergique tout au long de la journée, sans les hauts et les bas habituels." - Marie, 32 ans
            </blockquote>
            <blockquote className="border-l-4 border-primary pl-4 italic">
              "J'apprécie particulièrement le fait que Zigouplex soit 100% naturel. Je peux booster mon énergie sans culpabilité." - Thomas, 45 ans
            </blockquote>
          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
            <p>
              La comparaison entre Zigouplex et les boissons énergisantes traditionnelles met en lumière les avantages indéniables d'une approche naturelle et équilibrée pour booster son énergie. En choisissant Zigouplex, vous optez non seulement pour une solution efficace, mais aussi pour un produit qui soutient votre santé globale et respecte votre corps.
            </p>
            <p className="mt-4">
              Prêt à faire le switch vers une énergie plus naturelle et durable ? Découvrez notre gamme Zigouplex et transformez votre approche du bien-être énergétique. Votre corps vous remerciera !
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

