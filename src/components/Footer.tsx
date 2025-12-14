import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">S</span>
              </div>
              <span className="font-bold text-lg">Stolarka-Montaż</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Profesjonalne usługi montażowe stolarki budowlanej i podłóg. 
              Ponad 25 lat doświadczenia w branży.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Usługi</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Montaż okien i drzwi</li>
              <li>Układanie podłóg</li>
              <li>Budowa tarasów drewnianych</li>
              <li>Montaż rolet i żaluzji</li>
              <li>Serwis stolarki</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                +48 XXX XXX XXX
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                kontakt@example.pl
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Okolice lokalne
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Stolarka-Montaż. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
