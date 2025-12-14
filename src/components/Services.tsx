import { Layers, DoorOpen, TreeDeciduous, Wrench, Phone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Layers,
    title: "Podłogi",
    description: "Układam panele, deski drewniane i winylowe LVT – równo, cicho, bez skrzypienia. Efekt? Piękna podłoga na lata.",
    items: ["Panele podłogowe", "Podłogi drewniane", "Podłogi winylowe (LVT)", "Listwy i progi"]
  },
  {
    icon: DoorOpen,
    title: "Drzwi",
    description: "Montuję drzwi wewnętrzne i zewnętrzne z pełnym wykończeniem. Ościeżnice, futryny, regulacja – wszystko w jednym zleceniu.",
    items: ["Drzwi wewnętrzne", "Drzwi zewnętrzne", "Futryny i ościeżnice", "Regulacja i serwis"]
  },
  {
    icon: TreeDeciduous,
    title: "Tarasy",
    description: "Buduję trwałe tarasy drewniane i kompozytowe. Solidna konstrukcja, estetyczne wykończenie, odporność na warunki atmosferyczne.",
    items: ["Tarasy drewniane", "Podesty i balkony", "Schody tarasowe", "Impregnacja i konserwacja"]
  },
  {
    icon: Wrench,
    title: "Pozostałe usługi",
    description: "Okna, parapety, rolety, moskitiery – komfort i funkcjonalność Twojego domu w jednych rękach.",
    items: ["Okna PCV i drewniane", "Parapety", "Rolety i żaluzje", "Moskitiery"]
  }
];

const Services = () => {
  return (
    <section id="uslugi" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wide">Usługi w Lesznie i okolicach</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 tracking-tight">
            Co mogę dla Ciebie zrobić?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Potrzebujesz nowej podłogi, drzwi czy tarasu? Wykonuję kompleksowy montaż – od pomiaru przez zakup materiałów po gotowe wykończenie. Ty odbierasz efekt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-card">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold tracking-tight">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center bg-card rounded-xl p-8 border border-border/50">
          <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">
            Nie wiesz, od czego zacząć?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Zadzwoń lub napisz – chętnie doradzę i przygotuję bezpłatną wycenę. Działam szybko i konkretnie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              asChild
            >
              <a href="tel:+48697277724">
                <Phone className="mr-2 h-5 w-5" />
                Zadzwoń teraz
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="font-medium"
              asChild
            >
              <a href="#kontakt">
                Wyślij zapytanie
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
