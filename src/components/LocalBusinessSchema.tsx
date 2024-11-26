import { Helmet } from 'react-helmet-async'

interface LocalBusinessSchemaProps {
  name: string
  description: string
  address: string
  telephone: string
  url: string
}

export default function LocalBusinessSchema({ name, description, address, telephone, url }: LocalBusinessSchemaProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": name,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address
    },
    "telephone": telephone,
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

