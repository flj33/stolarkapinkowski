import { Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="Montaż Stolarki Budowlanej" 
                className="h-16 w-auto"
              />
              <div>
                <span className="font-bold block">Marcin Pińkowski</span>
                <span className="text-sm text-muted-foreground">Montaż Stolarki Budowlanej</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Profesjonalne usługi montażowe: podłogi, drzwi, tarasy i inne prace wykończeniowe. 
              Ponad 25 lat doświadczenia w branży.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Usługi</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Układanie podłóg</li>
              <li>Montaż drzwi</li>
              <li>Budowa tarasów drewnianych</li>
              <li>Montaż okien i parapetów</li>
              <li>Rolety i żaluzje</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+48697277724" className="hover:text-primary transition-colors font-medium">
                  +48 697 277 724
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Okolice lokalne
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Marcin Pińkowski - Montaż Stolarki Budowlanej. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
