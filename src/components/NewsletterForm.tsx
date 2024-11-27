import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterForm() {
  return (
    <div className="bg-muted p-6 rounded-lg">
      <h3 className="text-2xl font-bold mb-4">Restez informé</h3>
      <p className="mb-4">Inscrivez-vous à notre newsletter pour recevoir nos derniers articles et conseils santé.</p>
      <form className="flex gap-4">
        <Input placeholder="Votre adresse e-mail" type="email" className="flex-grow" />
        <Button type="submit">S'inscrire</Button>
      </form>
    </div>
  )
}

