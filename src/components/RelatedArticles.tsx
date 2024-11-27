import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface RelatedArticle {
  title: string;
  slug: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-4">Articles connexes</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {articles.map((article) => (
          <Card key={article.slug}>
            <CardHeader>
              <CardTitle className="text-lg">{article.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Link to={`/blog/${article.slug}`} className="text-primary hover:underline">Lire l'article</Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

