import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { NewsletterForm } from '../components/NewsletterForm'
import { CommentSection } from '../components/CommentSection'
import { RelatedArticles } from '../components/RelatedArticles'
import { SocialShareButtons } from '../components/SocialShareButtons'
import { ArticleMeta } from '../components/ArticleMeta'
import { TableOfContents } from '../components/TableOfContents'
import { Leaf, Shield, Apple, Heart, Sparkles, Zap } from 'lucide-react'
import { useEffect, useRef } from 'react'

const tocItems = [
  { id: "carences", title: "Combler les carences nutritionnelles" },
  { id: "immunite", title: "Booster le système immunitaire" },
  { id: "digestion", title: "Améliorer la santé digestive" },
  { id: "coeur", title: "Soutenir la santé cardiovasculaire" },
  { id: "peau", title: "Favoriser une peau éclatante" },
  { id: "energie", title: "Augmenter l'énergie et réduire la fatigue" },
];

const relatedArticles = [
  {
    title: "Comment booster son énergie naturellement",
    slug: "booster-energie-naturellement"
  },
  {
    title: "Zigouplex vs les boissons énergisantes traditionnelles",
    slug: "zigouplex-vs-boissons-energisantes-traditionnelles"
  },
  {
    title: "Les Bienfaits de Zigouplex : Une Révolution Naturelle pour Votre Santé",
    slug: "les-bienfaits-de-zigouplex-par-dr-marlega"
  }
];

export default function BlogPostBienfaits() {
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
        <title>Les bienfaits des compléments alimentaires naturels - Zigouplex Blog</title>
        <meta name="description" content="Découvrez comment les compléments alimentaires naturels peuvent améliorer votre santé et votre bien-être au quotidien. Apprenez-en plus sur leurs avantages et leur utilisation." />
        <meta name="keywords" content="compléments alimentaires naturels, santé, bien-être, nutrition, Zigouplex" />
        <meta property="og:title" content="Les bienfaits des compléments alimentaires naturels - Zigouplex Blog" />
        <meta property="og:description" content="Découvrez comment les compléments alimentaires naturels peuvent améliorer votre santé et votre bien-être au quotidien." />
        <meta property="og:image" content="/images/complements-alimentaires.jpg" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Les bienfaits des compléments alimentaires naturels",
            "image": "/images/complements-alimentaires.jpg",
            "author": {
              "@type": "Person",
              "name": "Équipe Zigouplex"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Zigouplex",
              "logo": {
                "@type": "ImageObject",
                "url": "/logo.png"
              }
            },
            "datePublished": "2024-12-15",
            "dateModified": "2024-12-15"
          })}
        </script>
      </Helmet>
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold mb-4">Les bienfaits des compléments alimentaires naturels</CardTitle>
          <ArticleMeta readTime={5} author="Équipe Zigouplex" />
        </CardHeader>
        <CardContent className="prose max-w-none">
          <div className="relative w-full h-[400px] mb-6 overflow-hidden">
            <img 
              ref={imageRef}
              data-src="/img/complements-alimentaires.webp" 
              alt="Compléments alimentaires naturels" 
              className="w-full h-full object-cover rounded-lg shadow-md"
              loading="lazy"
              srcSet="/img/complements-alimentaires-small.webp 400w, /img/complements-alimentaires-medium.webp 800w, /img/complements-alimentaires.webp 1200w"
              sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, 1200px"
            />
          </div>
          
          <div className="bg-muted p-4 rounded-lg mb-6">
            <TableOfContents items={tocItems} />
          </div>
          
          <p className="text-lg leading-relaxed">
            Dans notre quête constante d'une vie plus saine, les compléments alimentaires naturels sont devenus des alliés précieux. Mais quels sont réellement leurs bienfaits ? Plongeons dans le monde fascinant de ces suppléments et découvrons comment ils peuvent améliorer notre santé au quotidien.
          </p>
          
          <Separator className="my-8" />
          
          <section>
            <h2 id="carences" className="flex items-center text-2xl font-semibold mb-4">
              <Leaf className="mr-2 text-primary" />
              1. Combler les carences nutritionnelles
            </h2>
            <p>
              Même avec une alimentation équilibrée, il peut être difficile d'obtenir tous les nutriments nécessaires. Les compléments alimentaires naturels peuvent aider à combler ces lacunes, assurant que notre corps reçoit tous les éléments essentiels pour fonctionner de manière optimale.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 id="immunite" className="flex items-center text-2xl font-semibold mb-4">
              <Shield className="mr-2 text-primary" />
              2. Booster le système immunitaire
            </h2>
            <p>
              Certains compléments, comme la vitamine C, le zinc et l'échinacée, sont reconnus pour leur capacité à renforcer nos défenses naturelles. Une prise régulière peut aider à prévenir les infections et à réduire la durée des maladies.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 id="digestion" className="flex items-center text-2xl font-semibold mb-4">
              <Apple className="mr-2 text-primary" />
              3. Améliorer la santé digestive
            </h2>
            <p>
              Les probiotiques et les fibres présents dans de nombreux compléments naturels favorisent une flore intestinale saine. Cela peut se traduire par une meilleure digestion, une absorption accrue des nutriments et même une amélioration de l'humeur.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 id="coeur" className="flex items-center text-2xl font-semibold mb-4">
              <Heart className="mr-2 text-primary" />
              4. Soutenir la santé cardiovasculaire
            </h2>
            <p>
              Des suppléments comme l'oméga-3, le coenzyme Q10 et l'ail peuvent contribuer à maintenir un cœur en bonne santé en régulant la pression artérielle et en réduisant le mauvais cholestérol.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 id="peau" className="flex items-center text-2xl font-semibold mb-4">
              <Sparkles className="mr-2 text-primary" />
              5. Favoriser une peau éclatante
            </h2>
            <p>
              Les antioxydants présents dans de nombreux compléments naturels, tels que la vitamine E et le sélénium, peuvent aider à lutter contre les signes du vieillissement et à maintenir une peau saine et radieuse.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 id="energie" className="flex items-center text-2xl font-semibold mb-4">
              <Zap className="mr-2 text-primary" />
              6. Augmenter l'énergie et réduire la fatigue
            </h2>
            <p>
              Des suppléments comme le ginseng, la rhodiola et les vitamines du groupe B peuvent aider à combattre la fatigue et à booster les niveaux d'énergie naturellement, sans les effets secondaires des stimulants artificiels.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
            <p>
              Les compléments alimentaires naturels offrent une multitude de bienfaits pour notre santé et notre bien-être. Cependant, il est important de se rappeler qu'ils ne remplacent pas une alimentation équilibrée et un mode de vie sain. Avant d'intégrer tout nouveau supplément à votre routine, consultez un professionnel de santé pour vous assurer qu'il convient à vos besoins spécifiques.
            </p>
            <p className="mt-4">
              Chez Zigouplex, nous nous engageons à fournir des compléments alimentaires naturels de la plus haute qualité, conçus pour soutenir votre santé de manière holistique. Découvrez notre gamme de produits et faites le premier pas vers une vie plus saine et plus équilibrée.
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

