import { Phone, Mail, Clock, MapPin, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "./ContactForm";

const contactInfo = [
  {
    icon: Mail,
    title: "E-mail",
    value: "marcinpinkowski77@gmail.com",
    description: "Napisz, odpowiem w ciągu 24h",
    href: "mailto:marcinpinkowski77@gmail.com"
  },
  {
    icon: Phone,
    title: "Telefon",
    value: "697 277 724",
    description: "Możesz też zadzwonić",
    href: "tel:+48697277724"
  },
  {
    icon: MapPin,
    title: "Siedziba",
    value: "Leszno, woj. wielkopolskie",
    description: "Realizacje w całej Polsce",
    href: null
  },
  {
    icon: Clock,
    title: "Dostępność",
    value: "Pon - Sob: 7:00 - 18:00",
    description: "Elastyczne terminy do ustalenia",
    href: null
  }
];

const Contact = () => {
  return (
    <section id="kontakt" className="section-padding bg-background">
      <div className="container mx-auto px-5 sm:px-6">
        <header className="text-center mb-10 sm:mb-16">
          <span className="text-primary font-semibold tracking-wide text-sm">Kontakt</span>
          <h2 className="mt-2 mb-4">
            Zadzwoń lub napisz – wycena gratis
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Potrzebujesz podłogi, drzwi lub tarasu? Opisz projekt, a&nbsp;ja przygotuję bezpłatną wycenę. 
            <strong className="text-foreground"> Bez zobowiązań – decyzja należy do&nbsp;Ciebie.</strong>
          </p>
        </header>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-10 sm:mb-12">
          {contactInfo.map((info) => (
            <Card key={info.title} className="text-center hover:shadow-lg transition-shadow border-border/50">
              <CardContent className="p-4 sm:pt-6 sm:p-6">
                <div className="w-11 h-11 sm:w-14 sm:h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <info.icon className="h-5 w-5 sm:h-7 sm:w-7 text-primary" />
                </div>
                <h3 className="font-bold text-sm sm:text-lg mb-1">{info.title}</h3>
                {info.href ? (
                  <a 
                    href={info.href} 
                    className="text-primary font-semibold mb-1 sm:mb-2 text-xs sm:text-sm break-all block hover:underline touch-target inline-flex items-center justify-center"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-primary font-semibold mb-1 sm:mb-2 text-xs sm:text-sm">{info.value}</p>
                )}
                <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
          <ContactForm />
          
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-primary/5 rounded-xl p-5 sm:p-6 md:p-8 border border-primary/20">
              <h3 className="font-bold mb-3 sm:mb-4">
                Masz pytania?
              </h3>
              <p className="text-muted-foreground mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Jeśli wolisz porozmawiać, zadzwoń – chętnie odpowiem na pytania i&nbsp;doradzę.
              </p>
              <a 
                href="tel:+48697277724"
                className="inline-flex items-center text-primary font-semibold hover:underline text-base sm:text-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                697&nbsp;277&nbsp;724
              </a>
            </div>

            <div className="bg-secondary/50 rounded-xl p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <Building2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                <h4 className="font-bold text-sm sm:text-base">Dane firmy</h4>
              </div>
              <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                <p className="font-semibold text-foreground">Marcin Pińkowski Usługi Budowlane</p>
                <p>NIP: 6931838292</p>
                <p>REGON: 302245156</p>
                <p className="pt-1.5 sm:pt-2">Zagłoby 17, 64-100 Leszno</p>
                <p>woj. wielkopolskie</p>
                <p className="pt-1.5 text-foreground/70">Realizuję zlecenia na terenie całej Polski</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-6 sm:p-8 md:p-12 border border-border/50 text-center">
          <h3 className="mb-3 sm:mb-4">
            Gotowy na nową podłogę, drzwi lub taras?
          </h3>
          <p className="text-muted-foreground mb-5 sm:mb-6 max-w-xl mx-auto text-sm sm:text-base">
            Opisz swój projekt w&nbsp;formularzu powyżej lub napisz na e-mail – przygotuję bezpłatną wycenę.
          </p>
          <Button 
            size="lg" 
            variant="outline"
            className="w-full sm:w-auto px-8 font-semibold touch-target"
            asChild
          >
            <a href="mailto:marcinpinkowski77@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Napisz e-mail
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
