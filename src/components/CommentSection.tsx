import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function CommentSection() {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-4">Commentaires</h3>
      <form className="space-y-4">
        <Input placeholder="Votre nom" />
        <Textarea placeholder="Votre commentaire" />
        <Button type="submit">Poster le commentaire</Button>
      </form>
      {/* Affichage des commentaires existants ici */}
    </div>
  )
}

