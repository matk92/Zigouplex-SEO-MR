import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { NewsletterForm } from '../components/NewsletterForm'
import { CommentSection } from '../components/CommentSection'
import { RelatedArticles } from '../components/RelatedArticles'
import { SocialShareButtons } from '../components/SocialShareButtons'
import { ArticleMeta } from '../components/ArticleMeta'
import { TableOfContents } from '../components/TableOfContents'
import { Sun, Leaf, Heart, Brain } from 'lucide-react'
import { useEffect, useRef } from 'react'

const tocItems = [
  { id: "Introduction", title: "Introduction" },
  { id: "Bienfaits", title: "Les bienfaits de la nature" },
  { id: "Ingrédients", title: "Des ingrédients naturels" },
  { id: "Science", title: "Preuves scientifiques" },
  { id: "Éthique", title: "Démarche éthique" },
  { id: "Conseil", title: "Conseils santé" },
  { id: "Zigouplex", title: "Pourquoi choisir Zigouplex ?" },
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

export default function BlogLesBienfaitsDeLaNature() {
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
        <title>Les Bienfaits de la Nature - Zigouplex Blog</title>
        <meta name="description" content="Découvrez les bienfaits de la nature pour votre santé et bien-être." />
      </Helmet>
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold mb-4">Les Bienfaits de la Nature</CardTitle>
          <ArticleMeta readTime={7} author="Équipe Zigouplex" />
        </CardHeader>
        <CardContent className="prose max-w-none">
          <div className="relative w-full h-[400px] mb-6 overflow-hidden">
            <img 
              ref={imageRef}
              data-src="/img/Les_Bienfaits_de_la_Nature_Zigouplex_Blog.webp" 
              alt="Les Bienfaits de la Nature" 
              className="w-full h-full object-cover rounded-lg shadow-md"
              loading="lazy"
              srcSet="/img/Les_Bienfaits_de_la_Nature_Zigouplex_Blog.webp 1200w"
              sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, 1200px"
            />
          </div>
          
          <div className="bg-muted p-4 rounded-lg mb-6">
            <TableOfContents items={tocItems} />
          </div>
          
          <p className="text-lg leading-relaxed">
            Dans notre monde moderne, il est essentiel de se reconnecter avec la nature pour améliorer notre bien-être. La nature offre une multitude de bienfaits pour notre santé physique et mentale.
          </p>
          
          <Separator className="my-8" />
          
          <section>
            <h2 id="Introduction" className="flex items-center text-2xl font-semibold mb-4">
              <Sun className="mr-2 text-primary" />
              Introduction
            </h2>
            <p>
              La nature est une source inépuisable de bienfaits. Que ce soit par le biais de promenades en forêt, de l'utilisation de plantes médicinales ou de l'adoption d'une alimentation naturelle, les avantages sont nombreux.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 id="Bienfaits" className="flex items-center text-2xl font-semibold mb-4">
              <Leaf className="mr-2 text-primary" />
              Les bienfaits de la nature
            </h2>
            <p>
              La nature nous offre des bienfaits inestimables :
              <br/>
              Réduction du stress : Passer du temps dans la nature aide à diminuer les niveaux de cortisol, l'hormone du stress.
              <br/>
              Amélioration de l'humeur : Les espaces verts et les activités en plein air sont connus pour améliorer l'humeur et réduire les symptômes de dépression.
              <br/>
              Renforcement du système immunitaire : L'exposition à la nature peut renforcer notre système immunitaire et nous protéger contre diverses maladies.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 id="Ingrédients" className="flex items-center text-2xl font-semibold mb-4">
              Des ingrédients naturels
            </h2>
            <p>
              Les ingrédients naturels sont au cœur des bienfaits de la nature. Ils sont sélectionnés pour leurs propriétés bénéfiques :
              <br/>
              Plantes médicinales : Utilisées depuis des millénaires, elles offrent des solutions naturelles pour divers maux.
              <br/>
              Aliments bio : Riches en nutriments, ils soutiennent notre santé globale.
              <br/>
              Huiles essentielles : Connues pour leurs propriétés thérapeutiques, elles sont utilisées en aromathérapie pour améliorer le bien-être.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 id="Science" className="flex items-center text-2xl font-semibold mb-4">
              <Heart className="mr-2 text-primary" />
              Preuves scientifiques
            </h2>
            <p>
              De nombreuses études scientifiques confirment les bienfaits de la nature :
              <br/>
              Réduction de l'anxiété : Les recherches montrent que passer du temps dans la nature réduit les niveaux d'anxiété.
              <br/>
              Amélioration de la concentration : Les environnements naturels favorisent une meilleure concentration et productivité.
              <br/>
              Bien-être général : Les études indiquent que les personnes exposées à la nature ont un meilleur bien-être général.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 id="Éthique" className="flex items-center text-2xl font-semibold mb-4">
              <Brain className="mr-2 text-primary" />
              Démarche éthique
            </h2>
            <p>
              Adopter une démarche éthique est essentiel pour préserver notre planète. Cela inclut :
              <br/>
              Utilisation de produits durables : Privilégier les produits respectueux de l'environnement.
              <br/>
              Réduction des déchets : Adopter des pratiques visant à minimiser les déchets.
              <br/>
              Soutien aux initiatives écologiques : Participer activement à des projets de conservation et de protection de la nature.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 id="Conseil" className="flex items-center text-2xl font-semibold mb-4">
              <Brain className="mr-2 text-primary" />
              Conseils santé
            </h2>
            <p>
              Pour profiter pleinement des bienfaits de la nature, voici quelques conseils :
              <br/>
              Passez du temps à l'extérieur : Faites des promenades régulières dans des espaces verts.
              <br/>
              Adoptez une alimentation naturelle : Privilégiez les aliments bio et non transformés.
              <br/>
              Utilisez des produits naturels : Intégrez des plantes médicinales et des huiles essentielles dans votre routine quotidienne.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 id="Zigouplex" className="flex items-center text-2xl font-semibold mb-4">
              <Brain className="mr-2 text-primary" />
              Pourquoi choisir Zigouplex ?
            </h2>
            <p>
              Zigouplex est bien plus qu'une simple boisson. C'est une solution naturelle et efficace pour améliorer votre bien-être quotidien. Voici pourquoi vous devriez choisir Zigouplex :
              <br/>
              Ingrédients de qualité : Zigouplex utilise uniquement des ingrédients naturels de haute qualité, sélectionnés pour leurs bienfaits prouvés.
              <br/>
              Efficacité prouvée : Des études scientifiques montrent que Zigouplex aide à réduire le stress, améliorer l'énergie et soutenir le métabolisme.
              <br/>
              Engagement éthique : Zigouplex s'engage à respecter l'environnement avec des pratiques durables et des emballages éco-responsables.
              <br/>
              Facilité d'intégration : Zigouplex s'intègre facilement dans votre routine quotidienne, vous offrant une solution pratique pour améliorer votre santé.
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