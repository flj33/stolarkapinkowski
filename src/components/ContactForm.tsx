import { Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const mailtoLink = "mailto:marcinpinkowski77@gmail.com?subject=Zapytanie%20o%20wycenę%20usług&body=Dzień%20dobry,%0A%0AProszę%20o%20wycenę%20usługi:%0A-%20Rodzaj%20prac:%20%0A-%20Miejscowość:%20%0A-%20Przybliżony%20metraż:%20%0A-%20Preferowany%20termin:%20%0A%0APozdrawiam,%0A";
  const whatsappLink = "https://wa.me/48697277724?text=Dzień%20dobry,%20chciałbym%20zapytać%20o%20wycenę%20usługi.";

  return (
    <div className="bg-card rounded-xl p-5 sm:p-6 md:p-8 border border-border/50">
      <h3 className="font-bold mb-2">
        Masz pytania? Skontaktuj się
      </h3>
      <p className="text-muted-foreground mb-5 sm:mb-6 text-sm sm:text-base">
        Wybierz wygodną formę kontaktu – chętnie odpowiem na pytania i&nbsp;doradzę. Zwykle odpisuję tego samego dnia.
      </p>

      <div className="space-y-3">
        <Button 
          size="lg"
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold touch-target h-14"
          asChild
        >
          <a href={mailtoLink}>
            <Mail className="mr-2 h-5 w-5" />
            Napisz wiadomość e-mail
          </a>
        </Button>

        <Button 
          variant="outline"
          size="lg"
          className="w-full font-semibold touch-target h-14"
          asChild
        >
        <a href="tel:+48697277724">
            <Phone className="mr-2 h-5 w-5" />
            Zadzwoń: <span className="text-lg">697&nbsp;277&nbsp;724</span>
          </a>
        </Button>

        <Button 
          variant="outline"
          size="lg"
          className="w-full font-semibold touch-target h-14 border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366]/10 hover:text-[#25D366]"
          asChild
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-5 w-5" />
            Napisz na WhatsApp
          </a>
        </Button>
      </div>

      <p className="text-xs text-center text-muted-foreground mt-4">
        E-mail otworzy Twój program pocztowy z&nbsp;gotowym szablonem wiadomości.
      </p>
    </div>
  );
};

export default ContactForm;
