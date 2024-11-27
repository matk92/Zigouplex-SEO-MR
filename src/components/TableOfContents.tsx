import { Link } from 'react-router-dom'

interface TocItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <nav className="toc">
      <h2 className="text-lg font-semibold mb-2">Table des matières</h2>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <Link 
              to={`#${item.id}`} 
              className="text-primary hover:underline"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

