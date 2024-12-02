import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from 'lucide-react'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Demande de réinitialisation du mot de passe pour:', email)
  }

  return (
    <div 
    className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-primary/5 to-primary/10"
    style={{ backgroundImage: 'url(/img/mountain.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <Helmet>
        <title>Mot de passe oublié - Zigouplex</title>
        <meta name="description" content="Réinitialisez votre mot de passe Zigouplex." />
      </Helmet>
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Mot de passe oublié</CardTitle>
          <CardDescription className="text-center">
            Entrez votre adresse e-mail pour réinitialiser votre mot de passe
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
            <Button type="submit" className="w-full">Réinitialiser le mot de passe</Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            Vous vous souvenez de votre mot de passe ?{" "}
            <Link to="/login" className="text-primary hover:underline font-medium">
              Connectez-vous
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

