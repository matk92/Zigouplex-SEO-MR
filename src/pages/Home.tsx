import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zigouplex",
    "description": "Zigouplex est la solution innovante qui révolutionne votre quotidien.",
    "url": "https://www.zigouplex.com",
    "logo": "https://www.zigouplex.com/logo.png",
    "sameAs": [
      "https://www.facebook.com/zigouplex",
      "https://www.twitter.com/zigouplex",
      "https://www.linkedin.com/company/zigouplex"
    ]
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Zigouplex - Votre solution innovante pour simplifier votre vie</title>
        <meta name="description" content="Découvrez Zigouplex, la plateforme révolutionnaire qui transforme votre façon de travailler et de vivre. Simplifiez votre quotidien avec nos outils intelligents." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <h1 className="text-4xl font-bold mb-6">Bienvenue sur Zigouplex</h1>
      <p className="text-xl mb-4">
        Zigouplex est la solution innovante qui révolutionne votre quotidien. 
        Que vous soyez un particulier ou une entreprise, notre plateforme s'adapte à vos besoins.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <Card>
          <CardHeader>
            <CardTitle>Simplicité</CardTitle>
            <CardDescription>Une interface intuitive</CardDescription>
          </CardHeader>
          <CardContent>
            Notre plateforme est conçue pour être facile à utiliser, même pour les débutants.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Productivité</CardTitle>
            <CardDescription>Des outils puissants</CardDescription>
          </CardHeader>
          <CardContent>
            Boostez votre efficacité grâce à nos fonctionnalités avancées et personnalisables.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Sécurité</CardTitle>
            <CardDescription>Protection de vos données</CardDescription>
          </CardHeader>
          <CardContent>
            Vos informations sont en sécurité avec notre système de cryptage de pointe.
          </CardContent>
        </Card>
      </div>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Comment Zigouplex peut-il vous aider ?</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Gestion de projets simplifiée</li>
        <li>Collaboration en temps réel</li>
        <li>Automatisation des tâches répétitives</li>
        <li>Analyses et rapports détaillés</li>
        <li>Intégration avec vos outils favoris</li>
      </ul>
      <div className="mt-8 text-center">
        <Link to="/contact">
          <Button size="lg">
            Commencez gratuitement
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Home

