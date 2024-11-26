import { Helmet } from 'react-helmet-async'

interface ProductSchemaProps {
  name: string
  description: string
  image: string
  price: number
  currency: string
}

export default function ProductSchema({ name, description, image, price, currency }: ProductSchemaProps) {
  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": name,
    "description": description,
    "image": image,
    "offers": {
      "@type": "Offer",
      "priceCurrency": currency,
      "price": price,
      "availability": "https://schema.org/InStock"
    }
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  )
}

