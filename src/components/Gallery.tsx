import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

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
  { src: gardenDeck, alt: "Taras drewniany przy domu jednorodzinnym – Leszno", category: "Tarasy" },
  { src: deckSteps, alt: "Schody tarasowe z drewna egzotycznego", category: "Tarasy" },
  { src: doorFrame, alt: "Montaż drzwi wewnętrznych z ościeżnicą", category: "Drzwi" },
  { src: roofDeck, alt: "Taras na dachu płaskim – deski kompozytowe", category: "Tarasy" },
  { src: commercialFloor, alt: "Podłoga drewniana w salonie – parkiet dębowy", category: "Podłogi" },
  { src: deckWet, alt: "Impregnowany taras – odporny na deszcz i słońce", category: "Tarasy" },
  { src: balconyDeck, alt: "Deska tarasowa na balkonie w bloku", category: "Tarasy" },
  { src: deckAerial, alt: "Taras wielopoziomowy z schodami zewnętrznymi", category: "Tarasy" },
  { src: deckTable, alt: "Przestronny taras wypoczynkowy – realizacja kompletna", category: "Tarasy" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="galeria" className="section-padding bg-background">
      <div className="container mx-auto px-5 sm:px-6">
        <header className="text-center mb-10 sm:mb-16">
          <span className="text-primary font-semibold tracking-wide text-sm">
            Galeria realizacji
          </span>
          <h2 className="mt-2 mb-4">
            Zobacz, jak pracuję
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            To nie stockowe zdjęcia – to moje realne projekty. Każdy wykonany z&nbsp;dbałością o&nbsp;szczegóły i&nbsp;zadowolenie klienta. 
            <strong className="text-foreground"> Twój projekt może być następny.</strong>
          </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg cursor-pointer group ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(image.src)}
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
                  <span className="text-xs font-semibold text-primary-foreground bg-primary/80 px-2 py-1 rounded">
                    {image.category}
                  </span>
                  <p className="text-primary-foreground font-medium mt-2 text-xs sm:text-sm md:text-base line-clamp-2">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-muted-foreground mb-4 text-sm sm:text-base">
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

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-2 sm:p-0 overflow-hidden bg-transparent border-none">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Powiększone zdjęcie realizacji"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
