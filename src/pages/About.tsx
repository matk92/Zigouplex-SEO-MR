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
        <p className="mb-4">Zigouplex est né de la passion commune de deux amis nutritionnistes, animés par le désir de créer des compléments alimentaires à la fois naturels et réellement efficaces. Après plusieurs années de recherche rigoureuse et de développement, nous avons fièrement lancé notre première boisson énergisante en 2020. Ce lancement a marqué le début d’une aventure dédiée à la santé et au bien-être.</p>
        <img src="/img/img-nutritionnistes.webp" alt="Deux amis nutritionnistes" className="w-1/2"/>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Notre Mission</h2>
        <p className="mb-4">Chez Zigouplex, notre mission est claire : offrir des compléments alimentaires d’une qualité exceptionnelle, formulés à partir d’ingrédients 100% naturels et validés scientifiquement. Nous avons à cœur d’améliorer durablement la santé et le bien-être de chaque personne qui nous fait confiance.</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Nos Engagements</h2>
        <ul className="list-disc pl-6">
          <li>Ingrédients purs et biologiques : Nous sélectionnons soigneusement des ingrédients 100% naturels, issus de l’agriculture biologique.</li>
          <li>Respect de l’environnement : Nos processus de fabrication sont pensés pour réduire leur impact écologique.</li>
          <li>Transparence absolue : Nous partageons tout sur nos ingrédients et nos méthodes, parce que vous méritez de savoir.</li>
          <li>Innovation constante : Nous investissons en permanence dans la recherche pour perfectionner nos produits et répondre à vos besoins.</li>
        </ul>
      </section>
      <p className="mb-4">Chez Zigouplex, chaque détail compte. Nous nous engageons à vous offrir des solutions saines, naturelles et respectueuses, parce que votre bien-être est au cœur de nos priorités.</p>
    </div>
  )
}

