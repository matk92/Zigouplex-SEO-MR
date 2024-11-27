import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin } from 'lucide-react'

export function SocialShareButtons() {
  return (
    <div className="flex space-x-4 my-6">
      <Button variant="outline" size="icon">
        <Facebook className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon">
        <Twitter className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon">
        <Linkedin className="h-4 w-4" />
      </Button>
    </div>
  )
}

