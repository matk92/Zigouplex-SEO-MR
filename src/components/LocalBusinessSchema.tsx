import { Helmet } from 'react-helmet-async'

interface LocalBusinessSchemaProps {
  name: string
  description: string
  address: string
  postalCode: string
  addressLocality: string
  addressCountry: string
  telephone: string
  url: string
  priceRange: string
  image: string
}

export default function LocalBusinessSchema({ name, description, address, postalCode, addressLocality, addressCountry, telephone, url, priceRange, image }: LocalBusinessSchemaProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": name,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address,
      "postalCode": postalCode,
      "addressLocality": addressLocality,
      "addressCountry": addressCountry
    },
    "telephone": telephone,
    "url": url,
    "priceRange": priceRange,
    "image": image
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  )
}

