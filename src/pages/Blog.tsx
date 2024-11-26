import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const blogPosts = [
  { id: 1, title: "Les bienfaits des compléments alimentaires naturels", excerpt: "Découvrez comment les compléments alimentaires naturels peuvent améliorer votre santé et votre bien-être au quotidien.", date: "2023-05-15" },
  { id: 2, title: "Comment booster son énergie naturellement", excerpt: "Apprenez les meilleures techniques pour augmenter votre niveau d'énergie sans avoir recours à des stimulants artificiels.", date: "2023-05-10" },
  { id: 3, title: "Zigouplex vs les boissons énergisantes traditionnelles", excerpt: "Comparez les avantages de Zigouplex par rapport aux boissons énergisantes classiques et découvrez pourquoi le naturel l'emporte.", date: "2023-05-05" },
]

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Blog Zigouplex - Articles sur la nutrition et le bien-être</title>
        <meta name="description" content="Explorez notre blog pour des articles informatifs sur les compléments alimentaires, la nutrition, et les astuces pour améliorer votre bien-être au quotidien." />
      </Helmet>
      <h1 className="text-4xl font-bold mb-6">Blog Zigouplex</h1>
      <div className="grid gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="border-b pb-6">
            <h2 className="text-2xl font-semibold mb-2">
              <Link to={`/blog/${post.id}`} className="hover:text-green-600 transition-colors">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="flex justify-between items-center">
              <Link to={`/blog/${post.id}`} className="text-green-600 hover:underline">
                Lire la suite
              </Link>
              <span className="text-sm text-gray-500">{post.date}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

