import { Helmet } from 'react-helmet-async'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Ici, vous ajouteriez la logique pour envoyer le formulaire
    console.log('Formulaire soumis:', formData)
    // Réinitialiser le formulaire après soumission
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Contactez Zigouplex - Service client et support</title>
        <meta name="description" content="Besoin d'aide ou d'informations sur nos produits Zigouplex ? Contactez notre équipe dédiée. Nous sommes là pour répondre à toutes vos questions." />
      </Helmet>
      <h1 className="text-4xl font-bold mb-6">Contactez-nous</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Nos coordonnées</h2>
          <p className="mb-2">Email: contact@zigouplex.com</p>
          <p className="mb-2">Téléphone: +33 1 23 45 67 89</p>
          <p className="mb-2">Adresse: 123 Rue de l'Innovation, 75001 Paris, France</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 border rounded"
            ></textarea>
          </div>
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  )
}

