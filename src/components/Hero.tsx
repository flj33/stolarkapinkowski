import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/garden-deck.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-foreground/70" />
      </div>
      
      <div className="relative z-10 container mx-auto px-5 sm:px-6 text-center pt-20 pb-24">
        <span className="inline-block px-4 py-2.5 mb-5 text-sm font-semibold bg-primary/90 text-primary-foreground rounded-full tracking-wide">
          Ponad 25&nbsp;lat doświadczenia · Realizacje w&nbsp;całej Polsce
        </span>
        
        <h1 className="text-primary-foreground mb-5">
          Podłogi, Drzwi, Tarasy
          <br />
          <span className="text-accent font-semibold">– zamontowane solidnie i&nbsp;na&nbsp;czas</span>
        </h1>
        
        <p className="text-base sm:text-lg text-primary-foreground/90 max-w-xl mx-auto mb-8 leading-relaxed">
          Szukasz sprawdzonego fachowca? Wykonuję kompleksowy montaż od&nbsp;A&nbsp;do&nbsp;Z: 
          podłogi, drzwi, tarasy drewniane i&nbsp;więcej. Siedziba w&nbsp;Lesznie, realizacje w&nbsp;całym kraju.
        </p>
        
        <div className="flex flex-col gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold touch-target"
            asChild
          >
            <a 
              href="#uslugi"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#uslugi')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Sprawdź zakres usług
            </a>
          </Button>
          <p className="text-primary-foreground/80 text-base sm:text-lg">
            Wolisz zadzwonić? <a href="tel:+48697277724" className="text-primary-foreground font-bold hover:underline text-lg sm:text-xl">697&nbsp;277&nbsp;724</a>
          </p>
        </div>
        
        <p className="text-primary-foreground/60 mt-8 text-sm">
          Ponad 1000 zrealizowanych projektów · 500+ zadowolonych klientów
        </p>
      </div>
      
      <a 
        href="#uslugi" 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-primary-foreground/80 hover:text-primary-foreground transition-colors animate-bounce touch-target flex items-center justify-center"
        aria-label="Przewiń do sekcji usług"
      >
        <ArrowDown className="h-7 w-7" />
      </a>
    </section>
  );
};

export default Hero;
