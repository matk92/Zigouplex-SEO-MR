import { Helmet } from 'react-helmet-async'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

const About = () => {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qu'est-ce que Zigouplex ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zigouplex est une plateforme innovante qui simplifie la gestion de projets et la collaboration pour les particuliers et les entreprises."
        }
      },
      {
        "@type": "Question",
        "name": "Comment Zigouplex protège-t-il mes données ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zigouplex utilise un cryptage de bout en bout et des protocoles de sécurité avancés pour garantir la protection de vos données."
        }
      },
      {
        "@type": "Question",
        "name": "Zigouplex est-il adapté aux petites entreprises ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, Zigouplex est conçu pour s'adapter à toutes les tailles d'entreprises, des freelances aux grandes corporations."
        }
      }
    ]
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>À propos de Zigouplex - Notre histoire et notre mission</title>
        <meta name="description" content="Découvrez l'histoire de Zigouplex, notre mission et comment nous révolutionnons la gestion de projets et la collaboration." />
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
      </Helmet>
      <h1 className="text-4xl font-bold mb-6">À propos de Zigouplex</h1>
      <p className="text-xl mb-4">
        Fondée en 2024, Zigouplex est née de la vision de simplifier la vie professionnelle et personnelle grâce à la technologie.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Notre Mission</h2>
      <p className="mb-4">
        Chez Zigouplex, notre mission est de fournir des outils intuitifs et puissants qui permettent aux individus et aux équipes de travailler plus efficacement, de collaborer sans effort et de réaliser leurs objectifs plus rapidement.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Nos Valeurs</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Innovation constante</li>
        <li>Satisfaction client</li>
        <li>Transparence et intégrité</li>
        <li>Respect de la vie privée</li>
        <li>Développement durable</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Foire Aux Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Qu'est-ce que Zigouplex ?</AccordionTrigger>
          <AccordionContent>
            Zigouplex est une plateforme innovante qui simplifie la gestion de projets et la collaboration pour les particuliers et les entreprises.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Comment Zigouplex protège-t-il mes données ?</AccordionTrigger>
          <AccordionContent>
            Zigouplex utilise un cryptage de bout en bout et des protocoles de sécurité avancés pour garantir la protection de vos données.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Zigouplex est-il adapté aux petites entreprises ?</AccordionTrigger>
          <AccordionContent>
            Oui, Zigouplex est conçu pour s'adapter à toutes les tailles d'entreprises, des freelances aux grandes corporations.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default About

