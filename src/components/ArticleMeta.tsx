import { Clock, User } from 'lucide-react'

interface ArticleMetaProps {
  readTime: number;
  author: string;
}

export function ArticleMeta({ readTime, author }: ArticleMetaProps) {
  return (
    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
      <div className="flex items-center">
        <Clock className="mr-1 h-4 w-4" />
        <span>{readTime} min de lecture</span>
      </div>
      <div className="flex items-center">
        <User className="mr-1 h-4 w-4" />
        <span>{author}</span>
      </div>
    </div>
  )
}

