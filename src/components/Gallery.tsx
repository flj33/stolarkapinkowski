import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

import doorFrame from "@/assets/door-frame.jpg";
import deckWet from "@/assets/deck-wet.jpg";
import deckTable from "@/assets/deck-table.jpg";
import deckSteps from "@/assets/deck-steps.jpg";
import balconyDeck from "@/assets/balcony-deck.jpg";
import deckAerial from "@/assets/deck-aerial.jpg";
import roofDeck from "@/assets/roof-deck.jpg";
import gardenDeck from "@/assets/garden-deck.jpg";
import commercialFloor from "@/assets/commercial-floor.jpg";

const galleryImages = [
  { src: gardenDeck, alt: "Realizacja tarasu drewnianego", category: "Tarasy" },
  { src: deckSteps, alt: "Schody i wykończenia zewnętrzne", category: "Schody" },
  { src: doorFrame, alt: "Montaż drzwi z wykończeniem", category: "Drzwi" },
  { src: roofDeck, alt: "Taras kompozytowy", category: "Tarasy" },
  { src: commercialFloor, alt: "Podłoga drewniana", category: "Podłogi" },
  { src: deckWet, alt: "Taras impregnowany", category: "Tarasy" },
  { src: balconyDeck, alt: "Deska tarasowa", category: "Balkony" },
  { src: deckAerial, alt: "Konstrukcja tarasowa", category: "Tarasy" },
  { src: deckTable, alt: "Taras wypoczynkowy", category: "Tarasy" },
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const openImage = (index: number) => setSelectedIndex(index);
  const closeImage = () => setSelectedIndex(null);
  
  const goToPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1);
    }
  };
  
  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <section id="galeria" className="section-padding bg-background">
      <div className="container mx-auto px-5 sm:px-6">
        <header 
          ref={headerRef}
          className={`text-center mb-6 sm:mb-8 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-primary font-semibold tracking-wide text-sm uppercase">
            Galeria realizacji
          </span>
          <h2 className="mt-2 mb-4">
            Zobacz, jak pracuję
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
            To nie stockowe zdjęcia – to moje realne projekty. Każdy wykonany z&nbsp;dbałością o&nbsp;szczegóły i&nbsp;zadowolenie klienta. 
            <strong className="text-foreground"> Twój projekt może być następny.</strong>
          </p>
        </header>

        <div 
          ref={gridRef}
          className={`grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4 transition-all duration-700 delay-200 ${
            gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg cursor-pointer group ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
              onClick={() => openImage(index)}
            >
              <div className="w-full h-full aspect-square">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end">
                <div className="p-3 sm:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-sm font-semibold text-primary-foreground bg-primary/80 px-3 py-1.5 rounded">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div 
          ref={ctaRef}
          className={`mt-6 sm:mt-8 text-center transition-all duration-700 delay-300 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-muted-foreground mb-4 text-base leading-relaxed">
            Podoba Ci się to, co widzisz? Twój projekt może wyglądać równie dobrze.
          </p>
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold touch-target"
            asChild
          >
            <a href="#kontakt">
              Opisz swój projekt
            </a>
          </Button>
        </div>
      </div>

      <Dialog open={selectedIndex !== null} onOpenChange={closeImage}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-black/95 border-none [&>button]:hidden">
          {selectedIndex !== null && (
            <div className="relative">
              {/* Close button */}
              <button
                onClick={closeImage}
                className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                aria-label="Zamknij"
              >
                <X className="h-6 w-6 text-white" />
              </button>
              
              {/* Navigation arrows */}
              <button
                onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                aria-label="Poprzednie zdjęcie"
              >
                <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </button>
              
              <button
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                aria-label="Następne zdjęcie"
              >
                <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </button>
              
              {/* Image */}
              <img
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                className="w-full h-auto max-h-[85vh] object-contain"
              />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
                <span className="text-sm font-semibold text-white bg-primary/80 px-3 py-1.5 rounded">
                  {galleryImages[selectedIndex].category}
                </span>
                <p className="text-white/60 text-sm mt-2">
                  {selectedIndex + 1} / {galleryImages.length}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
