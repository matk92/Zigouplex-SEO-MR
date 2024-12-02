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
    content: "Depuis que j'ai découvert Zigouplex, je ne peux plus m'en passer. J'ai enfin trouvé un complément alimentaire qui me donne l'énergie et la concentration dont j'ai besoin pour être au top toute la journée. Et en plus, c'est 100% naturel !",
    author: "Julie D., 35 ans"
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
    <div className="relative w-full max-w-4xl mx-auto px-12">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="h-12 w-12 rounded-full border-2 border-primary hover:bg-primary hover:text-primary-foreground"
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
          <div className="relative min-h-[200px]">
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
                  <p className="text-lg leading-relaxed italic text-muted-foreground">
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

      <div className="flex justify-center mt-4 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-primary w-4' 
                : 'bg-primary/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

