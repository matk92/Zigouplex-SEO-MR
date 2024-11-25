import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Toast } from "@/components/ui/toast"

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e:
React.FormEvent) => {
    e.preventDefault()
    // Ici, vous implémenteriez la logique d'envoi du formulaire
    console.log('Formulaire soumis:', { name, email, message })
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    })
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Contactez Zigouplex - Nous sommes à votre écoute</title>
        <meta name="description" content="Vous avez des questions sur Zigouplex ? Contactez-nous ! Notre équipe est là pour vous aider et répondre à toutes vos interrogations." />
      </Helmet>
      <h1 className="text-4xl font-bold mb-6">Contactez-nous</h1>
      <p className="text-xl mb-8">
        Vous avez des questions ? N'hésitez pas à nous contacter. Notre équipe est là pour vous aider.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Nos coordonnées</h2>
          <p className="mb-2">Email : contact@zigouplex.com</p>
          <p className="mb-2">Téléphone : +33 1 23 45 67 89</p>
          <p className="mb-2">Adresse : 123 Rue de l'Innovation, 75001 Paris, France</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <Button type="submit">Envoyer</Button>
        </form>
      </div>
    </div>
  )
}

export default Contact

