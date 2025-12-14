import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

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
  { src: gardenDeck, alt: "Taras drewniany w ogrodzie ze schodami", category: "Tarasy" },
  { src: commercialFloor, alt: "Podłoga z drzwiami w obiekcie komercyjnym", category: "Podłogi" },
  { src: doorFrame, alt: "Precyzyjny montaż futryny drzwiowej", category: "Drzwi" },
  { src: roofDeck, alt: "Taras na dachu płaskim", category: "Tarasy" },
  { src: deckSteps, alt: "Schody tarasowe drewniane", category: "Tarasy" },
  { src: deckWet, alt: "Taras drewniany po deszczu", category: "Tarasy" },
  { src: balconyDeck, alt: "Deska tarasowa na balkonie", category: "Tarasy" },
  { src: deckAerial, alt: "Taras z góry ze schodami", category: "Tarasy" },
  { src: deckTable, alt: "Przestronny taras z meblami", category: "Tarasy" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wide">Galeria realizacji</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 tracking-tight">
            Moje Prace
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Zobacz przykłady moich realizacji. Każdy projekt wykonuję z najwyższą starannością i dbałością o szczegóły.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg cursor-pointer group ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className={`w-full ${index === 0 ? "aspect-square" : "aspect-[4/3]"}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end">
                <div className="p-3 md:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs font-semibold text-primary-foreground bg-primary/80 px-2 py-1 rounded">
                    {image.category}
                  </span>
                  <p className="text-primary-foreground font-medium mt-2 text-sm md:text-base">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Powiększone zdjęcie"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
