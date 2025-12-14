import { Phone, MapPin, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: User,
    title: "Właściciel",
    value: "Marcin Pińkowski",
    description: "Profesjonalny montaż stolarki budowlanej"
  },
  {
    icon: Phone,
    title: "Telefon",
    value: "+48 697 277 724",
    description: "Zadzwoń, aby umówić się na bezpłatną wycenę"
  },
  {
    icon: MapPin,
    title: "Obszar działania",
    value: "Okolice lokalne",
    description: "Obsługujemy miasto i najbliższe okolice"
  },
  {
    icon: Clock,
    title: "Godziny pracy",
    value: "Pon - Sob: 7:00 - 18:00",
    description: "Elastyczne godziny po uzgodnieniu"
  }
];

const Contact = () => {
  return (
    <section id="kontakt" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium">Kontakt</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Skontaktuj się z nami
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Potrzebujesz fachowej pomocy przy montażu? Zadzwoń – 
            chętnie odpowiem na wszystkie pytania i przygotuję bezpłatną wycenę.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info) => (
            <Card key={info.title} className="text-center hover:shadow-lg transition-shadow border-border/50">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                <p className="text-primary font-medium mb-2">{info.value}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 border border-border/50 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Gotowy na rozpoczęcie projektu?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Zadzwoń już teraz i umów się na bezpłatną wycenę. 
            Profesjonalna obsługa i konkurencyjne ceny.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
            asChild
          >
            <a href="tel:+48697277724">
              <Phone className="mr-2 h-5 w-5" />
              Zadzwoń: +48 697 277 724
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
