import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
  content: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    content: "Depuis que j'ai découvert Zigouplex, mes journées sont transformées. Je me sens plus énergique et concentré, sans les effets secondaires des boissons énergisantes traditionnelles. C'est devenu mon allié indispensable au quotidien !",
    author: "Marie L., 32 ans"
  },
  {
    content: "YO ! 💪🔥Depuis que j'ai découvert Zigouplex, c'est simple : ma vie a changé ! 💯 Je me sens plein d'énergie et super focus, sans les coups de mou ni les effets chelous des boissons énergisantes classiques. 🚀 C'est devenu mon allié de tous les jours, que ce soit pour mes grosses sessions à la salle ou pour enchaîner mes projets avec la patate ! Si vous cherchez un truc naturel et efficace pour tout déchirer, je vous dis : GO ZIGOUPLEX ! 🔥✨",
    author: "Jean M., 28 ans"
  },
  {
    content: "En tant que professionnelle de santé, je suis toujours prudente avec les compléments alimentaires. Mais Zigouplex m'a vraiment impressionnée. La qualité des ingrédients et l'efficacité sont au rendez-vous. Je le recommande souvent à mes patients qui cherchent un boost d'énergie naturel.",
    author: "Dr. Sophie R., 45 ans"
  },
  {
    content: "Zigouplex a changé ma routine matinale. Plus besoin de multiples tasses de café pour démarrer. Une dose le matin, et je suis prêt à affronter ma journée de travail avec clarté et énergie. Un vrai game-changer pour les professionnels occupés !",
    author: "Thomas B., 39 ans"
  },
  {
    content: "Salut tous le monde ! ✨Depuis que j’ai découvert Zigouplex, je dois avouer un truc, je suis carrément un nouvel homme. 😎 Je me sens énergique, concentré, et franchement, c’est un vrai game-changer pour mes journées bien chargées (entre tourner répondre aux mails, et… procrastiner un peu quand même).Le mieux ? Pas d’effets chelous comme avec les boissons énergisantes classiques. Zigouplex, c’est 100 % naturel, efficace, et honnêtement… c’est mon nouveau meilleur pote. 🌟Si vous cherchez à booster vos journées, c’est clairement un gros OUI pour Zigouplex ! Testez, vous m’en direz des nouvelles. ✌️",
    author: "Alan R., 51 ans"
  }
];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isPaused) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [isPaused, nextSlide]);

  return (
    <div className="relative w-full max-w-5xl mx-auto px-12">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="h-12 w-12 rounded-full border-2 border-primary hover:bg-primary hover:text-primary-foreground"
          aria-label="Témoignage précédent"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>
      
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2">
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="h-12 w-12 rounded-full border-2 border-primary hover:bg-primary hover:text-primary-foreground"
          aria-label="Témoignage suivant"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      <Card
        className="overflow-hidden bg-card/50 backdrop-blur-sm"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <CardContent className="p-8">
          <div 
            className="relative min-h-[300px] md:min-h-[200px] p-4 sm:p-8 overflow-hidden"
            aria-live="polite"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
                  index === currentIndex 
                    ? 'opacity-100 translate-x-0' 
                    : index < currentIndex 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <p className="text-lg leading-relaxed italic text-muted-foreground break-words max-h-[200px] overflow-y-auto">
                    "{testimonial.content}"
                  </p>
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center mt-4 gap-4">
        {testimonials.map((_, index) => (
          <Button
            key={index}
            onClick={() => setCurrentIndex(index)}
            variant="ghost"
            size="sm"
            className={`w-4 h-4 p-0 rounded-full transition-all focus:outline focus:outline-2 focus:outline-primary ${
              index === currentIndex 
                ? 'bg-primary scale-125' 
                : 'bg-primary/30 hover:bg-primary/50'
            }`}
            aria-label={`Aller au témoignage ${index + 1}`}
            aria-current={index === currentIndex ? 'true' : 'false'}
          />
        ))}
      </div>
    </div>
  );
}

