import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-primary text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Zigouplex</Link>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Accueil</Link></li>
          <li><Link to="/about" className="hover:underline">À propos</Link></li>
          <li><Link to="/services" className="hover:underline">Services</Link></li>
          <li><Link to="/articles" className="hover:underline">Articles</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

