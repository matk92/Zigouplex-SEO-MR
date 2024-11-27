import { Helmet } from 'react-helmet-async'

interface BlogPostSchemaProps {
  title: string
  description: string
  datePublished: string
  author: string
  url: string
}

export default function BlogPostSchema({ title, description, datePublished, author, url }: BlogPostSchemaProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "datePublished": datePublished,
    "author": {
      "@type": "Person",
      "name": author
    },
    "url": url
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  )
}