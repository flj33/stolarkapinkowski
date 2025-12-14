import { Layers, DoorOpen, TreeDeciduous, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Layers,
    title: "Podłogi",
    description: "Profesjonalne układanie podłóg drewnianych, paneli, wykładzin winylowych oraz montaż listew przypodłogowych i progów.",
    items: ["Panele podłogowe", "Podłogi drewniane", "Podłogi winylowe (LVT)", "Listwy i progi"]
  },
  {
    icon: DoorOpen,
    title: "Drzwi",
    description: "Montaż drzwi wewnętrznych i zewnętrznych, futryn, ościeżnic oraz regulacja i serwis zamontowanej stolarki.",
    items: ["Drzwi wewnętrzne", "Drzwi zewnętrzne", "Futryny i ościeżnice", "Regulacja i serwis"]
  },
  {
    icon: TreeDeciduous,
    title: "Tarasy",
    description: "Budowa tarasów drewnianych, balkonów i podestów. Używam sprawdzonych materiałów gwarantujących trwałość.",
    items: ["Tarasy drewniane", "Podesty i balkony", "Schody tarasowe", "Impregnacja i konserwacja"]
  },
  {
    icon: Wrench,
    title: "Pozostałe Usługi",
    description: "Montaż okien, parapetów, rolet zewnętrznych i wewnętrznych, żaluzji fasadowych oraz moskitier.",
    items: ["Okna PCV i drewniane", "Parapety", "Rolety i żaluzje", "Moskitiery"]
  }
];

const Services = () => {
  return (
    <section id="uslugi" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wide">Zakres usług</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 tracking-tight">
            Co Wykonuję
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Oferuję kompleksowe usługi montażowe z gwarancją jakości i precyzji wykonania. 
            Każde zlecenie traktuję indywidualnie.
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
      </div>
    </section>
  );
};

export default Services;
