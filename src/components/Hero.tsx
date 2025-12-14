import { Button } from "@/components/ui/button";
import { Phone, ArrowDown } from "lucide-react";
import heroImage from "@/assets/garden-deck.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-foreground/65" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold bg-primary/90 text-primary-foreground rounded-full tracking-wide">
          Ponad 25 lat doświadczenia
        </span>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight tracking-tight">
          Podłogi · Drzwi · Tarasy
          <br />
          <span className="text-accent font-medium">Profesjonalny Montaż</span>
        </h1>
        
        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          Wykonuję kompleksowe usługi montażowe dla klientów indywidualnych i firm. 
          Układanie podłóg, montaż drzwi, budowa tarasów drewnianych oraz inne prace wykończeniowe.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold"
            asChild
          >
            <a href="tel:+48697277724">
              <Phone className="mr-2 h-5 w-5" />
              Zadzwoń: 697 277 724
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 px-8 py-6 text-lg font-medium"
            asChild
          >
            <a href="#uslugi">
              Zobacz usługi
            </a>
          </Button>
        </div>
      </div>
      
      <a 
        href="#uslugi" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/80 hover:text-primary-foreground transition-colors animate-bounce"
      >
        <ArrowDown className="h-8 w-8" />
      </a>
    </section>
  );
};

export default Hero;
