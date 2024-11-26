import { Helmet } from 'react-helmet-async'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>À propos de Zigouplex - Notre histoire et notre mission</title>
        <meta name="description" content="Découvrez l'histoire de Zigouplex, notre mission pour une nutrition saine et nos engagements en matière de qualité et de durabilité." />
      </Helmet>
      <h1 className="text-4xl font-bold mb-6">À propos de Zigouplex</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Notre Histoire</h2>
        <p className="mb-4">Zigouplex est né de la passion de deux amis nutritionnistes qui cherchaient à créer un complément alimentaire naturel et efficace. Après des années de recherche et de développement, nous avons lancé notre première boisson énergisante en 2020.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Notre Mission</h2>
        <p className="mb-4">Chez Zigouplex, notre mission est de fournir des compléments alimentaires de haute qualité, 100% naturels et scientifiquement prouvés pour améliorer la santé et le bien-être de nos clients.</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Nos Engagements</h2>
        <ul className="list-disc pl-6">
          <li>Ingrédients 100% naturels et biologiques</li>
          <li>Processus de fabrication respectueux de l'environnement</li>
          <li>Transparence totale sur nos ingrédients et nos méthodes</li>
          <li>Recherche continue pour améliorer nos produits</li>
        </ul>
      </section>
    </div>
  )
}

