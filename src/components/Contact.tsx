import { Phone, Mail, Clock, User, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: User,
    title: "Wykonawca",
    value: "Marcin Pińkowski",
    description: "Usługi Budowlane"
  },
  {
    icon: Phone,
    title: "Telefon",
    value: "697 277 724",
    description: "Zadzwoń po bezpłatną wycenę"
  },
  {
    icon: Mail,
    title: "E-mail",
    value: "marcinpinkowski77@gmail.com",
    description: "Napisz, odpowiem najszybciej jak to możliwe"
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
          <span className="text-primary font-semibold tracking-wide">Kontakt</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 tracking-tight">
            Skontaktuj się ze mną
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Potrzebujesz fachowej pomocy przy montażu podłóg, drzwi lub tarasu? 
            Zadzwoń – chętnie odpowiem na wszystkie pytania i przygotuję bezpłatną wycenę.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info) => (
            <Card key={info.title} className="text-center hover:shadow-lg transition-shadow border-border/50">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-1">{info.title}</h3>
                <p className="text-primary font-semibold mb-2 text-sm break-all">{info.value}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 border border-border/50">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                Gotowy na rozpoczęcie projektu?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Zadzwoń już teraz i umów się na bezpłatną wycenę. 
                Profesjonalna obsługa i konkurencyjne ceny.
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 font-semibold"
                asChild
              >
                <a href="tel:+48697277724">
                  <Phone className="mr-2 h-5 w-5" />
                  Zadzwoń: 697 277 724
                </a>
              </Button>
            </div>
            
            <div className="bg-secondary/50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="h-6 w-6 text-primary" />
                <h4 className="font-bold">Dane firmy</h4>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="font-semibold text-foreground">Marcin Pińkowski Usługi Budowlane</p>
                <p>NIP: 6931838292</p>
                <p>REGON: 302245156</p>
                <p className="pt-2">Zagłoby 17</p>
                <p>64-100 Leszno</p>
                <p>woj. wielkopolskie</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
