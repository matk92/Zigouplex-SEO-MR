import { Helmet } from 'react-helmet-async'

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Politique de confidentialité - Zigouplex</title>
        <meta name="description" content="Découvrez comment Zigouplex protège vos données personnelles et respecte votre vie privée." />
      </Helmet>
      <h1 className="text-4xl font-bold mb-6 text-primary">Politique de confidentialité</h1>
      <div className="prose max-w-none">
        <p>Dernière mise à jour : {new Date().toLocaleDateString()}</p>
        <h2>1. Collecte des informations</h2>
        <p>Nous recueillons des informations lorsque vous vous inscrivez sur notre site, passez une commande, ou remplissez un formulaire. Les informations recueillies incluent votre nom, votre adresse e-mail, votre numéro de téléphone, et/ou votre carte de crédit.</p>
        <h2>2. Utilisation des informations</h2>
        <p>Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :</p>
        <ul>
          <li>Personnaliser votre expérience et répondre à vos besoins individuels</li>
          <li>Fournir un contenu publicitaire personnalisé</li>
          <li>Améliorer notre site Web</li>
          <li>Améliorer le service client et vos besoins de prise en charge</li>
          <li>Vous contacter par e-mail</li>
          <li>Administrer un concours, une promotion, ou une enquête</li>
        </ul>
        <h2>3. Confidentialité du commerce en ligne</h2>
        <p>Nous sommes les seuls propriétaires des informations recueillies sur ce site. Vos informations personnelles ne seront pas vendues, échangées, transférées, ou données à une autre société pour n'importe quelle raison, sans votre consentement, en dehors de ce qui est nécessaire pour répondre à une demande et/ou une transaction.</p>
        <h2>4. Divulgation à des tiers</h2>
        <p>Nous ne vendons, n'échangeons et ne transférons pas vos informations personnelles identifiables à des tiers. Cela ne comprend pas les tierce parties de confiance qui nous aident à exploiter notre site Web ou à mener nos affaires, tant que ces parties conviennent de garder ces informations confidentielles.</p>
        <h2>5. Protection des informations</h2>
        <p>Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons un cryptage à la pointe de la technologie pour protéger les informations sensibles transmises en ligne. Nous protégeons également vos informations hors ligne.</p>
        <h2>6. Consentement</h2>
        <p>En utilisant notre site, vous consentez à notre politique de confidentialité.</p>
      </div>
    </div>
  )
}

