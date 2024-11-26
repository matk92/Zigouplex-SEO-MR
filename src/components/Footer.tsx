import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">À propos de Zigouplex</h3>
            <p className="text-sm">Zigouplex est votre partenaire pour une vie saine et équilibrée. Nos compléments alimentaires naturels sont conçus pour booster votre énergie et votre bien-être au quotidien.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:underline">Accueil</Link></li>
              <li><Link to="/products" className="hover:underline">Produits</Link></li>
              <li><Link to="/about" className="hover:underline">À propos</Link></li>
              
<li><Link to="/blog" className="hover:underline">Blog</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Informations légales</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy-policy" className="hover:underline">Politique de confidentialité</Link></li>
              <li><Link to="/terms-of-service" className="hover:underline">Conditions d'utilisation</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Zigouplex. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

