import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SearchBar } from '../components/SearchBar'

interface BlogPost {
  title: string;
  description: string;
  date: string;
  slug: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Les bienfaits des compléments alimentaires naturels",
    description: "Découvrez comment les compléments alimentaires naturels peuvent améliorer votre santé et votre bien-être au quotidien.",
    date: "2024-05-15",
    slug: "bienfaits-complements-alimentaires-naturels",
    image: "/img/complements-alimentaires.webp"
  },
  {
    title: "Comment booster son énergie naturellement",
    description: "Apprenez les meilleures techniques pour augmenter votre niveau d'énergie sans avoir recours à des stimulants artificiels.",
    date: "2024-05-10",
    slug: "booster-energie-naturellement",
    image: "/img/boost-energie.webp"
  },
  {
    title: "Zigouplex vs les boissons énergisantes traditionnelles",
    description: "Comparez les avantages de Zigouplex par rapport aux boissons énergisantes classiques et découvrez pourquoi le naturel l'emporte.",
    date: "2024-05-05",
    slug: "zigouplex-vs-boissons-energisantes-traditionnelles",
    image: "/img/zigouplex-vs-traditional.webp"
  },
  {
  title: "Les Bienfaits de Zigouplex : Une Révolution Naturelle pour Votre Santé",
  description: "Dans un monde où le stress, les rythmes effrénés, et les choix alimentaires discutables mettent à mal notre bien-être, il est crucial de se tourner vers des solutions simples, naturelles et efficaces. C’est dans cette optique que je me penche aujourd’hui sur une boisson qui a attiré mon attention : Zigouplex.",
  date: "2024-11-28",
  slug: "les-bienfaits-de-zigouplex-par-dr-marlega",
  image: "/img/Les-Bienfaits-de-Zigouplex-Par-Dr-Marlega.webp"
},
{
  title: "Les Bienfaits de la Nature - Zigouplex Blog",
  description: "Découvrez les bienfaits de la nature pour votre santé et bien-être.",
  date: "2024-12-08",
  slug: "Les-Bienfaits-de-la-Nature-Zigouplex-Blog",
  image: "/img/Les_Bienfaits_de_la_Nature_Zigouplex_Blog.webp"
}
];

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Blog Zigouplex - Conseils et astuces pour une vie saine</title>
        <meta name="description" content="Découvrez nos articles sur les compléments alimentaires naturels, les techniques pour booster votre énergie et les avantages de Zigouplex." />
        <meta name="keywords" content="blog santé, compléments alimentaires, énergie naturelle, bien-être, Zigouplex" />
      </Helmet>
      <h1 className="text-3xl font-bold mb-8 text-center">Blog Zigouplex</h1>
      <div className="mb-8 flex justify-center">
        <SearchBar />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="flex flex-col">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{new Date(post.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{post.description}</p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button asChild>
                <Link to={`/blog/${post.slug}`}>Lire l'article complet</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

