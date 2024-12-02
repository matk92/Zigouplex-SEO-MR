import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Lock } from 'lucide-react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Tentative de connexion avec:', { email, password })
  }

  return (
    <div 
      className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-primary/5 to-primary/10"
      style={{ backgroundImage: 'url(/img/mountain.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <Helmet>
        <title>Connexion - Zigouplex</title>
        <meta name="description" content="Connectez-vous à votre compte Zigouplex pour accéder à nos produits et services." />
      </Helmet>
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Connexion</CardTitle>
          <CardDescription className="text-center">
            Entrez vos identifiants pour accéder à votre compte
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
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
            <Button type="submit" className="w-full">Se connecter</Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2 text-center">
          <Link to="/forgot-password" className="text-sm text-primary hover:underline">
            Mot de passe oublié ?
          </Link>
          <p className="text-sm text-muted-foreground">
            Pas encore de compte ?{" "}
            <Link to="/register" className="text-primary hover:underline font-medium">
              Créer un compte
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}