import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { NewsletterForm } from '../components/NewsletterForm'
import { CommentSection } from '../components/CommentSection'
import { RelatedArticles } from '../components/RelatedArticles'
import { SocialShareButtons } from '../components/SocialShareButtons'
import { ArticleMeta } from '../components/ArticleMeta'
import { TableOfContents } from '../components/TableOfContents'
import { Sparkles, Target, Leaf, Zap, Heart } from 'lucide-react'

const tocItems = [
  { id: "bilan", title: "Bilan énergétique de 2024" },
  { id: "resolutions", title: "Résolutions pour une année 2025 pleine d'énergie" },
  { id: "zigouplex", title: "Comment Zigouplex peut vous aider en 2025" },
  { id: "conseils", title: "Conseils pour maintenir votre énergie toute l'année" },
  { id: "nouveautes", title: "Les nouveautés Zigouplex pour 2025" },
];

const relatedArticles = [
  {
    title: "Comment booster son énergie naturellement",
    slug: "booster-energie-naturellement"
  },
  {
    title: "Les bienfaits des compléments alimentaires naturels",
    slug: "bienfaits-complements-alimentaires-naturels"
  }
];

export default function BlogPostNewYear2025() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Helmet>
        <title>2025 : Une année pleine d'énergie avec Zigouplex | Blog Zigouplex</title>
        <meta name="description" content="Découvrez comment faire de 2025 votre année la plus énergique avec Zigouplex. Conseils, résolutions et nouveautés pour une santé optimale." />
        <meta property="og:title" content="2025 : Une année pleine d'énergie avec Zigouplex" />
        <meta property="og:description" content="Faites de 2025 votre meilleure année grâce aux conseils et produits Zigouplex." />
        <meta property="og:image" content="/img/new-year-2025.webp" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "2025 : Une année pleine d'énergie avec Zigouplex",
            "image": "/img/new-year-2025.webp",
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
            "datePublished": "2025-01-06",
            "dateModified": "2025-01-06"
          })}
        </script>
      </Helmet>

      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold mb-4">2025 : Une année pleine d'énergie avec Zigouplex</CardTitle>
          <ArticleMeta readTime={7} author="Équipe Zigouplex" />
        </CardHeader>
        <CardContent className="prose max-w-none">
          <img 
            src="/img/new-year-2025.webp" 
            alt="Célébration du Nouvel An 2025" 
            className="w-full h-auto rounded-lg mb-6 shadow-md"
          />
          
          <div className="bg-muted p-4 rounded-lg mb-6">
            <TableOfContents items={tocItems} />
          </div>
          
          <p className="text-lg leading-relaxed">
            Alors que nous nous apprêtons à tourner la page de 2024, il est temps de réfléchir à nos objectifs et aspirations pour la nouvelle année. Chez Zigouplex, nous croyons que la clé d'une vie épanouie réside dans une énergie stable et durable. Découvrons ensemble comment faire de 2025 votre année la plus dynamique et équilibrée !
          </p>
          
          <Separator className="my-8" />
          
          <section>
            <h2 id="bilan" className="flex items-center text-2xl font-semibold mb-4">
              <Sparkles className="mr-2 text-primary" />
              Bilan énergétique de 2024
            </h2>
            <p>
              Avant de nous projeter vers l'avenir, prenons un moment pour réfléchir à notre année 2024. Quels ont été vos pics d'énergie ? Vos moments de fatigue ? Identifier ces patterns nous aide à mieux comprendre nos besoins et à ajuster nos habitudes pour une vitalité optimale.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 id="resolutions" className="flex items-center text-2xl font-semibold mb-4">
              <Target className="mr-2 text-primary" />
              Résolutions pour une année 2025 pleine d'énergie
            </h2>
            <p>
              Pour 2025, concentrons-nous sur des résolutions qui favorisent une énergie durable :
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>Adopter une routine de sommeil régulière</li>
              <li>Intégrer plus d'aliments énergisants dans notre alimentation</li>
              <li>Pratiquer une activité physique régulière</li>
              <li>Apprendre à gérer le stress efficacement</li>
              <li>Rester hydraté tout au long de la journée</li>
            </ul>
          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 id="zigouplex" className="flex items-center text-2xl font-semibold mb-4">
              <Leaf className="mr-2 text-primary" />
              Comment Zigouplex peut vous aider en 2025
            </h2>
            <p>
              Nos compléments alimentaires naturels sont conçus pour soutenir votre vitalité au quotidien. Que vous choisissiez Zigouplex Energy pour un boost matinal, Zigouplex Focus pour rester concentré au travail, ou Zigouplex Relax pour une récupération optimale, notre gamme s'adapte à vos besoins tout au long de la journée.
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 id="conseils" className="flex items-center text-2xl font-semibold mb-4">
              <Zap className="mr-2 text-primary" />
              Conseils pour maintenir votre énergie toute l'année
            </h2>
            <p>
              Voici quelques astuces pour garder votre énergie au top en 2025 :
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>Commencez chaque journée avec un verre d'eau et une dose de Zigouplex Energy</li>
              <li>Faites des pauses régulières pour vous étirer et vous oxygéner</li>
              <li>Privilégiez une alimentation riche en fruits, légumes et protéines maigres</li>
              <li>Pratiquez la méditation ou la respiration profonde pour gérer le stress</li>
              <li>Restez connecté à la nature : une promenade quotidienne peut faire des merveilles</li>
            </ul>
          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 id="nouveautes" className="flex items-center text-2xl font-semibold mb-4">
              <Heart className="mr-2 text-primary" />
              Les nouveautés Zigouplex pour 2025
            </h2>
            <p>
              Nous sommes ravis de vous annoncer que 2025 verra le lancement de nouveaux produits Zigouplex, toujours dans l'optique de vous offrir le meilleur de la nature pour votre bien-être. Restez à l'écoute pour découvrir nos innovations énergisantes !
            </p>
          </section>
          
          <Separator className="my-8" />
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
            <p>
              2025 s'annonce comme une année pleine de promesses et d'opportunités. Avec Zigouplex à vos côtés, vous avez tous les outils pour faire de cette nouvelle année la plus énergique et épanouissante de votre vie. Ensemble, relevons le défi d'une vie saine, équilibrée et pleine de vitalité !
            </p>
            <p className="mt-4">
              Toute l'équipe Zigouplex vous souhaite une merveilleuse année 2025, riche en énergie positive et en accomplissements !
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

