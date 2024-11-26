import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import OptimizedImage from '../components/OptimizedImage'

interface Article {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
}

const articles: Article[] = [
  {
    id: "1",
    title: "Comment Zigouplex révolutionne la gestion de projet",
    description: "Découvrez comment notre plateforme transforme la collaboration et booste la productivité des équipes.",
    image: "/img/article1.webp?height=200&width=400",
    date: "2024-11-28"
  },
  {
    id: "2",
    title: "Les meilleures pratiques pour une collaboration efficace à distance",
    description: "Apprenez à maximiser l'efficacité de votre équipe distante avec les outils de Zigouplex.",
    image: "/img/article2.webp?height=200&width=400",
    date: "2024-11-29"
  },
  {
    id: "3",
    title: "L'importance de l'automatisation dans la gestion de projet moderne",
    description: "Explorez comment l'automatisation de Zigouplex peut vous faire gagner du temps et réduire les erreurs.",
    image: "/placeholder.svg?height=200&width=400",
    date: "2024-11-30"
  },
  {
    id: "4",
    title: "Sécurité des données : pourquoi c'est crucial pour votre entreprise",
    description: "Comprendre l'importance de la sécurité des données et comment Zigouplex protège vos informations.",
    image: "/placeholder.svg?height=200&width=400",
    date: "2024-12-01"
  }
]

const Articles = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Articles Zigouplex - Insights sur la gestion de projet et la collaboration</title>
        <meta name="description" content="Découvrez nos articles sur la gestion de projet, la collaboration à distance, l'automatisation et la sécurité des données avec Zigouplex." />
        <link rel="canonical" href="https://www.zigouplex.com/articles" />
      </Helmet>
      <h1 className="text-4xl font-bold mb-6">Articles Zigouplex</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <Card key={article.id} className="flex flex-col">
            <CardHeader>
              <OptimizedImage
                src={article.image}
                alt={article.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="flex-grow">
              <CardTitle className="text-xl mb-2">{article.title}</CardTitle>
              <CardDescription>{article.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">{article.date}</span>
              <Button asChild>
                <Link to={`/articles/${article.id}`}>Lire plus</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Articles

