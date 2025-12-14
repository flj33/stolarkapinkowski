import { Layers, DoorOpen, TreeDeciduous, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Layers,
    title: "Podłogi",
    description: "Układam panele, deski drewniane i&nbsp;winylowe LVT – równo, cicho, bez skrzypienia. Efekt? Piękna podłoga na&nbsp;lata.",
    items: ["Panele podłogowe", "Podłogi drewniane", "Podłogi winylowe (LVT)", "Listwy i progi"]
  },
  {
    icon: DoorOpen,
    title: "Drzwi",
    description: "Montuję drzwi wewnętrzne i&nbsp;zewnętrzne z&nbsp;pełnym wykończeniem. Ościeżnice, futryny, regulacja – wszystko w&nbsp;jednym zleceniu.",
    items: ["Drzwi wewnętrzne", "Drzwi zewnętrzne", "Futryny i ościeżnice", "Regulacja i serwis"]
  },
  {
    icon: TreeDeciduous,
    title: "Tarasy",
    description: "Buduję trwałe tarasy drewniane i&nbsp;kompozytowe. Solidna konstrukcja, estetyczne wykończenie, odporność na&nbsp;warunki atmosferyczne.",
    items: ["Tarasy drewniane", "Podesty i balkony", "Schody tarasowe", "Impregnacja i konserwacja"]
  },
  {
    icon: Wrench,
    title: "Pozostałe usługi",
    description: "Okna, parapety, rolety, moskitiery – komfort i&nbsp;funkcjonalność Twojego domu w&nbsp;jednych rękach.",
    items: ["Okna PCV i drewniane", "Parapety", "Rolety i żaluzje", "Moskitiery"]
  }
];

const Services = () => {
  return (
    <section id="uslugi" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-5 sm:px-6">
        <header className="text-center mb-12 sm:mb-16">
          <span className="text-primary font-semibold tracking-wide text-sm">
            Zakres usług
          </span>
          <h2 className="mt-2 mb-4">
            Co mogę dla Ciebie zrobić?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Potrzebujesz nowej podłogi, drzwi czy tarasu? Wykonuję kompleksowy montaż – od&nbsp;pomiaru przez zakup materiałów po&nbsp;gotowe wykończenie. Ty&nbsp;odbierasz efekt.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service) => (
            <Card key={service.title} className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-card">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold">{service.title}</CardTitle>
                <CardDescription 
                  className="text-muted-foreground text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: service.description }}
                />
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center bg-card rounded-xl p-6 sm:p-8 border border-border/50">
          <h3 className="mb-3">
            Nie wiesz, od&nbsp;czego zacząć?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto text-sm sm:text-base">
            Opisz swój projekt – chętnie doradzę i&nbsp;przygotuję bezpłatną wycenę.
          </p>
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold touch-target"
            asChild
          >
            <a href="#kontakt">
              Poproś o&nbsp;wycenę
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
