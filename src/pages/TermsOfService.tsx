import { Helmet } from 'react-helmet-async'

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Conditions d'utilisation - Zigouplex</title>
        <meta name="description" content="Lisez les conditions d'utilisation de Zigouplex pour comprendre vos droits et responsabilités lors de l'utilisation de nos services." />
      </Helmet>
      <h1 className="text-4xl font-bold mb-6 text-primary">Conditions d'utilisation</h1>
      <div className="prose max-w-none">
        <p>Dernière mise à jour : {new Date().toLocaleDateString()}</p>
        <h2>1. Acceptation des conditions</h2>
        <p>En accédant à ce site web, vous acceptez d'être lié par ces conditions d'utilisation, toutes les lois et réglementations applicables, et vous acceptez que vous êtes responsable du respect des lois locales applicables. Si vous n'acceptez pas l'une de ces conditions, il vous est interdit d'utiliser ou d'accéder à ce site.</p>
        <h2>2. Utilisation de la licence</h2>
        <p>La permission est accordée de télécharger temporairement une copie des matériaux (informations ou logiciels) sur le site web de Zigouplex pour une visualisation transitoire personnelle et non commerciale uniquement. Il s'agit de l'octroi d'une licence, et non d'un transfert de titre, et sous cette licence, vous ne pouvez pas :</p>
        <ul>
          <li>modifier ou copier les matériaux ;</li>
          <li>utiliser les matériaux à des fins commerciales ou pour toute présentation publique (commerciale ou non commerciale) ;</li>
          <li>tenter de décompiler ou de désosser tout logiciel contenu sur le site web de Zigouplex ;</li>
          <li>supprimer tout droit d'auteur ou autres notations de propriété des matériaux ; ou</li>
          <li>transférer les matériaux à une autre personne ou "miroir" les matériaux sur tout autre serveur.</li>
        </ul>
        <h2>3. Clause de non-responsabilité</h2>
        <p>Les matériaux sur le site web de Zigouplex sont fournis "tels quels". Zigouplex ne donne aucune garantie, expresse ou implicite, et décline et nie par la présente toutes les autres garanties, y compris, sans limitation, les garanties implicites ou conditions de qualité marchande, d'adéquation à un usage particulier, ou de non-violation de la propriété intellectuelle ou autre violation des droits.</p>
        <h2>4. Limitations</h2>
        <p>En aucun cas, Zigouplex ou ses fournisseurs ne seront responsables de tout dommage (y compris, sans limitation, les dommages pour perte de données ou de profit, ou en raison d'une interruption d'activité) découlant de l'utilisation ou de l'impossibilité d'utiliser les matériaux sur le site web de Zigouplex, même si Zigouplex ou un représentant autorisé de Zigouplex a été notifié oralement ou par écrit de la possibilité de tels dommages.</p>
        <h2>5. Révisions et errata</h2>
        <p>Les matériaux apparaissant sur le site web de Zigouplex peuvent inclure des erreurs techniques, typographiques ou photographiques. Zigouplex ne garantit pas que l'un des matériaux sur son site web est exact, complet ou à jour. Zigouplex peut apporter des modifications aux matériaux contenus sur son site web à tout moment sans préavis.</p>
        <h2>6. Liens</h2>
        <p>Zigouplex n'a pas examiné tous les sites liés à son site web et n'est pas responsable du contenu de ces sites liés. L'inclusion de tout lien n'implique pas l'approbation par Zigouplex du site. L'utilisation de tout site web lié est aux risques et périls de l'utilisateur.</p>
        <h2>7. Modifications des conditions d'utilisation du site</h2>
        <p>Zigouplex peut réviser ces conditions d'utilisation de son site web à tout moment sans préavis. En utilisant ce site web, vous acceptez d'être lié par la version alors en vigueur de ces conditions d'utilisation.</p>
      </div>
    </div>
  )
}

