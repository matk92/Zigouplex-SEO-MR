import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Mail, Lock } from 'lucide-react'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Tentative d\'inscription avec:', { name, email, password })
  }

  return (
    <div 
    className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-primary/5 to-primary/10"
    style={{ backgroundImage: 'url(/img/mountain.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <Helmet>
        <title>Inscription - Zigouplex</title>
        <meta name="description" content="Créez votre compte Zigouplex pour accéder à nos produits et services." />
      </Helmet>
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Inscription</CardTitle>
          <CardDescription className="text-center">
            Créez votre compte pour commencer votre parcours vers une meilleure santé
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                Nom
              </Label>
              <Input 
                id="name" 
                placeholder="Votre nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="vous@exemple.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="flex items-center">
                <Lock className="w-4 h-4 mr-2" />
                Mot de passe
              </Label>
              <Input 
                id="password" 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
                className="w-full"
              />
            </div>
            <Button type="submit" className="w-full">S'inscrire</Button>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground text-center w-full">
            Vous avez déjà un compte ?{" "}
            <Link to="/login" className="text-primary hover:underline font-medium">
              Connectez-vous
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

