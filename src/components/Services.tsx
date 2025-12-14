import { DoorOpen, Layers, Sun, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: DoorOpen,
    title: "Stolarka Otworowa",
    description: "Montaż drzwi wewnętrznych i zewnętrznych, okien PCV, drewnianych i aluminiowych, parapetów oraz regulacja i serwis.",
    items: ["Drzwi wewnętrzne i zewnętrzne", "Okna PCV, drewniane, aluminiowe", "Parapety wewnętrzne i zewnętrzne", "Regulacja i serwis"]
  },
  {
    icon: Layers,
    title: "Podłogi i Tarasy",
    description: "Profesjonalne układanie paneli, podłóg drewnianych, winylowych oraz budowa tarasów drewnianych.",
    items: ["Panele podłogowe", "Podłogi drewniane i winylowe", "Tarasy drewniane", "Listwy przypodłogowe i progi"]
  },
  {
    icon: Sun,
    title: "Osłony Przeciwsłoneczne",
    description: "Montaż rolet zewnętrznych i wewnętrznych, żaluzji fasadowych oraz moskitier.",
    items: ["Rolety zewnętrzne", "Rolety wewnętrzne", "Żaluzje fasadowe", "Moskitiery"]
  },
  {
    icon: Wrench,
    title: "Serwis i Regulacja",
    description: "Profesjonalny serwis zamontowanej stolarki, regulacja okien i drzwi, naprawy gwarancyjne.",
    items: ["Regulacja okien i drzwi", "Wymiana uszczelek", "Naprawy stolarki", "Konserwacja"]
  }
];

const Services = () => {
  return (
    <section id="uslugi" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium">Nasze usługi</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Kompleksowe Usługi Montażowe
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferujemy pełen zakres usług związanych z montażem stolarki budowlanej, 
            podłóg oraz osłon przeciwsłonecznych.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-card">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
