import { Helmet } from 'react-helmet-async'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

const Services = () => {
  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Gestion de projets et collaboration",
    "provider": {
      "@type": "Organization",
      "name": "Zigouplex"
    },
    "description": "Zigouplex offre des services de gestion de projets, de collaboration en temps réel et d'automatisation des tâches.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Services Zigouplex - Gestion de projets et collaboration simplifiées</title>
        <meta name="description" content="Découvrez les services offerts par Zigouplex : gestion de projets, collaboration en temps réel, automatisation des tâches et bien plus." />
        <script type="application/ld+json">
          {JSON.stringify(servicesStructuredData)}
        </script>
      </Helmet>
      <h1 className="text-4xl font-bold mb-6">Nos Services</h1>
      <p className="text-xl mb-8">
        Zigouplex offre une gamme complète de services pour optimiser votre productivité et simplifier votre travail au quotidien.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Gestion de Projets</CardTitle>
            <CardDescription>Simplifiez la planification et le suivi</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>Tableaux de bord personnalisables</li>
              <li>Suivi des tâches en temps réel</li>
              <li>Gestion des ressources</li>
              <li>Rapports et analyses</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Collaboration en Temps Réel</CardTitle>
            <CardDescription>Travaillez ensemble, où que vous soyez</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>Édition de documents collaborative</li>
              <li>Messagerie instantanée</li>
              <li>Vidéoconférences intégrées</li>
              <li>Partage de fichiers sécurisé</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Automatisation des Tâches</CardTitle>
            <CardDescription>Gagnez du temps sur les tâches répétitives</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>Création de workflows personnalisés</li>
              <li>Intégrations avec vos outils favoris</li>
              <li>Notifications intelligentes</li>
              <li>Rapports automatisés</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Analyse et Reporting</CardTitle>
            <CardDescription>Prenez des décisions éclairées</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>Tableaux de bord en temps réel</li>
              <li>Visualisations de données avancées</li>
              <li>Rapports personnalisables</li>
              <li>Prévisions et tendances</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <h2 className="text-3xl font-semibold mb-6">Témoignages Clients</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Marie Dupont</CardTitle>
            <CardDescription>CEO, TechStart</CardDescription>
          </CardHeader>
          <CardContent>
            "Zigouplex a complètement transformé notre façon de travailler. Nous sommes plus efficaces que jamais !"
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Jean Martin</CardTitle>
            <CardDescription>Freelance Designer</CardDescription>
          </CardHeader>
          <CardContent>
            "En tant que freelance, Zigouplex me permet de gérer tous mes projets et clients de manière centralisée. C'est un gain de temps incroyable."
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Services

