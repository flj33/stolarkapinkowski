import { FileText, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const pricingCategories = [
  {
    title: "Podłogi",
    description: "Solidna podłoga to podstawa – układam ją równo, cicho i na lata.",
    items: [
      { name: "Panele podłogowe (pływające)", price: "od 25 zł/m²" },
      { name: "Panele winylowe LVT (pływające)", price: "od 30 zł/m²" },
      { name: "Panele na klej", price: "od 35 zł/m²" },
      { name: "Deska warstwowa", price: "od 40 zł/m²" },
      { name: "Deska na klej", price: "od 60 zł/m²" },
      { name: "Wylewka samopoziomująca", price: "od 40 zł/m²" },
      { name: "Listwy przypodłogowe PCV", price: "20 zł/mb" },
      { name: "Listwy drewniane / MDF", price: "25 zł/mb" },
    ],
  },
  {
    title: "Drzwi",
    description: "Montaż z pełnym wykończeniem – futryny, opaski, regulacja.",
    items: [
      { name: "Drzwi zewnętrzne z obróbką otworu", price: "od 1000 zł/szt" },
      { name: "Drzwi zewnętrzne (przygotowany otwór)", price: "od 700 zł/szt" },
      { name: "Drzwi wewnętrzne przylgowe", price: "od 210 zł/szt" },
      { name: "Drzwi wewnętrzne bezprzylgowe", price: "od 250 zł/szt" },
      { name: "Drzwi przesuwne", price: "od 400 zł/szt" },
      { name: "Drzwi ukryte (bez obróbki)", price: "od 450 zł/szt" },
      { name: "Montaż na starej ościeżnicy nakładowej", price: "od 250 zł/szt" },
      { name: "Poszerzanie otworu", price: "od 250 zł/szt" },
    ],
  },
  {
    title: "Łazienka",
    description: "Kompleksowy montaż wyposażenia – od umywalki po kabinę prysznicową.",
    items: [
      { name: "Montaż umywalki", price: "od 200 zł/szt" },
      { name: "Montaż szafki pod umywalkę", price: "od 250 zł/szt" },
      { name: "Montaż kabiny prysznicowej (bez brodzika)", price: "od 550 zł/szt" },
      { name: "Montaż brodzika z podłączeniem", price: "od 300 zł/szt" },
      { name: "Montaż wanny z zabudową", price: "od 450 zł/szt" },
      { name: "Montaż stelaża WC", price: "od 200 zł/szt" },
      { name: "Montaż miski WC / kompaktu", price: "od 200 zł/szt" },
      { name: "Kabina z hydromasażem", price: "od 1000 zł/szt" },
    ],
  },
  {
    title: "Ściany i sufity",
    description: "Gładzie, malowanie, płyty GK – wykończenie gotowe do odbioru.",
    items: [
      { name: "Gładź gipsowa (2x) + szlifowanie", price: "od 30 zł/m²" },
      { name: "Malowanie na biało (2x)", price: "od 20 zł/m²" },
      { name: "Malowanie kolor (2x)", price: "od 23 zł/m²" },
      { name: "Tapetowanie", price: "od 40 zł/m²" },
      { name: "Ścianka działowa z płyt GK", price: "od 85 zł/m²" },
      { name: "Sufit podwieszany", price: "od 100 zł/m²" },
      { name: "Tynki gipsowe", price: "od 45 zł/m²" },
      { name: "Beton architektoniczny", price: "od 150 zł/m²" },
    ],
  },
  {
    title: "Płytki ceramiczne",
    description: "Precyzyjne układanie z fugowaniem – glazura, gres, mozaika.",
    items: [
      { name: "Płytki do 60 cm", price: "od 120 zł/m²" },
      { name: "Płytki wielkoformatowe", price: "od 140 zł/m²" },
      { name: "Mozaika", price: "od 120 zł/m²" },
      { name: "Hexagon", price: "od 160 zł/m²" },
      { name: "Mały format (10x10, 25x25)", price: "od 160 zł/m²" },
      { name: "Listwa / cokół", price: "od 50 zł/mb" },
      { name: "Szlifowanie gresu pod 45°", price: "od 40 zł/mb" },
      { name: "Układ jodełka", price: "wycena indywidualna" },
    ],
  },
];

const Pricing = () => {
  return (
    <section id="cennik" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-5 sm:px-6">
        {/* Header */}
        <header className="text-center mb-6 sm:mb-8">
          <span className="text-primary font-semibold tracking-wide text-sm">Cennik usług</span>
          <h2 className="mt-2 mb-4">
            Ile kosztuje montaż?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Poniżej znajdziesz orientacyjne ceny moich usług. Ostateczna wycena zależy od&nbsp;zakresu prac, 
            stanu podłoża i&nbsp;ilości materiału – dlatego zawsze proponuję bezpłatny pomiar na&nbsp;miejscu.
          </p>
        </header>

        {/* Pricing Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-6 sm:mb-8">
          {pricingCategories.map((category) => (
            <Card key={category.title} className="border-border/50 bg-card hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="text-lg sm:text-xl font-bold text-primary">
                  {category.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item.name} className="flex justify-between items-start text-sm gap-3">
                      <span className="text-foreground/80">{item.name}</span>
                      <span className="font-semibold text-foreground whitespace-nowrap">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Measurement Info */}
        <div className="bg-card rounded-xl p-4 sm:p-5 border border-border/50 mb-5 sm:mb-6">
          <h3 className="text-lg font-bold mb-3 sm:mb-4">Pomiar i&nbsp;wycena</h3>
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 text-sm">
            <div className="flex items-start gap-2.5">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span><strong>Do&nbsp;30&nbsp;km od&nbsp;Leszna:</strong> 100&nbsp;zł (odliczane od&nbsp;zlecenia)</span>
            </div>
            <div className="flex items-start gap-2.5">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span><strong>Do&nbsp;50&nbsp;km od&nbsp;Leszna:</strong> 150&nbsp;zł (odliczane od&nbsp;zlecenia)</span>
            </div>
          </div>
          <p className="text-muted-foreground text-sm mt-3">
            Realizuję zlecenia na terenie całej Polski – koszty dojazdu ustalamy indywidualnie.
          </p>
        </div>

        {/* CTA Block */}
        <div className="bg-card rounded-xl p-5 sm:p-6 border border-border/50 text-center">
          <h3 className="mb-3">
            Potrzebujesz dokładnej wyceny?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto text-sm sm:text-base">
            Ceny orientacyjne mogą się różnić w&nbsp;zależności od&nbsp;stanu technicznego i&nbsp;zakresu prac. 
            Opisz swój projekt – przygotuję bezpłatną wycenę.
          </p>
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold touch-target"
            asChild
          >
            <a href="#kontakt">
              <FileText className="mr-2 h-5 w-5" />
              Opisz projekt i&nbsp;poproś o&nbsp;wycenę
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
