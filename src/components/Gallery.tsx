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
  { src: gardenDeck, alt: "Taras drewniany w ogrodzie", category: "Tarasy" },
  { src: deckSteps, alt: "Schody tarasowe drewniane", category: "Tarasy" },
  { src: commercialFloor, alt: "Podłoga komercyjna z drzwiami", category: "Podłogi" },
  { src: roofDeck, alt: "Taras na dachu", category: "Tarasy" },
  { src: doorFrame, alt: "Montaż futryny drzwiowej", category: "Stolarka" },
  { src: deckWet, alt: "Taras drewniany", category: "Tarasy" },
  { src: balconyDeck, alt: "Taras balkonowy", category: "Tarasy" },
  { src: deckAerial, alt: "Widok z góry na taras", category: "Tarasy" },
  { src: deckTable, alt: "Taras z meblami", category: "Tarasy" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium">Galeria realizacji</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Nasze Prace
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Zobacz przykłady naszych realizacji. Każdy projekt wykonujemy z najwyższą starannością i dbałością o szczegóły.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg cursor-pointer group ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  index === 0 ? "h-64 md:h-full" : "h-48 md:h-64"
                }`}
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end">
                <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs font-medium text-primary-foreground bg-primary/80 px-2 py-1 rounded">
                    {image.category}
                  </span>
                  <p className="text-primary-foreground font-medium mt-2">{image.alt}</p>
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
