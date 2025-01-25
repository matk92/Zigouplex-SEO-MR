'use client'

import * as React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Cart } from './Cart'
import { Menu, UserCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const SheetContext = React.createContext<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isOpen: false,
  setIsOpen: () => {},
});

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

const MobileMenu = () => {
  const { isOpen, setIsOpen } = React.useContext(SheetContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (to: string) => {
    setIsOpen(false);
    navigate(to);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="p-0 lg:hidden" aria-label="Toggle menu">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4">
          <Link to="/" className="text-2xl font-bold text-primary" onClick={() => handleLinkClick('/')}>Zigouplex</Link>
          <NavigationMenu orientation="vertical">
            <NavigationMenuList className="flex-col items-start">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Produits</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                    <ListItem href="/products" title="Tous les produits" onClick={() => handleLinkClick('/products')}>
                      Découvrez notre gamme de compléments alimentaires naturels
                    </ListItem>
                    <ListItem href="/products/energy" title="Zigouplex Energy" onClick={() => handleLinkClick('/products/energy')}>
                      Notre boisson énergisante phare
                    </ListItem>
                    <ListItem href="/products/focus" title="Zigouplex Focus" onClick={() => handleLinkClick('/products/focus')}>
                      Pour une concentration optimale
                    </ListItem>
                    <ListItem href="/products/relax" title="Zigouplex Relax" onClick={() => handleLinkClick('/products/relax')}>
                      Détente et récupération naturelle
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className={navigationMenuTriggerStyle()} onClick={() => handleLinkClick('/about')}>
                  À propos
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/blog" className={navigationMenuTriggerStyle()} onClick={() => handleLinkClick('/blog')}>
                  Blog
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/contact" className={navigationMenuTriggerStyle()} onClick={() => handleLinkClick('/contact')}>
                  Contact
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                {location.pathname === '/login' || location.pathname === '/register' ? (
                  <Link to="/" className={navigationMenuTriggerStyle()} onClick={() => handleLinkClick('/')}>
                    Accueil
                  </Link>
                ) : (
                  <Link to="/login" className={navigationMenuTriggerStyle()} onClick={() => handleLinkClick('/login')}>
                    <UserCircle className="mr-2 h-4 w-4" />
                    Connexion
                  </Link>
                )}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Cart />
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <SheetContext.Provider value={{ isOpen, setIsOpen }}>
      <header className="bg-background border-b" role="banner">
        <div className="container mx-auto flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-primary">Zigouplex</Link>
          <nav className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Produits</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3 relative">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/products"
                            style={{ backgroundImage: 'url(/img/zigouplex-boost.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}
                          >
                            <div className="absolute inset-0 bg-black opacity-50 rounded-md"></div>
                            <div className="relative mb-2 mt-4 text-lg font-medium text-white">
                              Zigouplex
                            </div>
                            <p className="relative text-sm leading-tight text-white">
                              Découvrez notre gamme de compléments alimentaires naturels
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/products/energy" title="Zigouplex Energy">
                        Notre boisson énergisante phare
                      </ListItem>
                      <ListItem href="/products/focus" title="Zigouplex Focus">
                        Pour une concentration optimale
                      </ListItem>
                      <ListItem href="/products/relax" title="Zigouplex Relax">
                        Détente et récupération naturelle
                      </ListItem>
                      <ListItem href="/products/boost" title="Zigouplex Boost">
                        Une formule pré-entraînement
                      </ListItem>
                      <ListItem href="/products/recovery" title="Zigouplex Recovery">
                        Un complément post-entraînement
                      </ListItem>
                      <ListItem href="/products/hydrate" title="Zigouplex Hydrate">
                       Une solution d’hydratation enrichie en électrolytes
                      </ListItem>
                      <ListItem href="/products/perform+" title="Zigouplex Perform+">
                        Un produit innovant destiné à améliorer la concentration et la résistance mentale lors des efforts intenses
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/about" className={navigationMenuTriggerStyle()}>
                    À propos
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/blog" className={navigationMenuTriggerStyle()}>
                    Blog
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/contact" className={navigationMenuTriggerStyle()}>
                    Contact
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Cart />
                </NavigationMenuItem>
                <NavigationMenuItem>
                  {location.pathname === '/login' || location.pathname === '/register' ? (
                    <Link to="/" className={navigationMenuTriggerStyle()}>
                      Accueil
                    </Link>
                  ) : (
                    <Link to="/login" className={navigationMenuTriggerStyle()}>
                      <UserCircle className="mr-2 h-4 w-4" />
                      Connexion
                    </Link>
                  )}
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
          <MobileMenu />
        </div>
      </header>
    </SheetContext.Provider>
  )
}

